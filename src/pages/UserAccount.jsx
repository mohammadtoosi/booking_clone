"use client";

import React, { useState, useEffect } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Layout from "../components/Layout/Layout";
import UserAccountMenu from "../components/Menu/UserAccountMenu";

import { users } from "../utilities/api-routes";

const UserAccount = () => {
    const [user, setUser] = useState();

    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");

    const fetchUserData = async () => {
        try {
            const token = localStorage.getItem("u_t");

            const options = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            };

            const response = await fetch(
                "http://localhost:3001/api/v1/auth/me",
                options
            );
            const data = await response.json();
            setUser(data);
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    };

    const editUserInfoClickHandler = async () => {
        try {
            const token = localStorage.getItem("u_t");

            const options = {
                method: "PUT",
                body: JSON.stringify({}),
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            };

            const response = await fetch(users.users + `/${user?.id}`, options);
            const data = await response.json();

            console.log(data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchUserData();
    }, []);

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
                                <p>
                                    <strong>اطلاعات حساب کاربری</strong>
                                </p>
                            </div>
                            <div className="row mt-5">
                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 mb-4">
                                    <Form.Group>
                                        <Form.Label>نام</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder={user?.firstName}
                                        />
                                    </Form.Group>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                    <Form.Group>
                                        <Form.Label>نام خانوادگی</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder={user?.lastName}
                                        />
                                    </Form.Group>
                                </div>
                            </div>
                            <div className="mt-4">
                                <div className="col-12">
                                    <Form.Group>
                                        <Form.Label>ایمیل</Form.Label>
                                        <Form.Control placeholder={user?.email} />
                                    </Form.Group>
                                </div>
                            </div>
                            <div className="text-start mt-5">
                                <Button className="custom-button p-2">
                                    ثبت تغییرات
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default UserAccount;
