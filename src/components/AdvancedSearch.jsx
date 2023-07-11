"use client";

import React, { useState } from "react";

import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import cities from "../utilities/iran-cities.json";

const AdvancedSearch = () => {
    const [key, setKey] = useState("air-out");
    const [twoWay, setTwoWay] = useState(false);
    const [simple, setSimple] = useState(false);

    return (
        <>
            <div className="p-5 shadow-sm mt-5 search-body__effect">
                <Tabs
                    id="controlled-tab"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    className="mb-3 tour-card__tabs d-flex"
                    style={{ gap: "10px" }}
                >
                    <Tab
                        className="mt-5"
                        eventKey="air-out"
                        title="پرواز خارجی"
                    >
                        <div className="d-flex ">
                            <Form>
                                <Form.Check
                                    inline
                                    label="یک طرفه"
                                    name="group1"
                                    type="radio"
                                    value={twoWay}
                                    checked={twoWay === false ? true : false}
                                    onChange={(e) => setTwoWay(false)}
                                />
                                <Form.Check
                                    inline
                                    label="دو طرفه"
                                    name="group1"
                                    type="radio"
                                    value={twoWay}
                                    checked={twoWay}
                                    onChange={(e) => setTwoWay(e.target.value)}
                                />
                            </Form>
                        </div>
                        <div className="row mt-2">
                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                <Form.Group>
                                    <Form.Label>از</Form.Label>
                                    <Form.Select>
                                        <option>تهران - ایران</option>
                                        <option>استانبول - ترکیه</option>
                                        <option>دبی - امارات</option>
                                        <option>اتکارا - ترکیه</option>
                                        <option>مسقط - عمان</option>
                                        <option>تبریز - ایران</option>
                                        <option>مشهد - ایران</option>
                                        <option>ترکیه - انتالیا</option>
                                        <option>فرانسه - پاریس</option>
                                        <option>کانادا - ونکوور</option>
                                    </Form.Select>
                                </Form.Group>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                <Form.Group>
                                    <Form.Label>از</Form.Label>
                                    <Form.Select>
                                        <option>تهران - ایران</option>
                                        <option>استانبول - ترکیه</option>
                                        <option>دبی - امارات</option>
                                        <option>اتکارا - ترکیه</option>
                                        <option>مسقط - عمان</option>
                                        <option>تبریز - ایران</option>
                                        <option>مشهد - ایران</option>
                                        <option>ترکیه - انتالیا</option>
                                        <option>فرانسه - پاریس</option>
                                        <option>کانادا - ونکوور</option>
                                    </Form.Select>
                                </Form.Group>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                <Form.Group>
                                    <Form.Label>تاریخ رفت</Form.Label>
                                    <Form.Control type="date" />
                                </Form.Group>
                            </div>
                            {twoWay && (
                                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                    <Form.Group>
                                        <Form.Label>تاریخ برگشت</Form.Label>
                                        <Form.Control type="date" />
                                    </Form.Group>
                                </div>
                            )}
                            <div
                                className={`col-xs-12 col-sm-12 col-md-3 col-lg-3 ${
                                    twoWay ? "mt-3" : ""
                                }`}
                            >
                                <Form.Group>
                                    <Form.Label>تعداد بزرگسال</Form.Label>
                                    <Form.Control type="number" />
                                </Form.Group>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 mt-3">
                                <Form.Group>
                                    <Form.Label>تعداد کودک</Form.Label>
                                    <Form.Control type="number" />
                                </Form.Group>
                            </div>
                        </div>
                        <div className="d-flex justify-content-end mt-5">
                            <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2">
                                <Button className="custom-button w-100">
                                    جستجو
                                </Button>
                            </div>
                        </div>
                    </Tab>
                    <Tab className="mt-5" eventKey="air-in" title="پرواز داخلی">
                        <div className="d-flex ">
                            <Form>
                                <Form.Check
                                    inline
                                    label="یک طرفه"
                                    name="group1"
                                    type="radio"
                                    value={twoWay}
                                    checked={twoWay === false ? true : false}
                                    onChange={(e) => setTwoWay(false)}
                                />
                                <Form.Check
                                    inline
                                    label="دو طرفه"
                                    name="group1"
                                    type="radio"
                                    value={twoWay}
                                    checked={twoWay}
                                    onChange={(e) => setTwoWay(e.target.value)}
                                />
                            </Form>
                        </div>
                        <div className="row mt-2">
                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                <Form.Group>
                                    <Form.Label>از</Form.Label>
                                    <Form.Select>
                                        {cities.map((city) => (
                                            <option
                                                value={city.name}
                                                key={city.id}
                                            >
                                                {city.name}
                                            </option>
                                        ))}
                                    </Form.Select>
                                </Form.Group>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                <Form.Group>
                                    <Form.Label>به</Form.Label>
                                    <Form.Select>
                                        {cities.map((city) => (
                                            <option
                                                value={city.name}
                                                key={city.id}
                                            >
                                                {city.name}
                                            </option>
                                        ))}
                                    </Form.Select>
                                </Form.Group>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                <Form.Group>
                                    <Form.Label>تاریخ رفت</Form.Label>
                                    <Form.Control type="date" />
                                </Form.Group>
                            </div>
                            {twoWay && (
                                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                    <Form.Group>
                                        <Form.Label>تاریخ برگشت</Form.Label>
                                        <Form.Control type="date" />
                                    </Form.Group>
                                </div>
                            )}
                            <div
                                className={`col-xs-12 col-sm-12 col-md-3 col-lg-3 ${
                                    twoWay ? "mt-3" : ""
                                }`}
                            >
                                <Form.Group>
                                    <Form.Label>تعداد بزرگسال</Form.Label>
                                    <Form.Control type="number" />
                                </Form.Group>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 mt-3">
                                <Form.Group>
                                    <Form.Label>تعداد کودک</Form.Label>
                                    <Form.Control type="number" />
                                </Form.Group>
                            </div>
                        </div>
                        <div className="d-flex justify-content-end mt-5">
                            <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2">
                                <Button className="custom-button w-100">
                                    جستجو
                                </Button>
                            </div>
                        </div>
                    </Tab>
                    <Tab
                        className="mt-5"
                        eventKey="hotel-out"
                        title="هتل خارجی"
                    >
                        <div className="row mt-2">
                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                <Form.Group>
                                    <Form.Label>مقصد</Form.Label>
                                    <Form.Select>
                                        <option>تهران - ایران</option>
                                        <option>استانبول - ترکیه</option>
                                        <option>دبی - امارات</option>
                                        <option>اتکارا - ترکیه</option>
                                        <option>مسقط - عمان</option>
                                        <option>تبریز - ایران</option>
                                        <option>مشهد - ایران</option>
                                        <option>ترکیه - انتالیا</option>
                                        <option>فرانسه - پاریس</option>
                                        <option>کانادا - ونکوور</option>
                                    </Form.Select>
                                </Form.Group>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                <Form.Group>
                                    <Form.Label>تاریخ ورود</Form.Label>
                                    <Form.Control type="date" />
                                </Form.Group>
                            </div>
                            {twoWay && (
                                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                    <Form.Group>
                                        <Form.Label>تاریخ خروج</Form.Label>
                                        <Form.Control type="date" />
                                    </Form.Group>
                                </div>
                            )}
                            <div
                                className={`col-xs-12 col-sm-12 col-md-3 col-lg-3 ${
                                    twoWay ? "mt-3" : ""
                                }`}
                            >
                                <Form.Group>
                                    <Form.Label>تعداد بزرگسال</Form.Label>
                                    <Form.Control type="number" />
                                </Form.Group>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                <Form.Group>
                                    <Form.Label>تعداد کودک</Form.Label>
                                    <Form.Control type="number" />
                                </Form.Group>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 mt-3">
                                <Form.Group>
                                    <Form.Label>تعداد اتاق</Form.Label>
                                    <Form.Control type="number" />
                                </Form.Group>
                            </div>
                        </div>
                        <div className="d-flex justify-content-end mt-5">
                            <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2">
                                <Button className="custom-button w-100">
                                    جستجو
                                </Button>
                            </div>
                        </div>
                    </Tab>
                    <Tab className="mt-5" eventKey="hotel-in" title="هتل داخلی">
                        <div className="row mt-2">
                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                <Form.Group>
                                    <Form.Label>مقصد</Form.Label>
                                    <Form.Select>
                                        <option>تهران - ایران</option>
                                        <option>استانبول - ترکیه</option>
                                        <option>دبی - امارات</option>
                                        <option>اتکارا - ترکیه</option>
                                        <option>مسقط - عمان</option>
                                        <option>تبریز - ایران</option>
                                        <option>مشهد - ایران</option>
                                        <option>ترکیه - انتالیا</option>
                                        <option>فرانسه - پاریس</option>
                                        <option>کانادا - ونکوور</option>
                                    </Form.Select>
                                </Form.Group>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                <Form.Group>
                                    <Form.Label>تاریخ ورود</Form.Label>
                                    <Form.Control type="date" />
                                </Form.Group>
                            </div>
                            {twoWay && (
                                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                    <Form.Group>
                                        <Form.Label>تاریخ خروج</Form.Label>
                                        <Form.Control type="date" />
                                    </Form.Group>
                                </div>
                            )}
                            <div
                                className={`col-xs-12 col-sm-12 col-md-3 col-lg-3 ${
                                    twoWay ? "mt-3" : ""
                                }`}
                            >
                                <Form.Group>
                                    <Form.Label>تعداد بزرگسال</Form.Label>
                                    <Form.Control type="number" />
                                </Form.Group>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                <Form.Group>
                                    <Form.Label>تعداد کودک</Form.Label>
                                    <Form.Control type="number" />
                                </Form.Group>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 mt-3">
                                <Form.Group>
                                    <Form.Label>تعداد اتاق</Form.Label>
                                    <Form.Control type="number" />
                                </Form.Group>
                            </div>
                        </div>
                        <div className="d-flex justify-content-end mt-5">
                            <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2">
                                <Button className="custom-button w-100">
                                    جستجو
                                </Button>
                            </div>
                        </div>
                    </Tab>
                    <Tab className="mt-5" eventKey="tour" title="تور">
                        <div className="d-flex ">
                            <Form>
                                <Form.Check
                                    inline
                                    label="پرواز + هتل"
                                    name="group1"
                                    type="radio"
                                    value={simple}
                                    checked={simple === false ? true : false}
                                    onChange={(e) => setSimple(false)}
                                />
                                <Form.Check
                                    inline
                                    label="تور مسافرتی"
                                    name="group1"
                                    type="radio"
                                    value={simple}
                                    checked={simple}
                                    onChange={(e) => setSimple(e.target.value)}
                                />
                            </Form>
                        </div>
                        <div className="row mt-2">
                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                <Form.Group>
                                    <Form.Label>مبدا</Form.Label>
                                    <Form.Select>
                                        <option>تهران - ایران</option>
                                        <option>استانبول - ترکیه</option>
                                        <option>دبی - امارات</option>
                                        <option>اتکارا - ترکیه</option>
                                        <option>مسقط - عمان</option>
                                        <option>تبریز - ایران</option>
                                        <option>مشهد - ایران</option>
                                        <option>ترکیه - انتالیا</option>
                                        <option>فرانسه - پاریس</option>
                                        <option>کانادا - ونکوور</option>
                                    </Form.Select>
                                </Form.Group>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                <Form.Group>
                                    <Form.Label>مقصد</Form.Label>
                                    <Form.Select>
                                        <option>تهران - ایران</option>
                                        <option>استانبول - ترکیه</option>
                                        <option>دبی - امارات</option>
                                        <option>اتکارا - ترکیه</option>
                                        <option>مسقط - عمان</option>
                                        <option>تبریز - ایران</option>
                                        <option>مشهد - ایران</option>
                                        <option>ترکیه - انتالیا</option>
                                        <option>فرانسه - پاریس</option>
                                        <option>کانادا - ونکوور</option>
                                    </Form.Select>
                                </Form.Group>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                <Form.Group>
                                    <Form.Label>تاریخ ورود</Form.Label>
                                    <Form.Control type="date" />
                                </Form.Group>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                <Form.Group>
                                    <Form.Label>تاریخ خروج</Form.Label>
                                    <Form.Control type="date" />
                                </Form.Group>
                            </div>
                            <div
                                className={`col-xs-12 col-sm-12 col-md-3 col-lg-3`}
                            >
                                <Form.Group className="mt-3">
                                    <Form.Label>تعداد بزرگسال</Form.Label>
                                    <Form.Control type="number" />
                                </Form.Group>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 mt-3">
                                <Form.Group>
                                    <Form.Label>تعداد کودک</Form.Label>
                                    <Form.Control type="number" />
                                </Form.Group>
                            </div>
                        </div>
                        <div className="d-flex justify-content-end mt-5">
                            <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2">
                                <Button className="custom-button w-100">
                                    جستجو
                                </Button>
                            </div>
                        </div>
                    </Tab>
                </Tabs>
            </div>
            
        </>
    );
};

export default AdvancedSearch;
