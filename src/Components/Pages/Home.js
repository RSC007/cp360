import React, { useState } from "react";
import { components } from "react-select";

import CommonSelect from "../Common/CommonSelect";


// constans 
const multiSelectOptions = [{ "title": "React", "id": "react" }, {
  "title":
    "Angular", "id": "angular"
}, { "title": "Vue", "id": "vue" }, {
  "title":
    "Ember", "id": "ember"
}]

const colors = ["red", "yellow", "green", "blue"]

const Home = () => {
  const [multiSelected, setMultiSelected] = useState([])
  const [singleSelected, setSingleSelected] = useState(null)

  const onSingleSelect = (value) => setSingleSelected(value)
  const onMultiSelect = (values) => setMultiSelected(values)

  const reset = () => {
    setMultiSelected([])
    setSingleSelected(null)
  }

  const Option = (props) => {
    return (
      <div>
        <components.Option {...props}>
          <input
            type="checkbox"
            checked={props.isSelected}
          />{" "}
          <label>{props.label}</label>
        </components.Option>
      </div>
    );
  };


  return (
    <div className="home-page w-25 m-auto">
      <div className="mb-3">
        <h4>Normal Select</h4>
        <CommonSelect
         options={colors}
         handleChange={onSingleSelect}
         value={singleSelected}
          />
      </div>
      <div className="mb-3">
        <h4>Multi Select</h4>
        <CommonSelect
          options={multiSelectOptions}
          handleChange={onMultiSelect}
          value={multiSelected}
          component={{ Option }}
          isMultiSelect
          onSelectCloseMenu={false}
          hideMenu={false}
        />
      </div>
      <button className={`btn btn-primary ${(multiSelected.length === multiSelectOptions.length && singleSelected) ? "d-block" : "d-none"}`} onClick={reset}>Clear</button>
    </div>
  );
};

export default Home;
