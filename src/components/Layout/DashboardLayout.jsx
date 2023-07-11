import React from "react";

import DashboardNavigation from "../Header/DashboardNavigation";

const DashboardLayout = ({ children }) => {
    return (
        <div>
            <DashboardNavigation />
            {children}
        </div>
    );
};

export default DashboardLayout;
