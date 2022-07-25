import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.post('/', 'ObjectivesController.store').middleware('auth')
  Route.get('/', 'ObjectivesController.show').middleware('auth')
}).prefix('/objective')
