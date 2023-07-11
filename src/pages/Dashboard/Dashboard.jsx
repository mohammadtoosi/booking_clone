import React, { useState, useEffect } from "react";

import DashboardLayout from "../../components/Layout/DashboardLayout";
import DashboardMenu from "../../components/Menu/DashboardMenu";

import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";

import { Trash } from "react-bootstrap-icons";

import { users } from "../../utilities/api-routes";

const Dashboard = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastName] = useState("");
    const [role, setRole] = useState("");
    const [status, setStatus] = useState("");

    const fetchDataAsync = async () => {
        setLoading(true);
        try {
            const token = localStorage.getItem("a_t");
            const options = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            };

            const response = await fetch(
                `${users.users}?page=1&limit=10`,
                options
            );
            const data = await response.json();
            setData(data);
            console.log(data);
        } catch (err) {
            console.log(err);
        }
        setLoading(false);
    };

    const createUserClickHandler = async () => {
        try {
            const token = localStorage.getItem("a_t");
            const options = {
                method: "POST",
                body: JSON.stringify({
                    email: email,
                    password: password,
                    firstName: firstname,
                    lastName: lastname,
                    role: {
                        id: 1,
                        name: role,
                    },
                    status: {
                        id: 1,
                        name: status,
                    },
                }),
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            };

            const response = await fetch(users.users, options);
            const data = await response.json();
            
            console.log(data);
            window.location.reload();
        } catch (err) {
            console.log(err);
        }
    };

    const removeClickHandler = async (item) => {
        
        try {
            const token = localStorage.getItem("a_t");
            const options = {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            };
            const response = await fetch(users.users + `/${item?.id}`, options);
            const data = await response.json();

            console.log(response);
            console.log(data);

            window.location.reload();
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchDataAsync();
    }, []);

    return (
        <DashboardLayout>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                        <DashboardMenu />
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                        <div className="bg-white p-5 rounded shadow-sm table-responsive">
                            <div className="">
                                <p className="h5">کاربران</p>
                            </div>
                            <div className="d-flex justify-content-center">
                                {loading && (
                                    <Spinner
                                        animation="border"
                                        variant="warning"
                                    />
                                )}
                            </div>
                            <table className="table table-hover mt-5">
                                <thead className="text-center">
                                    <th>#</th>
                                    <th>ایمیل</th>
                                    <th>نام</th>
                                    <th>نام خانوادگی</th>
                                    <th>زمان ساخت</th>
                                    <th>زمان اپدیت</th>
                                    <th>زمان حذف</th>
                                    <th>نقش</th>
                                    <th>وضعیت</th>
                                </thead>
                                <tbody className="text-center">
                                    <div className="mt-4"></div>
                                    {data?.data?.map((item) => (
                                        <tr key={item.id}>
                                            <td>{item?.id}</td>
                                            <td>{item?.email}</td>
                                            <td>{item?.firstName}</td>
                                            <td>{item?.lastName}</td>
                                            <td>{item?.createdAt}</td>
                                            <td>{item?.updatedAt}</td>
                                            <td>
                                                {item?.deletedAt ?? "نامشخص"}
                                            </td>
                                            <td>{item?.role?.name}</td>
                                            <td>{item?.status?.name}</td>
                                            <td>
                                                <Button
                                                    onClick={() =>
                                                        removeClickHandler(item)
                                                    }
                                                    variant="danger"
                                                >
                                                    <Trash />
                                                </Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="bg-white p-5 rounded shadow-sm mt-5">
                            <div className="">
                                <p className="h5">ثبت پرواز</p>
                            </div>
                            <div className="row mt-5">
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 mb-3">
                                        <Form.Group>
                                            <Form.Label>ایمیل</Form.Label>
                                            <Form.Control
                                                type="email"
                                                onChange={(e) =>
                                                    setEmail(e.target.value)
                                                }
                                                value={email}
                                            />
                                        </Form.Group>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 mb-3">
                                        <Form.Group>
                                            <Form.Label>رمز عبور</Form.Label>
                                            <Form.Control
                                                type="password"
                                                onChange={(e) =>
                                                    setPassword(e.target.value)
                                                }
                                                value={password}
                                            />
                                        </Form.Group>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 mb-3">
                                        <Form.Group>
                                            <Form.Label>نام</Form.Label>
                                            <Form.Control
                                                type="text"
                                                onChange={(e) =>
                                                    setFirstname(e.target.value)
                                                }
                                                value={firstname}
                                            />
                                        </Form.Group>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 mb-3">
                                        <Form.Group>
                                            <Form.Label>
                                                نام خانوادگی
                                            </Form.Label>
                                            <Form.Control
                                                type="text"
                                                onChange={(e) =>
                                                    setLastName(e.target.value)
                                                }
                                                value={lastname}
                                            />
                                        </Form.Group>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                        <Form.Group>
                                            <Form.Label>نقش</Form.Label>
                                            <Form.Control
                                                type="text"
                                                onChange={(e) =>
                                                    setRole(e.target.value)
                                                }
                                                value={role}
                                            />
                                        </Form.Group>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                        <Form.Group>
                                            <Form.Label>وضعیت</Form.Label>
                                            <Form.Control
                                                type="text"
                                                onChange={(e) =>
                                                    setStatus(e.target.value)
                                                }
                                                value={status}
                                            />
                                        </Form.Group>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center mt-5">
                                <Button
                                    className="w-100"
                                    variant="success"
                                    onClick={createUserClickHandler}
                                >
                                    ثبت
                                </Button>
                            </div>
                            <div className="">toast for success</div>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Dashboard;
