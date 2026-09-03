import React, { useState, useEffect } from 'react';
import { 
  FileText, Cpu, Database, Eye, ShieldCheck, 
  FileEdit, ShieldAlert, UserCheck, Lock, Activity, Server, Network
} from 'lucide-react';

const WORKFLOW = [
  { id: 1, name: 'Intake', details: 'scanned_report.pdf' },
  { id: 2, name: 'Classify', details: 'Commander Router' },
  { id: 3, name: 'Retrieve', details: 'Bi-Temporal Graph' },
  { id: 4, name: 'Agent Pool', details: 'Parallel Execution' },
  { id: 5, name: 'Sandbox', details: 'Zero-Network CodeAct' },
  { id: 6, name: 'Verify', details: 'Evidence Grounding' },
  { id: 7, name: 'Output', details: 'Approved DOCX' }
];

const EXPLANATIONS = {
  1: "User uploads scanned PDF securely. Local validation complete.",
  2: "Commander Agent routes the vision-heavy task to the Agent Pool.",
  3: "SOPs and templates retrieved from local Vector/Graph DB.",
  4: "Parallel Execution: Vision extracts schemas, Engineer parses diagrams.",
  5: "CodeAct executed in Sandbox with zero network egress.",
  6: "Output deterministically grounded against local evidence.",
  7: "Final structured DOCX artifact generated for approval."
};

export default function RichDashboard() {
  const [activeStep, setActiveStep] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep(prev => (prev >= 7 ? 1 : prev + 1));
    }, 4500); 
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="rich-dashboard">
      
      {/* 1. Left Sidebar: Live Audit & Explanation */}
      <div className="rd-sidebar">
        <div className="rd-brand">
          <div className="mrpl-logo">MRPL</div>
          <div>
            <h2>Sovereign AI</h2>
            <p>Knowledge-Work Runtime</p>
          </div>
        </div>

        <div className="rd-steps-container">
          <h3 className="sidebar-title">Execution Trace</h3>
          {WORKFLOW.map(step => (
            <div key={step.id} className={`rd-step ${activeStep === step.id ? 'active' : ''} ${activeStep > step.id ? 'past' : ''}`}>
              <div className="step-indicator">
                {activeStep > step.id ? <ShieldCheck size={14} /> : step.id}
              </div>
              <div className="step-text">
                <strong>{step.name}</strong>
                <span>{step.details}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="rd-proof-box">
          <h3 className="sidebar-title">Sovereignty Proof</h3>
          <div className="proof-item">
            <Lock size={16} /> <span>Network: Air-Gapped</span>
          </div>
          <div className="proof-item">
            <ShieldAlert size={16} /> <span>Egress: Default Deny</span>
          </div>
          <div className="proof-item">
            <Server size={16} /> <span>Inference: 100% Local</span>
          </div>
        </div>
      </div>

      {/* 2. Main Canvas: Complex Architecture & Engine */}
      <div className="rd-canvas">
        {/* Animated Parallax Grid */}
        <div className="blueprint-grid"></div>

        <h2 className="canvas-title">BACKEND ARCHITECTURE & ENGINE EXECUTION</h2>

        {/* 3D Isometric container for the whole diagram */}
        <div className="architecture-diagram container-3d">
          
          {/* SVG Connections with Animated Data Streams */}
          <svg className="rd-svg-lines" preserveAspectRatio="none">
            {/* Input to Router */}
            <path id="path1" d="M 400 450 C 440 450, 460 450, 480 450" className={`line ${activeStep >= 1 ? 'active' : ''}`} />
            
            {/* Router to DB */}
            <path id="path2" d="M 800 420 C 850 380, 850 240, 900 240" className={`line ${activeStep >= 2 ? 'active' : ''}`} />
            
            {/* Router to Engine */}
            <path id="path3" d="M 800 480 C 850 520, 850 660, 900 660" className={`line ${activeStep >= 2 ? 'active' : ''}`} />
            
            {/* DB to Sandbox */}
            <path id="path4" d="M 1220 240 C 1300 240, 1300 420, 1380 420" className={`line ${activeStep >= 3 ? 'active' : ''}`} />
            
            {/* Engine to Sandbox */}
            <path id="path5" d="M 1340 660 C 1380 660, 1350 480, 1380 480" className={`line ${activeStep >= 4 ? 'active' : ''}`} />

            {/* Glowing Data Packets moving along the paths in STREAMS */}
            {activeStep === 1 && (
              <>
                <circle r="4" fill="#ea580c" className="packet packet-3d"><animateMotion dur="1.5s" begin="0s" repeatCount="indefinite"><mpath href="#path1"/></animateMotion></circle>
                <circle r="4" fill="#ea580c" className="packet packet-3d"><animateMotion dur="1.5s" begin="0.5s" repeatCount="indefinite"><mpath href="#path1"/></animateMotion></circle>
                <circle r="4" fill="#ea580c" className="packet packet-3d"><animateMotion dur="1.5s" begin="1s" repeatCount="indefinite"><mpath href="#path1"/></animateMotion></circle>
              </>
            )}
            
            {activeStep === 2 && (
              <>
                <circle r="4" fill="#ea580c" className="packet packet-3d"><animateMotion dur="2s" begin="0s" repeatCount="indefinite"><mpath href="#path3"/></animateMotion></circle>
                <circle r="4" fill="#ea580c" className="packet packet-3d"><animateMotion dur="2s" begin="0.6s" repeatCount="indefinite"><mpath href="#path3"/></animateMotion></circle>
                <circle r="4" fill="#ea580c" className="packet packet-3d"><animateMotion dur="2s" begin="1.2s" repeatCount="indefinite"><mpath href="#path3"/></animateMotion></circle>
              </>
            )}

            {activeStep === 3 && (
              <>
                <circle r="4" fill="#3b82f6" className="packet packet-3d"><animateMotion dur="2.5s" begin="0s" repeatCount="indefinite"><mpath href="#path4"/></animateMotion></circle>
                <circle r="4" fill="#3b82f6" className="packet packet-3d"><animateMotion dur="2.5s" begin="0.8s" repeatCount="indefinite"><mpath href="#path4"/></animateMotion></circle>
                <circle r="4" fill="#3b82f6" className="packet packet-3d"><animateMotion dur="2.5s" begin="1.6s" repeatCount="indefinite"><mpath href="#path4"/></animateMotion></circle>
              </>
            )}

            {activeStep === 4 && (
              <>
                <circle r="4" fill="#10b981" className="packet packet-3d"><animateMotion dur="2s" begin="0s" repeatCount="indefinite"><mpath href="#path5"/></animateMotion></circle>
                <circle r="4" fill="#10b981" className="packet packet-3d"><animateMotion dur="2s" begin="0.6s" repeatCount="indefinite"><mpath href="#path5"/></animateMotion></circle>
                <circle r="4" fill="#10b981" className="packet packet-3d"><animateMotion dur="2s" begin="1.2s" repeatCount="indefinite"><mpath href="#path5"/></animateMotion></circle>
              </>
            )}
          </svg>

          {/* Nodes - Positioned massively with 3D classes */}
          
          <div className={`arch-node node-3d node-input ${activeStep === 1 ? 'pulse-3d' : ''}`} style={{ top: '390px', left: '80px' }}>
            <div className="node-number-badge">1</div>
            <div className="node-icon icon-3d"><FileText size={32} /></div>
            <div className="node-details">
              <h4>User Request</h4>
              <p>Scanned PDF / Query</p>
            </div>
            {activeStep === 1 && <div className="node-active-text">{EXPLANATIONS[1]}</div>}
            <div className="cyber-scanner"></div>
          </div>

          <div className={`arch-node node-3d node-router ${activeStep === 2 ? 'pulse-3d' : ''}`} style={{ top: '390px', left: '480px' }}>
            <div className="node-number-badge">2</div>
            <div className="node-icon icon-3d"><Network size={32} /></div>
            <div className="node-details">
              <h4>Commander Agent</h4>
              <p>Task Classification & Routing</p>
            </div>
            <div className="node-tags">
              <span>Risk Policy</span>
              <span>Modality Check</span>
            </div>
            {activeStep === 2 && <div className="node-active-text">{EXPLANATIONS[2]}</div>}
            <div className="cyber-scanner"></div>
          </div>

          <div className={`arch-node node-3d node-db ${activeStep === 3 ? 'pulse-3d' : ''}`} style={{ top: '180px', left: '900px' }}>
            <div className="node-number-badge">3</div>
            <div className="node-icon icon-3d"><Database size={32} /></div>
            <div className="node-details">
              <h4>Memory Retrieval</h4>
              <p>Vector DB + Temporal Graph</p>
            </div>
            <div className="node-tags">
              <span>Milvus</span>
              <span>Neo4j</span>
            </div>
            {activeStep === 3 && <div className="node-active-text">{EXPLANATIONS[3]}</div>}
            <div className="cyber-scanner"></div>
          </div>

          {/* THE ENGINE (Agent Pool) */}
          <div className="engine-container-wrapper node-3d" style={{ top: '540px', left: '900px', width: '440px' }}>
            <div className="node-number-badge" style={{ left: '-15px', top: '-15px' }}>4</div>
            <h4 className="engine-title">Parallel Agent Execution Engine</h4>
            <div className="engine-housing">
              {/* Rotating Gear / Crankshaft Visualization */}
              <div className={`crankshaft-gear gear-3d ${activeStep === 4 ? 'spinning' : ''}`}></div>
              <div className="crankshaft-line line-3d"></div>
              
              <div className="pistons-row">
                
                <div className="rd-piston">
                  <div className="rd-piston-label">Vision</div>
                  <div className={`rd-piston-mech ${activeStep === 4 ? 'pumping' : ''}`} style={{ animationDelay: '0s' }}>
                    <div className="rd-head head-3d" style={{ background: 'linear-gradient(135deg, #f472b6, #db2777)' }}><Eye size={20} /></div>
                    <div className="rd-rod rod-3d"></div>
                    <div className="rd-joint joint-3d" style={{ borderColor: '#db2777' }}></div>
                  </div>
                </div>

                <div className="rd-piston">
                  <div className="rd-piston-label">Engineer</div>
                  <div className={`rd-piston-mech ${activeStep === 4 ? 'pumping' : ''}`} style={{ animationDelay: '0.4s' }}>
                    <div className="rd-head head-3d" style={{ background: 'linear-gradient(135deg, #60a5fa, #2563eb)' }}><Cpu size={20} /></div>
                    <div className="rd-rod rod-3d"></div>
                    <div className="rd-joint joint-3d" style={{ borderColor: '#2563eb' }}></div>
                  </div>
                </div>

                <div className="rd-piston">
                  <div className="rd-piston-label">Research</div>
                  <div className={`rd-piston-mech ${activeStep === 4 ? 'pumping' : ''}`} style={{ animationDelay: '0.2s' }}>
                    <div className="rd-head head-3d" style={{ background: 'linear-gradient(135deg, #a78bfa, #7c3aed)' }}><FileText size={20} /></div>
                    <div className="rd-rod rod-3d"></div>
                    <div className="rd-joint joint-3d" style={{ borderColor: '#7c3aed' }}></div>
                  </div>
                </div>

                <div className="rd-piston">
                  <div className="rd-piston-label">Verify</div>
                  <div className={`rd-piston-mech ${activeStep === 4 ? 'pumping' : ''}`} style={{ animationDelay: '0.6s' }}>
                    <div className="rd-head head-3d" style={{ background: 'linear-gradient(135deg, #34d399, #059669)' }}><ShieldCheck size={20} /></div>
                    <div className="rd-rod rod-3d"></div>
                    <div className="rd-joint joint-3d" style={{ borderColor: '#059669' }}></div>
                  </div>
                </div>

              </div>
            </div>
            {activeStep === 4 && <div className="engine-active-glow"></div>}
            {activeStep === 4 && <div className="node-active-text">{EXPLANATIONS[4]}</div>}
            <div className="cyber-scanner"></div>
          </div>

          <div className={`arch-node node-3d node-sandbox ${activeStep >= 5 ? 'pulse-3d' : ''}`} style={{ top: '390px', left: '1380px' }}>
            <div className="node-number-badge">5</div>
            <div className="node-icon icon-3d"><ShieldAlert size={32} /></div>
            <div className="node-details">
              {activeStep >= 7 ? (
                <>
                  <h4>Output Delivery</h4>
                  <p>Approved DOCX Artifact</p>
                </>
              ) : (
                <>
                  <h4>Docker Sandbox</h4>
                  <p>Zero-Network Code Execution</p>
                </>
              )}
            </div>
            <div className="node-tags">
              <span>CodeAct</span>
              <span>Artifact Gen</span>
            </div>
            {(activeStep === 5 || activeStep === 6 || activeStep === 7) && <div className="node-active-text">{EXPLANATIONS[activeStep]}</div>}
            <div className="cyber-scanner"></div>
          </div>

        </div>

      </div>
    </div>
  );
}
