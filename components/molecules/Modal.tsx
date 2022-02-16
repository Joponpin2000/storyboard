import React, { ReactElement, useRef } from "react";
import { useClickAway } from "react-use";
import CloseIcon from "../atoms/vectors/CloseIcon";

interface PropTypes {
  close: Function;
  text?: string;
  children?: ReactElement;
  width?: string;
  showCloseBtn?: boolean;
}

const index = ({
  text,
  close = () => {},
  children,
  width,
  showCloseBtn = true,
}: PropTypes) => {
  const ref = useRef(null);
  useClickAway(ref, () => {
    close();
  });

  return (
    <div className="Modal">
      <div className="-mt-60 space-y-2">
        {showCloseBtn && (
          <div
            onClick={() => close()}
            className="flex justify-end cursor-pointer"
          >
            <CloseIcon />
          </div>
        )}
        <div
          // ref={ref}
          className={` border shadow bg-white rounded z-50 w-96 ${
            width ? width : "w-[25rem]"
          }`}
        >
          <div className="p-8">{children && children}</div>
        </div>
      </div>
    </div>
  );
};

export default index;
