import { Auth } from 'aws-amplify'
import axios from 'axios'

export const B2BApi = axios.create({
  baseURL: process.env.VITE_API_CHANNEL,
  responseType: 'json',
})

B2BApi.interceptors.request.use(async (config) => {
  const token = await Auth.currentSession().then((result) => {
    return result.getIdToken().getJwtToken()
  })
  config.headers.Authorization = token
  config.headers['Content-Type'] = 'application/json'

  return config
})

B2BApi.interceptors.response.use(
  (response) => {
    return response
  },

  (error) => {
    const data: any = {
      ...error.response.data.error,
      status: error.response.status,
    }
    return Promise.reject(data)
  },
)
