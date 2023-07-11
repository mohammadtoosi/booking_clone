import React from "react";

import Layout from "../components/Layout/Layout";
import UserAccountMenu from "../components/Menu/UserAccountMenu";

import Button from "react-bootstrap/Button";
import { Trash, Pencil } from "react-bootstrap-icons";

const MyTrip = () => {
    return (
        <Layout>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                        <UserAccountMenu />
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                        <div className="bg-white p-5 rounded shadow-sm">
                            <div className="">
                                <p className="h5">
                                    <strong>لیست مسافران</strong>
                                </p>
                            </div>
                            <div className="table-responsive">
                                <table className="table table-hover mt-5">
                                    <thead className="text-center">
                                        <th>نام و نام خانوادگی</th>
                                        <th>جنسیت</th>
                                        <th>کد ملی</th>
                                        <th>تاریخ تولد</th>
                                        <th>شماره پاسپورت</th>
                                        <th></th>
                                        <th></th>
                                    </thead>
                                    <tbody className="text-center">
                                        <div className="mt-4"></div>
                                        <tr>
                                            <td>نام و نام خانوادگی شما</td>
                                            <td>مرد</td>
                                            <td>۰۹۵۸۸۸۸۸۸۸</td>
                                            <td>۱۳۰۰</td>
                                            <td>۱۲۴۲۴۲۴۲</td>
                                            <td>
                                                <Button variant="primary">
                                                    <Pencil />
                                                </Button>
                                            </td>
                                            <td>
                                                <Button variant="danger">
                                                    <Trash />
                                                </Button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>نام و نام خانوادگی شما</td>
                                            <td>زن</td>
                                            <td>۰۹۵۸۸۸۸۸۸۸</td>
                                            <td>۱۳۰۰</td>
                                            <td>۱۲۴۲۴۲۴۲</td>
                                            <td>
                                                <Button variant="primary">
                                                    <Pencil />
                                                </Button>
                                            </td>
                                            <td>
                                                <Button variant="danger">
                                                    <Trash />
                                                </Button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>نام و نام خانوادگی شما</td>
                                            <td>مرد</td>
                                            <td>۰۹۵۸۸۸۸۸۸۸</td>
                                            <td>۱۳۰۰</td>
                                            <td>۱۲۴۲۴۲۴۲</td>
                                            <td>
                                                <Button variant="primary">
                                                    <Pencil />
                                                </Button>
                                            </td>
                                            <td>
                                                <Button variant="danger">
                                                    <Trash />
                                                </Button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>نام و نام خانوادگی شما</td>
                                            <td>زن</td>
                                            <td>۰۹۵۸۸۸۸۸۸۸</td>
                                            <td>۱۳۰۰</td>
                                            <td>۱۲۴۲۴۲۴۲</td>
                                            <td>
                                                <Button variant="primary">
                                                    <Pencil />
                                                </Button>
                                            </td>
                                            <td>
                                                <Button variant="danger">
                                                    <Trash />
                                                </Button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>نام و نام خانوادگی شما</td>
                                            <td>مرد</td>
                                            <td>۰۹۵۸۸۸۸۸۸۸</td>
                                            <td>۱۳۰۰</td>
                                            <td>۱۲۴۲۴۲۴۲</td>
                                            <td>
                                                <Button variant="primary">
                                                    <Pencil />
                                                </Button>
                                            </td>
                                            <td>
                                                <Button variant="danger">
                                                    <Trash />
                                                </Button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default MyTrip;
