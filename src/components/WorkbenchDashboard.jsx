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

          <div className="factory-map-container" style={{ position: 'relative', overflow: 'hidden', borderRadius: '6px', backgroundColor: '#323639', border: '1px solid var(--border-color)' }}>
            
              <svg viewBox="0 0 1200 700" className="factory-svg-complex" preserveAspectRatio="xMidYMid slice" style={{ width: '100%', height: '100%', backgroundColor: '#0A1128' }}>
                <defs>
                  {/* Glowing Filters */}
                  <filter id="glowGold" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="blur"/>
                    <feMerge>
                      <feMergeNode in="blur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                  <filter id="glowCyan" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="2" result="blur"/>
                    <feMerge>
                      <feMergeNode in="blur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>

                  {/* Complex City Grid Pattern */}
                  <pattern id="cityGrid" width="100" height="100" patternUnits="userSpaceOnUse">
                    {/* Base intricate lines */}
                    <path d="M 100 0 L 0 0 0 100" fill="none" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1"/>
                    <path d="M 0 50 L 100 50" fill="none" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="0.5"/>
                    <path d="M 50 0 L 50 100" fill="none" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="0.5"/>
                    
                    {/* Diagonals to simulate city streets */}
                    <path d="M 0 0 L 100 100" fill="none" stroke="rgba(255, 255, 255, 0.02)" strokeWidth="0.5"/>
                    <path d="M 100 0 L 0 100" fill="none" stroke="rgba(255, 255, 255, 0.02)" strokeWidth="0.5"/>
                    <path d="M 0 25 L 100 75" fill="none" stroke="rgba(56, 189, 248, 0.1)" strokeWidth="1"/>
                  </pattern>
                </defs>

                {/* Base Grid */}
                <rect x="0" y="0" width="1200" height="700" fill="url(#cityGrid)" />

                {/* Complex Highways / Main Paths */}
                <g opacity="0.8">
                  {/* Highway 1 - Cyan */}
                  <path d="M -50 200 C 200 150, 400 350, 600 300 S 900 100, 1250 250" fill="none" stroke="#38bdf8" strokeWidth="2" filter="url(#glowCyan)"/>
                  <path d="M -50 205 C 200 155, 400 355, 600 305 S 900 105, 1250 255" fill="none" stroke="#38bdf8" strokeWidth="1" opacity="0.5"/>
                  
                  {/* Highway 2 - Gold */}
                  <path d="M -50 600 C 300 650, 500 450, 700 500 S 1000 700, 1250 550" fill="none" stroke="#F98513" strokeWidth="3" filter="url(#glowGold)"/>
                  <path d="M 300 0 C 350 200, 150 400, 250 750" fill="none" stroke="#F98513" strokeWidth="2" filter="url(#glowGold)"/>
                  
                  {/* Arterial Connecting Streets */}
                  <path d="M 270 215 L 430 420 L 650 480" fill="none" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="4 2"/>
                  <path d="M 700 500 L 950 300 L 1150 380" fill="none" stroke="#F98513" strokeWidth="1" strokeDasharray="2 2"/>
                  
                  {/* Glowing Intersections */}
                  <circle cx="270" cy="215" r="4" fill="#38bdf8" filter="url(#glowCyan)"/>
                  <circle cx="430" cy="420" r="3" fill="#ffffff"/>
                  <circle cx="700" cy="500" r="6" fill="#F98513" filter="url(#glowGold)"/>
                  <circle cx="600" cy="300" r="5" fill="#38bdf8" filter="url(#glowCyan)"/>
                  <circle cx="950" cy="300" r="4" fill="#ffffff"/>
                </g>

                {/* --- 3. Functional Nodes & Telemetry (Positioned above the grid) --- */}
                
                {/* Node 1: Reactor */}
                <g transform="translate(450, 320)">
                  <polygon points="0,-60 52,-30 52,30 0,60 -52,30 -52,-30" fill="rgba(10, 17, 40, 0.9)" stroke="#F98513" strokeWidth="2" filter="url(#glowGold)"/>
                  <circle cx="0" cy="0" r="20" fill="none" stroke="#F98513" strokeWidth="2" strokeDasharray="4 2">
                    <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="10s" repeatCount="indefinite"/>
                  </circle>
                  <text x="0" y="5" fill="#ffffff" fontSize="14" fontWeight="bold" textAnchor="middle">FCCU</text>
                  
                  {/* Alert Box Line */}
                  <path d="M 20 -20 L 80 -60 L 220 -60" fill="none" stroke="#ef4444" strokeWidth="1.5" />
                  <circle cx="20" cy="-20" r="3" fill="#ef4444" />
                </g>
                
                {/* Alert Box Content */}
                <g transform="translate(530, 260)">
                  <rect x="0" y="-40" width="140" height="40" fill="rgba(239, 68, 68, 0.1)" stroke="#ef4444" strokeWidth="1" rx="4"/>
                  <text x="10" y="-25" fill="#ef4444" fontSize="10" fontWeight="bold">FCCU REACTOR ALERT</text>
                  <text x="10" y="-12" fill="#ffffff" fontSize="8">PRESSURE: 42.5 kg/cm²</text>
                  <text x="10" y="-2" fill="#ffffff" fontSize="8">VALVE V-204 STUCK</text>
                </g>

                {/* Node 2: CDU */}
                <g transform="translate(250, 420)">
                  <polygon points="-40,-30 40,-30 60,0 40,30 -40,30 -60,0" fill="rgba(10, 17, 40, 0.9)" stroke="#38bdf8" strokeWidth="1.5"/>
                  <text x="0" y="-5" fill="#ffffff" fontSize="12" fontWeight="bold" textAnchor="middle">CDU / VDU</text>
                  <circle cx="-20" cy="15" r="4" fill="#4ade80" filter="url(#glowCyan)"/>
                  <circle cx="20" cy="-10" r="3" fill="#ffffff" />
                </g>

                {/* Node 3: Tank Farm */}
                <g transform="translate(100, 300)">
                  <rect x="-60" y="-60" width="120" height="150" fill="rgba(10, 17, 40, 0.9)" stroke="#F98513" strokeWidth="1.5" rx="4"/>
                  <text x="0" y="-45" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">CRUDE TANK FARM</text>
                  
                  <circle cx="-30" cy="-10" r="16" fill="none" stroke="#38bdf8" strokeWidth="1"/>
                  <circle cx="-30" cy="-10" r="3" fill="#4ade80" />
                  
                  <circle cx="30" cy="-10" r="16" fill="none" stroke="#38bdf8" strokeWidth="1"/>
                  <circle cx="30" cy="-10" r="3" fill="#4ade80" />
                  
                  <circle cx="-30" cy="30" r="16" fill="none" stroke="#38bdf8" strokeWidth="1"/>
                  <circle cx="-30" cy="30" r="3" fill="#4ade80" />
                  
                  <circle cx="30" cy="30" r="16" fill="none" stroke="#F98513" strokeWidth="1"/>
                  <circle cx="30" cy="30" r="4" fill="#F98513" filter="url(#glowGold)"/>
                </g>

              </svg>

          </div>
        </div>

      </div>
    </div>
  );
}
