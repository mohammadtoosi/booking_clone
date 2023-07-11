import React, { useState, useEffect } from "react";

import DashboardLayout from "../../components/Layout/DashboardLayout";
import DashboardMenu from "../../components/Menu/DashboardMenu";

import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";

import { Trash } from "react-bootstrap-icons";

import { trains } from "../../utilities/api-routes";

const Train = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const [name, setName] = useState("");
    const [type, setType] = useState("MONORAIL");
    const [capacity, setCapacity] = useState("");

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
                `${trains.train}?page=1&limit=10`,
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

    const newHotelClickHandler = async () => {
        try {
            const token = localStorage.getItem("a_t");
            const options = {
                method: "POST",
                body: JSON.stringify({
                    name: name,
                    type: type,
                    capacity: capacity,
                }),
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            };

            const response = await fetch(trains.train, options);
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
            const response = await fetch(
                trains.train + `/${item?.id}`,
                options
            );
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
                                    <th>مدل</th>
                                    <th>ظرفیت</th>
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
                                            <td>{item?.type}</td>
                                            <td>{item?.capacity}</td>
                                            <td>{item?.createdAt}</td>
                                            <td>{item?.updatedAt}</td>
                                            <td>
                                                {item?.deletedAt ?? "نامشخص"}
                                            </td>
                                            <td></td>
                                            <td>
                                                <Button
                                                    variant="danger"
                                                    onClick={() =>
                                                        removeClickHandler(item)
                                                    }
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
                                <p className="h5">ثبت قطار</p>
                            </div>
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
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
                                        <Form.Label>مدل</Form.Label>
                                        <Form.Control
                                            type="text"
                                            onChange={(e) =>
                                                setType(e.target.value)
                                            }
                                            value={type}
                                        />
                                    </Form.Group>
                                </div>
                                <div className="col-12 mt-3">
                                    <Form.Group>
                                        <Form.Label>ظرفیت</Form.Label>
                                        <Form.Control
                                            type="text"
                                            onChange={(e) =>
                                                setCapacity(e.target.value)
                                            }
                                            value={capacity}
                                        />
                                    </Form.Group>
                                </div>
                            </div>

                            <div className="d-flex justify-content-center mt-5">
                                <Button
                                    className="w-100"
                                    variant="success"
                                    onClick={newHotelClickHandler}
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

export default Train;
