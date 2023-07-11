import React from "react";

import { useLocation } from "react-router-dom";

import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

const UserAccountMenu = () => {
    let location = useLocation();

    const logoutClickHandler = () => {
        localStorage.removeItem("u_t");
        window.location.reload();
    };

    return (
        <div className="mb-5">
            <ListGroup>
                <ListGroup.Item
                    action
                    active={location.pathname === "/user" ? true : false}
                    href="/user"
                >
                    حساب کاربری
                </ListGroup.Item>
                <ListGroup.Item
                    action
                    active={location.pathname === "/user/mytrip" ? true : false}
                    href="/user/mytrip"
                >
                    رزرو های من
                </ListGroup.Item>
                <ListGroup.Item
                    action
                    active={
                        location.pathname === "/user/traveler" ? true : false
                    }
                    href="/user/traveler"
                >
                    لیست مسافران
                </ListGroup.Item>
            </ListGroup>
            <div className="mt-3 col-12">
                <Button
                    variant="danger"
                    className="w-100"
                    onClick={logoutClickHandler}
                >
                    خروج
                </Button>
            </div>
        </div>
    );
};

export default UserAccountMenu;
