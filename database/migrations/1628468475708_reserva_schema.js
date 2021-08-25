'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ReservaSchema extends Schema {
  up () {
    this.create('reservas', (table) => {
      table.increments()
      table.string('tipo', 15).notNullable()
      table.integer('quantidade').notNullable()
      table.text('motivo').notNullable()
      table.datetime('dataInicio').notNullable()
      table.datetime('dataFim').notNullable()
      table.integer('id_usuario').notNullable()
      table.timestamps() 
    })
  }

  down () {
    this.drop('reservas')
  }
}

module.exports = ReservaSchema
