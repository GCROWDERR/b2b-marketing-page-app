import { useEffect } from "react";

import { amazonCaseStudyContent } from "./marketing-case-study-content-amazon";
import { MarketingCaseStudyPage } from "./marketing-case-study-page";

export function MarketingAmazonCaseStudyPage() {
  useEffect(() => {
    const previous = document.title;
    document.title = amazonCaseStudyContent.documentTitle;
    return () => {
      document.title = previous;
    };
  }, []);

  return <MarketingCaseStudyPage content={amazonCaseStudyContent} />;
}
