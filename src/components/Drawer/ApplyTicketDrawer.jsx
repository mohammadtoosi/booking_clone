"use client";

import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { applyDrawerActions } from "../../redux/slices/apply-drawer";

import Offcanvas from "react-bootstrap/Offcanvas";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { renderDays, renderMonths, renderYears } from "../../utilities/date";

const ApplyTicketDrawer = () => {
    const dispatch = useDispatch();

    const isOpen = useSelector((state) => state.apply.isOpen);

    const closeDrawerHandler = () => {
        dispatch(applyDrawerActions.toggleDrawer());
    };

    return (
        <Offcanvas show={isOpen} onHide={closeDrawerHandler}>
            <Offcanvas.Header>
                <Offcanvas.Title>مرحله نهایی</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="">
                <p>لطفا برای ثبت سفارش فرم زیر را پر کنید.</p>
                <div className="mt-5">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                            <Form>
                                <Form.Control placeholder="نام" />
                            </Form>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                            <Form>
                                <Form.Control placeholder="نام خانوادگی" />
                            </Form>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                            <Form>
                                <Form.Control
                                    placeholder="کد ملی"
                                    type="text"
                                />
                            </Form>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                            <Form>
                                <Form.Select>
                                    <option>مرد</option>
                                    <option>زن</option>
                                </Form.Select>
                            </Form>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <p>تاریخ تولد</p>
                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                            <Form>
                                <Form.Select>{renderDays()}</Form.Select>
                            </Form>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                            <Form>
                                <Form.Select>{renderMonths()}</Form.Select>
                            </Form>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                            <Form>
                                <Form.Select>{renderYears()}</Form.Select>
                            </Form>
                        </div>
                    </div>

                    <div className="mt-5">
                        <Button className="custom-button w-100">
                            تایید و ثبت بلیط
                        </Button>
                        <Button onClick={closeDrawerHandler} variant="warning" className="w-100 mt-2">انصراف</Button>
                    </div>
                </div>
            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default ApplyTicketDrawer;
