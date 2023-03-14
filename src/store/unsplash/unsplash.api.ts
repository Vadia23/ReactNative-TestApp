import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IResponseApi } from '../../modules/types';

export const unsplashApi = createApi({
  reducerPath: 'unsplash/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.unsplash.com/',
  }),
  endpoints: build => ({
    getPhotos: build.query<IResponseApi[], string>({
      query: (search: string) => ({
        url: `photos/?client_id=${search}`,
      }),
    }),
  }),
});

export const { useGetPhotosQuery } = unsplashApi;
