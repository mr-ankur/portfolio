// Career history, mirroring the resume PDF served at /resume.pdf.
const experience = [
  {
    company: "Pattern",
    role: "Senior Software Engineer",
    period: "May 2026 — Present",
    current: true,
    highlights: [
      "Contribute to Ruby on Rails, Golang and Python applications, reviewing changes and taking ownership of delivery.",
      "Work across the AWS data platform — Snowflake, Trino, Spark SQL, Apache Iceberg and Airbyte — building and maintaining data pipelines in Python and Golang.",
      "Monitor platform health and query performance with Grafana and Datadog, and apply Claude to accelerate development and code review.",
    ],
    stack: [
      "Golang",
      "Python",
      "Ruby on Rails",
      "AWS",
      "Snowflake",
      "Trino",
      "Spark SQL",
      "Apache Iceberg",
      "Airbyte",
      "Postgres",
      "Grafana",
      "Datadog",
      "Claude",
    ],
  },
  {
    company: "Telus Digital",
    role: "Application Development Module Lead",
    period: "Oct 2025 — May 2026",
    highlights: [
      "Led maintenance and development of Ruby on Rails applications, resolving critical security and production issues.",
      "Defined technical requirements and guided architectural decisions for stability, compliance and on-time delivery.",
    ],
    stack: ["Ruby on Rails", "Golang", "TypeScript", "Postgres", "Kubernetes"],
  },
  {
    company: "Ticketmaster India",
    client: "Universe.com",
    role: "Senior Full Stack Engineer",
    period: "Oct 2022 — Oct 2025",
    highlights: [
      "Built features across the Universe.com live-events platform in Ruby on Rails and Golang, owning them from technical design through production release.",
      "Migrated the legacy Stripe Charges API to the Payment Intent API to meet 3DS requirements across the Europe region.",
      "Built Bulk Edit from scratch, letting event hosts modify many event configurations in a single pass.",
      "Shipped discount code scheduling by date range, time range and selected weekdays.",
      "Delivered payment collection projects on schedule while optimizing system performance.",
    ],
    stack: [
      "Golang",
      "Ruby on Rails",
      "ReactJS",
      "GraphQL",
      "MongoDB",
      "Postgres",
      "Docker",
    ],
  },
  {
    company: "Haptiq (Webonise)",
    role: "Senior Software Developer",
    period: "May 2021 — Oct 2022",
    highlights: [
      "Led multiple frontend and backend projects, owning release management alongside DevOps and QA.",
      "Upgraded Rails 4 → 5 → 6 and hardened security practices with Brakeman and RuboCop.",
      "Integrated OAuth 2.0 and OpenID Connect to deliver SSO across the NFHS suite of applications.",
      "Rebuilt currency exchange and time zone handling for Teamed Global's multi-currency payroll generation.",
      "Customized the Active Admin panel for the NFHS Rulebook to streamline bulk administrative operations.",
    ],
    stack: ["Ruby on Rails", "ReactJS", "REST APIs", "MySQL", "AWS", "Jenkins"],
  },
  {
    company: "AkaruiLabs India",
    role: "Software Engineer",
    period: "Mar 2019 — May 2021",
    highlights: [
      "Built deep Ruby on Rails and ReactJS expertise, running projects independently with direct client contact.",
      "Engineered crypto token exchange from scratch for Zeehaus on the Stellar blockchain, alongside payment integrations via the Synapse API.",
      "Fixed major production bugs and reworked scoring logic for the Music Mayhem trivia game.",
    ],
    stack: ["Ruby on Rails", "ReactJS", "REST APIs", "MongoDB", "Postgres", "Heroku"],
  },
  {
    company: "Unihyr Labs Pvt Ltd",
    role: "Software Engineer Intern",
    period: "Mar 2018 — Feb 2019",
    highlights: [
      "Developed backend features for a Spring Boot application in Java.",
      "Built the corresponding ReactJS frontend, working across the full stack from API to user interface.",
    ],
    stack: ["Java", "Spring Boot", "ReactJS", "REST APIs"],
  },
];

export default experience;
