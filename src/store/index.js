import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { TrackShipmentSlice } from "./Slices/TrackShipmentSlice";

const rootReducer = combineReducers({
    trackShipment: TrackShipmentSlice.reducer,
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;

export const { setTrackingNo } = TrackShipmentSlice.actions;
