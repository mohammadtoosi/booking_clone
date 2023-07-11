import React from "react";

import Layout from "../components/Layout/Layout";
import FilterMenu from "../components/Menu/FilterMenu";
import TicketCard from "../components/Card/TicketCard";
import TicketDetailsModal from "../components/Modal/TicketDetailsModal";
import ApplyTicketDrawer from "../components/Drawer/ApplyTicketDrawer";

import image1 from "../assets/city/5.jpg";

const Search = () => {
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
                        <TicketCard
                            image={image1}
                            title="مشهد - تهران"
                            price="2,000,000"
                        />
                        <TicketCard
                            image={image1}
                            title="مشهد - تهران"
                            price="2,000,000"
                        />
                        <TicketCard
                            image={image1}
                            title="مشهد - تهران"
                            price="2,000,000"
                        />
                        <TicketCard
                            image={image1}
                            title="مشهد - تهران"
                            price="2,000,000"
                        />
                        <TicketCard
                            image={image1}
                            title="مشهد - تهران"
                            price="2,000,000"
                        />
                        <TicketCard
                            image={image1}
                            title="مشهد - تهران"
                            price="2,000,000"
                        />
                        <TicketCard
                            image={image1}
                            title="مشهد - تهران"
                            price="2,000,000"
                        />
                        <TicketCard
                            image={image1}
                            title="مشهد - تهران"
                            price="2,000,000"
                        />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Search;
