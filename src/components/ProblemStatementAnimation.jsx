import React, { useState, useEffect } from 'react';
import { 
  FileText, Cpu, Database, Eye, ShieldCheck, 
  FileEdit, ShieldAlert, UserCheck, Lock
} from 'lucide-react';

const MRPL_WORKFLOW = [
  { 
    id: 1, name: 'Intake', icon: FileText, detail: 'scanned_inspection_report.pdf', agent: 'UI Gateway',
    explanation: 'Here we are taking the user input securely (like a scanned inspection report) entirely within the air-gapped workspace.' 
  },
  { 
    id: 2, name: 'Classify', icon: Cpu, detail: 'Route to Vision Model', agent: 'Router',
    explanation: 'The Commander Agent identifies this as a scan-heavy document and routes the task to the specialized Vision Model.'
  },
  { 
    id: 3, name: 'Retrieve', icon: Database, detail: 'Fetch SOPs & Templates', agent: 'Vector DB',
    explanation: 'We fetch the necessary standard operating procedures (SOPs) and reporting templates from the local database.'
  },
  { 
    id: 4, name: 'Extract', icon: Eye, detail: 'VLM Findings Schema', agent: 'Vision Agent',
    explanation: 'The Vision Language Model (VLM) reads the scanned document and extracts findings into a structured schema.'
  },
  { 
    id: 5, name: 'Ground', icon: ShieldCheck, detail: 'Check Latest Revision', agent: 'Grounding Agent',
    explanation: 'The system verifies extracted facts against the latest effective revisions in the local manuals.'
  },
  { 
    id: 6, name: 'Draft', icon: FileEdit, detail: 'Fill DOCX Template', agent: 'Reasoning Agent',
    explanation: 'The Reasoning model populates a controlled DOCX template with the grounded facts.'
  },
  { 
    id: 7, name: 'Verify', icon: ShieldAlert, detail: 'Coverage & Schema Checks', agent: 'Verifier',
    explanation: 'Deterministic code runs in the sandbox to ensure all schema requirements and numeric calculations are correct.'
  },
  { 
    id: 8, name: 'Approve', icon: UserCheck, detail: 'Human Review Required', agent: 'Approval Gate',
    explanation: 'The final draft is presented. A human reviews the evidence links and approves the final artifact.'
  }
];

export default function ProblemStatementAnimation() {
  const [activeStep, setActiveStep] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep(prev => (prev >= 8 ? 1 : prev + 1));
    }, 4000); 
    return () => clearInterval(timer);
  }, []);

  const activeData = MRPL_WORKFLOW.find(s => s.id === activeStep) || MRPL_WORKFLOW[0];
  const ActiveIcon = activeData.icon;

  const progressPercent = ((activeStep - 1) / (MRPL_WORKFLOW.length - 1)) * 100;

  return (
    <div className="ps-container">
      {/* Header section */}
      <div className="ps-header">
        <h2>Confidential Knowledge-Work Pipeline</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: '800px', marginTop: '0.5rem' }}>
          Demonstrating <strong>Workflow B</strong>: Scanned inspection report to verified approval note.
        </p>
      </div>

      {/* The Stepper (Clean, Minimalist) */}
      <div className="stepper-container">
        <div className="stepper-track"></div>
        <div className="stepper-track-fill" style={{ width: `${progressPercent}%` }}></div>
        
        {MRPL_WORKFLOW.map((step) => {
          const isActive = activeStep === step.id;
          const isPast = activeStep > step.id;
          
          return (
            <div key={step.id} className={`stepper-item ${isActive ? 'active' : ''} ${isPast ? 'past' : ''}`}>
              <div className="stepper-circle">
                {isPast ? <ShieldCheck size={20} /> : step.id}
              </div>
              <div className="stepper-label">{step.name}</div>
            </div>
          );
        })}
      </div>

      {/* The Creative Presentation Card (Active Step Details) */}
      <div className="presentation-card">
        <div className="pc-left">
          <div className="pc-icon-wrapper">
            <ActiveIcon size={40} />
          </div>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>{activeData.name}</h3>
          <div className="pc-agent">{activeData.agent}</div>
        </div>
        
        <div className="pc-right">
          <div className="pc-step-title">Step {activeData.id} of 8</div>
          <div className="pc-detail">{activeData.detail}</div>
          <div className="pc-explanation">{activeData.explanation}</div>
        </div>
      </div>

      {/* Security Proof Footer */}
      <div className="security-footer">
        <div className="security-badge">
          <Lock size={18} />
          <span>Local Inference Only</span>
        </div>
        <div className="security-badge">
          <ShieldAlert size={18} />
          <span>Default-Deny Egress</span>
        </div>
        <div className="security-badge" style={{ color: 'var(--accent-orange)', borderColor: 'var(--accent-orange)' }}>
          <Database size={18} />
          <span>No Confidential Payload Leaves Workstation</span>
        </div>
      </div>
    </div>
  );
}
