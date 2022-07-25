import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'quiz_par_qs'

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

      table.boolean('heart_problem').defaultTo(false)
      table.boolean('chest_pain_caused_by_exercise').defaultTo(false)
      table.boolean('had_chest_pain_last_month').defaultTo(false)
      table.boolean('ever_lost_consciousness_at_any_time').defaultTo(false)
      table.boolean('have_any_bone_or_joint_problems').defaultTo(false)
      table.boolean('prescribed_blood_pressure_or_heart_medication').defaultTo(false)
      table.boolean('prevented_from_exercising').defaultTo(false)

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
