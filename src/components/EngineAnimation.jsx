import React from 'react';
import { Database, Search, Cpu, CheckCircle } from 'lucide-react';

export default function EngineAnimation() {
  const pistons = [
    { id: 1, label: 'Multimodal Ingestion', icon: Database, delay: '0s', color: '#ec4899' },
    { id: 2, label: 'Memory Retrieval', icon: Search, delay: '0.5s', color: '#d946ef' },
    { id: 3, label: 'Tool Discovery', icon: Cpu, delay: '0.25s', color: '#8b5cf6' },
    { id: 4, label: 'CodeAct Execution', icon: Cpu, delay: '0.75s', color: '#6366f1' },
    { id: 5, label: 'Deliverable Gen.', icon: CheckCircle, delay: '0.1s', color: '#3b82f6' }
  ];

  return (
    <div style={{ width: '100%', padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2 style={{ color: 'var(--text-main)', marginBottom: '3rem', fontSize: '1.5rem', fontWeight: 'bold' }}>
        Automated P&ID Reconciliation Engine
      </h2>
      
      <div className="engine-container">
        {/* Background Crankshaft base */}
        <div className="crankshaft-base"></div>
        
        <div style={{ display: 'flex', gap: '2rem', zIndex: 10 }}>
          {pistons.map((piston) => {
            const Icon = piston.icon;
            return (
              <div key={piston.id} className="piston-wrapper">
                {/* Tooltip / Label */}
                <div className="piston-label" style={{ color: piston.color }}>
                  {piston.label}
                </div>
                
                {/* The animated piston head and rod */}
                <div className="piston-assembly" style={{ animationDelay: piston.delay }}>
                  <div className="piston-head" style={{ backgroundColor: piston.color }}>
                    <Icon size={24} color="#fff" />
                    <div className="piston-rings"></div>
                    <div className="piston-rings" style={{ top: '60%' }}></div>
                  </div>
                  <div className="piston-rod"></div>
                  <div className="piston-joint" style={{ backgroundColor: piston.color }}></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
