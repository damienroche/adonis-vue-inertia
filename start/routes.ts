/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
router
  .on('/')
  .renderInertia('home', {
    title: 'Home',
  })
  .as('home')
router
  .on('/dashboard')
  .renderInertia('dashboard', {
    title: 'Dashboard',
  })
  .as('dashboard')
