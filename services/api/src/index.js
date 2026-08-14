'use strict';

const express = require('express');
const cors = require('cors');
const { authRouter } = require('./routes/auth');
const { patientsRouter } = require('./routes/patients');
const { doctorsRouter } = require('./routes/doctors');
const { appointmentsRouter } = require('./routes/appointments');
const { emrRouter } = require('./routes/emr');
const { billingRouter } = require('./routes/billing');
const { labRouter } = require('./routes/lab');
const { pharmacyRouter } = require('./routes/pharmacy');
const { adminRouter } = require('./routes/admin');
const { errorHandler } = require('./middleware/errorHandler');
const { seedDemoData } = require('./utils/seed');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors({ origin: process.env.CORS_ORIGIN || true }));
app.use(express.json({ limit: '2mb' }));

app.get('/api/health', (_req, res) => {
  res.json({
    ok: true,
    service: 'carelink-api',
    version: '1.0.0',
    time: new Date().toISOString()
  });
});

app.use('/api/auth', authRouter);
app.use('/api/patients', patientsRouter);
app.use('/api/doctors', doctorsRouter);
app.use('/api/appointments', appointmentsRouter);
app.use('/api/emr', emrRouter);
app.use('/api/billing', billingRouter);
app.use('/api/lab', labRouter);
app.use('/api/pharmacy', pharmacyRouter);
app.use('/api/admin', adminRouter);

app.use(errorHandler);

seedDemoData();

app.listen(PORT, () => {
  console.log(JSON.stringify({
    ts: new Date().toISOString(),
    level: 'info',
    msg: 'CareLink API listening',
    port: PORT
  }));
});
