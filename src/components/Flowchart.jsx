import React from 'react';
import { 
  User, Server, Cpu, Database, Eye, Code, 
  Search, ShieldCheck, FileText, CheckCircle 
} from 'lucide-react';

const NODES = [
  { id: 1, title: 'User Request', icon: User, desc: 'Web UI / API' },
  { id: 2, title: 'Request Validation', icon: ShieldCheck, desc: 'Session & Auth' },
  { id: 3, title: 'Commander Agent', icon: Cpu, desc: 'Router, Planner, Policy Engine' },
  { id: 4, title: 'Memory Retrieval', icon: Database, desc: 'Vector, Graph, Temporal DB' },
  { id: 5, title: 'Agent Pool', icon: Server, desc: 'Vision, Engineering, Research' },
  { id: 6, title: 'Sandbox Execution', icon: Code, desc: 'Zero-Network Docker' },
  { id: 7, title: 'Reflection & Verif.', icon: Search, desc: 'Critique & Grounding' },
  { id: 8, title: 'Artifact Gen.', icon: FileText, desc: 'DOCX, PPTX, XLSX' },
  { id: 9, title: 'Human Approval', icon: CheckCircle, desc: 'Secure Local Download' }
];

export default function Flowchart({ currentStep }) {
  return (
    <div className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center', width: '100%' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '1rem' }} className="text-gradient">Backend Execution Architecture</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0', alignItems: 'center', width: '100%', maxWidth: '800px' }}>
        {NODES.map((node, index) => {
          const isActive = currentStep === node.id;
          const isCompleted = currentStep > node.id;
          const Icon = node.icon;

          return (
            <React.Fragment key={node.id}>
              <div 
                className={`flow-node ${isActive ? 'active animate-pulse-glow' : ''} ${isCompleted ? 'completed' : ''}`}
                style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '1.5rem' }}
              >
                <div style={{ 
                  background: isActive ? 'var(--accent-blue)' : 'rgba(255,255,255,0.1)', 
                  padding: '1rem', 
                  borderRadius: '12px',
                  transition: 'all 0.3s ease'
                }}>
                  <Icon size={28} color={isActive ? '#fff' : 'var(--text-muted)'} />
                </div>
                <div>
                  <div className="flow-node-title">
                    {node.title}
                    {isCompleted && <CheckCircle size={16} color="var(--accent-green)" />}
                  </div>
                  <div className="flow-node-desc">{node.desc}</div>
                </div>
                
                {/* Specific inner animations based on node type */}
                {isActive && node.id === 5 && (
                  <div style={{ display: 'flex', gap: '1rem', marginLeft: 'auto' }}>
                    <Eye className="animate-float" style={{ animationDelay: '0s' }} color="#a78bfa" />
                    <Code className="animate-float" style={{ animationDelay: '0.2s' }} color="#60a5fa" />
                    <Search className="animate-float" style={{ animationDelay: '0.4s' }} color="#10b981" />
                  </div>
                )}
              </div>

              {/* Connector */}
              {index < NODES.length - 1 && (
                <div 
                  className={`connector-v ${isCompleted || isActive ? 'active' : ''}`} 
                  style={{ minHeight: '30px', margin: '0.2rem 0' }}
                >
                  {(isCompleted || isActive) && <div className="data-packet" />}
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
