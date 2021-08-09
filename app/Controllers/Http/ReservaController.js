'use strict'

const { post } = require('@adonisjs/framework/src/Route/Manager')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Reserva = use('App/Models/Reserva')

/**
 * Resourceful controller for interacting with reservas
 */
class ReservaController {
  /**
   * Show a list of all reservas.
   * GET reservas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index () {
    const busca_dos_index = await Reserva.all();

    return busca_dos_index
  }

  /**
   * Create/save a new reserva.
   * POST reservas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request }) {
    const data = request.only(['tipo', 'qtdPessoas', 'motivo', 'data', 'hora_inicio', 'hora_fim']);
    const reserva_criada = await Reserva.create(data);

    return reserva_criada;
  }

  /**
   * Display a single reserva.
   * GET reservas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const listar = await Reserva.find(params.id)

    return listar
  }

  /**
   * Update reserva details.
   * PUT or PATCH reservas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request }) {
    const data = request.only(['tipo', 'qtdPessoas', 'motivo', 'data', 'hora_inicio', 'hora_fim']);
    const post = await Reserva.find(params.id)

    post.merge(data)

    await post.save()

    return post
  }

  /**
   * Delete a reserva with id.
   * DELETE reservas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params }) {
    const post = await Reserva.find(params.id)

    await post.delete()
  }
}

module.exports = ReservaController
