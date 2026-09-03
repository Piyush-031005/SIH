import React, { useState, useEffect } from 'react';
import { 
  FileText, Cpu, Database, ShieldCheck, 
  Activity, Network, UploadCloud, CheckCircle2
} from 'lucide-react';

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
    }, 3000); 
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="rich-dashboard-3panel" style={{ display: 'flex', width: '100vw', height: '100vh', background: 'var(--bg-main)', color: 'var(--text-primary)', overflow: 'hidden' }}>
      
      {/* PANEL 1: USER VIEW (INPUT) */}
      <div style={{ flex: '0 0 25%', borderRight: '1px solid var(--border-color)', background: 'var(--bg-panel)', padding: '2rem', display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
          <div style={{ background: 'var(--brand-brown)', color: '#fff', padding: '0.5rem', borderRadius: '4px', fontWeight: 'bold' }}>MRPL</div>
          <div>
            <h2 style={{ margin: 0, fontSize: '1.2rem', color: 'var(--text-primary)' }}>Sovereign AI</h2>
            <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-secondary)' }}>User Portal</p>
          </div>
        </div>
        
        <div style={{ marginTop: '2rem', flex: 1 }}>
          <h3 style={{ fontSize: '0.9rem', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: '1rem' }}>Upload Document</h3>
          
          <div style={{ border: activeStep === 1 ? '2px solid var(--brand-brown)' : '2px dashed var(--border-color)', borderRadius: '8px', padding: '2rem', textAlign: 'center', transition: 'all 0.3s', background: activeStep === 1 ? 'rgba(249, 133, 19, 0.1)' : 'transparent' }}>
            <UploadCloud size={32} color={activeStep === 1 ? 'var(--brand-brown)' : 'var(--text-secondary)'} style={{ margin: '0 auto 1rem' }} />
            <p style={{ margin: 0, fontSize: '0.9rem' }}>Drag & Drop Maintenance Log</p>
            <p style={{ margin: '0.5rem 0 0', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>PDF, DOCX, CSV</p>
          </div>

          <div style={{ marginTop: '2rem', padding: '1rem', background: 'var(--bg-hover)', borderRadius: '8px', borderLeft: '3px solid var(--brand-brown)' }}>
            <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '0.85rem' }}>Current Status:</h4>
            <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{EXPLANATIONS[activeStep]}</p>
          </div>
        </div>
      </div>

      {/* PANEL 2: ENGINE PIPELINE (PROCESSING) */}
      <div style={{ flex: '1', position: 'relative', padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h2 style={{ position: 'absolute', top: '2rem', left: '2rem', fontSize: '1.1rem', letterSpacing: '2px', color: 'var(--text-secondary)' }}>BACKEND ENGINE WORKFLOW</h2>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '3rem', transform: 'scale(0.85)' }}>
          {/* Router Node */}
          <div style={{ background: activeStep === 2 ? 'var(--bg-hover)' : 'var(--bg-panel)', padding: '1.5rem', borderRadius: '12px', border: activeStep === 2 ? '2px solid var(--brand-brown)' : '1px solid var(--border-color)', textAlign: 'center', transition: 'all 0.3s', minWidth: '150px' }}>
            <Network size={32} color="var(--brand-cream)" style={{ margin: '0 auto 1rem' }} />
            <h4 style={{ margin: 0, fontSize: '0.9rem' }}>Router</h4>
          </div>

          <div style={{ width: '50px', height: '2px', background: activeStep >= 3 ? 'var(--brand-brown)' : 'var(--border-color)' }}></div>

          {/* Memory Node */}
          <div style={{ background: activeStep === 3 ? 'var(--bg-hover)' : 'var(--bg-panel)', padding: '1.5rem', borderRadius: '12px', border: activeStep === 3 ? '2px solid var(--brand-brown)' : '1px solid var(--border-color)', textAlign: 'center', transition: 'all 0.3s', minWidth: '150px' }}>
            <Database size={32} color="var(--brand-cream)" style={{ margin: '0 auto 1rem' }} />
            <h4 style={{ margin: 0, fontSize: '0.9rem' }}>Vector DB</h4>
          </div>

          <div style={{ width: '50px', height: '2px', background: activeStep >= 4 ? 'var(--brand-brown)' : 'var(--border-color)' }}></div>

          {/* Engine Node */}
          <div style={{ background: activeStep === 4 ? 'var(--bg-hover)' : 'var(--bg-panel)', padding: '1.5rem', borderRadius: '12px', border: activeStep === 4 ? '2px solid var(--brand-brown)' : '1px solid var(--border-color)', textAlign: 'center', transition: 'all 0.3s', minWidth: '150px' }}>
            <Cpu size={32} color="var(--brand-cream)" style={{ margin: '0 auto 1rem' }} />
            <h4 style={{ margin: 0, fontSize: '0.9rem' }}>Agent Pool</h4>
          </div>

          <div style={{ width: '50px', height: '2px', background: activeStep >= 5 ? 'var(--brand-brown)' : 'var(--border-color)' }}></div>

          {/* Verify Node */}
          <div style={{ background: (activeStep === 5 || activeStep === 6) ? 'var(--bg-hover)' : 'var(--bg-panel)', padding: '1.5rem', borderRadius: '12px', border: (activeStep === 5 || activeStep === 6) ? '2px solid var(--brand-brown)' : '1px solid var(--border-color)', textAlign: 'center', transition: 'all 0.3s', minWidth: '150px' }}>
            <ShieldCheck size={32} color="var(--brand-cream)" style={{ margin: '0 auto 1rem' }} />
            <h4 style={{ margin: 0, fontSize: '0.9rem' }}>Verification</h4>
          </div>
        </div>
      </div>

      {/* PANEL 3: FINAL REPORT VIEW */}
      <div style={{ flex: '0 0 30%', borderLeft: '1px solid var(--border-color)', background: '#f5ebd9', padding: '2rem', display: 'flex', flexDirection: 'column' }}>
        <h3 style={{ fontSize: '0.9rem', textTransform: 'uppercase', color: '#594a38', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <FileText size={16} /> Generated Final Report
        </h3>
        
        <div style={{ flex: 1, background: '#ffffff', border: '1px solid #e0d5c1', borderRadius: '4px', padding: '2rem', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', color: '#3b2f21', position: 'relative', overflow: 'hidden' }}>
          
          {activeStep < 7 ? (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', opacity: 0.5 }}>
              <Activity size={32} style={{ marginBottom: '1rem' }} className="animate-pulse" />
              <p>Awaiting engine execution...</p>
            </div>
          ) : (
            <div style={{ animation: 'fadeIn 0.5s ease-out' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '2px solid #594a38', paddingBottom: '1rem', marginBottom: '1.5rem' }}>
                <h1 style={{ margin: 0, fontSize: '1.5rem', color: '#2a2015' }}>MAINTENANCE AUDIT</h1>
                <span style={{ background: '#d4edda', color: '#155724', padding: '0.2rem 0.6rem', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 'bold' }}>APPROVED</span>
              </div>
              
              <div style={{ marginBottom: '1rem' }}>
                <p style={{ margin: '0 0 0.5rem 0', fontWeight: 'bold' }}>Unit: <span style={{ fontWeight: 'normal' }}>FCCU Reactor V-204</span></p>
                <p style={{ margin: '0 0 0.5rem 0', fontWeight: 'bold' }}>Date: <span style={{ fontWeight: 'normal' }}>03-SEP-2026</span></p>
              </div>
              
              <div style={{ background: '#fcf8f2', padding: '1rem', borderLeft: '3px solid #8b6d4d', marginBottom: '1.5rem' }}>
                <h4 style={{ margin: '0 0 0.5rem 0', color: '#594a38' }}>Executive Summary</h4>
                <p style={{ margin: 0, fontSize: '0.85rem', lineHeight: '1.5' }}>
                  The localized AI pool has successfully extracted all schematics. Valve V-204 has been cleared of blockages. Deterministic grounding confirms 0% hallucination in this report.
                </p>
              </div>

              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', color: '#594a38', fontSize: '0.8rem', marginTop: 'auto', paddingTop: '2rem' }}>
                <CheckCircle2 size={14} /> Signature Verified by AI Engine
              </div>
            </div>
          )}
          
        </div>
      </div>
      
    </div>
  );
}
