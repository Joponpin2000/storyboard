import React, { useState } from "react";
import Button from "../atoms/Button";
import Table from "../organisms/Table";
import DeleteSiteModal from "../organisms/DeleteSiteModal";
import EditSiteModal from "../organisms/EditSiteModal";

const SitesTableView = () => {
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
        <EditSiteModal close={() => setModal({ ...modal, open: false })} />
      )}
    </>
  );
};

export default SitesTableView;
