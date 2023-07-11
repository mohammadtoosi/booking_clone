import React, { useState, useEffect } from "react";

import DashboardLayout from "../../components/Layout/DashboardLayout";
import DashboardMenu from "../../components/Menu/DashboardMenu";

import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";

import { Trash } from "react-bootstrap-icons";

import { accommodation } from "../../utilities/api-routes";

const Flight = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const [title, setTitle] = useState("");
    const [type, setType] = useState("HOTEL");
    const [desc, setDesk] = useState("");
    const [amenities, setAmenities] = useState("");
    const [cityId, setCityId] = useState("");
    const [bedrooms, setBedrooms] = useState("");
    const [bathrooms, setBathrooms] = useState("");
    const [max, setMax] = useState(1);
    const [rating, setRating] = useState(5);

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
                `${accommodation.acc}?page=1&limit=10`,
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
                    title: title,
                    type: type,
                    description: desc,
                    amenities: amenities,
                    cityId: cityId,
                    bedrooms: bedrooms,
                    bathrooms: bathrooms,
                    maxGuest: 1,
                    rating: rating,
                }),
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            };

            const response = await fetch(accommodation.acc, options);
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
            const response = await fetch(accommodation.acc + `/${item?.id}`, options);
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
                                <p className="h5">هتل</p>
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
                                    <th>عنوان</th>
                                    <th>مدل</th>
                                    <th>توضیحات</th>
                                    <th>امکانات</th>
                                    <th>حداکثر مهمان</th>
                                    <th>اتاق</th>
                                    <th>سرویس بهداشتی</th>
                                    <th>امتیاز</th>
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
                                            <td>{item?.title}</td>
                                            <td>{item?.type}</td>
                                            <td>{item?.description}</td>
                                            <td>
                                                {item?.amenities ?? "نامشخص"}
                                            </td>
                                            <td>{item?.maxGuest}</td>
                                            <td>
                                                {item?.bedrooms ?? "نامشخص"}
                                            </td>
                                            <td>
                                                {item?.bathrooms ?? "نامشخص"}
                                            </td>
                                            <td>{item?.rating}</td>
                                            <td>{item?.createdAt}</td>
                                            <td>{item?.updatedAt}</td>
                                            <td>
                                                {item?.deletedAt ?? "نامشخص"}
                                            </td>
                                            <td></td>
                                            <td>
                                                <Button variant="danger" onClick={() => removeClickHandler(item)}>
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
                                <p className="h5">ثبت هتل</p>
                            </div>
                            <div className="row mt-5">
                                <div className="col-x-12 col-sm-12 col-md-6 col-lg-6">
                                    <Form.Group>
                                        <Form.Label>عنوان</Form.Label>
                                        <Form.Control
                                            type="text"
                                            onChange={(e) =>
                                                setTitle(e.target.value)
                                            }
                                            value={title}
                                        />
                                    </Form.Group>
                                </div>
                                <div className="col-x-12 col-sm-12 col-md-6 col-lg-6">
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
                            </div>
                            <div className="row mt-5">
                                <div className="col-x-12 col-sm-12 col-md-6 col-lg-6">
                                    <Form.Group>
                                        <Form.Label>توضیحات</Form.Label>
                                        <Form.Control
                                            type="text"
                                            onChange={(e) =>
                                                setDesk(e.target.value)
                                            }
                                        />
                                    </Form.Group>
                                </div>
                                <div className="col-x-12 col-sm-12 col-md-6 col-lg-6">
                                    <Form.Group>
                                        <Form.Label>امکانات</Form.Label>
                                        <Form.Control
                                            type="text"
                                            onChange={(e) =>
                                                setAmenities(e.target.value)
                                            }
                                            value={amenities}
                                        />
                                    </Form.Group>
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="col-x-12 col-sm-12 col-md-6 col-lg-6">
                                    <Form.Group>
                                        <Form.Label>ایدی شهر</Form.Label>
                                        <Form.Control
                                            type="text"
                                            onChange={(e) =>
                                                setCityId(e.target.value)
                                            }
                                            value={cityId}
                                        />
                                    </Form.Group>
                                </div>
                                <div className="col-x-12 col-sm-12 col-md-6 col-lg-6">
                                    <Form.Group>
                                        <Form.Label>اتاق</Form.Label>
                                        <Form.Control
                                            type="text"
                                            onChange={(e) =>
                                                setBedrooms(e.target.value)
                                            }
                                            value={bedrooms}
                                        />
                                    </Form.Group>
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="col-x-12 col-sm-12 col-md-6 col-lg-6">
                                    <Form.Group>
                                        <Form.Label>سرویس بهداشتی</Form.Label>
                                        <Form.Control
                                            type="text"
                                            onChange={(e) =>
                                                setBathrooms(e.target.value)
                                            }
                                            value={bathrooms}
                                        />
                                    </Form.Group>
                                </div>
                                <div className="col-x-12 col-sm-12 col-md-6 col-lg-6">
                                    <Form.Group>
                                        <Form.Label>تعداد مهمان</Form.Label>
                                        <Form.Control
                                            type="text"
                                            onChange={(e) =>
                                                setMax(e.target.value)
                                            }
                                            value={max}
                                        />
                                    </Form.Group>
                                </div>
                            </div>
                            <div className="row">
                                <Form.Group>
                                    <Form.Label>امتیاز</Form.Label>
                                    <Form.Control
                                        type="text"
                                        onChange={(e) =>
                                            setRating(e.target.value)
                                        }
                                    />
                                </Form.Group>
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

export default Flight;
