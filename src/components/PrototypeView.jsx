import React from 'react';
import '../prototype.css';
import { 
  AlertTriangle, FileText, Activity, ShieldAlert, 
  Menu, Search, Bell, User, Settings, CheckCircle, Clock
} from 'lucide-react';

export default function PrototypeView() {
  return (
    <div className="proto-container">
      {/* Top Navbar */}
      <nav className="proto-navbar">
        <div className="proto-brand">
          <div className="proto-logo-box">MRPL</div>
          <span className="proto-title">INDUSTRIAL AI RUNTIME</span>
        </div>
        <div className="proto-search">
          <Search size={18} />
          <input type="text" placeholder="Search equipment, reports, or SOPs..." />
        </div>
        <div className="proto-nav-actions">
          <div className="proto-icon-btn"><Bell size={20} /><span className="proto-badge">3</span></div>
          <div className="proto-icon-btn"><Settings size={20} /></div>
          <div className="proto-avatar"><User size={20} /></div>
        </div>
      </nav>

      <div className="proto-layout">
        {/* Sidebar */}
        <aside className="proto-sidebar">
          <ul className="proto-menu">
            <li className="active"><Activity size={18} /> <span>Live Dashboard</span></li>
            <li><FileText size={18} /> <span>Inspection Reports</span></li>
            <li><ShieldAlert size={18} /> <span>Safety Audits</span></li>
            <li><AlertTriangle size={18} /> <span>Risk Assessments</span></li>
          </ul>
          
          <div className="proto-system-status">
            <h4>SYSTEM STATUS</h4>
            <div className="status-indicator">
              <div className="status-dot"></div>
              <span>All Systems Nominal</span>
            </div>
            <div className="status-stat">
              <span>Air-Gap Mode</span>
              <span className="stat-value text-yellow">ACTIVE</span>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="proto-main">
          
          <div className="proto-header">
            <h2>Plant Operations Overview</h2>
            <button className="proto-btn-primary">Generate Daily Report</button>
          </div>

          <div className="proto-grid-top">
            <div className="proto-stat-card border-yellow">
              <div className="stat-title">Active AI Agents</div>
              <div className="stat-big-number">12</div>
              <div className="stat-sub">4 Vision, 8 Reasoning</div>
            </div>
            <div className="proto-stat-card">
              <div className="stat-title">Processed Docs (24h)</div>
              <div className="stat-big-number">348</div>
              <div className="stat-sub text-green">+12% from yesterday</div>
            </div>
            <div className="proto-stat-card warning-card">
              <div className="stat-title">Critical Alerts</div>
              <div className="stat-big-number text-yellow">2</div>
              <div className="stat-sub">Requires Engineering Review</div>
            </div>
          </div>

          <div className="proto-grid-bottom">
            {/* Table Section */}
            <div className="proto-panel">
              <div className="proto-panel-header">
                <h3>Recent Inspection Documents</h3>
                <button className="proto-btn-secondary">View All</button>
              </div>
              <table className="proto-table">
                <thead>
                  <tr>
                    <th>Document ID</th>
                    <th>Equipment</th>
                    <th>AI Status</th>
                    <th>Confidence</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>REP-2026-08A</td>
                    <td>Compressor C-102</td>
                    <td><span className="proto-tag tag-success"><CheckCircle size={14}/> Verified</span></td>
                    <td>98.5%</td>
                    <td><button className="proto-action-btn">Review</button></td>
                  </tr>
                  <tr>
                    <td>SCAN-4992-PDF</td>
                    <td>Heat Exchanger E-44</td>
                    <td><span className="proto-tag tag-warning"><Clock size={14}/> Processing</span></td>
                    <td>--</td>
                    <td><button className="proto-action-btn" disabled>Wait</button></td>
                  </tr>
                  <tr>
                    <td>SOP-UPD-992</td>
                    <td>Pump System P-11A</td>
                    <td><span className="proto-tag tag-success"><CheckCircle size={14}/> Grounded</span></td>
                    <td>99.9%</td>
                    <td><button className="proto-action-btn">Review</button></td>
                  </tr>
                  <tr>
                    <td>ALR-MANUAL-02</td>
                    <td>Boiler B-01</td>
                    <td><span className="proto-tag tag-danger"><AlertTriangle size={14}/> Flagged</span></td>
                    <td>82.1%</td>
                    <td><button className="proto-action-btn btn-yellow">Inspect</button></td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Live Audit Log */}
            <div className="proto-panel log-panel">
              <div className="proto-panel-header">
                <h3>Live Agent Audit Trail</h3>
              </div>
              <div className="proto-log-list">
                <div className="log-item">
                  <div className="log-time">15:42:10</div>
                  <div className="log-content">Commander Agent routed task to Vision Pool.</div>
                </div>
                <div className="log-item">
                  <div className="log-time">15:42:12</div>
                  <div className="log-content">Vector DB retrieved SOP revision V4.2.</div>
                </div>
                <div className="log-item highlighted">
                  <div className="log-time">15:42:15</div>
                  <div className="log-content text-yellow">[!] Schema extraction anomaly detected. Rerunning verification.</div>
                </div>
                <div className="log-item">
                  <div className="log-time">15:42:18</div>
                  <div className="log-content">CodeAct sandbox execution completed. Exit code 0.</div>
                </div>
                <div className="log-item">
                  <div className="log-time">15:42:21</div>
                  <div className="log-content">DOCX Template generated and pending approval.</div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
