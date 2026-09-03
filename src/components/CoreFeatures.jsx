import React, { useState, useEffect } from 'react';
import '../features.css';
import { 
  Cpu, Shield, CheckCircle, Lightbulb, 
  Layers, Clock, AlertTriangle, Target, CheckCircle2
} from 'lucide-react';

const FEATURES = [
  {
    id: 1,
    title: 'Intelligent Resource Management',
    icon: Cpu,
    challenge: 'Running multiple AI models simultaneously can overload GPU memory, increasing latency and reducing system stability.',
    solutions: [
      'Intelligent Model Routing (RouteLLM)',
      'Dynamic VRAM Allocation',
      'On-demand Model Loading'
    ],
    impact: 'Optimized resource utilization with fast and stable AI execution.'
  },
  {
    id: 2,
    title: 'Secure Offline Execution',
    icon: Shield,
    challenge: 'Industrial AI must protect confidential refinery data while safely executing AI-generated code without internet dependency.',
    solutions: [
      'Air-Gapped Deployment',
      'Ephemeral Docker Sandbox',
      'Zero Outbound Network Calls',
      'Restricted File System Access'
    ],
    impact: 'Enterprise-grade security with complete data sovereignty.'
  },
  {
    id: 3,
    title: 'Reliable & Explainable AI',
    icon: CheckCircle,
    challenge: 'AI models may hallucinate or generate unreliable recommendations, which are unacceptable in industrial environments.',
    solutions: [
      'Grounded RAG',
      'Reflexion-based Validation',
      'Evidence-backed Reasoning',
      'Execution Audit Trail'
    ],
    impact: 'Transparent, explainable, and trustworthy AI decisions.'
  },
  {
    id: 4,
    title: 'Intelligent Automation & Predictive Assistance',
    icon: Lightbulb,
    challenge: 'Current systems react only after failures occur, forcing engineers to manually investigate, analyze, and document incidents.',
    solutions: [
      'Agentic AI Workflow',
      'Automated Root Cause Analysis',
      'Predictive Risk Assessment',
      'Automated Report & Checklist Generation'
    ],
    impact: 'Transforms reactive maintenance into proactive decision support, reducing downtime and manual effort.'
  },
  {
    id: 5,
    title: 'Modular & Scalable AI Architecture',
    icon: Layers,
    challenge: 'Industrial environments continuously evolve with new AI models, tools, and workflows, making monolithic systems difficult to maintain.',
    solutions: [
      'MCP-based Tool Integration',
      'Multi-Agent Architecture',
      'Plug-and-Play AI Modules',
      'Dynamic Tool Orchestration'
    ],
    impact: 'Future-ready architecture that scales without redesigning the entire system.'
  },
  {
    id: 6,
    title: 'Temporal Memory & Knowledge Evolution',
    icon: Clock,
    challenge: 'Engineering knowledge changes over time, and outdated SOPs or maintenance records can lead to incorrect recommendations.',
    solutions: [
      'Temporal Memory Management',
      'Version-aware Knowledge Retrieval',
      'Bi-temporal Validation',
      'Historical Context Tracking'
    ],
    impact: 'Ensures every AI decision is based on the latest approved knowledge while preserving historical traceability.'
  }
];

export default function CoreFeatures() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % FEATURES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const activeFeature = FEATURES[activeIndex];
  const ActiveIcon = activeFeature.icon;

  return (
    <div className="features-container">
      <div className="features-header">
        <h2>System Capabilities & Impact</h2>
        <p>Addressing core industrial challenges with sovereign AI solutions</p>
      </div>

      <div className="features-content">
        {/* Left sidebar navigation */}
        <div className="features-nav">
          {FEATURES.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div 
                key={feature.id} 
                className={`feature-nav-item ${idx === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(idx)}
              >
                <div className="feature-nav-icon"><Icon size={20} /></div>
                <div className="feature-nav-title">{feature.title}</div>
              </div>
            );
          })}
        </div>

        {/* Right content area with animations */}
        <div className="feature-detail-card" key={activeFeature.id}>
          <div className="fd-header">
            <div className="fd-icon-wrapper">
              <ActiveIcon size={40} />
            </div>
            <h3>{activeFeature.title}</h3>
          </div>

          <div className="fd-body">
            
            {/* Challenge Section */}
            <div className="fd-section challenge">
              <div className="fd-section-header">
                <AlertTriangle size={18} />
                <h4>The Challenge</h4>
              </div>
              <p>{activeFeature.challenge}</p>
            </div>

            {/* Solution Section */}
            <div className="fd-section solution">
              <div className="fd-section-header">
                <CheckCircle2 size={18} />
                <h4>Our Solution</h4>
              </div>
              <ul className="solution-list">
                {activeFeature.solutions.map((sol, i) => (
                  <li key={i}>
                    <span className="bullet"></span>
                    {sol}
                  </li>
                ))}
              </ul>
            </div>

            {/* Impact Section */}
            <div className="fd-section impact">
              <div className="fd-section-header">
                <Target size={18} />
                <h4>Impact</h4>
              </div>
              <p>{activeFeature.impact}</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
