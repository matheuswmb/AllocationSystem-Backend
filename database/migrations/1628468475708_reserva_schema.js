'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ReservaSchema extends Schema {
  up () {
    this.create('reservas', (table) => {
      table.increments()
      table.string('tipo', 15).notNullable()
      table.integer('qtdPessoas').notNullable()
      table.text('motivo').notNullable()
      table.date('data').notNullable()
      table.time('hora_inicio').notNullable()
      table.time('hora_fim').notNullable()
      table.timestamps() 
    })
  }

  down () {
    this.drop('reservas')
  }
}

module.exports = ReservaSchema
