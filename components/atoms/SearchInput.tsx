import React, { useState } from "react";
import SearchIcon from "./vectors/SearchIcon";

interface PropTypes {
  label?: string;
  value?: string;
  placeholder?: string;
  onChange?: Function;
  customClass?: string;
  focusState?: boolean;
  triggerSearch?: (search: string) => void;
}

function SearchInput({
  placeholder,
  value,
  label,
  onChange = () => {},
  triggerSearch = () => {},
}: PropTypes) {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    triggerSearch(value ?? "");
  };

  return (
    <>
      {label && <label className="mb-2 font-bold text-base op">{label}</label>}
      <form
        className={`flex items-center max-w-full w-[20rem] px-4 py-[10px] rounded text-sm font-normal bg-grey3 pr-[50px]`}
        onSubmit={handleSubmit}
      >
        <SearchIcon />
        <input
          type="search"
          placeholder={placeholder}
          value={value}
          onChange={(e) => {
            if (e.target.value === "") triggerSearch(value ?? "");
            onChange(e.target.value);
          }}
          className="border-none outline-none focus:outline-none flex-grow w-full pl-2 md:w-max bg-transparent"
        />
      </form>
    </>
  );
}

export default SearchInput;
