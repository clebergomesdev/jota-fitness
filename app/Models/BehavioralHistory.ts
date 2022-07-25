import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import User from './User'

export default class BehavioralHistory extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({ serializeAs: null })
  public userId: number

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @column()
  public exercise_regularly: string

  @column()
  public back_pain_thoracic: boolean

  @column()
  public back_pain_low_back: boolean

  @column()
  public back_pain_cervical: boolean

  @column()
  public limitation_or_pain: string

  @column()
  public any_recent_surgery: string

  @column()
  public use_any_type_of_medication: string

  @column()
  public have_any_health_problems: string

  @column()
  public resting_heart_rate: string

  @column()
  public blood_pressure: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
