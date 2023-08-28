import { ApplicationContract } from '@ioc:Adonis/Core/Application'

export default class MenuProvider {
  constructor(protected app: ApplicationContract) {}

  public register() {
    this.app.container.bind('Addonis/Addons/Menu', () => {
      //
    })
  }
}
