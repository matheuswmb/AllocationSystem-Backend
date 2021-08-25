'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('nome', 255).notNullable()
      table.string('email', 254).notNullable().unique()
      table.string('matricula', 10).notNullable().unique()
      table.string('password', 60).notNullable()
      table.boolean('is_admin')
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
