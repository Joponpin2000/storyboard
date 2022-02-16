import React, { useState } from "react";
import Button from "../atoms/Button";
import Table from "../organisms/Table";
import DeleteSiteModal from "../organisms/DeleteSiteModal";
import EditSiteModal from "../organisms/EditSiteModal";
interface PropTypes {
  tableData: any;
  setTableData: Function;
  tableHeadings: any;
}
const SitesTableView = ({
  tableData,
  setTableData,
  tableHeadings,
}: PropTypes) => {
  const [selectedRow, setSelectedRow] = useState(null);
  const [selectedSites, setSelectedSites] = useState<any[]>([]);
  type modalTypes = "delete" | "edit";
  const [modal, setModal] = useState<{ type: modalTypes; open: boolean }>({
    type: "edit",
    open: false,
  });
  const handleRowClick = (id: string, action: string) => {
    const selected = tableData.find((data: any) => data._id === id);
    setSelectedRow(selected);
    if (action === "delete") {
      setModal({ type: "delete", open: true });
    }
    if (action === "edit") {
      setModal({ type: "edit", open: true });
    }
  };

  const handleDelete = (id: string) => {
    setTableData(tableData.filter((data) => data._id !== id));
    setModal({ ...modal, open: false });
  };
  return (
    <>
      <Table
        headings={tableHeadings}
        {...{ tableData }}
        clickRowAction={handleRowClick}
        rowActions={[
          {
            key: "delete",
            element: (
              <button
                type="button"
                className="bg-[#ffffff] border border-dark border-opacity-[24%] text-dark text-opacity-[24%] py-2 px-6 rounded"
              >
                Delete
              </button>
            ),
          },
          {
            key: "edit",
            element: (
              <button
                type="button"
                className="bg-[#ffffff] border border-primary text-primary py-2 px-6 rounded"
              >
                Edit
              </button>
            ),
          },
        ]}
        id="My-Sites"
        selected={selectedSites}
        onSelect={(selectedIds: any) => setSelectedSites(selectedIds)}
      />
      {modal.type === "delete" && modal.open && (
        <DeleteSiteModal
          site={selectedRow}
          close={() => setModal({ ...modal, open: false })}
          onClick={(id: string) => handleDelete(id)}
        />
      )}
      {modal.type === "edit" && modal.open && (
        <EditSiteModal
          site={selectedRow}
          close={() => setModal({ ...modal, open: false })}
          {...{ tableData }}
          {...{ setTableData }}
        />
      )}
    </>
  );
};

export default SitesTableView;
