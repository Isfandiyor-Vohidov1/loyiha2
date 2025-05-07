import { Router } from 'express'
import { JwtAuthGuard } from '../middleware/jwt-auth.guard.js';
import { SuperAdminGuard } from '../middleware/superadmin.guard.js';
import { AppointmentController } from '../controllers/appointment.controller';

const router = Router();
const controller = new AppointmentController();

router
    .post('/create-appointment', SuperAdminGuard, controller.createAppointment)
    .get('/', JwtAuthGuard, SuperAdminGuard, controller.getAllAppointments)
    .get('/:id', controller.getAppointmentsById)
    .patch('/:id', SuperAdminGuard, controller.updateAppointmentById)
    .delete('/:id', JwtAuthGuard, SuperAdminGuard, controller.deleteAppointmentById)

export default router;
