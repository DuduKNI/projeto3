const { Router } = require('express')

const UserController = require('../controllers/UserController')

const routes = Router()

routes.get('/', (req, res) => {
  res.send('Ola Mundo')
})

routes.post('/users', UserController.createUser)
routes.get('/users', UserController.getUsers)

routes.get('/users/:user_id')

routes.post('/login')

routes.post('/movies/:user_id')
routes.get('/movies/:user_id')
routes.patch('movies/:user_id/:movie_id')
routes.delete('/movies/:user_id/:movie_id')

routes.get('/movies')
routes.get('/movies/:movie_id')

module.exports = routes
