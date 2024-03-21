import { createSlice } from "@reduxjs/toolkit";
import { getShipmentDetails } from "../Thunks/TrackShipmentThunk";

const initialState = {
    trackingNo: "",
    shipmentDetails: {},
    isLoading: false,
    error: null,
};

export const TrackShipmentSlice = createSlice({
    name: "trackShipment",
    initialState,
    reducers: {
        setTrackingNo: (state, action) => {
            state.trackingNo = action.payload.trackingNo;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getShipmentDetails.pending, (state) => {
            state.error = null;
            state.isLoading = true;
        });
        builder.addCase(getShipmentDetails.fulfilled, (state, action) => {
            state.error = null;
            state.isLoading = false;
            state.shipmentDetails = action.payload;
        });
        builder.addCase(getShipmentDetails.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});
