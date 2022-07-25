import Route from '@ioc:Adonis/Core/Route'

Route.resource('/users', 'UsersController')
  .apiOnly()
  .middleware({
    index: ['acl:administrator,coach'],
    show: ['acl:administrator,coach,normal'],
    store: ['acl:administrator,coach'],
    update: ['acl:administrator,coach'],
    destroy: ['acl:administrator,coach'],
  })
