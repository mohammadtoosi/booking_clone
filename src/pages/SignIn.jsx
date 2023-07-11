"use client";

import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Layout from "../components/Layout/Layout";
import { colors } from "../components/UI/Colors";

import { ArrowLeftShort } from "react-bootstrap-icons";

import { auth } from "../utilities/api-routes";

import logo from "../assets/air.svg";

const SignIn = () => {
    const navigate = useNavigate();

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [userError, setUserError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const [isValid, setIsValid] = useState(true);

    const submitClickHandler = () => {
        const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

        if (userName === "") {
            setUserError("لطفا ایمیل خود را وارد کنید.");
        }

        if (!userName.match(isValidEmail)) {
            setIsValid(false);
        } else {
            setIsValid(true);
        }

        if (password === "") {
            setPasswordError("لطفا رمز عبور خود را وارد کنید.");
        }

        console.log({
            email: userName,
            password: password,
        });
    };

    // start sending data || request post
    const logInClickHandler = async () => {     // <== look at this, this is where we started
        const options = {
            method: "POST",
            body: JSON.stringify({
                email: userName,
                password: password,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        };

        try {
            const response = await fetch(auth.login, options);
            const data = await response.json();
            console.log(data);
            localStorage.setItem("u_t", data?.token);
            if (response.ok) {
                navigate("/user");
            }
        } catch (err) {
            console.log(err);
        }
    };
    // end fetching

    const CustomButton = styled(Button)`
        background-color: ${colors.primary};
        border: unset;

        &:hover {
            background-color: ${colors.btnHover};
        }

        &.active {
            background-color: ${colors.btnHover};
        }
    `;

    return (
        <Layout>
            <div className="container">
                <div className="row" style={{ height: "90vh" }}>
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 form-body__bg rounded shadow p-5">
                            <div className="">
                                <div
                                    className="d-flex justify-content-between"
                                    style={{ marginTop: "-15px" }}
                                >
                                    <div className="">
                                        <img
                                            src={logo}
                                            alt="airbnb logo"
                                            width={40}
                                            height={40}
                                        />
                                        <span className="mx-2">بلوط</span>
                                    </div>
                                    <div className="mt-1">
                                        <a
                                            href="/"
                                            className="text-decoration-none text-muted"
                                        >
                                            بازگشت
                                            <span>
                                                <ArrowLeftShort />
                                            </span>
                                        </a>
                                    </div>
                                </div>
                                <Form className="mt-5">
                                    <Form.Group className="mb-3">
                                        <Form.Label>
                                            ایمیل خود را وارد کنید
                                        </Form.Label>
                                        <Form.Control
                                            type="email"
                                            placeholder="مثلا: test@gmail.com"
                                            onChange={(e) => {
                                                setUserName(e.target.value);
                                            }}
                                        />
                                        {userName === "" ? (
                                            <Form.Text className="text-danger">
                                                {userError}
                                            </Form.Text>
                                        ) : (
                                            ""
                                        )}
                                        {!isValid && (
                                            <Form.Text className="text-danger">
                                                لطفا ایمیل خود را به درستی وارد
                                                کنید.
                                            </Form.Text>
                                        )}
                                    </Form.Group>
                                    <Form.Group className="">
                                        <Form.Label>رمز عبور</Form.Label>
                                        <Form.Control
                                            type="password"
                                            placeholder=""
                                            onChange={(e) =>
                                                setPassword(e.target.value)
                                            }
                                        />
                                        {password === "" ? (
                                            <Form.Text className="text-danger">
                                                {passwordError}
                                            </Form.Text>
                                        ) : (
                                            ""
                                        )}
                                    </Form.Group>
                                </Form>
                                <div className="col-12 mt-4">
                                    <CustomButton
                                        className="w-100 p-2 sbg-primary"
                                        onClick={logInClickHandler}
                                    >
                                        ورود
                                    </CustomButton>
                                </div>
                                <hr className="mt-4" />
                                <div className="col-12 mt-2">
                                    <a
                                        className="btn btn-success w-100"
                                        href="/signup"
                                    >
                                        ثبت نام
                                    </a>
                                </div>
                                <div className="mt-2 d-none">
                                    <a
                                        href="/"
                                        className="text-decoration-none btn btn-warning w-100"
                                    >
                                        فراموشی رمز عبور
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default SignIn;
