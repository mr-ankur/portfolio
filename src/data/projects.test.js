import projects, { projectTags } from "./projects";

describe("projects data", () => {
  test("every project has the fields the card renders", () => {
    projects.forEach((project) => {
      expect(project.id).toBeTruthy();
      expect(project.title).toBeTruthy();
      expect(project.description).toBeTruthy();
      expect(project.link).toMatch(/^https:\/\//);
      expect(project.tags.length).toBeGreaterThan(0);
    });
  });

  test("ids are unique so React keys stay stable", () => {
    const ids = projects.map((project) => project.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  test("projectTags covers every tag used, without duplicates", () => {
    const used = new Set(projects.flatMap((project) => project.tags));
    expect(new Set(projectTags)).toEqual(used);
    expect(projectTags.length).toBe(used.size);
  });

  test("every tag matches at least one project", () => {
    projectTags.forEach((tag) => {
      const matches = projects.filter((project) => project.tags.includes(tag));
      expect(matches.length).toBeGreaterThan(0);
    });
  });
});
