import { createSlice } from "@reduxjs/toolkit";

const states = { isOpen: false };

const MobileNavDrawerSlice = createSlice({
    name: "nav-drawer",
    initialState: states,
    reducers: {
        toggleMobileNav: (state) => {
            state.isOpen = !state.isOpen;
        },
    },
});

export const mobileNavDrawerActions = MobileNavDrawerSlice.actions;
export default MobileNavDrawerSlice.reducer;
