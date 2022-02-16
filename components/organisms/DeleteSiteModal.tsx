import React from "react";
import Button from "../atoms/Button";
import BinIcon from "../atoms/vectors/BinIcon";
import Modal from "../molecules/Modal";
interface PropTypes {
  close: Function;
}
const DeleteSiteModal = ({ close = () => {} }: PropTypes) => {
  return (
    <Modal width="w-[30rem]" close={close} showCloseBtn={false}>
      <div>
        <div className="flex items-start space-x-6">
          <div className="flex items-center justify-center p-5 bg-red-500 bg-opacity-30 rounded-full">
            <BinIcon />
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-2xl text-dark">Delete Site</h3>
            <p className="text-dark text-opacity-[72%]">
              Are you sure you want to delete this site? Once deleted, you
              cannot undo this action.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-end mt-14 space-x-6">
          <Button
            text="Cancel"
            size="small"
            customClasses="text-dark text-opacity-[52%] bg-grey2 border-none"
            onClick={close}
          />
          <Button text="Delete Site" size="small" customClasses="bg-danger" />
        </div>
      </div>
    </Modal>
  );
};

export default DeleteSiteModal;
