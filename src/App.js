import React from "react";

import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import ProtectedAdminRoute from "./components/ProtectedAdminRoute";

import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import UserAccount from "./pages/UserAccount";
import UserTrip from "./pages/MyTrip";
import Traveler from "./pages/Traveler";
import Search from "./pages/Search";
import InsideFlight from "./pages/InsideFlight";
import OutsideFlight from "./pages/OutsideFlight";
import Train from "./pages/Train";
import Hotels from "./pages/Hotels";
import DashboardLogin from "./pages/Dashboard/auth/DashboardLogIn";
import Dashboard from "./pages/Dashboard/Dashboard";
import FlightDashboard from "./pages/Dashboard/Flight";
import HotelDashboard from "./pages/Dashboard/Hotel";
import TrainDashboard from "./pages/Dashboard/Train";

import "./App.css";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />}>
                    {/* <Route path="*" element={<NoMatch />} /> */}
                </Route>
                <Route path="signin" element={<SignIn />} />
                <Route path="signup" element={<SignUp />} />
                <Route
                    path="user"
                    element={
                        <ProtectedRoute>
                            <UserAccount />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="user/mytrip"
                    element={
                        <ProtectedRoute>
                            <UserTrip />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="user/Traveler"
                    element={
                        <ProtectedRoute>
                            <Traveler />
                        </ProtectedRoute>
                    }
                />
                <Route path="search" element={<Search />} />
                <Route path="inside-flight" element={<InsideFlight />} />
                <Route path="outside-flight" element={<OutsideFlight />} />
                <Route path="train" element={<Train />} />
                <Route path="hotels" element={<Hotels />} />

                {/* dashboard routes */}
                <Route path="dashboard/login" element={<DashboardLogin />} />
                <Route
                    path="dashboard"
                    element={
                        <ProtectedAdminRoute>
                            <Dashboard />
                        </ProtectedAdminRoute>
                    }
                />
                <Route
                    path="dashboard/fly"
                    element={
                        <ProtectedAdminRoute>
                            <FlightDashboard />
                        </ProtectedAdminRoute>
                    }
                />
                <Route
                    path="dashboard/train"
                    element={
                        <ProtectedAdminRoute>
                            <TrainDashboard />
                        </ProtectedAdminRoute>
                    }
                />
                <Route
                    path="dashboard/hotel"
                    element={
                        <ProtectedAdminRoute>
                            <HotelDashboard />
                        </ProtectedAdminRoute>
                    }
                />
            </Routes>
        </>
    );
}

export default App;
