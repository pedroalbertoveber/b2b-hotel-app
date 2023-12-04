/**
 * This is a parent class which can only be extended and will provide the basic methods for all entities:
 *
 * @param baseUrl this parameter will be the route to access the entity on api
 * @example url: http://localhost:3000/users; the baseUrl is 'users'
 *
 * @param cachePath: this parameter represents the key of the entity storage on local storage
 */

import { CACHE_PATH } from '@/config/cache'
import { createExpirationDate } from './helpers/create-expiration-date'
import { verifyIfIsExpired } from './helpers/verify-if-is-expired'
import { AxiosRequestConfig } from 'axios'
import { B2BApi } from '@/services/api/B2BApi'
import { makeParams } from './helpers/makeParams'
export abstract class CoreEntity {
  REVALIDATE = 1000 * 60 * 20 // 20 minutes
  private _baseUrl: string
  private _cachePath: string

  constructor({ baseUrl, cachePath }: EntityConstructorProps) {
    this._baseUrl = baseUrl
    this._cachePath = cachePath
  }

  get baseUrl(): string {
    return this._baseUrl
  }

  get cachePath(): string {
    return this._cachePath
  }

  protected _hooks = {}

  CACHE_PATH = CACHE_PATH

  async getHttp({
    method = '',
    config = {},
    params = {},
    forceUpdate = true,
    setCache = true,
    revalidate = this.REVALIDATE,
    cachePath = this.cachePath,
  }: {
    method?: string
    config?: AxiosRequestConfig
    params?: { [key: string]: string | number | boolean }
    forceUpdate?: boolean
    setCache?: boolean
    revalidate?: number
    cachePath?: string
  }) {
    const cachedData = await this.getFromLocalStorage(cachePath)
    if (cachedData && !forceUpdate) return cachedData

    const parameters = makeParams(params)
    const url =
      Object.keys(params).length > 0
        ? `${this.baseUrl}/${method}?${parameters}`
        : `${this.baseUrl}/${method}`
    const { data } = await B2BApi.get(url, config)

    if (setCache) {
      this.setLocalStorage({
        data,
        revalidate,
        key: cachePath,
      })
    }

    return data
  }

  async postHttp({
    method,
    config = {},
    body = {},
    forceUpdate = true,
    setCache = true,
    revalidate = this.REVALIDATE,
    cachePath = this.cachePath,
  }: {
    method?: string
    config?: AxiosRequestConfig
    body?: { [key: string]: any }
    forceUpdate?: boolean
    setCache?: boolean
    revalidate?: number
    cachePath?: string
  }) {
    const cachedData = await this.getFromLocalStorage(cachePath)
    if (cachedData && !forceUpdate) return cachedData

    const url = `${this.baseUrl}/${method}`
    const data = await B2BApi.post(url, body, config)

    if (setCache) {
      this.setLocalStorage({
        data,
        revalidate,
        key: cachePath,
      })
    }

    return data
  }

  async putHttp({
    method,
    config = {},
    body = {},
    forceUpdate = true,
    setCache = true,
    revalidate = this.REVALIDATE,
    cachePath = this.cachePath,
  }: {
    method?: string
    config?: AxiosRequestConfig
    body?: { [key: string]: any }
    forceUpdate?: boolean
    setCache?: boolean
    revalidate?: number
    cachePath?: string
  }) {
    const cachedData = await this.getFromLocalStorage(cachePath)
    if (cachedData && !forceUpdate) return cachedData

    const url = `${this.baseUrl}/${method}`
    const data = await B2BApi.put(url, body, config)

    if (setCache) {
      this.setLocalStorage({
        data,
        revalidate,
        key: cachePath,
      })
    }

    return data
  }

  async deleteHttp({
    method,
    config,
    removeCache = true,
    cachePath = this.cachePath,
  }: {
    method?: string
    config: AxiosRequestConfig
    removeCache?: boolean
    cachePath?: string
  }) {
    const url = `${this.baseUrl}/${method}`
    const data = await B2BApi.delete(url, config)

    if (removeCache) {
      this.removeLocalStorage({ key: cachePath })
    }

    return data
  }

  async getFromLocalStorage<ReturnType = unknown>(storageKey?: string) {
    const key = storageKey || this.cachePath
    const data = localStorage.getItem(key)

    if (!data) {
      return null
    }

    const { data: storedData, expiresIn } = JSON.parse(
      data,
    ) as LocalStorageItemType<ReturnType>
    const isExpired = verifyIfIsExpired(expiresIn)

    if (isExpired) {
      localStorage.removeItem(key)
      return null
    }

    return storedData as ReturnType
  }

  async setLocalStorage({
    data,
    revalidate = this.REVALIDATE,
    key,
  }: SetLocalStorageProps): Promise<void> {
    const expiration = createExpirationDate(revalidate)

    localStorage.setItem(
      key || this.cachePath,
      JSON.stringify({
        expiresIn: expiration,
        data,
      }),
    )
  }

  async removeLocalStorage({ key }: { key?: string }): Promise<void> {
    localStorage.removeItem(key || this.cachePath)
  }
}
