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

Route.post('/cadastro', 'AutenticadorController.store').apiOnly;
Route.post('/login', 'AutenticadorController.authenticate').apiOnly;
Route.get('/users', 'AutenticadorController.index').apiOnly//.middleware('auth');
Route.post('/user', 'AutenticadorController.index_token').apiOnly//.middleware('auth');
Route.get('/login/:id', 'AutenticadorController.show').apiOnly//.middleware('auth');
Route.patch('/login/admin/:id','AutenticadorController.update_admin').apiOnly;
Route.patch('/login/:id','AutenticadorController.update').apiOnly//.middleware('auth');
Route.delete('/login/:id','AutenticadorController.delete').apiOnly//.middleware('auth');
Route.post('/logout/','AutenticadorController.logout').apiOnly;

Route.post('/reserva/show', 'ReservaController.show_by_id').apiOnly//.middleware('auth');

Route.resource('reserva', 'ReservaController').apiOnly;//.middleware('auth').apiOnly();
Route.resource('sala', 'SalaController').apiOnly;//.middleware('auth').apiOnly();
