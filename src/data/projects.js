import zeehaus from "../Assets/Projects/zeehaus.png";
import hyrr from "../Assets/Projects/hyrr.png";
import nfhs from "../Assets/Projects/nfhs.png";
import musicmayhem from "../Assets/Projects/musicmayhem.png";
import hyrrAdmin from "../Assets/Projects/hyrrAdmin.png";
import bulkedits from "../Assets/Projects/bulkedits.png";
import discountcodes from "../Assets/Projects/discountcodes.png";
import paymentplans from "../Assets/Projects/paymentplans.png";
import teamedglobal from "../Assets/Projects/teamedglobal.png";

const projects = [
  {
    id: "discount-codes",
    title: "Discount Codes",
    company: "universe.com",
    imgPath: discountcodes,
    description:
      "Implemented a major improvement for discount code configuration, enabling event hosts to customize code availability and activation based on specific date ranges, time ranges, and selected weekdays.",
    link: "https://support.universe.com/hc/en-us/articles/360006857832-Create-and-manage-discount-codes#h_01F2SZV1NZJY7WFHFN2VCTAQA2",
    tags: ["Ruby on Rails", "Golang", "ReactJS", "GraphQL", "Postgres"],
  },
  {
    id: "bulk-edits",
    title: "Bulk Edits",
    company: "universe.com",
    imgPath: bulkedits,
    description:
      "Built the Bulk Edit feature, enabling hosts to efficiently customize ticket price, quantity, availability, and timeslot capacity for numerous timeslots simultaneously, using filters for date ranges, time ranges, and weekdays.",
    link: "https://support.universe.com/hc/en-us/articles/4407663275405-Customizing-Tickets-Per-Timeslot-on-a-Timed-Entry-Event",
    tags: ["Ruby on Rails", "Golang", "ReactJS", "GraphQL", "MongoDB"],
  },
  {
    id: "payment-plans",
    title: "Payment Plans",
    company: "universe.com",
    imgPath: paymentplans,
    description:
      "Managed a major release migrating the Payment Plan feature from the deprecated Stripe Charges API to the Payment Intent API, adding 3D Secure support for ticket installment payments and improving security and compliance.",
    link: "https://support.universe.com/hc/en-us/articles/360002388191-Set-up-a-payment-plan-for-your-event",
    tags: ["Ruby on Rails", "Golang", "Payments", "Postgres"],
  },
  {
    id: "teamed-global",
    title: "Teamed Global",
    imgPath: teamedglobal,
    description:
      "An HR management tool for employee payroll and leave administration. The system handles payments for multinational corporations, requiring robust currency conversion to process multi-currency transactions accurately.",
    link: "https://www.teamed.global",
    tags: ["Ruby on Rails", "ReactJS", "Payments", "Postgres"],
  },
  {
    id: "nfhs",
    title: "NFHS SSO, MMS & Rulebook",
    imgPath: nfhs,
    description:
      "Contributed to the NFHS suite of applications for sports education, coaching, and membership. Implemented Single Sign-On via OpenID Connect, executed a major Ruby/Rails version upgrade for NFHS MMS, and customized the Active Admin panel to streamline bulk administrative operations.",
    link: "https://nfhs.org",
    tags: ["Ruby on Rails", "OpenID Connect", "Postgres"],
  },
  {
    id: "zeehaus",
    title: "Zeehaus",
    imgPath: zeehaus,
    description:
      "Contributed to the Zeehaus real estate platform, focusing on the core business logic for buying and selling properties, including payment integrations via the Synapse API. Engineered the entire exchange logic from scratch for a cryptocurrency token built on the Stellar blockchain.",
    link: "https://zeehaus.com",
    tags: ["Ruby on Rails", "Payments", "Blockchain", "REST API"],
  },
  {
    id: "music-mayhem",
    title: "Music Mayhem",
    imgPath: musicmayhem,
    description:
      "For the Music Mayhem Trivia music quiz game, resolved major production bugs interrupting song playback and causing inaccurate score calculations. Reworked the scoring logic to register points as soon as the user begins typing and implemented a player-name reward wheel.",
    link: "https://gomayhem.com",
    tags: ["Ruby on Rails", "ReactJS", "MongoDB"],
  },
  {
    id: "hyrr-admin",
    title: "HYRR Admin",
    imgPath: hyrrAdmin,
    description:
      "An administration tool for managing the HYRR Android app, helping employers identify the right candidate before they walk through the door for interviews. Built for volume hiring at scale.",
    link: "https://app.hyrr.co",
    tags: ["Ruby on Rails", "ReactJS", "MongoDB"],
  },
  {
    id: "hyrr",
    title: "HYRR",
    imgPath: hyrr,
    description:
      "Seeing the real candidate is critical to a hiring decision. By putting short videos upfront in the hiring process instead of CVs, funnel quality improves significantly and there are no surprises during actual interviews.",
    link: "https://hyrr.co",
    tags: ["Ruby on Rails", "MongoDB", "REST API"],
  },
];

// Tag list for the filter row, ordered by how often each tag appears.
export const projectTags = Array.from(
  projects
    .flatMap((project) => project.tags)
    .reduce((counts, tag) => counts.set(tag, (counts.get(tag) || 0) + 1), new Map())
)
  .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
  .map(([tag]) => tag);

export default projects;
