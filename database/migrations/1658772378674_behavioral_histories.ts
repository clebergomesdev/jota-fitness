import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'behavioral_histories'

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

      table.string('exercise_regularly').nullable()
      table.boolean('back_pain_thoracic').defaultTo(false)
      table.boolean('back_pain_low_back').defaultTo(false)
      table.boolean('back_pain_cervical').defaultTo(false)
      table.string('limitation_or_pain').nullable()
      table.string('any_recent_surgery').nullable()
      table.string('use_any_type_of_medication').nullable()
      table.string('have_any_health_problems').nullable()
      table.string('resting_heart_rate').nullable()
      table.string('blood_pressure').nullable()

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
