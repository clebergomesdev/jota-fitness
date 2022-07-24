import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    await User.createMany([
      {
        email: 'normal@normal.com',
        password: 'normal',
        name: 'Normal',
        role: 'normal',
      },
      {
        email: 'admin@admin.com',
        password: 'admin',
        name: 'Administrator',
        role: 'administrator',
      },
    ])
  }
}
