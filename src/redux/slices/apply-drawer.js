import { createSlice } from "@reduxjs/toolkit";

const states = { isOpen: false };

const applyTicketDrawerSlice = createSlice({
    name: "apply-drawer",
    initialState: states,
    reducers: {
        toggleDrawer: (state) => {
            state.isOpen = !state.isOpen;
        },
    },
});

export const applyDrawerActions = applyTicketDrawerSlice.actions;
export default applyTicketDrawerSlice.reducer;
