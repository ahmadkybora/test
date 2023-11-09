"use client";

import Link from "next/link";
import "./Sidebar.scss";
import { AiFillCrown, AiOutlineHome } from "react-icons/ai";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { BsFillBasket2Fill } from "react-icons/bs";
import React, { useState } from "react";

const Sidebar = () => {
    const subMenuIcon = 20;
    const menuIcon = 18;
    const menuItems = [
        {
            title: "Dashboard",
            url: "#",
            icon: <AiOutlineHome size={menuIcon} />,
        },
        {
            title: "Products",
            url: "#",
            icon: <BsFillBasket2Fill size={menuIcon} />,
        },
        {
            title: "sub menu",
            icon: <AiOutlineHome size={menuIcon} />,
            iconClose: <IoIosArrowUp size={menuIcon} />,
            iconOpen: <IoIosArrowDown size={menuIcon} />,
            submenu: [
              {
                title: "menu",
                url: "#",
                icon: <AiOutlineHome size={subMenuIcon} />,
              },
              {
                title: "menu",
                url: "#",
                icon: <AiOutlineHome size={subMenuIcon} />,
              },
              {
                title: "menu",
                url: "#",
                icon: <AiOutlineHome size={subMenuIcon} />,
              },
            ],
        },
        {
            title: "Dashboard",
            url: "#",
            icon: <AiOutlineHome size={menuIcon} />,
        },
        {
            title: "Products",
            url: "#",
            icon: <BsFillBasket2Fill size={menuIcon} />,
        },
        {
            title: "sub menu",
            icon: <AiOutlineHome size={menuIcon} />,
            iconClose: <IoIosArrowUp size={menuIcon} />,
            iconOpen: <IoIosArrowDown size={menuIcon} />,
            submenu: [
              {
                title: "menu",
                url: "#",
                icon: <AiOutlineHome size={subMenuIcon} />,
              },
              {
                title: "menu",
                url: "#",
                icon: <AiOutlineHome size={subMenuIcon} />,
              },
              {
                title: "menu",
                url: "#",
                icon: <AiOutlineHome size={subMenuIcon} />,
              },
            ],
        },
    ];
    const DropDown = ({dropdown, submenus}) => {
        return (
            <ul>
                {submenus.map((submenu, index) => (
                    <li
                        className="sidebar__dropdown"
                        style={{ display : dropdown ? "block" : "none" }}
                        key={index}>
                            <Link href={submenu.url}>
                                {submenu.icon}
                                <span>{submenu.title}</span>
                            </Link>
                    </li>
                ))}
            </ul>
        );
    };
    const MenuItems = ({ items }) => {
        const [isShow, setIsShow] = useState(false);
        return (
            <li className="sidebar__menu-items">
                {items.submenu ? (
                    <>
                        <a
                            href="#"
                            className={ isShow ? "sidebar__menu-items-hover" : "" }
                            onClick={() => setIsShow(!isShow)}>
                                {items.icon}
                                <span>{items.title}</span>
                                {isShow ? items.iconClose : items.iconOpen}
                        </a>
                        <DropDown dropdown={isShow} submenus={items.submenu} />
                    </>
                ) : (
                    <>
                        <Link href={items.url}>
                            {items.icon}
                            <span>{items.title}</span>
                        </Link>
                    </>
                )}
            </li>
        );
    };
    return (
        <div className="sidebar">
            <div className="sidebar__main-menu">
                <div className="sidebar__title">
                    <AiFillCrown />
                    <h3>Admin</h3>
                </div>
                <nav>
                    <ul>
                        {menuItems.map((menu, index) => {
                            return <MenuItems items={menu} key={index} />;
                        })}
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;
