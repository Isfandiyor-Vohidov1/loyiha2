import { Router } from 'express';
import { PatientController } from '../controllers/patient.controller.js';
import { JwtAuthGuard } from '../middleware/jwt-auth.guard.js'
import { SelfGuard } from '../middleware/self-admin.guard.js'
import { DoctorGuard } from '../middleware/doctor.guard.js'
import { AdminGuard } from '../middleware/admin.guard.js'

const router = Router();
const controller = new PatientController;

router
    .post('/signin', controller.signinPatient)
    .post('/signup', controller.signupPatient)
    .post('/token', controller.accessTokenPatient)
    .post('/signout', controller.signoutPatient)
    .get('/', JwtAuthGuard, DoctorGuard, controller.getAllPatients)
    .get('/:id', JwtAuthGuard, DoctorGuard, controller.getPatientById)
    .patch('/:id', JwtAuthGuard, SelfGuard, controller.updatePatientById)
    .delete('/:id', JwtAuthGuard, AdminGuard, controller.deletePatientById);

export default router;
