import React from "react";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import AttachmentIcon from "../atoms/vectors/AttachmentIcon";
import TickIcon from "../atoms/vectors/TickIcon";
import Modal from "../molecules/Modal";

interface PropTypes {
  close: Function;
}
const AddSiteModal = ({ close = () => {} }: PropTypes) => {
  return (
    <Modal close={close}>
      <div className="mt-3">
        <div>
          <h3 className="font-semibold text-2xl text-dark mb-8">
            Add New Site
          </h3>
          <form className="space-y-6">
            <Input label="Site Name" />
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
          </form>
        </div>
        <div className="flex items-center justify-between mt-14 space-x-6">
          <Button
            text="Cancel"
            size="small"
            customClasses="text-dark text-opacity-[52%] bg-grey2 border-none"
            onClick={close}
          />
          <Button text="Add New Site" size="small" />
        </div>
      </div>
    </Modal>
  );
};

export default AddSiteModal;
