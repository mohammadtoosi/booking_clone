"use client";

import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Layout from "../components/Layout/Layout";
import { colors } from "../components/UI/Colors";

import { ArrowLeftShort } from "react-bootstrap-icons";

import logo from "../assets/air.svg";

const SignUp = () => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [userError, setUserError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const [isValid, setIsValid] = useState(true);

    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");

    const submitClickHandler = () => {
        const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

        if (userName === "") {
            setUserError("لطفا ایمیل خود را وارد کنید.");
        } else {
            setUserError("");
        }

        if (!userName.match(isValidEmail)) {
            setIsValid(false);
        } else {
            setIsValid(true);
        }

        if (password === "") {
            setPasswordError("لطفا رمز عبور خود را وارد کنید.");
        }

        if (confirmPassword === "") {
            setConfirmPasswordError("تایید رمز عبور");
        }

        if (password !== confirmPassword) {
            setConfirmPasswordError("تایید رمز عبور شما اشتباه است.");
        } else {
            setConfirmPasswordError("");
        }

        console.log({
            email: userName,
            password: password,
        });
    };

    const registerClickHandler = async () => {
        const url = "http://localhost:3001/api/v1/auth/register";
        const options = {
            method: "POST",
            body: JSON.stringify({
                email: userName,
                password: password,
                firstName: firstname,
                lastName: lastname,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        };
        console.log(options);

        try {
            const response = await fetch(url, options);
            
            
            if (response.ok) {
                navigate("/signin");
            }
        } catch (err) {
            console.log(err);
        }
    };

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
                <div
                    className="row"
                    style={{ height: "100vh", marginTop: "80px" }}
                >
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
                                    <Form.Group className="mb-3">
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
                                    <Form.Group className="mb-3">
                                        <Form.Label>تایید رمز عبور</Form.Label>
                                        <Form.Control
                                            type="password"
                                            placeholder=""
                                            onChange={(e) =>
                                                setConfirmPassword(
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <Form.Text className="text-danger">
                                            {confirmPasswordError}
                                        </Form.Text>
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>نام</Form.Label>
                                        <Form.Control
                                            type="text"
                                            onChange={(e) =>
                                                setFirstName(e.target.value)
                                            }
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>نام خانوادگی</Form.Label>
                                        <Form.Control
                                            type="text"
                                            onChange={(e) =>
                                                setLastName(e.target.value)
                                            }
                                        />
                                    </Form.Group>
                                </Form>
                                <div className="col-12 mt-4">
                                    <CustomButton
                                        className="w-100 p-2 sbg-primary"
                                        onClick={registerClickHandler}
                                    >
                                        ثبت نام
                                    </CustomButton>
                                </div>
                                <hr className="mt-4" />
                                <div className="col-12 mt-2">
                                    <a
                                        className="btn btn-success w-100"
                                        href="/signin"
                                    >
                                        ورود
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

export default SignUp;
