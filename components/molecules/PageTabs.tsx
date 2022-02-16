import React from "react";

interface PropTypes {
  activeTab?: string;
  setActiveTab?: Function;
  options?: string[];
}

const PageTabs = ({
  activeTab = "",
  setActiveTab = () => {},
  options = [],
}: PropTypes) => {
  return (
    <div className="PageTabs">
      {options.map((option, index) => (
        <span
          key={`page_tab-${index}`}
          onClick={() => setActiveTab(option)}
          className={`pb-1 cursor-pointer ${
            activeTab === option
              ? "font-medium text-primary border-b-primary border-b"
              : "text-darkGrey"
          }`}
        >
          {option}
        </span>
      ))}
    </div>
  );
};

export default PageTabs;
