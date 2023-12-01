import { CoreEntity } from '../Core/Core'
import HotelHook from './hooks/HotelHook'
import { HttpMethods } from './methods'

export default class HotelEntity extends CoreEntity {
  constructor() {
    super({
      baseUrl: 'hotels',
      cachePath: '',
    })
  }

  public getMethods = HttpMethods.GET
  public putMethods = HttpMethods.PUT
  public postMethods = HttpMethods.POST
  public deleteMethods = HttpMethods.DELETE

  public hook = HotelHook()
}
