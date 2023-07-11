"use client";

import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { ticketDetailsActions } from "../../redux/slices/ticket-details";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const TicketDetails = () => {
    const dispatch = useDispatch();
    const isOpen = useSelector((state) => state.ticket.isOpen);

    const closeModalHandler = () => {
        dispatch(ticketDetailsActions.toggleModal());
    };

    return (
        <Modal
            show={isOpen}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    جزییات بلیط
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="d-flex justify-content-between">
                    <p>مبدا</p>
                    <p>مشهد</p>
                </div>
                <div className="d-flex justify-content-between">
                    <p>مقصد</p>
                    <p>تهران</p>
                </div>
                <div className="d-flex justify-content-between">
                    <p>ساعت پرواز</p>
                    <p>۲۲:۲۲</p>
                </div>
                <div className="d-flex justify-content-between">
                    <p>توقف - مقصد</p>
                    <p>۲۳:۲۳</p>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={closeModalHandler}>بستن</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default TicketDetails;
