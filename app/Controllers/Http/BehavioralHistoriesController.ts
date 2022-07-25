import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import BehavioralHistory from 'App/Models/BehavioralHistory'
import { BehavioralHistoryStoreValidator } from 'App/Validators/BehavioralHistory'

const HISTORY_DEFAULT = {
  exercise_regularly: '',
  back_pain_thoracic: false,
  back_pain_low_back: false,
  back_pain_cervical: false,
  limitation_or_pain: '',
  any_recent_surgery: '',
  use_any_type_of_medication: '',
  have_any_health_problems: '',
  resting_heart_rate: '',
  blood_pressure: '',
}

export default class BehavioralHistoriesController {
  public async store({ request, auth }: HttpContextContract) {
    const data = await request.validate(BehavioralHistoryStoreValidator)
    const user = await auth.authenticate()

    const history = await BehavioralHistory.firstOrNew(
      { userId: user.id },
      { ...HISTORY_DEFAULT, userId: user.id }
    )

    history.merge({ ...data, userId: user.id })
    await history.save()

    return history
  }

  public async show({ auth }: HttpContextContract) {
    const user = await auth.authenticate()

    const history = await BehavioralHistory.firstOrCreate(
      { userId: user.id },
      { ...HISTORY_DEFAULT, userId: user.id }
    )

    return history
  }
}
