"use client";

import "./Header.scss";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="header">
            <div className="header__toggle-button" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <FiMenu /> : <AiOutlineClose />}
            </div>
        </div>
    );
};

export default Header;