import { useEffect } from "react";

import { amazonCaseStudyContent } from "./case-study-content-amazon";
import { MarketingCaseStudyPage } from "./case-study-page";

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
