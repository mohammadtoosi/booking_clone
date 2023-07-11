"use client";

import React from "react";

import { useDispatch } from "react-redux";
import { ticketDetailsActions } from "../../redux/slices/ticket-details";
import { applyDrawerActions } from "../../redux/slices/apply-drawer";

import { Airplane } from "react-bootstrap-icons";
import Button from "react-bootstrap/Button";

const TicketCard = ({ image, title, tags, price }) => {
    const dispatch = useDispatch();

    const toggleModalHandler = () => {
        dispatch(ticketDetailsActions.toggleModal());
    };

    const toggleApplyTicketDrawer = () => {
        dispatch(applyDrawerActions.toggleDrawer());
    };

    return (
        <>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img
                            src={image}
                            className="img-fluid rounded-start h-100"
                            alt="ticket img"
                        />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            {/* price */}
                            {/* button for more information */}
                            {/* button for last apply */}
                            <p className="card-title h6">
                                <div className="">
                                    <span className="badge bg-light text-dark mx-1">
                                        سیستمی
                                    </span>
                                    <span className="badge bg-light text-dark mx-1">
                                        اکونومی
                                    </span>
                                    <span className="badge bg-light text-dark mx-1">
                                        Fokker 100
                                    </span>
                                </div>
                            </p>
                            <p className="card-title h5 mt-3">
                                <span className="mx-2">
                                    <Airplane className="h6" />
                                </span>
                                {title}
                            </p>
                            <div className="text-start">
                                <p className="text-info">
                                    <span>{price}</span> تومان
                                </p>
                            </div>
                            <div className="d-flex justify-content-end">
                                <Button
                                    variant="warning"
                                    onClick={toggleModalHandler}
                                >
                                    جزییات
                                </Button>
                                <Button
                                    className="custom-button mx-2"
                                    onClick={toggleApplyTicketDrawer}
                                >
                                    انتخاب بلیط
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TicketCard;
