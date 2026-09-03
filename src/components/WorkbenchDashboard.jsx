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
          <h3><Map size={20}/> Facility Top View</h3>
          <div className="factory-map-container" style={{ position: 'relative', overflow: 'hidden', borderRadius: '4px', backgroundColor: '#0B101E' }}>
            <svg viewBox="0 0 800 400" className="factory-svg-complex" preserveAspectRatio="xMidYMid slice" style={{ width: '100%', height: '100%', opacity: 0.85 }}>
              {/* Complex background grid/roads */}
              <g stroke="var(--brand-cream)" strokeWidth="1" fill="none" opacity="0.3">
                {/* Random intersecting paths mimicking roads/pipes */}
                <path d="M-50 50 Q 200 100 400 50 T 850 150" />
                <path d="M-50 150 Q 300 300 500 200 T 850 350" />
                <path d="M 100 -50 Q 150 200 100 450" />
                <path d="M 300 -50 Q 250 250 400 450" />
                <path d="M 600 -50 Q 550 200 700 450" />
                <path d="M 0 350 L 800 50" />
                <path d="M 0 50 L 800 350" />
                
                {/* Secondary finer grid */}
                <path d="M 50 0 L 50 400 M 150 0 L 150 400 M 250 0 L 250 400 M 350 0 L 350 400 M 450 0 L 450 400 M 550 0 L 550 400 M 650 0 L 650 400 M 750 0 L 750 400" strokeWidth="0.5" opacity="0.5"/>
                <path d="M 0 50 L 800 50 M 0 100 L 800 100 M 0 150 L 800 150 M 0 200 L 800 200 M 0 250 L 800 250 M 0 300 L 800 300 M 0 350 L 800 350" strokeWidth="0.5" opacity="0.5"/>
              </g>

              {/* Main arterial pipes/roads */}
              <g stroke="var(--brand-brown)" strokeWidth="3" fill="none" opacity="0.8">
                <path d="M 200 100 L 400 200 L 600 150" />
                <path d="M 400 200 L 400 350 L 550 350" />
                <path d="M 200 100 L 100 250 L 250 350 L 400 350" />
              </g>

              {/* Functional Zones / Buildings */}
              <g fill="var(--bg-panel)" stroke="var(--brand-brown)" strokeWidth="1.5">
                <polygon points="180,80 220,90 230,120 170,110" />
                <polygon points="380,180 440,190 420,230 370,210" />
                <polygon points="580,130 630,120 640,160 590,170" />
                <polygon points="90,240 120,230 140,270 100,280" />
                <polygon points="230,340 270,330 280,370 240,380" />
                <polygon points="530,340 570,330 580,370 540,380" />
              </g>

              {/* Highlighted Data Nodes */}
              <g>
                {/* Node 1 - Normal */}
                <circle cx="200" cy="100" r="6" fill="var(--brand-cream)" />
                <text x="200" y="70" textAnchor="middle" fill="var(--brand-cream)" fontSize="12" fontWeight="600" letterSpacing="1">UNIT ALPHA</text>

                {/* Node 2 - Warning / Anomaly */}
                <circle cx="400" cy="200" r="8" fill="var(--brand-brown)" />
                <circle cx="400" cy="200" r="14" fill="none" stroke="var(--brand-brown)" strokeWidth="2" strokeDasharray="4 4" className="rotating-ring" />
                <text x="400" y="170" textAnchor="middle" fill="var(--brand-brown)" fontSize="14" fontWeight="700" letterSpacing="1">PUMP P101</text>
                <text x="400" y="225" textAnchor="middle" fill="var(--brand-cream)" fontSize="10">TEMP ANOMALY DETECTED</text>
                
                {/* Node 3 - Normal */}
                <circle cx="600" cy="150" r="6" fill="var(--brand-cream)" />
                <text x="600" y="120" textAnchor="middle" fill="var(--brand-cream)" fontSize="12" fontWeight="600" letterSpacing="1">REFINERY B</text>

                {/* Node 4 - Normal */}
                <circle cx="100" cy="250" r="5" fill="var(--brand-cream)" />
                <text x="70" y="240" textAnchor="end" fill="var(--brand-cream)" fontSize="10" letterSpacing="1">STORAGE</text>

                {/* Node 5 - Normal */}
                <circle cx="550" cy="350" r="5" fill="var(--brand-cream)" />
                <text x="580" y="360" textAnchor="start" fill="var(--brand-cream)" fontSize="10" letterSpacing="1">CONTROL</text>
              </g>

              {/* Data streams (animated dashes) */}
              <g stroke="var(--brand-cream)" strokeWidth="1.5" fill="none" strokeDasharray="5 10" className="data-stream">
                <path d="M 200 100 L 400 200" />
                <path d="M 600 150 L 400 200" />
                <path d="M 400 350 L 400 200" />
              </g>
            </svg>
            
            {/* Map Overlay Stats */}
            <div style={{position: 'absolute', top: '16px', left: '16px', background: 'rgba(11, 16, 30, 0.8)', padding: '12px', border: '1px solid var(--brand-brown)', borderRadius: '4px'}}>
              <div style={{color: 'var(--brand-cream)', fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '4px'}}>LIVE FEED</div>
              <div style={{color: 'var(--text-secondary)', fontSize: '0.75rem'}}>Sector 4 Active</div>
              <div style={{color: 'var(--brand-brown)', fontSize: '0.75rem', marginTop: '4px', fontWeight: 'bold'}}>1 Anomaly Detected</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
