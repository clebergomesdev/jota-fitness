import Route from '@ioc:Adonis/Core/Route'

Route.resource('/posts', 'PostsController')
  .apiOnly()
  .middleware({
    index: ['acl:administrator,coach,normal'],
    show: ['acl:administrator,coach,normal'],
    store: ['acl:administrator,coach'],
    update: ['acl:administrator,coach'],
    destroy: ['acl:administrator,coach'],
  })
