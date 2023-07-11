import React from "react";

import {
    Linkedin,
    Instagram,
    Twitter,
    Youtube,
    Telegram,
} from "react-bootstrap-icons";

import logo from "../../assets/air.svg";

import logo1 from "../../assets/trust_logos/1.svg";
import logo2 from "../../assets/trust_logos/2.png";
import logo3 from "../../assets/trust_logos/3.svg";
import logo4 from "../../assets/trust_logos/4.png";
import logo5 from "../../assets/trust_logos/5.png";
import logo6 from "../../assets/trust_logos/6.png";

const Footer = () => {
    return (
        <footer className="bg-white p-5" style={{marginTop: "150px"}}>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <div className="row">
                            <div className="col-4">
                                <p className="bold">
                                    <strong>بلوط</strong>
                                </p>
                                <a
                                    href="/"
                                    className="d-flex flex-1 text-decoration-none text-dark mt-2"
                                >
                                    درباره ما
                                </a>
                                <a
                                    href="/"
                                    className="d-flex flex-1 text-decoration-none text-dark mt-2"
                                >
                                    تماس با ما
                                </a>
                                <a
                                    href="/"
                                    className="d-flex flex-1 text-decoration-none text-dark mt-2"
                                >
                                    چرا بوط
                                </a>
                                <a
                                    href="/"
                                    className="d-flex flex-1 text-decoration-none text-dark mt-2"
                                >
                                    علی بابا پلاس
                                </a>
                                <a
                                    href="/"
                                    className="d-flex flex-1 text-decoration-none text-dark mt-2"
                                >
                                    بیمه مسافرتی
                                </a>
                                <a
                                    href="/"
                                    className="d-flex flex-1 text-decoration-none text-dark mt-2"
                                >
                                    مجله علی بابا
                                </a>
                            </div>
                            <div className="col-4">
                                <p className="bold">
                                    <strong>خدمات مشتریان</strong>
                                </p>
                                <a
                                    href="/"
                                    className="d-flex flex-1 text-decoration-none text-dark mt-2"
                                >
                                    مرکز پشتیبانی انلاین
                                </a>
                                <a
                                    href="/"
                                    className="d-flex flex-1 text-decoration-none text-dark mt-2"
                                >
                                    راهنمای خرید
                                </a>
                                <a
                                    href="/"
                                    className="d-flex flex-1 text-decoration-none text-dark mt-2"
                                >
                                    راهنمای استرداد
                                </a>
                                <a
                                    href="/"
                                    className="d-flex flex-1 text-decoration-none text-dark mt-2"
                                >
                                    قوانین و مقررات
                                </a>
                                <a
                                    href="/"
                                    className="d-flex flex-1 text-decoration-none text-dark mt-2"
                                >
                                    پرسش و پاسخ
                                </a>
                            </div>
                            <div className="col-4">
                                <p className="bold">
                                    <strong>اطلاعات تکمیلی</strong>
                                </p>
                                <a
                                    href="/"
                                    className="d-flex flex-1 text-decoration-none text-dark mt-2"
                                >
                                    باشگاه همسفران
                                </a>
                                <a
                                    href="/"
                                    className="d-flex flex-1 text-decoration-none text-dark mt-2"
                                >
                                    فروش سازمانی
                                </a>
                                <a
                                    href="/"
                                    className="d-flex flex-1 text-decoration-none text-dark mt-2"
                                >
                                    همکاری با اژانس
                                </a>
                                <a
                                    href="/"
                                    className="d-flex flex-1 text-decoration-none text-dark mt-2"
                                >
                                    فرصت های شغلی
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <div className="row">
                            <div className="col-12">
                                <div className="text-start">
                                    <div className="">
                                        <span className="mx-2">Baloot</span>
                                        <img
                                            src={logo}
                                            alt="airbnb logo"
                                            width={50}
                                            height={50}
                                        />
                                    </div>
                                    <div className="mt-3">
                                        <p>تلفن پشتیبانی: ۰۲۱ - ۴۳۹۰۰۰۰۰</p>
                                    </div>
                                    <div className="mt-3">
                                        <p>
                                            دفتر پشتیبانی: اکباتان، نبش اتوبان
                                            لشگری، کوی بیمه، خیابان بیمه چهارم،
                                            بن‌بست گل‌ها، پلاک 1
                                        </p>
                                    </div>
                                    <div className="mt-5">
                                        <img
                                            src={logo1}
                                            alt="logo 1"
                                            className="border rounded p-1 mx-1"
                                            width={80}
                                            height={80}
                                        />
                                        <img
                                            src={logo2}
                                            alt="logo 1"
                                            className="border rounded p-1 mx-1"
                                            width={80}
                                            height={80}
                                        />
                                        <img
                                            src={logo3}
                                            alt="logo 1"
                                            className="border rounded p-1 mx-1"
                                            width={80}
                                            height={80}
                                        />
                                        <img
                                            src={logo4}
                                            alt="logo 1"
                                            className="border rounded p-1 mx-1"
                                            width={80}
                                            height={80}
                                        />
                                        <img
                                            src={logo5}
                                            alt="logo 1"
                                            className="border rounded p-1 mx-1"
                                            width={80}
                                            height={80}
                                        />
                                        <img
                                            src={logo6}
                                            alt="logo 1"
                                            className="border rounded p-1 mx-1"
                                            width={80}
                                            height={80}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="mt-3" />
                    <div className="">
                        <div className="d-flex justify-content-between flex-wrap">
                            <p>
                                کلیه حقوق این سرویس (وب‌سایت و اپلیکیشن‌های
                                موبایل) محفوظ و متعلق به شرکت سفرهای علی‌بابا
                                می‌باشد. (نسخه 1.255.8)
                            </p>
                            <div className="">
                                <Telegram size={25} className="mx-3" />
                                <Youtube size={25} className="mx-3" />
                                <Twitter size={25} className="mx-3" />
                                <Instagram size={25} className="mx-3" />
                                <Linkedin size={25} className="mx-3" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
