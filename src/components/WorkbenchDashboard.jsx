import React, { useState, useEffect } from 'react';
import '../workbench.css';
import { 
  UploadCloud, FileText, Image as ImageIcon, FileSpreadsheet, File, Scan, 
  Cpu, Eye, Search, Database, Network, BrainCircuit, FileSignature, CheckCircle, 
  ShieldAlert, Lock, Activity, Thermometer, Clock, ArrowRight, Server, WifiOff, FileDown, Map
} from 'lucide-react';

const PIPELINE_STAGES = [
  'Upload', 'OCR', 'Vision AI', 'GraphRAG', 'Knowledge Retrieval', 'Model Router', 'Reasoning Agent', 'Report Generator'
];

const TIMELINE_EVENTS = [
  { time: '14:21', text: 'PDF Uploaded' },
  { time: '14:22', text: 'OCR Finished' },
  { time: '14:22', text: 'Vision Analysis' },
  { time: '14:23', text: 'Graph Search' },
  { time: '14:24', text: 'Reasoning' },
  { time: '14:25', text: 'DOCX Ready' }
];

export default function WorkbenchDashboard() {
  const [activeStage, setActiveStage] = useState(0);

  // Pipeline animation
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % PIPELINE_STAGES.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="wb-container">
      
      {/* Homepage Hero / Header */}
      <header className="wb-header glass-panel">
        <div className="wb-header-content">
          <h1>Sovereign AI Workbench</h1>
          <div className="wb-tags">
            <span className="wb-tag"><Lock size={14}/> 100% Offline</span>
            <span className="wb-tag"><Cpu size={14}/> Agentic</span>
            <span className="wb-tag"><BrainCircuit size={14}/> Multimodal</span>
          </div>
          <p className="wb-subtitle">Upload any industrial document</p>
          <div className="wb-upload-icons">
            <div className="wb-u-icon"><FileText size={20}/> PDF</div>
            <div className="wb-u-icon"><ImageIcon size={20}/> Image</div>
            <div className="wb-u-icon"><File size={20}/> P&ID</div>
            <div className="wb-u-icon"><FileSpreadsheet size={20}/> CSV</div>
            <div className="wb-u-icon"><FileSignature size={20}/> DOCX</div>
          </div>
          <div className="wb-flow-text">
            <span>Understand</span> <ArrowRight size={14}/> <span>Reason</span> <ArrowRight size={14}/> <span>Generate</span> <ArrowRight size={14}/> <span>Deliver</span>
          </div>
        </div>
      </header>

      <div className="wb-grid">
        
        {/* 1. File Upload Center */}
        <div className="wb-panel glass-panel upload-panel">
          <h3><UploadCloud size={20}/> Upload Center</h3>
          <div className="upload-dropzone">
            <Scan size={32} />
            <p>Drag & Drop industrial documents</p>
            <div className="upload-formats">PDF, PNG, JPG, CSV, DOCX, Scanned Reports, P&ID</div>
          </div>
          
          <div className="wb-ai-thinking">
            <h4>AI Thinking Canvas</h4>
            <div className="thinking-row">
              <div style={{marginBottom: '4px'}}>Reading Inspection Report...</div>
              <div style={{color: 'var(--brand-blue)'}}>{activeStage >= 1 ? '█████████████' : '████'}</div>
            </div>
            <div className="thinking-row">
              <div style={{marginBottom: '4px'}}>Searching SOP...</div>
              <div style={{color: 'var(--brand-blue)'}}>{activeStage >= 3 ? '███████' : (activeStage >= 2 ? '██' : '')}</div>
            </div>
            <div className="thinking-row">
              <div style={{marginBottom: '4px'}}>Comparing Maintenance Logs...</div>
              <div style={{color: 'var(--brand-blue)'}}>{activeStage >= 4 ? '████████' : ''}</div>
            </div>
            <div className="thinking-row">
              <div style={{marginBottom: '4px'}}>Generating Report...</div>
              <div style={{color: 'var(--brand-blue)'}}>{activeStage >= 6 ? '████████████████' : ''}</div>
            </div>
          </div>
        </div>

        {/* 2. AI Processing Pipeline */}
        <div className="wb-panel glass-panel pipeline-panel">
          <h3><Activity size={20}/> AI Reasoning Pipeline</h3>
          <div className="pipeline-flow">
            {PIPELINE_STAGES.map((stage, idx) => (
              <React.Fragment key={idx}>
                <div className={`pipe-node ${activeStage === idx ? 'active' : ''} ${activeStage > idx ? 'completed' : ''}`}>
                  {stage}
                </div>
                {idx < PIPELINE_STAGES.length - 1 && (
                  <div className={`pipe-arrow ${activeStage > idx ? 'active-arrow' : ''}`}>
                    <ArrowRight size={20} />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* 3. Evidence Panel */}
        <div className="wb-panel glass-panel evidence-panel">
          <h3><Database size={20}/> Evidence Used</h3>
          <div className="evidence-list">
            <div className="ev-item"><CheckCircle size={16} className="text-green"/> SOP-142</div>
            <div className="ev-item"><CheckCircle size={16} className="text-green"/> Inspection Report</div>
            <div className="ev-item"><CheckCircle size={16} className="text-green"/> Maintenance History</div>
            <div className="ev-item"><CheckCircle size={16} className="text-green"/> P&ID</div>
            <div className="ev-item"><CheckCircle size={16} className="text-green"/> Previous Incident</div>
          </div>
          <div className="confidence-score">
            <div className="score-label">Confidence</div>
            <div className="score-value">94%</div>
          </div>
        </div>

        {/* 4. Network Security Panel */}
        <div className="wb-panel glass-panel security-panel">
          <h3><ShieldAlert size={20}/> Network Security</h3>
          <div className="sec-grid">
            <div className="sec-item">
              <span className="sec-label">Internet</span>
              <span className="sec-value text-blue"><WifiOff size={16}/> Disabled</span>
            </div>
            <div className="sec-item">
              <span className="sec-label">Outbound Calls</span>
              <span className="sec-value">0</span>
            </div>
            <div className="sec-item">
              <span className="sec-label">Local GPU</span>
              <span className="sec-value text-green">Running</span>
            </div>
            <div className="sec-item">
              <span className="sec-label">Encryption</span>
              <span className="sec-value">AES-256</span>
            </div>
          </div>
          <div className="sec-status-badge">AIR GAPPED</div>
        </div>

        {/* 5. Deliverables Panel */}
        <div className="wb-panel glass-panel deliverables-panel">
          <h3><FileDown size={20}/> Generated Deliverables</h3>
          <ul className="deliv-list">
            <li><CheckCircle size={16} className="text-blue"/> Approval.docx</li>
            <li><CheckCircle size={16} className="text-blue"/> Summary.pdf</li>
            <li><CheckCircle size={16} className="text-blue"/> Risk_Report.pdf</li>
            <li><CheckCircle size={16} className="text-blue"/> Maintenance_Checklist.docx</li>
            <li><CheckCircle size={16} className="text-blue"/> Audit_Log.json</li>
          </ul>
        </div>

        {/* 6. Agent Timeline */}
        <div className="wb-panel glass-panel timeline-panel">
          <h3><Clock size={20}/> Agent Timeline</h3>
          <div className="timeline-container">
            {TIMELINE_EVENTS.map((ev, i) => (
              <div className="tl-event" key={i}>
                <div className="tl-time">{ev.time}</div>
                <div className="tl-dot"></div>
                <div className="tl-text">{ev.text}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 7. Model Router */}
        <div className="wb-panel glass-panel router-panel">
          <h3><Network size={20}/> Intelligent Model Router</h3>
          <div className="router-diagram">
            <div className="router-source">User Query</div>
            <div className="router-arrows">
              <svg width="200" height="150">
                <path d="M0 75 C 50 75, 100 20, 150 20" className="r-path"/>
                <path d="M0 75 C 50 75, 100 75, 150 75" className="r-path"/>
                <path d="M0 75 C 50 75, 100 130, 150 130" className="r-path"/>
                <circle r="4" fill="#60a5fa"><animateMotion dur="2s" repeatCount="indefinite" path="M0 75 C 50 75, 100 20, 150 20"/></circle>
                <circle r="4" fill="#a855f7"><animateMotion dur="2s" repeatCount="indefinite" path="M0 75 C 50 75, 100 75, 150 75"/></circle>
                <circle r="4" fill="#38bdf8"><animateMotion dur="2s" repeatCount="indefinite" path="M0 75 C 50 75, 100 130, 150 130"/></circle>
              </svg>
            </div>
            <div className="router-targets">
              <div className="r-target">Vision Model</div>
              <div className="r-target">OCR Engine</div>
              <div className="r-target">Reasoning LLM</div>
            </div>
          </div>
        </div>

        {/* 8. Future Innovation (Machine Health) */}
        <div className="wb-panel glass-panel health-panel">
          <h3><Server size={20}/> Early Warning AI</h3>
          <div className="health-card">
            <div className="h-header">
              <span className="h-title"><Activity size={16}/> Pump P101</span>
              <span className="h-status text-green">Online</span>
            </div>
            <div className="h-metric">
              <span className="h-label"><Thermometer size={16}/> Temp</span>
              <span className="h-value">82°C <span className="text-blue">↑</span></span>
            </div>
            <div className="h-risk">
              <span>Risk: Medium</span>
            </div>
            <div className="h-reco">
              <strong>Recommendation:</strong> Inspect within 8 hours
            </div>
          </div>
        </div>

        {/* 9. Facility Top View Map (MRPL-Style Complex Refinery) */}
        <div className="wb-panel glass-panel map-panel">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', borderBottom: '1px solid var(--border-color)', paddingBottom: '12px' }}>
            <h3 style={{ border: 'none', margin: 0, padding: 0 }}><Map size={20}/> MRPL Facility Top View</h3>
            <div style={{ display: 'flex', gap: '12px' }}>
              <span style={{ fontSize: '0.75rem', color: '#FBF3F0', display: 'flex', alignItems: 'center', gap: '4px' }}><div style={{width: 8, height: 8, borderRadius: '50%', backgroundColor: '#FBF3F0'}}></div> Normal Operation</span>
              <span style={{ fontSize: '0.75rem', color: '#014BAA', display: 'flex', alignItems: 'center', gap: '4px' }}><div style={{width: 8, height: 8, borderRadius: '50%', backgroundColor: '#014BAA'}}></div> Warning</span>
              <span style={{ fontSize: '0.75rem', color: '#014BAA', display: 'flex', alignItems: 'center', gap: '4px' }}><div style={{width: 8, height: 8, borderRadius: '50%', backgroundColor: '#014BAA'}}></div> Critical Alert</span>
            </div>
          </div>
          
          <div style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
            <div style={{ flex: 1, background: 'var(--bg-panel)', padding: '16px', borderRadius: '6px', border: '1px solid var(--border-color)' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '1px' }}>Plant Status</div>
              <div style={{ fontSize: '1.1rem', color: '#014BAA', fontWeight: 'bold' }}>CRITICAL ALERT</div>
            </div>
            <div style={{ flex: 1, background: 'var(--bg-panel)', padding: '16px', borderRadius: '6px', border: '1px solid var(--border-color)' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '1px' }}>Sensors Online</div>
              <div style={{ fontSize: '1.1rem', color: 'var(--text-primary)', fontWeight: 'bold' }}>12,458</div>
            </div>
            <div style={{ flex: 1, background: 'var(--bg-panel)', padding: '16px', borderRadius: '6px', border: '1px solid var(--border-color)' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '1px' }}>Crude Throughput</div>
              <div style={{ fontSize: '1.1rem', color: 'var(--text-primary)', fontWeight: 'bold' }}>320 TBD</div>
            </div>
            <div style={{ flex: 2, background: 'rgba(1, 75, 170, 0.05)', padding: '16px', borderRadius: '6px', border: '1px solid rgba(1, 75, 170, 0.2)' }}>
              <div style={{ fontSize: '0.75rem', color: '#014BAA', marginBottom: '4px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>AI Diagnostic Focus</div>
              <div style={{ fontSize: '1.1rem', color: '#014BAA', fontWeight: 'bold' }}>FCCU Reactor → Valve V-204 Stuck</div>
            </div>
          </div>

          <div className="factory-map-container" style={{ position: 'relative', overflow: 'hidden', borderRadius: '6px', backgroundColor: '#0A1128', border: '1px solid var(--border-color)' }}>
            
              <svg viewBox="0 0 1200 700" className="factory-svg-complex" preserveAspectRatio="xMidYMid slice" style={{ width: '100%', height: '100%', backgroundColor: '#F8FAFC' }}>
                <defs>
                  {/* Soft Shadow for illustrative 2D look */}
                  <filter id="dropShadow" x="-10%" y="-10%" width="130%" height="130%">
                    <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="#94A3B8" floodOpacity="0.3"/>
                  </filter>
                  <filter id="glowGreen" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="blur"/>
                    <feMerge>
                      <feMergeNode in="blur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                  <filter id="glowRed" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="blur"/>
                    <feMerge>
                      <feMergeNode in="blur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>

                  {/* Illustrative City Map Background Pattern */}
                  <pattern id="cityMapGrid" width="400" height="400" patternUnits="userSpaceOnUse">
                    {/* Soft grass patches */}
                    <path d="M 50 50 Q 100 0, 150 50 T 250 50 Q 300 100, 250 150 T 150 150 Q 100 200, 50 150 T 50 50" fill="#F1F8F1" opacity="0.8"/>
                    <path d="M 250 250 Q 300 200, 350 250 T 350 350 Q 300 400, 250 350 T 250 250" fill="#F1F8F1" opacity="0.8"/>
                    
                    {/* Meandering Light Blue River/Roads */}
                    <path d="M -50 200 Q 100 100, 200 200 T 450 100" fill="none" stroke="#E0E7FF" strokeWidth="20" strokeLinecap="round"/>
                    <path d="M 150 -50 Q 200 100, 150 200 T 200 450" fill="none" stroke="#F1F5F9" strokeWidth="15" strokeLinecap="round"/>
                    
                    {/* Small streets/paths */}
                    <path d="M 0 50 L 400 50 M 0 150 L 400 150 M 50 0 L 50 400 M 150 0 L 150 400" fill="none" stroke="#E2E8F0" strokeWidth="2" opacity="0.5"/>
                    <path d="M 0 100 L 400 100 M 0 200 L 400 200 M 100 0 L 100 400 M 200 0 L 200 400" fill="none" stroke="#E2E8F0" strokeWidth="1" opacity="0.3"/>
                  </pattern>
                </defs>

                {/* Base Illustrative Ground */}
                <rect x="0" y="0" width="1200" height="700" fill="url(#cityMapGrid)" />

                {/* --- Interconnecting Pipes & Paths --- */}
                {/* Main Highways / Utility Pipes */}
                <g stroke="#94A3B8" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M 200 150 L 350 150 L 350 135" />
                  <path d="M 500 135 L 600 135 L 675 135" />
                  <path d="M 500 180 L 675 180" />
                  <path d="M 675 220 L 675 450 L 675 525" />
                  <path d="M 675 155 L 850 155" />
                  <path d="M 950 230 L 950 270" />
                  <path d="M 750 525 L 850 525" />
                  <path d="M 1000 550 L 1020 550" />
                </g>

                {/* Active Flow Streams (Green/Blue/Red) */}
                <g strokeWidth="2.5" fill="none" strokeLinecap="round" strokeDasharray="6 8" className="data-stream">
                  {/* Normal flow - Emerald Green */}
                  <path d="M 200 150 L 350 150 L 350 135" stroke="#10B981" />
                  <path d="M 500 135 L 600 135 L 675 135" stroke="#10B981" />
                  <path d="M 675 220 L 675 450 L 675 525" stroke="#10B981" />
                  
                  {/* Product flow - Royal Blue */}
                  <path d="M 750 525 L 850 525" stroke="#014BAA" />
                  <path d="M 1000 550 L 1020 550" stroke="#014BAA" />

                  {/* Warning flow - Red */}
                  <path d="M 675 155 L 850 155" stroke="#EF4444" />
                </g>

                {/* --- Facilities / Machinery Nodes (Illustrative 2D with Shadows) --- */}
                
                {/* 1. Crude Tank Farm */}
                <g transform="translate(150, 150)">
                  <rect x="-80" y="-80" width="160" height="160" fill="#FFFFFF" stroke="#014BAA" strokeWidth="2" rx="12" filter="url(#dropShadow)" />
                  <text x="0" y="-60" textAnchor="middle" fill="#014BAA" fontSize="11" fontWeight="700">CRUDE TANK FARM</text>
                  
                  {/* Illustrative Tanks */}
                  <circle cx="-40" cy="-20" r="24" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="1" />
                  <circle cx="-40" cy="-20" r="16" fill="#E2E8F0" />
                  <circle cx="-40" cy="-20" r="3" fill="#10B981" />
                  
                  <circle cx="40" cy="-20" r="24" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="1" />
                  <circle cx="40" cy="-20" r="16" fill="#E2E8F0" />
                  <circle cx="40" cy="-20" r="3" fill="#10B981" />
                  
                  <circle cx="-40" cy="40" r="24" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="1" />
                  <circle cx="-40" cy="40" r="16" fill="#E2E8F0" />
                  <circle cx="-40" cy="40" r="3" fill="#10B981" />
                  
                  {/* Flare Stack Alert */}
                  <circle cx="40" cy="40" r="24" fill="#FEF2F2" stroke="#EF4444" strokeWidth="2" />
                  <circle cx="40" cy="40" r="16" fill="#FECACA" />
                  <circle cx="40" cy="40" r="4" fill="#EF4444" filter="url(#glowRed)" className="hazard-ping" />
                  <line x1="40" y1="40" x2="80" y2="80" stroke="#EF4444" strokeWidth="1.5" />
                  <text x="85" y="85" fill="#EF4444" fontSize="10" fontWeight="bold">LVL 95%</text>
                </g>

                {/* 2. CDU / VDU */}
                <g transform="translate(425, 135)">
                  <polygon points="-60,-30 60,-30 80,0 60,30 -60,30 -80,0" fill="#FFFFFF" stroke="#014BAA" strokeWidth="2" filter="url(#dropShadow)" />
                  <text x="0" y="5" textAnchor="middle" fill="#014BAA" fontSize="12" fontWeight="700">CDU / VDU</text>
                  
                  <circle cx="-40" cy="-15" r="4" fill="#10B981" />
                  <circle cx="40" cy="15" r="4" fill="#10B981" />
                  
                  {/* Heat Exchangers */}
                  <rect x="-60" y="50" width="120" height="25" fill="#FFFFFF" stroke="#014BAA" strokeWidth="1" rx="4" filter="url(#dropShadow)" />
                  <text x="0" y="66" textAnchor="middle" fill="#64748B" fontSize="9" fontWeight="600">HEAT EXCHANGERS</text>
                </g>

                {/* 3. FCCU (Alert Node) */}
                <g transform="translate(675, 180)">
                  <polygon points="-75,-70 75,-70 100,0 75,70 -75,70 -100,0" fill="#FFFFFF" stroke="#EF4444" strokeWidth="3" filter="url(#dropShadow)" />
                  <text x="0" y="5" textAnchor="middle" fill="#EF4444" fontSize="16" fontWeight="800">FCCU</text>
                  
                  <circle cx="0" cy="0" r="30" fill="none" stroke="#EF4444" strokeWidth="2" strokeDasharray="4 4" className="rotating-ring" />
                  
                  {/* Alert Box popup pointing to FCCU */}
                  <path d="M 30 -30 L 70 -70 L 220 -70" fill="none" stroke="#EF4444" strokeWidth="1.5" />
                  <rect x="70" y="-105" width="160" height="60" fill="#FEF2F2" stroke="#EF4444" strokeWidth="2" rx="6" filter="url(#dropShadow)" />
                  <text x="80" y="-85" fill="#EF4444" fontSize="11" fontWeight="800">FCCU REACTOR ALERT</text>
                  <text x="80" y="-70" fill="#014BAA" fontSize="9" fontWeight="600">PRESSURE: 42.5 kg/cm²</text>
                  <text x="80" y="-55" fill="#014BAA" fontSize="9" fontWeight="600">VALVE V-204 STUCK</text>
                </g>

                {/* 4. Hydrocracker */}
                <g transform="translate(950, 155)">
                  <rect x="-80" y="-60" width="160" height="120" fill="#FFFFFF" stroke="#014BAA" strokeWidth="2" rx="8" filter="url(#dropShadow)" />
                  <text x="0" y="-10" textAnchor="middle" fill="#014BAA" fontSize="12" fontWeight="700">HYDROCRACKER</text>
                  <circle cx="60" cy="40" r="4" fill="#10B981" />
                </g>

                {/* 5. Cooling Towers */}
                <g transform="translate(950, 295)">
                  <rect x="-120" y="-30" width="240" height="60" fill="#FFFFFF" stroke="#014BAA" strokeWidth="2" rx="8" filter="url(#dropShadow)" />
                  <text x="0" y="-38" textAnchor="middle" fill="#014BAA" fontSize="11" fontWeight="700">COOLING TOWERS</text>
                  
                  {/* Fans */}
                  <circle cx="-90" cy="0" r="20" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="1" />
                  <circle cx="-45" cy="0" r="20" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="1" />
                  <circle cx="0" cy="0" r="20" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="1" />
                  <circle cx="45" cy="0" r="20" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="1" />
                  <circle cx="90" cy="0" r="20" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="1" />
                  
                  {/* Fan centers */}
                  <circle cx="-90" cy="0" r="3" fill="#10B981" />
                  <circle cx="-45" cy="0" r="3" fill="#10B981" />
                  <circle cx="0" cy="0" r="3" fill="#10B981" />
                  <circle cx="45" cy="0" r="3" fill="#10B981" />
                  <circle cx="90" cy="0" r="3" fill="#10B981" />
                </g>

                {/* 6. Sulfur Recovery */}
                <g transform="translate(675, 525)">
                  <polygon points="-75,-75 75,-75 75,75 -75,75 -125,0" fill="#FFFFFF" stroke="#014BAA" strokeWidth="2" filter="url(#dropShadow)" />
                  <text x="0" y="-55" textAnchor="middle" fill="#014BAA" fontSize="12" fontWeight="700">SULFUR RECOVERY</text>
                  
                  {/* H2S Spike Alert */}
                  <circle cx="20" cy="-20" r="5" fill="#EF4444" className="hazard-ping" />
                  <line x1="20" y1="-20" x2="60" y2="-20" stroke="#EF4444" strokeWidth="1" />
                  <text x="65" y="-17" fill="#EF4444" fontSize="10" fontWeight="bold">H2S SPIKE</text>
                  <circle cx="-30" cy="30" r="4" fill="#10B981" />
                </g>

                {/* 7. Product Storage */}
                <g transform="translate(925, 535)">
                  <rect x="-70" y="-80" width="140" height="160" fill="#FFFFFF" stroke="#014BAA" strokeWidth="2" rx="8" filter="url(#dropShadow)" />
                  <text x="0" y="-90" textAnchor="middle" fill="#014BAA" fontSize="11" fontWeight="700">PRODUCT STORAGE</text>
                  
                  {/* Storage Silos */}
                  <circle cx="-30" cy="-40" r="22" fill="#F1F5F9" stroke="#94A3B8" />
                  <circle cx="30" cy="-40" r="22" fill="#F1F5F9" stroke="#94A3B8" />
                  <circle cx="-30" cy="20" r="22" fill="#F1F5F9" stroke="#94A3B8" />
                  <circle cx="30" cy="20" r="22" fill="#F1F5F9" stroke="#94A3B8" />
                  
                  <circle cx="-30" cy="-40" r="3" fill="#10B981" />
                  <circle cx="30" cy="-40" r="3" fill="#10B981" />
                  <circle cx="-30" cy="20" r="3" fill="#10B981" />
                  <circle cx="30" cy="20" r="3" fill="#10B981" />
                </g>

                {/* 8. Truck Bay */}
                <g transform="translate(1080, 535)">
                  <rect x="-50" y="-80" width="100" height="160" fill="#FFFFFF" stroke="#014BAA" strokeWidth="2" rx="8" filter="url(#dropShadow)" />
                  <text x="0" y="-90" textAnchor="middle" fill="#014BAA" fontSize="11" fontWeight="700">TRUCK BAY</text>
                  
                  {/* Trucks */}
                  <rect x="-30" y="-60" width="20" height="40" fill="#F59E0B" rx="2" filter="url(#dropShadow)" />
                  <rect x="10" y="-60" width="20" height="40" fill="#F59E0B" rx="2" filter="url(#dropShadow)" />
                  <rect x="-30" y="0" width="20" height="40" fill="#F59E0B" rx="2" filter="url(#dropShadow)" />
                  
                  <circle cx="-20" cy="-70" r="3" fill="#10B981" />
                </g>

                {/* 9. Captive Power & Control Room */}
                <g transform="translate(150, 550)">
                  <polygon points="-100,-100 100,-100 130,0 100,100 -100,100" fill="#FFFFFF" stroke="#014BAA" strokeWidth="2" filter="url(#dropShadow)" />
                  <text x="0" y="-75" textAnchor="middle" fill="#014BAA" fontSize="12" fontWeight="700">CAPTIVE POWER</text>
                  <circle cx="-30" cy="10" r="4" fill="#10B981" />
                  <circle cx="50" cy="50" r="4" fill="#10B981" />
                </g>
                <g transform="translate(425, 550)">
                  <rect x="-75" y="-75" width="150" height="150" fill="#F8FAFC" stroke="#014BAA" strokeWidth="2" rx="8" filter="url(#dropShadow)" />
                  <text x="0" y="-10" textAnchor="middle" fill="#014BAA" fontSize="12" fontWeight="700">CONTROL ROOM</text>
                  <circle cx="0" cy="20" r="4" fill="#10B981" />
                </g>
              </svg>

          </div>
        </div>

      </div>
    </div>
  );
}
