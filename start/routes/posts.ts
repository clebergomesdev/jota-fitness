import Route from '@ioc:Adonis/Core/Route'

Route.resource('/posts', 'PostsController')
  .apiOnly()
  .middleware({
    index: ['acl:administrator,normal'],
    show: ['acl:administrator,normal'],
    store: ['acl:administrator'],
    update: ['acl:administrator'],
    destroy: ['acl:administrator'],
  })
