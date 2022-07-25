import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import QuizParQ from 'App/Models/QuizParQ'
import { QuizParQStoreValidator } from 'App/Validators/QuizParQ'

const INITIAL = {
  heart_problem: false,
  chest_pain_caused_by_exercise: false,
  had_chest_pain_last_month: false,
  ever_lost_consciousness_at_any_time: false,
  have_any_bone_or_joint_problems: false,
  prescribed_blood_pressure_or_heart_medication: false,
  prevented_from_exercising: false,
}

export default class QuizParQController {
  public async store({ request, auth }: HttpContextContract) {
    const data = await request.validate(QuizParQStoreValidator)
    const user = await auth.authenticate()

    const objective = await QuizParQ.firstOrNew(
      { userId: user.id },
      { ...INITIAL, userId: user.id }
    )

    objective.merge({ ...data, userId: user.id })
    await objective.save()

    return objective
  }

  public async show({ auth }: HttpContextContract) {
    const user = await auth.authenticate()

    const objective = await QuizParQ.firstOrCreate(
      { userId: user.id },
      { ...INITIAL, userId: user.id }
    )

    return objective
  }
}
