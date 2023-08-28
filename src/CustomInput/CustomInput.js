import React from "react";
import './CustomInput.css';
import { toCamelCase } from "../utils";

const CustomInput = ({ name, error, onChange }) => {

    const CamelizedName = toCamelCase(name);

    return (
        <>
            <label htmlFor={CamelizedName} className={`label${error ? '-error' : '' }`}>{ name }</label>
            <input type="text" name={CamelizedName} className={`custom-input${error ? '-error' : '' }`} onChange={e => onChange(CamelizedName, e.target.value)}/>
        </>
    )
};

export default CustomInput;