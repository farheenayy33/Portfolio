export type OpenSourceContribution = {
  id: string;
  repo: string;
  repoUrl: string;
  role: string;
  description: string;
  evidence: string[];
};

export const openSourceContributions: OpenSourceContribution[] = [
  {
    id: "frontend",
    repo: "frontend",
    repoUrl: "https://github.com/farheenayy33/frontend",
    role: "Bug fixes & UI improvements",
    description:
      "Contributed to an existing frontend codebase — debugging issues, implementing fixes, and collaborating through pull requests and code review.",
    evidence: [
      "Worked within established patterns",
      "PR-based workflow",
      "Community collaboration",
    ],
  },
  {
    id: "first-contributions",
    repo: "first-contributions",
    repoUrl: "https://github.com/farheenayy33/first-contributions",
    role: "Open source onboarding",
    description:
      "Completed the first-contributions workflow — fork, branch, commit, and pull request — demonstrating fluency in distributed Git collaboration.",
    evidence: [
      "Fork & branch workflow",
      "PR submission",
      "Open source culture",
    ],
  },
  {
    id: "appsmith",
    repo: "appsmith",
    repoUrl: "https://github.com/farheenayy33/appsmith",
    role: "Large-scale codebase contribution",
    description:
      "Engaged with the Appsmith open source project — navigating a production-scale codebase, identifying contribution opportunities, and submitting meaningful changes.",
    evidence: [
      "Large codebase navigation",
      "Issue tracker engagement",
      "Production OSS patterns",
    ],
  },
];
