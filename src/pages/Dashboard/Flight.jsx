import React, { useState, useEffect } from "react";

import DashboardLayout from "../../components/Layout/DashboardLayout";
import DashboardMenu from "../../components/Menu/DashboardMenu";

import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";

import { Trash } from "react-bootstrap-icons";

import { flight } from "../../utilities/api-routes";

const Flight = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [code, setCode] = useState("");
    const [name, setName] = useState("");
    const [cityId, setCityId] = useState(1);

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
                `${flight.airport}?page=1&limit=10`,
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

    const newFlightClickHandler = async () => {
        try {
            const token = localStorage.getItem("a_t");
            const options = {
                method: "POST",
                body: JSON.stringify({
                    code: code,
                    name: name,
                    cityId: cityId
                }),
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            };

            const response = await fetch(flight.airport, options);
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
            const response = await fetch(flight.airport + `/${item?.id}`, options);
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
                        <div className="bg-white p-5 rounded shadow-sm">
                            <div className="">
                                <p className="h5">پرواز</p>
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
                                    <th>نام</th>
                                    <th>کد</th>
                                    <th>زمان ساخت</th>
                                    <th>زمان اپدیت</th>
                                    <th>زمان حذف</th>
                                    <th></th>
                                </thead>
                                <tbody className="text-center">
                                    <div className="mt-4"></div>
                                    {data?.data?.map((item) => (
                                        <tr key={item.id}>
                                            <td>{item?.id}</td>
                                            <td>{item?.name}</td>
                                            <td>{item?.code}</td>
                                            <td>{item?.createdAt}</td>
                                            <td>{item?.updatedAt}</td>
                                            <td>{item?.deletedAt ?? "نامشخص"}</td>
                                            <td></td>
                                            <td>
                                                <Button onClick={() => removeClickHandler(item)} variant="danger">
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
                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                    <Form.Group>
                                        <Form.Label>کد</Form.Label>
                                        <Form.Control
                                            type="text"
                                            onChange={(e) =>
                                                setCode(e.target.value)
                                            }
                                            value={code}
                                        />
                                    </Form.Group>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 mb-3">
                                    <Form.Group>
                                        <Form.Label>نام</Form.Label>
                                        <Form.Control
                                            type="text"
                                            onChange={(e) =>
                                                setName(e.target.value)
                                            }
                                            value={name}
                                        />
                                    </Form.Group>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                    <Form.Group>
                                        <Form.Label>کد شهر</Form.Label>
                                        <Form.Control
                                            type="text"
                                            onChange={(e) =>
                                                setCityId(e.target.value)
                                            }
                                            value={cityId}
                                            placeholder="برای مثال ایدی مشهد 1"
                                        />
                                    </Form.Group>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center mt-5">
                                <Button
                                    className="w-100"
                                    variant="success"
                                    onClick={newFlightClickHandler}
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

export default Flight;
