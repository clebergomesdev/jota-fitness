import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'objective_physical_exercises'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')

      table.boolean('increase_in_muscle_mass').defaultTo(false)
      table.boolean('improved_aerobic_capacity').defaultTo(false)
      table.boolean('health_quality_of_life').defaultTo(false)
      table.boolean('muscle_strengthening').defaultTo(false)
      table.boolean('general_physical_conditioning').defaultTo(false)
      table.boolean('weight_loss').defaultTo(false)

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
