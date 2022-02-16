import React, { useState } from "react";
import PageHeader from "../molecules/PageHeader";
import PageTabs from "../molecules/PageTabs";
import SitesTableView from "../molecules/SitesTableView";

const PageSection = () => {
  const tabs = ["My Sites", "My Users"];
  const [activeTab, setActiveTab] = useState(tabs[0]);
  return (
    <div className="PageSection">
      <PageHeader />
      <PageTabs options={tabs} {...{ activeTab }} {...{ setActiveTab }} />
      <SitesTableView />
      
    </div>
  );
};

export default PageSection;
