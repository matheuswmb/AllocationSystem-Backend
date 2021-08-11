'use strict'

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

Route.resource('usuario', 'AutenticadorController').apiOnly();
Route.post('/autenticar', 'AutenticadorController.authenticate');
Route.resource('reserva', 'ReservaController').apiOnly();