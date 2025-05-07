import Joi from 'joi';

export const appointmentSchema = Joi.object({
    patient_id: Joi.number().integer().required(),
    complaint: Joi.string().min(1).max(1000).required(),
    status: Joi.string()
        .valid('pending', 'confirmed', 'cancelled', 'completed')
        .required(),
    graph_id: Joi.number().integer().required(),
});
