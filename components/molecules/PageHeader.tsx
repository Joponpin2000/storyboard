import React, { useState } from "react";
import Button from "../atoms/Button";
import AddIcon from "../atoms/vectors/AddIcon";
import SearchInput from "../atoms/SearchInput";
import AddSiteModal from "../organisms/AddSiteModal";

const PageHeader = () => {
  type modalTypes = "add";
  const [modal, setModal] = useState<{ type: modalTypes; open: boolean }>({
    type: "add",
    open: false,
  });
  return (
    <>
      <div className="PageHeader">
        <h1>My Sites</h1>

        <div className="actions">
          <SearchInput placeholder="Search for a site..." />
          <Button
            text="Add New Site"
            iconPosition="left"
            onClick={() => setModal({ type: "add", open: true })}
          >
            <AddIcon />
          </Button>
        </div>
      </div>

      {modal.type === "add" && modal.open && (
        <AddSiteModal close={() => setModal({ ...modal, open: false })} />
      )}
    </>
  );
};

export default PageHeader;
