import { createSlice } from "@reduxjs/toolkit";

const states = { isOpen: false };

const ticketDetailsSlice = createSlice({
    name: "ticket-details",
    initialState: states,
    reducers: {
        toggleModal: (state) => {
            state.isOpen = !state.isOpen;
        },
    },
});

export const ticketDetailsActions = ticketDetailsSlice.actions
export default ticketDetailsSlice.reducer