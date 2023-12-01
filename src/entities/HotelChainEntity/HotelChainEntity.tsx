import { CACHE_PATH } from '@/config/cache'
import { CoreEntity } from '../Core/Core'
import HotelChainEntityHook from './hooks/HotelChainEntityHook'
import { HttpMethods } from './methods'

export default class HotelChainEntity extends CoreEntity {
  constructor() {
    super({
      baseUrl: 'hotels-chain',
      cachePath: CACHE_PATH.HOTELS_CHAIN.DEFAULT,
    })
  }

  public getMethods = HttpMethods.GET
  public putMethods = HttpMethods.PUT
  public postMethods = HttpMethods.POST
  public deleteMethods = HttpMethods.DELETE

  public hook = HotelChainEntityHook()

  getRatePolicies = async (hotelChainId: string) => {
    const { data } = await this.getHttp({
      method: `${hotelChainId}/${this.getMethods.ratePolicies}`,
      params: {
        integrateRate: false,
      },
    })

    this.hook.setPolicies(data)
    this.setLocalStorage({
      data,
      key: CACHE_PATH.HOTELS_CHAIN.POLICY,
    })
    return data
  }
}
