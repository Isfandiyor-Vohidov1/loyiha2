import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
    patient_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
    complaint: { type: String, required: true, trim: true, maxlength: 500 },
    status: { type: String, enum: ['pending', 'confirmed', 'cancelled', 'completed'], default: 'pending' },
    graph_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Graph' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

appointmentSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

export default Appointment;