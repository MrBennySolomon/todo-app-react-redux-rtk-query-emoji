import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const emojiApi = createApi({
    reducerPath: "emojiApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://emojihub.yurace.pro/api/" }),
    endpoints: (builder) => ({
        getEmoji: builder.query({
            query: () => "random/group/face-positive",
        }),
    }),
});

export const { useGetEmojiQuery } = emojiApi;
