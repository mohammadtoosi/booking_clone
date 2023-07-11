export const base = "http://localhost:3001/api/v1";

export const auth = {
    register: base + "/auth/register",
    login: base + "/auth/login",
    admin: base + "/auth/admin/email/login"
};

export const users = {
    users: base + "/users",
};

export const flight = {
    flights: base + "/Flight",
    airport: base + "/Flight/airport",
    seat: base + "/Flight/seat",
    reserve: base + "/Flight/reserve",
};

export const stations = {
    stations: base + "/stations",
};

export const trains = {
    train: base + "/train",
    order: base + "/train/ordertickets",
    tickets: base + "/train/tickets",
    station: base + "/train/station",
};

export const accommodation = {
    acc: base + "/accommodation",
};

export const rooms = {
    room: "/room",
};

export const booking = {
    booking: base + "/booking",
    reserve: base + "/booking/reserve",
    cancel: base + "/booking/cancel",
};