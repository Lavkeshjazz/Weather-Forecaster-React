import React from "react";
import Button from "./Button";

const Input = ({ placeholder, value, onChange, onSubmit }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(value);
    };

    return (
        <form className="d-flex" role="search" onSubmit={handleSubmit}>
            <input 
                name="city" 
                id="idInput" 
                className="form-control me-2" 
                type="search"  
                placeholder={placeholder} 
                value={value} 
                onChange={(e) => onChange(e.target.value)} 
                aria-label="Search"
            />
            <Button value="Search"/>
        </form>
    );
};

export default Input;
