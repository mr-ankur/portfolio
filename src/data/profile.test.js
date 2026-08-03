import { CAREER_START, yearsOfExperience } from "./profile";

describe("yearsOfExperience", () => {
  test("counts whole years since the career start date", () => {
    const fiveYearsIn = new Date(
      CAREER_START.getFullYear() + 5,
      CAREER_START.getMonth()
    );
    expect(yearsOfExperience(fiveYearsIn)).toBe(5);
  });

  test("does not round a partial year up", () => {
    const oneMonthShort = new Date(
      CAREER_START.getFullYear() + 5,
      CAREER_START.getMonth() - 1
    );
    expect(yearsOfExperience(oneMonthShort)).toBe(4);
  });

  test("is never negative on the start date itself", () => {
    expect(yearsOfExperience(CAREER_START)).toBe(0);
  });
});
