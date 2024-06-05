import React from "react";
import Input from "./Input";

const Navbar = ({ onCityNameChange, inputValue, setInputValue }) => {
    return (
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container-fluid d-flex justify-content-between align-items-center">
                    <a className="navbar-brand d-flex align-items-center" href="/">
                        <img src="../images/cloudy.png" height="50px" width="50px" alt="Weather Forecast"/>
                        <span className="ms-2">Weather Forecast</span>
                    </a>
                    <div className="d-flex">
                        <Input 
                            placeholder="Enter city name" 
                            value={inputValue} 
                            onChange={setInputValue} 
                            onSubmit={onCityNameChange} 
                        />
                    </div>
                </div>
            </nav>
    );
}

export default Navbar;
