import React, { useState, useEffect } from "react";

import Layout from "../components/Layout/Layout";
import FilterMenu from "../components/Menu/FilterMenu";
import TicketCard from "../components/Card/TicketCard";
import TicketDetailsModal from "../components/Modal/TicketDetailsModal";
import ApplyTicketDrawer from "../components/Drawer/ApplyTicketDrawer";

import Spinner from "react-bootstrap/Spinner";

import image1 from "../assets/city/5.jpg";

import { flight } from "../utilities/api-routes";

const OutsideFlight = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchInsideFlightAsync = async () => {
        setLoading(true);
        try {
            const token = localStorage.getItem("u_t");
            const options = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            };

            const response = await fetch(flight.airport, options);
            const data = await response.json();
            setData(data);
            console.log(data);
        } catch (err) {
            console.log(err);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchInsideFlightAsync();
    }, []);

    return (
        <Layout>
            <TicketDetailsModal />
            <ApplyTicketDrawer />
            <div className="container">
                <div className="row mt-5">
                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                        <FilterMenu />
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                        <div className="d-flex justify-content-center">
                            {loading && (
                                <Spinner animation="border" variant="warning" />
                            )}
                        </div>
                        {data?.data?.map((item) => (
                            <div key={item?.id}>
                                <TicketCard
                                    image={image1}
                                    title={item.name}
                                    price="2,000,000"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default OutsideFlight;
