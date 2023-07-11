import React from "react";

import Alert from "react-bootstrap/Alert";

import Layout from "../components/Layout/Layout";
import UserAccountMenu from "../components/Menu/UserAccountMenu";

const MyTrip = () => {
    return (
        <Layout>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                        <UserAccountMenu />
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                        <Alert variant="info">
                            متاسفانه سفارشی برای شما تا به حال ثبت نگردیده است
                        </Alert>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default MyTrip;
