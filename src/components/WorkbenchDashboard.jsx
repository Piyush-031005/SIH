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

        {/* 9. Facility Top View Map */}
        <div className="wb-panel glass-panel map-panel">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', borderBottom: '1px solid var(--border-color)', paddingBottom: '12px' }}>
            <h3 style={{ border: 'none', margin: 0, padding: 0 }}><Map size={20}/> Facility Top View</h3>
            <div style={{ display: 'flex', gap: '10px' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--brand-cream)', display: 'flex', alignItems: 'center', gap: '4px' }}><div style={{width: 8, height: 8, borderRadius: '50%', backgroundColor: 'var(--brand-cream)'}}></div> Normal</span>
              <span style={{ fontSize: '0.75rem', color: 'var(--brand-brown)', display: 'flex', alignItems: 'center', gap: '4px' }}><div style={{width: 8, height: 8, borderRadius: '50%', backgroundColor: 'var(--brand-brown)'}}></div> Alert</span>
            </div>
          </div>
          
          <div className="factory-map-container" style={{ position: 'relative', overflow: 'hidden', borderRadius: '6px', backgroundColor: '#040810', border: '1px solid #1A2235' }}>
            <svg viewBox="0 0 1000 500" className="factory-svg-complex" preserveAspectRatio="xMidYMid slice" style={{ width: '100%', height: '100%' }}>
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(242, 232, 207, 0.05)" strokeWidth="1"/>
                </pattern>
                <pattern id="smallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(242, 232, 207, 0.02)" strokeWidth="0.5"/>
                </pattern>
              </defs>

              {/* Background Grids */}
              <rect width="100%" height="100%" fill="url(#smallGrid)" />
              <rect width="100%" height="100%" fill="url(#grid)" />

              {/* Complex Background Infrastructure (Roads/Pipes) */}
              <g stroke="rgba(242, 232, 207, 0.15)" strokeWidth="1.5" fill="none">
                <path d="M -50 100 L 300 100 L 400 250 L 800 250 L 1050 100" />
                <path d="M 150 -50 L 150 150 L 250 250 L 250 550" />
                <path d="M 450 550 L 450 400 L 600 250 L 600 -50" />
                <path d="M 850 550 L 850 350 L 700 250 L 700 -50" />
                <path d="M -50 350 L 200 350 L 300 450 L 1050 450" />
                
                {/* Diagonal secondary paths */}
                <path d="M 0 0 L 1000 500" strokeWidth="0.5" strokeDasharray="4 4" />
                <path d="M 0 500 L 1000 0" strokeWidth="0.5" strokeDasharray="4 4" />
              </g>

              {/* Complex Polygonal Rooms / Zones (Like Among Us Map) */}
              <g fill="#0B101E" stroke="var(--brand-cream)" strokeWidth="2" opacity="0.9">
                {/* Zone 1: Storage / Receiving */}
                <polygon points="50,150 200,150 250,200 200,300 50,300 20,225" />
                
                {/* Zone 2: Main Processing (Octagon-ish) */}
                <polygon points="350,100 550,100 650,200 650,350 550,450 350,450 250,350 250,200" />
                
                {/* Zone 3: Control & Admin */}
                <polygon points="700,50 900,50 950,150 900,250 700,250 650,150" />
                
                {/* Zone 4: Power / Utility */}
                <polygon points="750,300 950,300 950,450 700,450 680,375" />
              </g>

              {/* Corridors / Connecting Tubes */}
              <g stroke="rgba(166, 124, 82, 0.6)" strokeWidth="6" fill="none">
                <path d="M 225 225 L 300 225" />
                <path d="M 600 175 L 675 175" />
                <path d="M 600 375 L 725 375" />
              </g>

              {/* Animated Data Flows inside corridors */}
              <g stroke="var(--brand-cream)" strokeWidth="2" fill="none" strokeDasharray="5 10" className="data-stream">
                <path d="M 225 225 L 300 225" />
                <path d="M 675 175 L 600 175" />
                <path d="M 725 375 L 600 375" />
              </g>

              {/* Interior Details & Room Labels */}
              <g fill="var(--brand-cream)" fontFamily="Inter">
                {/* Storage */}
                <text x="135" y="210" textAnchor="middle" fontSize="16" fontWeight="700" letterSpacing="2">TANK FARM</text>
                <text x="135" y="230" textAnchor="middle" fontSize="10" opacity="0.7">CAPACITY: 84%</text>
                <rect x="70" y="240" width="40" height="40" fill="none" stroke="rgba(242, 232, 207, 0.3)" />
                <rect x="120" y="240" width="40" height="40" fill="none" stroke="rgba(242, 232, 207, 0.3)" />
                <rect x="170" y="240" width="40" height="40" fill="none" stroke="rgba(242, 232, 207, 0.3)" />
                <circle cx="90" cy="260" r="10" fill="rgba(242, 232, 207, 0.2)" />
                <circle cx="140" cy="260" r="10" fill="rgba(242, 232, 207, 0.2)" />
                <circle cx="190" cy="260" r="10" fill="rgba(242, 232, 207, 0.2)" />

                {/* Main Processing */}
                <text x="450" y="250" textAnchor="middle" fontSize="20" fontWeight="800" letterSpacing="3">CRACKING UNIT</text>
                
                {/* Control Admin */}
                <text x="815" y="140" textAnchor="middle" fontSize="16" fontWeight="700" letterSpacing="2">COMMAND CENTER</text>
                <text x="815" y="160" textAnchor="middle" fontSize="10" opacity="0.7">PERSONNEL: 12</text>
                
                {/* Power */}
                <text x="840" y="370" textAnchor="middle" fontSize="16" fontWeight="700" letterSpacing="2">GENERATOR</text>
              </g>

              {/* Highly Informative Sensor Nodes (The "Informative" aspect) */}
              
              {/* Sensor 1 - Storage */}
              <g transform="translate(80, 160)">
                <circle cx="0" cy="0" r="6" fill="var(--brand-cream)" />
                <line x1="0" y1="0" x2="-20" y2="-20" stroke="var(--brand-cream)" strokeWidth="1" />
                <rect x="-100" y="-55" width="90" height="35" fill="rgba(11, 16, 30, 0.9)" stroke="var(--brand-cream)" strokeWidth="1" rx="2" />
                <text x="-95" y="-40" fill="var(--brand-cream)" fontSize="10" fontWeight="700">T-101 LVL</text>
                <text x="-95" y="-25" fill="rgba(242, 232, 207, 0.7)" fontSize="10">84.2% | STABLE</text>
              </g>

              {/* Sensor 2 - Main Processing (CRITICAL ANOMALY) */}
              <g transform="translate(450, 350)">
                <circle cx="0" cy="0" r="8" fill="var(--brand-brown)" />
                <circle cx="0" cy="0" r="16" fill="none" stroke="var(--brand-brown)" strokeWidth="2" strokeDasharray="4 4" className="rotating-ring" />
                <line x1="0" y1="0" x2="40" y2="40" stroke="var(--brand-brown)" strokeWidth="1.5" />
                <rect x="40" y="40" width="130" height="50" fill="rgba(166, 124, 82, 0.15)" stroke="var(--brand-brown)" strokeWidth="1.5" rx="2" />
                <text x="48" y="58" fill="var(--brand-brown)" fontSize="11" fontWeight="800">PUMP P101 - ALERT</text>
                <text x="48" y="72" fill="var(--brand-cream)" fontSize="10">TEMP: 82°C (HIGH)</text>
                <text x="48" y="84" fill="var(--brand-cream)" fontSize="10">VIB: 4.2 mm/s</text>
              </g>

              {/* Sensor 3 - Control */}
              <g transform="translate(750, 200)">
                <circle cx="0" cy="0" r="6" fill="var(--brand-cream)" />
                <line x1="0" y1="0" x2="-30" y2="20" stroke="var(--brand-cream)" strokeWidth="1" />
                <rect x="-110" y="20" width="80" height="35" fill="rgba(11, 16, 30, 0.9)" stroke="var(--brand-cream)" strokeWidth="1" rx="2" />
                <text x="-105" y="35" fill="var(--brand-cream)" fontSize="10" fontWeight="700">NETWORK</text>
                <text x="-105" y="50" fill="rgba(242, 232, 207, 0.7)" fontSize="10">AIR-GAPPED</text>
              </g>

              {/* Camera / Surveillance Icons (Adding realism like Among Us security) */}
              <g fill="none" stroke="var(--brand-cream)" strokeWidth="1.5">
                <circle cx="300" cy="110" r="8" />
                <circle cx="300" cy="110" r="3" fill="var(--brand-cream)" />
                <path d="M 300 102 L 315 90 M 300 118 L 315 130" strokeWidth="1" opacity="0.5" />
                
                <circle cx="600" cy="400" r="8" />
                <circle cx="600" cy="400" r="3" fill="var(--brand-cream)" />
                <path d="M 600 408 L 585 420 M 600 392 L 585 380" strokeWidth="1" opacity="0.5" />
              </g>
            </svg>
            
            {/* Map Overlay Stats Panel */}
            <div style={{position: 'absolute', top: '16px', left: '16px', background: 'rgba(6, 11, 20, 0.85)', padding: '16px', border: '1px solid var(--border-color)', borderRadius: '6px', backdropFilter: 'blur(4px)'}}>
              <div style={{color: 'var(--brand-cream)', fontSize: '0.9rem', fontWeight: 'bold', marginBottom: '12px', letterSpacing: '1px'}}>SYSTEM TELEMETRY</div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '150px', fontSize: '0.8rem' }}>
                  <span style={{color: 'var(--text-secondary)'}}>Overall Status:</span>
                  <span style={{color: 'var(--brand-brown)', fontWeight: 'bold'}}>WARNING</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '150px', fontSize: '0.8rem' }}>
                  <span style={{color: 'var(--text-secondary)'}}>Active Nodes:</span>
                  <span style={{color: 'var(--brand-cream)'}}>142</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '150px', fontSize: '0.8rem' }}>
                  <span style={{color: 'var(--text-secondary)'}}>Bandwidth:</span>
                  <span style={{color: 'var(--brand-cream)'}}>Local Only</span>
                </div>
              </div>

              <div style={{ marginTop: '16px', paddingTop: '12px', borderTop: '1px solid var(--border-color)' }}>
                <div style={{color: 'var(--brand-brown)', fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase'}}>AI Diagnostic Focus:</div>
                <div style={{color: 'var(--brand-cream)', fontSize: '0.85rem', marginTop: '4px'}}>Cracking Unit → Pump P101</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
