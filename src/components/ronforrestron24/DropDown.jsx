import React, { useState } from "react";
import styles from "./DropDown.css";
import Author from "../../Author";

function DropDown() {
  const [selectedOption, setSelectedOption] = useState("");

  function handleChange(e) {
    setSelectedOption(e.target.value);
  }

  return (
    <div className="dropdown-container">
      <div className="dropdown">
        <label htmlFor="dropdown">Select Option:</label>
        <select id="dropdown" value={selectedOption} onChange={handleChange}>
          <option value="">Please select</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        <div className="author">
          <Author
            name="Ron Daniel Manguerra"
            githubLink="https://github.com/ronforrestron24"
          />
        </div>
      </div>
    </div>
  );
}

export default DropDown;
