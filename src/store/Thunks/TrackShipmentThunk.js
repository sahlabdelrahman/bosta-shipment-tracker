import { createAsyncThunk } from "@reduxjs/toolkit";

import ApiConfig from "utils/services/API";

import ApiUrlConstants from "utils/services/API/ApiUrlConstants";

export const getShipmentDetails = createAsyncThunk(
    "auth/getShipmentDetails",
    async ({ trackingNo, lang }, { rejectWithValue }) => {
        try {
            const response = await ApiConfig.get(
                `${ApiUrlConstants.trackShipment}/${trackingNo}`,
                {
                    params: {
                        lang,
                    },
                }
            );
            return response.data;
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);
