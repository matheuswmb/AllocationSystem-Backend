'use strict'

const { post } = require('@adonisjs/framework/src/Route/Manager')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Reserva = use('App/Models/Reserva')

class ReservaController {

  async index ({ auth }) {
    let user = await auth.getUser();
    if (user.is_admin == true) {
      const busca_dos_index = await Reserva.all();
      return busca_dos_index
    } else { 
      let listar = await Reserva 
        .query()
        .where('id_usuario', user.id)
        .fetch()
        return listar
      }

  }

  async store ({ request, auth }) {
    let user = await auth.getUser();
    console.log(user)
    const data = request.only(['tipo', 'quantidade', 'motivo', 'dataInicio', 'dataFim']);
    console.log(data)
    data['id_usuario'] = user.id
    const reserva_criada = await Reserva.create(data);
    console.log(reserva_criada)

    return reserva_criada;
  }

  async show ({ params, request, response, view }) {
    const listar = await Reserva.findOrFail(params.id)

    return listar
  }

  async show_by_id ({  auth }) {
    let user = await auth.getUser();

    let listar = await Reserva 
      .query()
      .where('id_usuario', user.id)
      .fetch()

    return listar
  }

  async update ({ params, request }) {
    const data = request.only(['tipo', 'quantidade', 'motivo', 'dataInicio', 'dataFim']);
    const post = await Reserva.findOrFail(params.id)

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
