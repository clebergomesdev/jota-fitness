import Route from '@ioc:Adonis/Core/Route'

Route.resource('/users', 'UsersController')
  .apiOnly()
  .middleware({
    index: ['acl:administrator'],
    show: ['acl:administrator,normal'],
    store: ['acl:administrator'],
    update: ['acl:administrator'],
    destroy: ['acl:administrator'],
  })
