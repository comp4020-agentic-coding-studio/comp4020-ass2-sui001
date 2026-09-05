import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

interface ApiNode {
  id: string;
  type: string;
  meta?: Record<string, unknown>;
}

interface CourseApi {
  course: { code: string };
  nodes: ApiNode[];
}

const api = JSON.parse(readFileSync(resolve("dist/api/index.json"), "utf8")) as CourseApi;
const byType = (type: string) => api.nodes.filter((node) => node.type === type);

describe("course structure", () => {
  it("has exactly one session and one lecture for every week 1-12, no gaps or duplicates", () => {
    for (const type of ["sessions", "lectures"]) {
      const weeks = byType(type)
        .map((node) => Number(node.meta?.week))
        .sort((a, b) => a - b);
      expect(weeks, `${type} weeks`).toEqual(Array.from({ length: 12 }, (_, i) => i + 1));
    }
  });

  it("keeps the allocated course code", () => {
    expect(api.course.code).toBe("SLOP1428");
  });

  it("has at least one lecture with a real slide deck", () => {
    const withSlides = byType("lectures").filter(
      (node) => typeof node.meta?.slides === "string" && node.meta.slides.length > 0,
    );
    expect(withSlides.length).toBeGreaterThanOrEqual(1);
  });

  it("has assessment weights that sum to exactly 100", () => {
    const total = byType("assessments").reduce(
      (sum, node) => sum + Number(node.meta?.weight ?? 0),
      0,
    );
    expect(total).toBe(100);
  });

  it("gives every assessment grade bands that distinguish an HD from a C", () => {
    for (const node of byType("assessments")) {
      const marking = node.meta?.marking as { bands?: { band: string }[] } | undefined;
      const bandNames = marking?.bands?.map((band) => band.band) ?? [];
      expect(bandNames, `${node.id} bands`).toContain("HD");
      expect(bandNames, `${node.id} bands`).toContain("C");
    }
  });
});
