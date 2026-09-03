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
              <span className="sec-value text-red"><WifiOff size={16}/> Disabled</span>
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
              <span className="h-value">82°C <span className="text-red">↑</span></span>
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
              <span style={{ fontSize: '0.75rem', color: '#4ade80', display: 'flex', alignItems: 'center', gap: '4px' }}><div style={{width: 8, height: 8, borderRadius: '50%', backgroundColor: '#4ade80'}}></div> Normal Operation</span>
              <span style={{ fontSize: '0.75rem', color: '#facc15', display: 'flex', alignItems: 'center', gap: '4px' }}><div style={{width: 8, height: 8, borderRadius: '50%', backgroundColor: '#facc15'}}></div> Warning</span>
              <span style={{ fontSize: '0.75rem', color: '#ef4444', display: 'flex', alignItems: 'center', gap: '4px' }}><div style={{width: 8, height: 8, borderRadius: '50%', backgroundColor: '#ef4444'}}></div> Critical Alert</span>
            </div>
          </div>
          
          <div style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
            <div style={{ flex: 1, background: 'var(--bg-panel)', padding: '16px', borderRadius: '6px', border: '1px solid var(--border-color)' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '1px' }}>Plant Status</div>
              <div style={{ fontSize: '1.1rem', color: '#ef4444', fontWeight: 'bold' }}>CRITICAL ALERT</div>
            </div>
            <div style={{ flex: 1, background: 'var(--bg-panel)', padding: '16px', borderRadius: '6px', border: '1px solid var(--border-color)' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '1px' }}>Sensors Online</div>
              <div style={{ fontSize: '1.1rem', color: 'var(--text-primary)', fontWeight: 'bold' }}>12,458</div>
            </div>
            <div style={{ flex: 1, background: 'var(--bg-panel)', padding: '16px', borderRadius: '6px', border: '1px solid var(--border-color)' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '1px' }}>Crude Throughput</div>
              <div style={{ fontSize: '1.1rem', color: 'var(--text-primary)', fontWeight: 'bold' }}>320 TBD</div>
            </div>
            <div style={{ flex: 2, background: 'rgba(239, 68, 68, 0.05)', padding: '16px', borderRadius: '6px', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
              <div style={{ fontSize: '0.75rem', color: '#ef4444', marginBottom: '4px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>AI Diagnostic Focus</div>
              <div style={{ fontSize: '1.1rem', color: '#ef4444', fontWeight: 'bold' }}>FCCU Reactor → Valve V-204 Stuck</div>
            </div>
          </div>

          <div className="factory-map-container" style={{ position: 'relative', overflow: 'hidden', borderRadius: '6px', backgroundColor: '#060B14', border: '1px solid var(--border-color)' }}>
            <svg viewBox="0 0 1200 700" className="factory-svg-complex" preserveAspectRatio="xMidYMid slice" style={{ width: '100%', height: '100%' }}>
              <defs>
                <pattern id="gridLarge" width="50" height="50" patternUnits="userSpaceOnUse">
                  <path d="M 50 0 L 0 0 0 50" fill="none" stroke="var(--border-color)" opacity="0.3" strokeWidth="1"/>
                </pattern>
                <pattern id="gridSmall" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="var(--border-color)" opacity="0.15" strokeWidth="0.5"/>
                </pattern>
                <filter id="glowRed">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {/* Background Grids */}
              <rect x="0" y="0" width="1200" height="700" fill="url(#gridSmall)" />
              <rect x="0" y="0" width="1200" height="700" fill="url(#gridLarge)" />

              {/* Complex Arterial Pipe Network (The Main Pipe Rack) */}
              <g stroke="rgba(251, 191, 36, 0.3)" strokeWidth="3" fill="none" opacity="0.8">
                {/* Horizontal main rack */}
                <path d="M 50 350 L 1150 350" />
                <path d="M 50 360 L 1150 360" />
                <path d="M 50 340 L 1150 340" />
                
                {/* Vertical racks branching off */}
                <path d="M 300 100 L 300 600" />
                <path d="M 310 100 L 310 600" />
                <path d="M 550 50 L 550 650" />
                <path d="M 560 50 L 560 650" />
                <path d="M 800 150 L 800 550" />
                
                {/* Interconnecting pipes */}
                <path d="M 150 150 L 300 150" strokeWidth="2" />
                <path d="M 310 200 L 550 200" strokeWidth="2" />
                <path d="M 560 250 L 800 250" strokeWidth="2" />
                <path d="M 560 500 L 800 500" strokeWidth="2" />
                <path d="M 800 450 L 1050 450" strokeWidth="2" />
                
                {/* Micro piping */}
                <path d="M 350 300 L 350 400 M 400 300 L 400 400 M 450 300 L 450 400" strokeWidth="1" stroke="var(--text-secondary)" opacity="0.3" />
                <path d="M 600 300 L 600 400 M 650 300 L 650 400 M 700 300 L 700 400" strokeWidth="1" stroke="var(--text-secondary)" opacity="0.3" />
              </g>

              {/* Functional Zones / Refinery Units */}
              <g fill="#111827" stroke="var(--brand-brown)" strokeWidth="1.5" opacity="0.95">
                {/* Crude Tank Farm */}
                <rect x="50" y="50" width="200" height="250" rx="4" />
                
                {/* CDU / VDU (Crude/Vacuum Distillation) */}
                <polygon points="350,80 500,80 520,130 500,180 350,180 330,130" />
                
                {/* FCCU (Fluid Catalytic Cracking Unit) */}
                <polygon points="600,60 750,60 780,150 750,240 600,240 570,150" />
                
                {/* Hydrocracker / DHDT */}
                <rect x="850" y="80" width="200" height="150" rx="4" />
                
                {/* SRU (Sulfur Recovery Unit) */}
                <polygon points="600,450 750,450 750,600 600,600 550,525" />
                
                {/* Product Storage */}
                <rect x="850" y="450" width="250" height="200" rx="4" />
                
                {/* Utilities / Power */}
                <polygon points="50,450 250,450 280,550 250,650 50,650" />
                
                {/* Command Center */}
                <rect x="350" y="450" width="150" height="150" rx="4" fill="var(--bg-hover)" opacity="0.5" />
              </g>

              {/* Tank Farm Details (Top View Circles) */}
              <g fill="var(--border-color)" opacity="0.3" stroke="var(--brand-cream)" strokeWidth="1">
                {/* Crude Tanks */}
                <circle cx="100" cy="110" r="30" />
                <circle cx="180" cy="110" r="30" />
                <circle cx="100" cy="190" r="30" />
                <circle cx="180" cy="190" r="30" />
                {/* Product Tanks */}
                <circle cx="910" cy="510" r="25" />
                <circle cx="980" cy="510" r="25" />
                <circle cx="1050" cy="510" r="25" />
                <circle cx="910" cy="580" r="25" />
                <circle cx="980" cy="580" r="25" />
                <circle cx="1050" cy="580" r="25" />
              </g>

              {/* Labels & Structural Details */}
              <g fill="var(--brand-cream)" fontFamily="Inter" fontSize="12" fontWeight="700" letterSpacing="1.5">
                <text x="150" y="40" textAnchor="middle">CRUDE TANK FARM</text>
                <text x="425" y="135" textAnchor="middle">CDU / VDU</text>
                <text x="675" y="155" textAnchor="middle" fontSize="16">FCCU</text>
                <text x="950" y="70" textAnchor="middle">HYDROCRACKER</text>
                <text x="675" y="440" textAnchor="middle">SULFUR RECOVERY</text>
                <text x="975" y="435" textAnchor="middle">PRODUCT STORAGE</text>
                <text x="150" y="440" textAnchor="middle">CAPTIVE POWER</text>
                <text x="425" y="525" textAnchor="middle">CONTROL ROOM</text>
              </g>

              {/* Flare Stack */}
              <g transform="translate(150, 310)">
                <circle cx="0" cy="0" r="10" fill="none" stroke="#facc15" strokeWidth="2" />
                <circle cx="0" cy="0" r="4" fill="#ef4444" className="hazard-ping" />
                <text x="0" y="-18" textAnchor="middle" fill="var(--brand-cream)" fontSize="10" fontWeight="600">FLARE STACK</text>
              </g>

              {/* 🟢 Status Signals: NORMAL (Green) */}
              <g>
                <circle cx="100" cy="110" r="4" fill="#4ade80" />
                <circle cx="180" cy="110" r="4" fill="#4ade80" />
                <circle cx="100" cy="190" r="4" fill="#4ade80" />
                <circle cx="390" cy="150" r="4" fill="#4ade80" />
                <circle cx="450" cy="100" r="4" fill="#4ade80" />
                <circle cx="880" cy="120" r="4" fill="#4ade80" />
                <circle cx="1020" cy="180" r="4" fill="#4ade80" />
                <circle cx="910" cy="510" r="4" fill="#4ade80" />
                <circle cx="120" cy="550" r="4" fill="#4ade80" />
                <circle cx="200" cy="600" r="4" fill="#4ade80" />
                <circle cx="425" cy="550" r="4" fill="#4ade80" />
                <circle cx="630" cy="550" r="4" fill="#4ade80" />
              </g>

              {/* 🟡 Status Signals: WARNING (Yellow) */}
              <g>
                <circle cx="180" cy="190" r="4" fill="#facc15" />
                <line x1="180" y1="190" x2="220" y2="230" stroke="#facc15" strokeWidth="1" />
                <text x="225" y="240" fill="#facc15" fontSize="10">LVL 95%</text>
                
                <circle cx="700" cy="500" r="4" fill="#facc15" />
                <text x="710" y="505" fill="#facc15" fontSize="10">H2S SPIKE</text>
              </g>

              {/* 🔴 Status Signals: CRITICAL ALERT (Red) inside FCCU */}
              <g transform="translate(680, 150)">
                <circle cx="0" cy="0" r="6" fill="#ef4444" filter="url(#glowRed)" className="hazard-ping" />
                <circle cx="0" cy="0" r="15" fill="none" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 4" className="rotating-ring" />
                
                {/* Warning Popup Overlay */}
                <line x1="0" y1="0" x2="70" y2="-50" stroke="#ef4444" strokeWidth="1.5" />
                <rect x="70" y="-85" width="180" height="65" fill="#111827" stroke="#ef4444" strokeWidth="1.5" rx="4" />
                <text x="78" y="-65" fill="#ef4444" fontSize="12" fontWeight="800">FCCU REACTOR ALERT</text>
                <text x="78" y="-48" fill="var(--brand-cream)" fontSize="10">PRESSURE: 42.5 kg/cm²</text>
                <text x="78" y="-32" fill="var(--brand-cream)" fontSize="10">VALVE V-204 STUCK</text>
              </g>
              
              {/* Animated Data Flows indicating active pumping */}
              <g stroke="var(--brand-cream)" strokeWidth="2" fill="none" strokeDasharray="5 15" className="data-stream">
                <path d="M 300 200 L 300 350 L 550 350 L 550 200" />
                <path d="M 550 350 L 800 350 L 800 250" />
                <path d="M 800 350 L 1050 350" />
              </g>
            </svg>
          </div>
        </div>

      </div>
    </div>
  );
}
