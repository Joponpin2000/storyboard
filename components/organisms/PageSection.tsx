import React, { useState } from "react";
import PageHeader from "../molecules/PageHeader";
import PageTabs from "../molecules/PageTabs";
import SitesTableView from "../molecules/SitesTableView";

const PageSection = () => {
  const tabs = ["My Sites", "My Users"];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const tableHeadings = [
    { name: "Site Name", key: "siteName", customClass: "underline" },
    { name: "Admin", key: "admin" },
    { name: "Creation Date & Time", key: "creation" },
  ];
  const [tableData, setTableData] = useState<any[]>(
    Array(2)
      .fill({
        siteName: "Qualtrak",
        admin: "Adelowomi Issac",
        creation: "02/05/2021 5:29pm",
        _id: Math.random().toString(),
      })
      .map((data) => ({ ...data, _id: Math.random().toString() }))
  );
  return (
    <div className="PageSection">
      <PageHeader {...{ tableData }} {...{ setTableData }} />
      <PageTabs options={tabs} {...{ activeTab }} {...{ setActiveTab }} />
      <SitesTableView
        {...{ tableData }}
        {...{ tableHeadings }}
        {...{ setTableData }}
      />
    </div>
  );
};

export default PageSection;
