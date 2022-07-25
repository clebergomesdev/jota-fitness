import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import User from './User'

export default class QuizParQ extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({ serializeAs: null })
  public userId: number

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @column()
  public heart_problem: boolean

  @column()
  public chest_pain_caused_by_exercise: boolean

  @column()
  public had_chest_pain_last_month: boolean

  @column()
  public ever_lost_consciousness_at_any_time: boolean

  @column()
  public have_any_bone_or_joint_problems: boolean

  @column()
  public prescribed_blood_pressure_or_heart_medication: boolean

  @column()
  public prevented_from_exercising: boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
