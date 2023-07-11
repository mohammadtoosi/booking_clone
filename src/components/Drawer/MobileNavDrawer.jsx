"use client";

import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { mobileNavDrawerActions } from "../../redux/slices/nav-drawer";

import Offcanvas from "react-bootstrap/Offcanvas";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";

import { XCircle, Person, Airplane } from "react-bootstrap-icons";

import logo from "../../assets/air.svg";

const MobileNavDrawer = () => {
    const dispatch = useDispatch();

    const isOpen = useSelector((state) => state.nav.isOpen);

    const closeDrawerHandler = () => {
        dispatch(mobileNavDrawerActions.toggleMobileNav());
    };

    return (
        <Offcanvas show={isOpen} onHide={closeDrawerHandler}>
            <Offcanvas.Header>
                <Offcanvas.Title>
                    <div className="d-flex">
                        <div className="">
                            <img
                                src={logo}
                                alt="airbnb logo"
                                width={45}
                                height={45}
                            />
                        </div>
                        <div className="position-fixed start-0 mx-3">
                            <Button href="/signin">
                                <Person />
                            </Button>
                            <Button href="/mytrip" className="mx-2">
                                <Airplane />
                            </Button>
                            <Button
                                variant="warning"
                                onClick={closeDrawerHandler}
                            >
                                <XCircle />
                            </Button>
                        </div>
                    </div>
                </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="">
                <div className="">
                    <Dropdown>
                        <Dropdown.Toggle variant="">بلیط</Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="inside-flight">
                                پرواز داخلی
                            </Dropdown.Item>
                            <Dropdown.Item href="outside-flight">
                                پرواز خارجی
                            </Dropdown.Item>
                            <Dropdown.Item href="train">قطار</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown>
                        <Dropdown.Toggle variant="">اقامت</Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="hotels">هتل</Dropdown.Item>
                            <Dropdown.Item href="hotels">
                                ویلا و اقامتگاه
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <div className="mx-3">
                        <a
                            className="text-decoration-none text-dark"
                            href="search"
                        >
                            تور
                        </a>
                    </div>
                    <Dropdown>
                        <Dropdown.Toggle variant="">بیشتر</Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="search">
                                بلوط پلاس
                            </Dropdown.Item>
                            <Dropdown.Item href="search">
                                مجله بلوط
                            </Dropdown.Item>
                            <Dropdown.Item href="search">
                                بیمه مسافرتی
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default MobileNavDrawer;
