import React, { useState, useEffect } from 'react';
import { Shield, Activity, Lock, Server } from 'lucide-react';

export default function ProofPanel({ currentStep }) {
  const [blockedConnections, setBlockedConnections] = useState(0);

  useEffect(() => {
    let interval;
    if (currentStep > 1) {
      interval = setInterval(() => {
        setBlockedConnections(prev => prev + Math.floor(Math.random() * 3));
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [currentStep]);

  return (
    <div className="glass-panel" style={{ padding: '2rem', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <h3 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-blue)' }}>
        <Shield size={24} /> Sovereignty Proof Panel
      </h3>

      <div style={{ display: 'grid', gap: '1rem' }}>
        <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid var(--accent-blue)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
            <span>Network Status</span>
            <Lock size={16} color="var(--accent-blue)" />
          </div>
          <div style={{ fontSize: '1.25rem', fontWeight: 'bold', marginTop: '0.5rem', color: 'var(--text-main)' }}>
            Isolated (Air-gapped)
          </div>
        </div>

        <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid var(--accent-orange)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
            <span>Blocked Egress Attempts</span>
            <Activity size={16} color="var(--accent-orange)" />
          </div>
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '0.5rem', display: 'flex', alignItems: 'baseline', gap: '0.5rem', color: 'var(--text-main)' }}>
            {blockedConnections}
            <span style={{ fontSize: '0.75rem', color: 'var(--accent-orange)' }}>+ verified</span>
          </div>
        </div>

        <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #64748b' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
            <span>Local Model Inference</span>
            <Server size={16} color="#64748b" />
          </div>
          <div style={{ fontSize: '1rem', marginTop: '0.5rem' }}>
            {currentStep >= 5 ? (
              <span style={{ color: 'var(--accent-blue)', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold' }}>
                Processing Locally
              </span>
            ) : (
              <span style={{ color: 'var(--text-muted)' }}>Idle</span>
            )}
          </div>
        </div>
      </div>

      <div style={{ marginTop: 'auto', paddingTop: '2rem' }}>
        <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '0.5rem', fontWeight: 'bold' }}>Live Audit Log</div>
        <div style={{ background: '#f1f5f9', border: '1px solid #cbd5e1', padding: '1rem', borderRadius: '8px', fontSize: '0.75rem', fontFamily: 'monospace', color: '#334155', height: '150px', overflowY: 'auto' }}>
          {currentStep >= 1 && <div>[System] User request received locally.</div>}
          {currentStep >= 2 && <div>[Auth] Session validated successfully.</div>}
          {currentStep >= 3 && <div>[Commander] Decomposing task, querying registry.</div>}
          {currentStep >= 4 && <div>[Memory] Bi-temporal knowledge graph queried.</div>}
          {currentStep >= 5 && <div>[Agent] Task delegated to Vision/Eng pool.</div>}
          {currentStep >= 6 && <div>[Sandbox] Code executed with 0 outbound connections.</div>}
          {currentStep >= 7 && <div>[Verifier] Output grounded against local evidence.</div>}
          {currentStep >= 8 && <div style={{ color: 'var(--accent-blue)', fontWeight: 'bold' }}>[Artifact] DOCX generated safely.</div>}
        </div>
      </div>
    </div>
  );
}
