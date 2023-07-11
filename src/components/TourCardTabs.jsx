"use client";

import React, { useState } from "react";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import TourCard from "./Card/TourCard";

import tourImg1 from "../assets/tour/1.webp";
import tourImg2 from "../assets/tour/2.webp";
import tourImg3 from "../assets/tour/3.webp";
import tourImg4 from "../assets/tour/4.webp";
import tourImg5 from "../assets/tour/5.webp";
import tourImg6 from "../assets/tour/6.webp";
import tourImg7 from "../assets/tour/7.webp";
import tourImg8 from "../assets/tour/8.webp";
import tourImg9 from "../assets/tour/9.webp";

const TourCardTabs = () => {
    const [key, setKey] = useState("inside");

    return (
        <div className="overflow-x-auto">
            <Tabs
                id="controlled-tab"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3 tour-card__tabs d-flex justify-content-center mt-4"
            >
                <Tab className="" eventKey="inside" title="داخلی">
                    <div className="d-flex">
                        <div className="col-lg-2">
                            <TourCard image={tourImg1}>تور مشهد</TourCard>
                        </div>
                        <div className="col-lg-2">
                            <TourCard image={tourImg2}>تور چابهار</TourCard>
                        </div>
                        <div className="col-lg-2">
                            <TourCard image={tourImg3}>تور کیش</TourCard>
                        </div>
                        <div className="col-lg-2">
                            <TourCard image={tourImg4}>تور قشم</TourCard>
                        </div>
                        <div className="col-lg-2">
                            <TourCard image={tourImg5}>تور رشت</TourCard>
                        </div>
                        <div className="col-lg-2">
                            <TourCard image={tourImg6}>تور اصفهان</TourCard>
                        </div>
                    </div>
                </Tab>
                <Tab className="" eventKey="outside" title="خارجی">
                    <div className="d-flex">
                        <div className="col-lg-2">
                            <TourCard image={tourImg7}>تور مشهد</TourCard>
                        </div>
                        <div className="col-lg-2">
                            <TourCard image={tourImg8}>تور چابهار</TourCard>
                        </div>
                        <div className="col-lg-2">
                            <TourCard image={tourImg9}>تور کیش</TourCard>
                        </div>
                    </div>
                </Tab>
            </Tabs>
        </div>
    );
};

export default TourCardTabs;
