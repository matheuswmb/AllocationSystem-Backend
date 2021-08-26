'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SalaSchema extends Schema {
  up () {
    this.create('salas', (table) => {
      table.increments()
      table.string('tipo_sala', 12).notNullable
      table.string('bloco_num_sala', 4).notNullable()
      table.integer('qtd_alunos').notNullable()
      table.integer('qtd_lousa').notNullable()
      table.integer('qtd_quadro').notNullable()
      table.integer('qtd_projetor').notNullable()
      table.integer('qtd_pc')
      table.integer('qtd_caixa_de_som')
      table.boolean('esta_alocada')
      table.timestamps()
    })
  }

  down () {
    this.drop('salas')
  }
}

module.exports = SalaSchema
