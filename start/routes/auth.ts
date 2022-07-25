import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.post('/', 'AuthController.store')
  Route.get('/me', 'AuthController.show').middleware('auth')
  Route.delete('/', 'AuthController.destroy').middleware('auth')
}).prefix('/auth')
