import React from "react";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

import logo from "../../assets/air.svg";

const DashboardNavigation = () => {
    
    const logoutClickHandler = () => {
        localStorage.removeItem("a_t");
        window.location.reload();
    };

    return (
        <Navbar expand="lg" className="bg-body-light shadow">
            <Container fluid>
                <Navbar.Brand href="/">
                    <img src={logo} alt="airbnb logo" width={35} height={35} />
                    <span className="mx-2">بلوط</span>
                </Navbar.Brand>
                <Navbar.Toggle />

                <div className="position-absolute start-0 mx-3">
                    <Button onClick={logoutClickHandler} variant="danger">خروج</Button>
                </div>
            </Container>
        </Navbar>
    );
};

export default DashboardNavigation;
