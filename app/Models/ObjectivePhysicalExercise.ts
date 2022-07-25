import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import User from './User'

export default class ObjectivePhysicalExercise extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({ serializeAs: null })
  public userId: number

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @column()
  public increaseInMuscleMass: boolean

  @column()
  public improvedAerobicCapacity: boolean

  @column()
  public healthQualityOfLife: boolean

  @column()
  public muscleStrengthening: boolean

  @column()
  public generalPhysicalConditioning: boolean

  @column()
  public weightLoss: boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
