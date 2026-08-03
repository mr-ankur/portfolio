import experience from "./experience";
import { CAREER_START } from "./profile";

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

function parseStart(period) {
  const [month, year] = period.split("—")[0].trim().split(" ");
  return new Date(Number(year), MONTHS.indexOf(month));
}

describe("experience data", () => {
  test("every role has a company, title and period", () => {
    experience.forEach((job) => {
      expect(job.company).toBeTruthy();
      expect(job.role).toBeTruthy();
      expect(job.period).toMatch(/—/);
      expect(Array.isArray(job.highlights)).toBe(true);
      expect(Array.isArray(job.stack)).toBe(true);
    });
  });

  test("roles are listed newest first", () => {
    const starts = experience.map((job) => parseStart(job.period).getTime());
    expect([...starts].sort((a, b) => b - a)).toEqual(starts);
  });

  test("CAREER_START matches the earliest role, so '+ years' stays honest", () => {
    const earliest = parseStart(experience[experience.length - 1].period);
    expect(earliest.getFullYear()).toBe(CAREER_START.getFullYear());
    expect(earliest.getMonth()).toBe(CAREER_START.getMonth());
  });

  test("exactly one role is marked current", () => {
    expect(experience.filter((job) => job.current)).toHaveLength(1);
  });
});
