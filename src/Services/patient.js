import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const patientApi = createApi({
  reducerPath: 'patientApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://61d11b0ccd2ee50017cc9991.mockapi.io/api/list/navitas' }),
  endpoints: (builder) => ({
    getPatientByID: builder.query({
        query: (id) => `${id}`
    })
  }),
})

export const { useGetPatientByIDQuery } = patientApi