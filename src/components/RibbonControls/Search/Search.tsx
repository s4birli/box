import React, { FC, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { InputGroup, FormControl } from "react-bootstrap";

const Search: FC = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: any) => {
    setInputValue(event.target.value);
  };

  const handleInputKeyDown = (event: any) => {
    if (event.keyCode === 13) {
      console.log("Enter key pressed");
      // do something when Enter key is pressed, such as submit the form
    }
  };
  return (
    <div className="input-group d-flex">
      <form className="d-flex">
        <input
          className="form-control"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
        />
        <div className="input-group-append p-1">
          <BiSearch size={32} />
        </div>
      </form>
    </div>
  );
};

export default Search;
