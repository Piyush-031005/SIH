import React from 'react';
import { Mail, BrainCircuit, HelpCircle, Database, PenTool, Send, AlertTriangle, CheckCircle } from 'lucide-react';

export default function NodeWorkflow() {
  return (
    <div className="node-workflow-container">
      {/* Background SVG for curved lines */}
      <svg className="node-connections" preserveAspectRatio="none">
        {/* Inbox to AI */}
        <path d="M 120 150 C 180 150, 220 150, 260 150" className="node-line" />
        <circle cx="190" cy="150" r="4" className="moving-dot" style={{ animationDelay: '0s' }} />

        {/* AI to Decision */}
        <path d="M 440 150 C 480 150, 500 150, 520 150" className="node-line" />
        <circle cx="480" cy="150" r="4" className="moving-dot" style={{ animationDelay: '0.5s' }} />

        {/* Decision YES to CRM */}
        <path d="M 600 150 C 640 150, 640 70, 680 70" className="node-line success" />
        <circle cx="640" cy="110" r="4" className="moving-dot success" style={{ animationDelay: '1s' }} />

        {/* Decision NO to Escalate */}
        <path d="M 600 150 C 640 150, 640 250, 680 250" className="node-line danger dashed" />

        {/* CRM to Draft */}
        <path d="M 860 70 C 900 70, 920 70, 950 70" className="node-line" />
        <circle cx="905" cy="70" r="4" className="moving-dot" style={{ animationDelay: '1.5s' }} />

        {/* Draft to Send */}
        <path d="M 1040 110 C 1040 150, 950 150, 950 190 C 950 200, 950 210, 950 210" className="node-line" fill="none" />
        <path d="M 1040 100 Q 1070 100 1070 130 T 1000 160 T 950 190" className="node-line" fill="none" />

        <path d="M 1130 70 C 1170 70, 1170 190, 950 190" className="node-line" />
        
        {/* Send to Done */}
        <path d="M 1130 190 C 1170 190, 1200 190, 1230 190" className="node-line success" />
        <circle cx="1180" cy="190" r="4" className="moving-dot success" style={{ animationDelay: '2.5s' }} />
      </svg>

      <div className="node-board">
        
        {/* Start Node */}
        <div className="nw-node nw-circle" style={{ left: '20px', top: '100px' }}>
          <Mail size={24} />
          <span>User Input</span>
        </div>

        {/* Processing Group (Dashed box) */}
        <div className="nw-group-box" style={{ left: '240px', top: '50px', width: '380px', height: '200px' }}>
          <span className="nw-group-title">AI PROCESSING LAYER</span>
          
          <div className="nw-node nw-rect" style={{ left: '20px', top: '60px', borderColor: '#8b5cf6' }}>
            <BrainCircuit size={20} color="#8b5cf6" />
            <div>
              <strong>Commander Agent</strong>
              <small>Router & Planner</small>
            </div>
          </div>

          <div className="nw-node nw-diamond" style={{ left: '280px', top: '60px' }}>
            <span>Valid?</span>
          </div>
        </div>

        {/* Parallel Tasks */}
        <div className="nw-node nw-rect" style={{ left: '680px', top: '30px', borderColor: '#10b981' }}>
          <Database size={20} color="#10b981" />
          <div>
            <strong>Memory Retrieval</strong>
            <small>KG & Vector</small>
          </div>
        </div>

        <div className="nw-node nw-rect" style={{ left: '680px', top: '210px', borderColor: '#ef4444' }}>
          <AlertTriangle size={20} color="#ef4444" />
          <div>
            <strong>Flag & Escalate</strong>
            <small>Human Review</small>
          </div>
        </div>

        {/* Execution */}
        <div className="nw-node nw-rect" style={{ left: '950px', top: '30px', borderColor: '#6366f1' }}>
          <PenTool size={20} color="#6366f1" />
          <div>
            <strong>CodeAct Executor</strong>
            <small>Docker Sandbox</small>
          </div>
        </div>

        <div className="nw-node nw-rect" style={{ left: '950px', top: '150px', borderColor: '#10b981' }}>
          <Send size={20} color="#10b981" />
          <div>
            <strong>Artifact Gen</strong>
            <small>DOCX/PPTX</small>
          </div>
        </div>

        {/* End Node */}
        <div className="nw-node nw-circle" style={{ left: '1230px', top: '140px', borderColor: '#94a3b8' }}>
          <CheckCircle size={24} color="#94a3b8" />
          <span>Done</span>
        </div>

      </div>
    </div>
  );
}
