import { CoreEntity } from '../Core/Core'
import AvailEntityHook from './hooks/AvailEntityHook'
import { HttpMethods } from './methods'

export default class AvailEntity extends CoreEntity {
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

  public hook = AvailEntityHook()
}
