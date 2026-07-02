import { Compare, GlobeWorld, TallBuilding } from "@bankrate/icons-react";

import { CASE_STUDY_IMG } from "./marketing-case-study-assets";
import type { CaseStudyContent } from "./marketing-case-study-types";

export const amazonCaseStudyContent: CaseStudyContent = {
  slug: "amazon",
  documentTitle: "Bankrate B2B — Amazon Case Study",
  hero: {
    label: "Case Study",
    headline: "How Bankrate helped Amazon employees save $38K on their mortgages.",
    summary:
      "By leveraging Bankrate's exclusive financial tools and partner network, Amazon turned employee home-buying into a competitive benefit.",
    imageSrc: CASE_STUDY_IMG.heroDevices,
    imageAlt: "Bankrate mortgage tools on desktop and mobile",
  },
  overviewStats: [
    { value: "100", label: "Partners", suffix: true },
    { value: "14", label: "Actively comparing rates" },
    { value: "323M", label: "Monthly mortgage shoppers" },
  ],
  challenge: {
    label: "The Challenge",
    headline: "Amazon employees needed better mortgage options.",
    paragraphs: [
      "In a hyper-competitive real estate market, Amazon found that employees were struggling to secure competitive mortgage rates despite their high creditworthiness. Legacy benefits packages lacked the financial depth and technical tools required to make home-buying a frictionless part of the employee experience.",
      "The HR and Benefits teams needed a way to provide exclusive access and better pricing without adding administrative complexity.",
    ],
    imageSrc: CASE_STUDY_IMG.challengeEmployee,
    imageAlt: "Amazon employee portrait",
    caption: "Mike Dean, Amazon employee",
  },
  solution: {
    label: "The Solution",
    headline: "A private mortgage auction, built for Amazon.",
    summary:
      "Bankrate developed a bespoke integration that allows Amazon employees to participate in an exclusive rate-matching environment.",
    cards: [
      {
        icon: TallBuilding,
        iconVariant: 1,
        iconColor: "blue",
        title: "Home Equity Access",
        body: "Employees can leverage their equity with institutional rates specifically negotiated for the Amazon workforce.",
      },
      {
        icon: Compare,
        iconVariant: 2,
        iconColor: "green",
        title: "Exclusive Lender Network",
        body: "A curated pool of top-tier lenders competing in a blind auction to offer the lowest possible APY.",
      },
      {
        icon: GlobeWorld,
        iconVariant: 3,
        iconColor: "indigo",
        title: "Personalized Rates",
        body: "Real-time data feeds provide employees with instantaneous rate updates based on their specific financial profile.",
      },
    ],
  },
  results: {
    label: "The Results",
    headline: "Employees saved an average of $38K — and that's just the beginning.",
    stats: [
      {
        value: "18%",
        label: "Higher mortgage approval rate vs. national average",
      },
      {
        value: "$2.4K",
        label: "Average savings on upfront closing costs per loan",
      },
      {
        value: "94%",
        label: "Employee satisfaction rating with the home-buying benefit",
      },
    ],
  },
  quote: {
    text: "Bankrate's platform gave our employees access to mortgage rates they couldn't get anywhere else. It's transformed how we think about financial wellness.",
    attribution: "Benefits Team, Amazon",
    role: "Strategic HR Operations",
  },
};
