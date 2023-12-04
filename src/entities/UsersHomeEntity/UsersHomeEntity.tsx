import { CACHE_PATH } from '@/config/cache'
import { CoreEntity } from '../Core/Core'
import UsersHomeEntityHook from './hooks/UsersHomeEntityHook'
import { HttpMethods } from './methods'

export default class UsersHomeEntity extends CoreEntity {
  constructor() {
    super({
      baseUrl: 'users-home',
      cachePath: CACHE_PATH.USERSHOME.DEFAULT,
    })
  }

  public getMethods = HttpMethods.GET
  public putMethods = HttpMethods.PUT
  public postMethods = HttpMethods.POST
  public deleteMethods = HttpMethods.DELETE

  public hook = UsersHomeEntityHook()

  async getUsersHome() {
    const { hotels, hotelsChain }: any = await super.getHttp({
      forceUpdate: true,
    })

    this.hook.setHotels(hotels)
    this.setLocalStorage({
      data: hotels,
      key: CACHE_PATH.USERSHOME.HOTELS,
    })

    this.hook.setHotelsChain(hotelsChain)
    this.setLocalStorage({
      data: hotelsChain,
      key: CACHE_PATH.USERSHOME.HOTELS_CHAIN,
    })
  }
}
