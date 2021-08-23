'use strict'

const AutenticadorController = require('../app/Controllers/Http/AutenticadorController');
const ReservaController = require('../app/Controllers/Http/ReservaController');

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post('/cadastro', 'AutenticadorController.store');
Route.post('/login', 'AutenticadorController.authenticate');
//Route.get('/login', 'AutenticadorController.index')//.middleware('auth');
Route.post('/user', 'AutenticadorController.index_token')
Route.get('/login/:id', 'AutenticadorController.show').middleware('auth');
Route.patch('/login/:id','AutenticadorController.update').middleware('auth');
Route.delete('/login/:id','AutenticadorController.delete').middleware('auth');
Route.post('/logout/','AutenticadorController.logout');

Route.resource('reserva', 'ReservaController').middleware('auth').apiOnly();
Route.resource('sala', 'SalaController').middleware('auth').apiOnly();
