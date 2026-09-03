import React from 'react';
import { 
  FileUp, SearchCode, DatabaseZap, ScanText, 
  BookOpenCheck, PenTool, ShieldAlert, CheckSquare 
} from 'lucide-react';

const HIGH_LEVEL_STEPS = [
  { id: 1, title: '1. Intake', icon: FileUp, desc: 'Upload scanned report or document' },
  { id: 2, title: '2. Classify', icon: SearchCode, desc: 'Identify document type & task routing' },
  { id: 3, title: '3. Retrieve', icon: DatabaseZap, desc: 'Find evidence in SOPs & templates' },
  { id: 4, title: '4. Extract', icon: ScanText, desc: 'VLM produces typed findings' },
  { id: 5, title: '5. Ground', icon: BookOpenCheck, desc: 'Verify claims against local manuals' },
  { id: 6, title: '6. Draft', icon: PenTool, desc: 'Generate reasoning-backed draft' },
  { id: 7, title: '7. Verify', icon: ShieldAlert, desc: 'Check coverage, schemas, and math' },
  { id: 8, title: '8. Approve', icon: CheckSquare, desc: 'Human reviews and downloads file' }
];

export default function HighLevelWorkflow({ currentStep }) {
  // Map the 9-step backend currentStep to the 8-step high level view roughly, 
  // or just use it as a 1-to-1 progression.
  // For simplicity, we just use currentStep directly.

  return (
    <div className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center', width: '100%' }}>
      <h2 style={{ textAlign: 'center' }} className="text-gradient">End-to-End Workflow Overview</h2>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
        gap: '1.5rem',
        width: '100%',
        maxWidth: '1000px'
      }}>
        {HIGH_LEVEL_STEPS.map((node, index) => {
          const isActive = currentStep === node.id;
          const isCompleted = currentStep > node.id;
          const Icon = node.icon;

          return (
            <div 
              key={node.id}
              className={`flow-node ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`}
              style={{
                flexDirection: 'column',
                textAlign: 'center',
                padding: '2rem 1.5rem',
                position: 'relative',
                justifyContent: 'flex-start'
              }}
            >
              <div style={{ 
                background: isActive ? 'var(--accent-blue)' : 'transparent',
                color: isActive ? 'white' : 'var(--accent-blue)',
                border: `2px solid ${isActive ? 'transparent' : 'var(--accent-blue)'}`,
                padding: '1rem', 
                borderRadius: '50%',
                marginBottom: '1rem',
                transition: 'all 0.3s ease'
              }}>
                <Icon size={32} />
              </div>
              <div className="flow-node-title" style={{ justifyContent: 'center' }}>
                {node.title}
              </div>
              <div className="flow-node-desc">{node.desc}</div>
              
              {/* Connector line for grid (only show on active for visual flair) */}
              {isActive && (
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  border: '2px solid var(--accent-blue)',
                  borderRadius: '8px',
                  animation: 'highlightBorder 2s infinite'
                }}></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
