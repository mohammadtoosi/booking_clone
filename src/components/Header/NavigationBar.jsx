"use client";

import React from "react";

import { useDispatch } from "react-redux";
import { mobileNavDrawerActions } from "../../redux/slices/nav-drawer";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import MobileNavDrawer from "../Drawer/MobileNavDrawer";

import logo from "../../assets/air.svg";

const NavigationBar = () => {
    const isUserValid = localStorage.getItem("u_t");
    const dispatch = useDispatch();

    const openNavDrawerClickHandler = () => {
        dispatch(mobileNavDrawerActions.toggleMobileNav());
    };

    return (
        <>
            <MobileNavDrawer />
            <Navbar expand="lg" className="bg-body-light shadow">
                <Container fluid>
                    <Navbar.Brand href="/">
                        <img
                            src={logo}
                            alt="airbnb logo"
                            width={35}
                            height={35}
                        />
                        <span className="mx-2">بلوط</span>
                    </Navbar.Brand>
                    <Navbar.Toggle onClick={openNavDrawerClickHandler} />
                    <Navbar.Collapse className="position-relative d-none d-xs-none d-sm-none">
                        <Nav
                            className="my-2 my-lg-0 mx-5 gap-4"
                            style={{ maxHeight: "100px" }}
                            navbarScroll
                        >
                            <NavDropdown
                                title="بلیط"
                                id="navbarScrollingDropdown"
                                style={{ zIndex: "1000000" }}
                            >
                                <div className="text-end px-2">
                                    <NavDropdown.Item href="inside-flight">
                                        پرواز داخلی
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="outside-flight">
                                        پرواز خارجی
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="train">
                                        قطار
                                    </NavDropdown.Item>
                                </div>
                            </NavDropdown>
                            <NavDropdown
                                title="اقامت"
                                id="navbarScrollingDropdown"
                                style={{ zIndex: "1000000" }}
                            >
                                <div className="text-end px-2">
                                    <NavDropdown.Item href="hotels">
                                        هتل
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="hotels">
                                        ویلا و اقامتگاه
                                    </NavDropdown.Item>
                                </div>
                            </NavDropdown>
                            <NavDropdown
                                title="بیشتر"
                                id="navbarScrollingDropdown"
                                style={{ zIndex: "1000000" }}
                            >
                                <div className="text-end px-2">
                                    <NavDropdown.Item href="#action3">
                                        بلوط پلاس
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action4">
                                        مجله بلوط
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action5">
                                        بیمه مسافرتی
                                    </NavDropdown.Item>
                                </div>
                            </NavDropdown>
                        </Nav>
                        <div className="position-absolute start-0">
                            <a className="btn" href="user/mytrip">
                                بلیط های من
                            </a>
                            <a
                                className="btn custom-button"
                                href={`${
                                    isUserValid === "" ? "signin" : "user"
                                }`}
                            >
                                {isUserValid === "" || isUserValid === null
                                    ? "ورود | ثبت نام"
                                    : "ورود به پنل کاربری"}
                            </a>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default NavigationBar;
