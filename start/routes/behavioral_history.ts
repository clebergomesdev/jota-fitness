import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.post('/', 'BehavioralHistoriesController.store').middleware('auth')
  Route.get('/', 'BehavioralHistoriesController.show').middleware('auth')
}).prefix('/histories')
