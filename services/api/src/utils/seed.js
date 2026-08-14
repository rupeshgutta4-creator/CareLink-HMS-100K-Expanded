'use strict';

const bcrypt = require('bcryptjs');
const { db, id, now } = require('./store');

let seeded = false;

function seedDemoData() {
  if (seeded) return;
  seeded = true;

  const passwordHash = bcrypt.hashSync('password123', 8);

  const admin = {
    id: id(),
    email: 'admin@carelink.local',
    name: 'System Admin',
    role: 'admin',
    passwordHash,
    createdAt: now()
  };
  const doctorUser = {
    id: id(),
    email: 'doctor@carelink.local',
    name: 'Dr. Ananya Rao',
    role: 'doctor',
    passwordHash,
    createdAt: now()
  };
  const reception = {
    id: id(),
    email: 'reception@carelink.local',
    name: 'Front Desk',
    role: 'reception',
    passwordHash,
    createdAt: now()
  };
  const patientUser = {
    id: id(),
    email: 'patient@carelink.local',
    name: 'Rahul Sharma',
    role: 'patient',
    passwordHash,
    createdAt: now()
  };

  db.users.push(admin, doctorUser, reception, patientUser);

  const doctor = {
    id: id(),
    userId: doctorUser.id,
    name: 'Dr. Ananya Rao',
    specialty: 'General Medicine',
    department: 'OPD',
    licenseNo: 'MED-2024-001',
    consultationFee: 500,
    active: true,
    createdAt: now()
  };
  db.doctors.push(doctor);

  const patient = {
    id: id(),
    userId: patientUser.id,
    mrn: 'MRN-1001',
    name: 'Rahul Sharma',
    gender: 'male',
    dob: '1992-04-12',
    phone: '+91-9000000001',
    email: 'patient@carelink.local',
    bloodGroup: 'B+',
    address: 'Hyderabad',
    createdAt: now()
  };
  db.patients.push(patient);

  db.medicines.push(
    { id: id(), code: 'PARA500', name: 'Paracetamol 500mg', unit: 'tablet', stock: 1000, unitPrice: 2 },
    { id: id(), code: 'AMOX250', name: 'Amoxicillin 250mg', unit: 'capsule', stock: 400, unitPrice: 8 },
    { id: id(), code: 'ORS', name: 'ORS Sachet', unit: 'sachet', stock: 200, unitPrice: 5 }
  );

  console.log(JSON.stringify({
    ts: now(),
    level: 'info',
    msg: 'Demo data seeded',
    users: db.users.length,
    patients: db.patients.length,
    doctors: db.doctors.length
  }));
}

module.exports = { seedDemoData };
