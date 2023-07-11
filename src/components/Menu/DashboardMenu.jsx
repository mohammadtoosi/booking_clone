import React from "react";

import { useLocation } from "react-router-dom";

import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

import {
    HouseFill,
    AirplaneFill,
    TrainFront,
    BuildingFill,
    Tsunami,
} from "react-bootstrap-icons";

const DashboardMenu = () => {
    let location = useLocation();

    const logoutClickHandler = () => {
        localStorage.removeItem("a_t");
        window.location.reload();
    };

    return (
        <div className="mb-5">
            <ListGroup className="mb-4">
                <ListGroup.Item
                    action
                    active={location.pathname === "/dashboard" ? true : false}
                    href="/dashboard"
                >
                    <span style={{ marginLeft: "10px" }}>
                        <HouseFill size={20} />
                    </span>
                    خانه
                </ListGroup.Item>
                <ListGroup.Item
                    action
                    active={
                        location.pathname === "/dashboard/fly" ? true : false
                    }
                    href="/dashboard/fly"
                >
                    <span style={{ marginLeft: "10px" }}>
                        <AirplaneFill size={20} />
                    </span>
                    پرواز
                </ListGroup.Item>
                <ListGroup.Item
                    action
                    active={
                        location.pathname === "/dashboard/train" ? true : false
                    }
                    href="/dashboard/train"
                >
                    <span style={{ marginLeft: "10px" }}>
                        <TrainFront size={20} />
                    </span>
                    قطار
                </ListGroup.Item>
                <ListGroup.Item
                    action
                    active={
                        location.pathname === "/dashboard/hotel" ? true : false
                    }
                    href="/dashboard/hotel"
                >
                    <span style={{ marginLeft: "10px" }}>
                        <BuildingFill size={20} />
                    </span>
                    هتل
                </ListGroup.Item>
            </ListGroup>
            <div className="col-12">
                <Button
                    className="w-100"
                    variant="danger"
                    onClick={logoutClickHandler}
                >
                    خروج از پنل مدیریت
                </Button>
            </div>
        </div>
    );
};

export default DashboardMenu;
