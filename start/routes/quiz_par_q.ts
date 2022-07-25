import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.post('/', 'QuizParQController.store').middleware('auth')
  Route.get('/', 'QuizParQController.show').middleware('auth')
}).prefix('/quiz')
