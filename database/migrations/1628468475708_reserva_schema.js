'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ReservaSchema extends Schema {
  up () {
    this.create('reservas', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('reservas')
  }
}

module.exports = ReservaSchema
