import React, { FormEvent, useEffect, useState } from "react";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import AttachmentIcon from "../atoms/vectors/AttachmentIcon";
import TickIcon from "../atoms/vectors/TickIcon";
import Modal from "../molecules/Modal";

interface PropTypes {
  site: any;
  close: Function;
  tableData: any;
  setTableData: Function;
}
const EditSiteModal = ({
  close = () => {},
  tableData = [],
  setTableData = () => {},
  site,
}: PropTypes) => {
  const [form, setForm] = useState({
    siteName: "",
    admin: "Adelowomi Issac",
    creation: "02/05/2021 5:29pm",
    _id: Math.random().toString(),
  });
  const updateField = (field: "siteName", value: string) => {
    setForm({
      ...form,
      [field]: value,
    });
  };
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const updatedList = tableData.map((data) =>
      data._id === site._id ? { ...data, siteName: form.siteName } : data
    );
    setTableData(updatedList);
    close();
  };

  useEffect(() => {
    updateField("siteName", site.siteName);
  }, []);
  return (
    <Modal close={close}>
      <div className="mt-3">
        <div>
          <h3 className="font-semibold text-2xl text-dark mb-8">Edit Site</h3>
          <form className="space-y-6" onSubmit={onSubmit}>
            <Input
              label="Site Name"
              value={form.siteName}
              onChange={(e: any) => updateField("siteName", e.target.value)}
            />
            <Input label="Description" />
            <div>
              <p className="text-dark text-opacity-[72%] mb-4">
                Upload your site logo
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <AttachmentIcon />
                  <p className="text-dark text-opacity-[72%]">
                    Required_File.png
                  </p>
                </div>
                <TickIcon />
              </div>
            </div>
            <div className="flex items-center justify-between pt-14 space-x-6">
              <Button
                text="Cancel"
                size="small"
                customClasses="text-dark text-opacity-[52%] bg-grey2 border-none"
                onClick={close}
              />
              <Button text="Save Changes" size="small" />
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default EditSiteModal;
