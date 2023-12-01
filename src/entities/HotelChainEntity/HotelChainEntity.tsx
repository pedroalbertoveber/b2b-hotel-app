import { CoreEntity } from '../Core/Core'
import HotelChainEntityHook from './hooks/HotelChainEntityHook'
import { HttpMethods } from './methods'

export default class HotelChainEntity extends CoreEntity {
  constructor() {
    super({
      baseUrl: '',
      cachePath: '',
    })
  }

  public getMethods = HttpMethods.GET
  public putMethods = HttpMethods.PUT
  public postMethods = HttpMethods.POST
  public deleteMethods = HttpMethods.DELETE

  public hook = HotelChainEntityHook()
}
