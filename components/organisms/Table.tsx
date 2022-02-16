import React, { Fragment, ReactElement, useEffect, useState } from "react";
import CheckBox from "../atoms/CheckBox";

interface PropTypes {
  headings: Array<{
    name: string;
    key: string;
    customClass?: string;
  }>;
  tableData?: Array<Object>;
  id: string;
  clickRow?: Function;
  clickRowAction?: Function;
  rowActions?: {
    element: ReactElement | ((row: any) => ReactElement);
    key: string;
  }[];
  selected?: Array<string>;
  onSelect?: Function;
  selectKey?: string;
}
const Table = ({
  headings = [],
  tableData = [],
  id,
  rowActions = [],
  clickRow = () => {},
  clickRowAction = () => {},
  selected = [],
  selectKey = "_id",
  onSelect = () => {},
}: PropTypes) => {
  const tableId = `${id}-table`;

  const toggleSelectAll = (value: boolean) => {
    if (!value) onSelect(tableData.map((row: any) => row[selectKey]));
    else onSelect([]);
  };

  return (
    <div className="w-full p-8 bg-white pb-0 flex-grow h-full overflow-y-auto flex flex-col">
      <div className="flex-grow overflow-y-hidden flex flex-col">
        <table className="Table">
          <thead className="">
            <tr>
              <th className="w-28">
                <CheckBox
                  onChange={(value: boolean) => toggleSelectAll(value)}
                  value={
                    tableData.length > 1 && selected.length === tableData.length
                  }
                />
              </th>
              {headings.map((heading, headingIndex) => (
                <th key={`${tableId}-heading_${headingIndex}`}>
                  <div className={"flex items-center "}>
                    <span>{heading.name}</span>
                  </div>
                </th>
              ))}
              {rowActions?.length ? <th>Actions</th> : null}
            </tr>
          </thead>
          <tbody>
            {tableData.map((row: any, rowIndex) => (
              <Fragment key={`${tableId}-heading_${rowIndex}`}>
                <tr className="lg:hidden border-none !p-0">
                  <td colSpan={headings?.length + 1} className="!p-0 !m-0">
                    <hr />
                  </td>
                </tr>
                <tr
                  onClick={() => clickRow(row._id || row.id || rowIndex)}
                  key={`${tableId}_row-${rowIndex}`}
                  className="h-5 relative"
                >
                  <td className="w-28">
                    <CheckBox
                      value={selected.indexOf(row[selectKey]) !== -1}
                      // value={row.id || row._id || rowIndex}
                      onChange={(value: boolean) => {
                        let ids: string[] = [];
                        if (!value) {
                          ids = selected.concat(row[selectKey]);
                        } else {
                          const ids = selected.filter(
                            (id: string) => id !== row[selectKey]
                          );
                        }
                        onSelect(ids);
                      }}
                    />
                  </td>
                  {headings.map((col, colIndex) => (
                    <td
                      key={`${tableId}_row_${rowIndex}_col-${colIndex}`}
                      className={`${col.customClass}  h-5`}
                    >
                      {row[col.key]}
                    </td>
                  ))}
                  {rowActions?.length ? (
                    <td className="flex flex-shrink items-center space-x-6">
                      {rowActions.map((action, actionIndex) => (
                        <div
                          className="cursor-pointer h-10 flex items-center justify-center"
                          onClick={() =>
                            clickRowAction(
                              row._id || row.id || rowIndex,
                              action.key
                            )
                          }
                          key={`${tableId}-${rowIndex}-action_${actionIndex}`}
                        >
                          {typeof action.element === "function"
                            ? action.element(row)
                            : action.element}
                        </div>
                      ))}
                    </td>
                  ) : null}
                </tr>
              </Fragment>
            ))}
            {!tableData.length && (
              <tr className="border-none mt-40">
                <td
                  colSpan={headings?.length + 1}
                  className="py-6  text-center text-lp-grey2"
                >
                  <div className="flex flex-col items-center justify-center">
                    <p className="text-xs lg:text-base">
                      All websites created would be displayed here
                    </p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>

        <div className="table-footer">
          <div className="flex items-center space-x-4">Previous</div>
          <div className="flex items-center space-x-4">Items per page:</div>
          <div className="flex items-center space-x-4">Next</div>
        </div>
      </div>
    </div>
  );
};

export default Table;
