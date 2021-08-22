'use strict'

const { post } = require('@adonisjs/framework/src/Route/Manager')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Reserva = use('App/Models/Reserva')

class ReservaController {

  async index () {
    const busca_dos_index = await Reserva.all();

    return busca_dos_index
  }

  async store ({ request }) {
    const data = request.only(['tipo', 'quantidade', 'motivo', 'dataInicio', 'dataFim']);
    const reserva_criada = await Reserva.create(data);

    return reserva_criada;
  }

  async show ({ params, request, response, view }) {
    const listar = await Reserva.find(params.id)

    return listar
  }

  async update ({ params, request }) {
    const data = request.only(['tipo', 'quantidade', 'motivo', 'dataInicio', 'dataFim']);
    const post = await Reserva.find(params.id)

    post.merge(data)

    await post.save()

    return post
  }

  async destroy ({ params }) {
    const post = await Reserva.find(params.id)

    await post.delete()
  }
}

module.exports = ReservaController
