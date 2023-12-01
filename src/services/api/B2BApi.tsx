import { Auth } from 'aws-amplify'
import axios from 'axios'
import '@/config/index'

// TODO Designer para o .env
export const B2BApi = axios.create({
  baseURL:
    'https://i1if65uccd.execute-api.us-west-2.amazonaws.com/homolog/api/hotel/v1',
  responseType: 'json',
})

B2BApi.interceptors.request.use(async (config) => {
  const token = await Auth.currentSession().then((result) => {
    return result.getIdToken().getJwtToken()
  })
  config.headers.Authorization = token
  config.headers['Content-Type'] = 'application/json'

  // cache
  // config.headers["Access-Control-Allow-Origin"] = "*";
  // config.headers["Access-Control-Allow-Methods"] = "GET, PUT, POST, DELETE, OPTIONS";

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

export const B2BApiMock = axios.create({
  baseURL: 'https://private-36ba8-b2breservas.apiary-mock.com',
  responseType: 'json',
})

export const viaCEP = axios.create({
  baseURL: import.meta.env.VITE_VIA_CEP_URL,
  responseType: 'json',
})
