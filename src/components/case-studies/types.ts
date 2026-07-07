import type { ReactNode } from "react";

import type { BankrateIcon } from "@bankrate/icons-react";

import type {
  IconOffsetColor,
  IconOffsetVariant,
} from "@/components/common/flourish/icon-offset";

export type CaseStudyOverviewStat = {
  value: ReactNode;
  label: string;
  suffix?: boolean;
};

export type CaseStudySolutionCard = {
  icon: BankrateIcon;
  iconVariant: IconOffsetVariant;
  iconColor: IconOffsetColor;
  title: string;
  body: string;
};

export type CaseStudyResultStat = {
  value: string;
  label: string;
};

export type CaseStudyContent = {
  slug: string;
  documentTitle: string;
  hero: {
    label: string;
    headline: string;
    summary: string;
    imageSrc: string;
    imageAlt: string;
  };
  overviewStats: CaseStudyOverviewStat[];
  challenge: {
    label: string;
    headline: string;
    paragraphs: string[];
    imageSrc: string;
    imageAlt: string;
    caption: string;
  };
  solution: {
    label: string;
    headline: string;
    summary: string;
    cards: CaseStudySolutionCard[];
  };
  results: {
    label: string;
    headline: string;
    stats: CaseStudyResultStat[];
  };
  quote: {
    text: string;
    attribution: string;
    role: string;
  };
};
