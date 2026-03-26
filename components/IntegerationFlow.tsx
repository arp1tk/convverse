import React, { useEffect, useState } from 'react';
import { Mic, MessageSquare, Database, Zap, FileText, RefreshCw, Target, BarChart3 } from 'lucide-react';

const WorkflowVisualization = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const inputs = [
    { id: 'in-1', label: 'Live Sales Calls', icon: <Mic size={14} /> },
    { id: 'in-2', label: 'Customer Responses', icon: <MessageSquare size={14} /> },
    { id: 'in-3', label: 'Deal Context', icon: <Database size={14} /> },
  ];

  const outputs = [
    { id: 'out-1', label: 'Live Insights', icon: <Zap size={14} /> },
    { id: 'out-2', label: 'Auto Summaries', icon: <FileText size={14} /> },
    { id: 'out-3', label: 'CRM Sync', icon: <RefreshCw size={14} /> },
    { id: 'out-4', label: 'Battlecards', icon: <Target size={14} /> },
    { id: 'out-5', label: 'Next Best Actions', icon: <BarChart3 size={14} /> },
  ];

  return (
    <section className="relative w-full bg-[#FAFAFA] dark:bg-black py-24 overflow-hidden border-t border-neutral-100 dark:border-neutral-900">
      {/* 1. Subtitle Dotted Grid */}
      <div className="absolute inset-0 opacity-[0.4] dark:opacity-[0.1]" 
           style={{ backgroundImage: 'radial-gradient(#000 0.5px, transparent 0.5px)', backgroundSize: '32px 32px' }} />

      <div className="max-w-6xl mx-auto px-6 relative h-[600px] grid grid-cols-3 items-center">
        
        {/* 2. SVG Connection Layer (Absolute Overlay) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
          {mounted && (
            <>
              {/* LEFT -> CENTER (Red Tint Flow) */}
              {inputs.map((_, i) => (
                <g key={`in-group-${i}`}>
                  <path
                    d={`M 250,${180 + i * 120} C 350,${180 + i * 120} 450,300 570,300`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-neutral-200 dark:text-neutral-800 opacity-50"
                  />
                  <path
                    d={`M 250,${180 + i * 120} C 350,${180 + i * 120} 450,300 570,300`}
                    fill="none"
                    stroke="#c30010"
                    strokeWidth="2"
                    strokeDasharray="6, 12"
                    className="animate-[flow_7s_linear_infinite] opacity-60"
                  />
                </g>
              ))}

              {/* CENTER -> RIGHT (Blue Tint Flow) */}
              {outputs.map((_, i) => (
                <g key={`out-group-${i}`}>
                  <path
                    d={`M 570,300 C 700,300 800,${100 + i * 100} 900,${100 + i * 100}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-neutral-200 dark:text-neutral-800 opacity-50"
                  />
                  <path
                    d={`M 570,300 C 700,300 800,${100 + i * 100} 900,${100 + i * 100}`}
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="2"
                    strokeDasharray="6, 12"
                    className="animate-[flow_6s_linear_infinite] opacity-60"
                  />
                </g>
              ))}
            </>
          )}
        </svg>

        {/* 3. LEFT COLUMN: Structured Inputs */}
        <div className="flex flex-col h-full justify-center gap-[100px] z-10">
          {inputs.map((item) => (
            <div key={item.id} className="flex items-center gap-4 group">
              <div className="size-10 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm flex items-center justify-center text-neutral-400 group-hover:text-[#c30010] transition-colors duration-500">
                {item.icon}
              </div>
              <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400 tracking-tight">{item.label}</span>
            </div>
          ))}
        </div>

        {/* 4. CENTER COLUMN: The Core Node */}
        <div className="flex justify-center items-center h-full relative z-20">
          <div className="size-24 rounded-2xl bg-white dark:bg-neutral-900 border-[1.5px] border-neutral-200 dark:border-neutral-800 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] flex items-center justify-center p-5 scale-110">
            <img src="/logo.png" alt="convverse.ai" className="w-full opacity-90 dark:invert" />
          </div>
          
          {/* Status Badge Positioned Exactly Between Center and Right */}
          <div className="absolute right-[-40px] top-[260px] flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900 shadow-sm">
            <div className="size-1.5 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">Connected</span>
          </div>
        </div>

        {/* 5. RIGHT COLUMN: Precise Output Stack */}
        <div className="flex flex-col h-full justify-center gap-12 z-10 pl-12">
          {outputs.map((node) => (
            <div 
              key={node.id}
              className="w-full max-w-[200px] bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 p-4 rounded-xl shadow-[0_4px_12px_-4px_rgba(0,0,0,0.05)] hover:shadow-lg transition-all duration-500 group"
            >
              <div className="flex items-center gap-3">
                <div className="size-8 rounded-lg bg-neutral-50 dark:bg-black flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
                  {node.icon}
                </div>
                <span className="text-xs font-bold text-neutral-700 dark:text-neutral-200 tracking-tight">
                  {node.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes flow {
          from { stroke-dashoffset: 200; }
          to { stroke-dashoffset: 0; }
        }
      `}</style>
    </section>
  );
};

export default WorkflowVisualization;