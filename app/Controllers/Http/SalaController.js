'use strict'

const { post } = require('@adonisjs/framework/src/Route/Manager')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Sala = use('App/Models/Sala')

class SalaController {

  async index () {
    const busca_dos_index = await Sala.all();

    return busca_dos_index
  }

  async store ({ request }) {
    const data = request.only(['tipo_sala', 'bloco_num_sala', 'qtd_alunos', 'qtd_lousa', 'qtd_quadro', 'qtd_projetor', 'qtd_pc', 'qtd_caixa_de_som', 'esta_alocada']);
    const sala_criada = await Sala.create(data);

    return sala_criada;
  }

  async show ({ params, request, response, view }) {
    const listar = await Sala.find(params.id)

    return listar
  }

  async update ({ params, request }) {
    const data = request.only(['tipo_sala', 'bloco_num_sala', 'qtd_alunos', 'qtd_lousa', 'qtd_quadro', 'qtd_projetor', 'qtd_pc', 'qtd_caixa_de_som', 'esta_alocada']);
    const post = await Sala.find(params.id)

    post.merge(data)

    await post.save()

    return post
  }

  async destroy ({ params }) {
    const post = await Sala.find(params.id)

    await post.delete()
  }
}

module.exports = SalaController
