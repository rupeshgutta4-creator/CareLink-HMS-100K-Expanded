import React, { useEffect, useState } from 'react';
import { api, setSession, clearSession, getUser } from './services/api.js';

const NAV = [
  { id: 'dashboard', label: 'Dashboard', roles: ['admin', 'reception', 'doctor'] },
  { id: 'patients', label: 'Patients', roles: ['admin', 'reception', 'doctor', 'nurse'] },
  { id: 'appointments', label: 'Appointments', roles: ['admin', 'reception', 'doctor', 'patient'] },
  { id: 'emr', label: 'EMR / Visits', roles: ['admin', 'doctor', 'nurse'] },
  { id: 'lab', label: 'Lab', roles: ['admin', 'lab', 'doctor'] },
  { id: 'pharmacy', label: 'Pharmacy', roles: ['admin', 'pharmacy', 'doctor'] },
  { id: 'billing', label: 'Billing', roles: ['admin', 'reception'] }
];

export default function App() {
  const [user, setUser] = useState(getUser());
  const [view, setView] = useState('dashboard');
  const [email, setEmail] = useState('admin@carelink.local');
  const [password, setPassword] = useState('password123');
  const [error, setError] = useState('');
  const [dashboard, setDashboard] = useState(null);
  const [patients, setPatients] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [medicines, setMedicines] = useState([]);
  const [invoices, setInvoices] = useState([]);
  const [labOrders, setLabOrders] = useState([]);
  const [visits, setVisits] = useState([]);
  const [form, setForm] = useState({});

  async function login(e) {
    e.preventDefault();
    setError('');
    try {
      const data = await api('/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password })
      });
      setSession(data.token, data.user);
      setUser(data.user);
    } catch (err) {
      setError(err.message);
    }
  }

  function logout() {
    clearSession();
    setUser(null);
    setDashboard(null);
  }

  async function loadDashboard() {
    try {
      const d = await api('/admin/dashboard');
      setDashboard(d);
    } catch {
      setDashboard(null);
    }
  }

  async function loadPatients() {
    const res = await api('/patients');
    setPatients(res.data || []);
  }

  async function loadAppointments() {
    const res = await api('/appointments');
    setAppointments(res.data || []);
  }

  async function loadDoctors() {
    const res = await api('/doctors');
    setDoctors(res.data || []);
  }

  async function loadPharmacy() {
    const res = await api('/pharmacy/medicines');
    setMedicines(res.data || []);
  }

  async function loadBilling() {
    const res = await api('/billing/invoices');
    setInvoices(res.data || []);
  }

  async function loadLab() {
    const res = await api('/lab/orders');
    setLabOrders(res.data || []);
  }

  async function loadEmr() {
    const res = await api('/emr/visits');
    setVisits(res.data || []);
  }

  useEffect(() => {
    if (!user) return;
    if (view === 'dashboard' && user.role === 'admin') loadDashboard();
    if (view === 'patients') loadPatients();
    if (view === 'appointments') { loadAppointments(); loadDoctors(); loadPatients(); }
    if (view === 'pharmacy') loadPharmacy();
    if (view === 'billing') loadBilling();
    if (view === 'lab') loadLab();
    if (view === 'emr') loadEmr();
  }, [user, view]);

  async function createPatient(e) {
    e.preventDefault();
    await api('/patients', { method: 'POST', body: JSON.stringify(form) });
    setForm({});
    loadPatients();
  }

  async function createAppointment(e) {
    e.preventDefault();
    await api('/appointments', {
      method: 'POST',
      body: JSON.stringify({
        patientId: form.patientId,
        doctorId: form.doctorId,
        scheduledAt: form.scheduledAt,
        reason: form.reason
      })
    });
    setForm({});
    loadAppointments();
  }

  if (!user) {
    return (
      <div className="login-wrap">
        <form className="login-card" onSubmit={login}>
          <h1><span style={{ color: 'var(--accent)' }}>◈</span> CareLink</h1>
          <p className="muted">Hospital & Clinic Management</p>
          <div className="row" style={{ flexDirection: 'column', marginTop: 20 }}>
            <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
            <button className="primary" type="submit">Sign in</button>
          </div>
          {error && <p className="error">{error}</p>}
          <p className="muted" style={{ marginTop: 16 }}>
            Demo: admin@carelink.local / password123
          </p>
        </form>
      </div>
    );
  }

  const navItems = NAV.filter(n => n.roles.includes(user.role) || user.role === 'admin');

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="brand"><span>◈</span> CareLink</div>
        <p className="muted" style={{ marginTop: 6 }}>{user.name} · {user.role}</p>
        <nav className="nav">
          {navItems.map(n => (
            <button key={n.id} className={view === n.id ? 'active' : ''} onClick={() => setView(n.id)}>
              {n.label}
            </button>
          ))}
          <button onClick={logout}>Sign out</button>
        </nav>
      </aside>
      <main className="main">
        <div className="topbar">
          <div>
            <h1>{navItems.find(n => n.id === view)?.label || 'CareLink'}</h1>
            <p className="muted">Privacy-aware clinical operations</p>
          </div>
        </div>

        {view === 'dashboard' && (
          <>
            <div className="grid">
              <div className="card"><div className="label">Patients</div><div className="value">{dashboard?.patients ?? '—'}</div></div>
              <div className="card"><div className="label">Doctors</div><div className="value">{dashboard?.doctors ?? '—'}</div></div>
              <div className="card"><div className="label">Open appointments</div><div className="value">{dashboard?.openAppointments ?? '—'}</div></div>
              <div className="card"><div className="label">Paid revenue</div><div className="value">{dashboard?.revenuePaid ?? '—'}</div></div>
            </div>
            <div className="panel">
              <h2>System</h2>
              <p className="muted">Lab orders: {dashboard?.labOrders ?? 0} · Medicines: {dashboard?.medicines ?? 0} · Unpaid invoices: {dashboard?.invoicesUnpaid ?? 0}</p>
            </div>
          </>
        )}

        {view === 'patients' && (
          <div className="panel">
            <h2>Patients</h2>
            <form className="row" onSubmit={createPatient}>
              <input placeholder="Name" value={form.name || ''} onChange={e => setForm({ ...form, name: e.target.value })} required />
              <input placeholder="Phone" value={form.phone || ''} onChange={e => setForm({ ...form, phone: e.target.value })} />
              <input placeholder="Email" value={form.email || ''} onChange={e => setForm({ ...form, email: e.target.value })} />
              <button className="primary" type="submit">Add patient</button>
            </form>
            <table>
              <thead><tr><th>MRN</th><th>Name</th><th>Phone</th><th>Blood</th></tr></thead>
              <tbody>
                {patients.map(p => (
                  <tr key={p.id}><td>{p.mrn}</td><td>{p.name}</td><td>{p.phone || '—'}</td><td>{p.bloodGroup || '—'}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {view === 'appointments' && (
          <div className="panel">
            <h2>Appointments</h2>
            <form className="row" onSubmit={createAppointment}>
              <select value={form.patientId || ''} onChange={e => setForm({ ...form, patientId: e.target.value })} required>
                <option value="">Patient</option>
                {patients.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
              </select>
              <select value={form.doctorId || ''} onChange={e => setForm({ ...form, doctorId: e.target.value })} required>
                <option value="">Doctor</option>
                {doctors.map(d => <option key={d.id} value={d.id}>{d.name}</option>)}
              </select>
              <input type="datetime-local" value={form.scheduledAt || ''} onChange={e => setForm({ ...form, scheduledAt: e.target.value })} required />
              <input placeholder="Reason" value={form.reason || ''} onChange={e => setForm({ ...form, reason: e.target.value })} />
              <button className="primary" type="submit">Book</button>
            </form>
            <table>
              <thead><tr><th>When</th><th>Patient</th><th>Doctor</th><th>Status</th></tr></thead>
              <tbody>
                {appointments.map(a => (
                  <tr key={a.id}>
                    <td>{a.scheduledAt}</td>
                    <td>{patients.find(p => p.id === a.patientId)?.name || a.patientId}</td>
                    <td>{doctors.find(d => d.id === a.doctorId)?.name || a.doctorId}</td>
                    <td><span className="badge">{a.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {view === 'emr' && (
          <div className="panel">
            <h2>Visits</h2>
            <table>
              <thead><tr><th>When</th><th>Patient</th><th>Diagnosis</th><th>Complaint</th></tr></thead>
              <tbody>
                {visits.map(v => (
                  <tr key={v.id}>
                    <td>{v.createdAt}</td>
                    <td>{v.patientId}</td>
                    <td>{v.diagnosis || '—'}</td>
                    <td>{v.chiefComplaint || '—'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {!visits.length && <p className="muted">No visits yet. Create via API POST /api/emr/visits</p>}
          </div>
        )}

        {view === 'lab' && (
          <div className="panel">
            <h2>Lab orders</h2>
            <table>
              <thead><tr><th>ID</th><th>Patient</th><th>Status</th><th>Tests</th></tr></thead>
              <tbody>
                {labOrders.map(o => (
                  <tr key={o.id}>
                    <td style={{ fontFamily: 'var(--mono)', fontSize: 12 }}>{o.id.slice(0, 8)}</td>
                    <td>{o.patientId.slice(0, 8)}</td>
                    <td><span className="badge">{o.status}</span></td>
                    <td>{(o.tests || []).map(t => t.name).join(', ')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {view === 'pharmacy' && (
          <div className="panel">
            <h2>Medicines</h2>
            <table>
              <thead><tr><th>Code</th><th>Name</th><th>Stock</th><th>Price</th></tr></thead>
              <tbody>
                {medicines.map(m => (
                  <tr key={m.id}><td>{m.code}</td><td>{m.name}</td><td>{m.stock}</td><td>{m.unitPrice}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {view === 'billing' && (
          <div className="panel">
            <h2>Invoices</h2>
            <table>
              <thead><tr><th>Number</th><th>Patient</th><th>Total</th><th>Status</th></tr></thead>
              <tbody>
                {invoices.map(i => (
                  <tr key={i.id}>
                    <td>{i.number}</td>
                    <td>{i.patientId.slice(0, 8)}</td>
                    <td>{i.total}</td>
                    <td><span className={`badge ${i.status === 'paid' ? 'ok' : 'warn'}`}>{i.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  );
}
