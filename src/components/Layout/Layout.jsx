import React from "react";

import NavigationBar from "../Header/NavigationBar";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
    return (
        <div>
            <NavigationBar />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;
