import { configureStore } from "@reduxjs/toolkit";

import TicketDetailsReducer from "./slices/ticket-details"
import ApplyDrawerReducer from "./slices/apply-drawer"
import MobileNavDrawerReducer from "./slices/nav-drawer";

// configure store
const store = configureStore({
    reducer: {
        ticket: TicketDetailsReducer,
        apply: ApplyDrawerReducer,
        nav: MobileNavDrawerReducer
    },
});

export default store;
