import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ObjectivePhysicalExercise from 'App/Models/ObjectivePhysicalExercise'
import { ObjectiveStoreValidator } from 'App/Validators/Objective'

const OBJECTIVE_DEFAULT = {
  increase_in_muscle_mass: false,
  improved_aerobic_capacity: false,
  health_quality_of_life: false,
  muscle_strengthening: false,
  general_physical_conditioning: false,
  weight_loss: false,
}

export default class ObjectivesController {
  public async store({ request, auth }: HttpContextContract) {
    const data = await request.validate(ObjectiveStoreValidator)
    const user = await auth.authenticate()

    const objective = await ObjectivePhysicalExercise.firstOrNew(
      { userId: user.id },
      { ...OBJECTIVE_DEFAULT, userId: user.id }
    )

    objective.merge({ ...data, userId: user.id })
    await objective.save()

    return objective
  }

  public async show({ auth }: HttpContextContract) {
    const user = await auth.authenticate()

    const objective = await ObjectivePhysicalExercise.firstOrCreate(
      { userId: user.id },
      { ...OBJECTIVE_DEFAULT, userId: user.id }
    )

    return objective
  }
}
