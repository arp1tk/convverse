import React from 'react';
import { Brain, FileText, Globe as GlobeIcon, Zap, CheckCircle2, Search, ArrowUpRight, Sparkles } from 'lucide-react';
import { Globe } from './globe'
const IntelligenceBentoGrid = () => {
  return (
    <section id="features" className="relative bg-white dark:bg-black overflow-hidden border-t border-neutral-200 dark:border-neutral-900">
      <div className="max-w-7xl mx-auto border-x border-neutral-200 dark:border-neutral-900">
        
        {/* Header Section */}
        <div className="flex flex-col items-start pt-16 pb-12 px-10 border-b border-neutral-200 dark:border-neutral-900">
          <p className="text-[#c30010] text-xs font-bold uppercase tracking-[0.2em] mb-4">Core Intelligence</p>
          <h2 className="text-black dark:text-white text-4xl md:text-5xl font-medium tracking-tight leading-tight max-w-2xl">
            Built for Real-time Sales Performance
          </h2>
        </div>

        {/* Top Row: Original Two Cards */}
        <div className="grid grid-cols-1 md:grid-cols-12 border-b border-neutral-200 dark:border-neutral-900">
          
          {/* 1. Live Qualification Engine (Spans 7 columns) */}
          <div className="md:col-span-7 border-b md:border-b-0 md:border-r border-neutral-200 dark:border-neutral-900 p-8 lg:p-12 group">
            <div className="flex flex-col h-full">
              <h3 className="text-2xl font-bold tracking-tight mb-4 flex items-center gap-2">
                Live Qualification Engine <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-neutral-500 dark:text-neutral-400 text-sm max-w-md mb-12 leading-relaxed">
                Dynamic checklist updating live based on conversation context using <strong>BANT or MEDDPICC</strong> frameworks.
              </p>

              <div className="mt-auto bg-neutral-50 dark:bg-neutral-900/50 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-neutral-200 dark:border-neutral-800">
                   <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest">Active Framework: BANT</span>
                   <div className="size-2 rounded-full bg-[#c30010] animate-pulse" />
                </div>
                {[
                  { label: "Budget Discussion", date: "Detected", active: true },
                  { label: "Authority Identification", date: "Confirmed", active: true },
                  { label: "Timeline Confirmation", date: "In Progress", active: false },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-black dark:text-white">{item.label}</p>
                      <p className="text-[10px] text-neutral-400">{item.date}</p>
                    </div>
                    <div className={`w-8 h-4 rounded-full p-1 transition-colors ${item.active ? 'bg-[#c30010]' : 'bg-neutral-300 dark:bg-neutral-700'}`}>
                      <div className={`size-2 bg-white rounded-full transition-transform ${item.active ? 'translate-x-4' : 'translate-x-0'}`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 2. Instant Summaries (Spans 5 columns) */}
          <div className="md:col-span-5 p-8 lg:p-12 group">
             <Zap className="text-[#c30010] mb-6" size={24} />
             <h3 className="text-2xl font-bold mb-3 tracking-tight">Instant Summaries</h3>
             <p className="text-neutral-500 dark:text-neutral-400 text-sm mb-12 leading-relaxed">
               Perfectly structured notes ready to copy, share, or sync with your CRM immediately after every call.
             </p>
             <div className="bg-neutral-50 dark:bg-neutral-900/50 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-5">
                <div className="h-2 w-1/2 bg-neutral-200 dark:bg-neutral-800 rounded-full mb-4" />
                <div className="space-y-2">
                  <div className="h-2 w-full bg-neutral-100 dark:bg-neutral-800/50 rounded-full" />
                  <div className="h-2 w-full bg-neutral-100 dark:bg-neutral-800/50 rounded-full" />
                  <div className="h-2 w-3/4 bg-neutral-100 dark:bg-neutral-800/50 rounded-full" />
                </div>
                <div className="mt-6 flex gap-2">
                   <div className="px-3 py-1 rounded bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 text-[10px] font-bold">COPY</div>
                   <div className="px-3 py-1 rounded bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 text-[10px] font-bold">SYNC</div>
                </div>
             </div>
          </div>
        </div>

        {/* Bottom Row: Globe Card and Objection Handling */}
        <div className="grid grid-cols-1 md:grid-cols-12">
          
          {/* 3. Global AI Sales Intelligence (Spans 5 columns) */}
          <div className="md:col-span-5 relative border-b md:border-b-0 md:border-r border-neutral-200 dark:border-neutral-900 p-8 lg:p-12 overflow-hidden min-h-[400px]">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold tracking-tight mb-4">Global Sales Intelligence</h3>
              <p className="text-neutral-500 dark:text-neutral-400 text-sm max-w-xs leading-relaxed">
                Connect your global teams with multi-language support and region-specific market insights. 
                <strong> Intelligence that knows no borders.</strong>
              </p>
            </div>
            
            {/* The Globe Component as Background */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-60 dark:opacity-40 translate-y-24 translate-x-12">
              <Globe className="w-[600px] h-[600px]" />
            </div>
          </div>

          {/* 4. Real-time Objection Handling (Spans 7 columns) */}
          <div className="md:col-span-7 p-8 lg:p-12 group">
            <div className="flex flex-col h-full">
              <h3 className="text-2xl font-bold tracking-tight mb-4">Real-time Objection Handling</h3>
              <p className="text-neutral-500 dark:text-neutral-400 text-sm max-w-md mb-12 leading-relaxed">
                Crush hesitation instantly. Convverse.ai scans your <strong>uploaded PDFs</strong> and trusted web sources to suggest high-impact responses live.
              </p>

              <div className="mt-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* PDF Search UI */}
                <div className="bg-neutral-50 dark:bg-neutral-900/50 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-5">
                   <div className="flex items-center gap-2 mb-4">
                      <FileText size={14} className="text-[#c30010]" />
                      <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">Knowledge Base</span>
                   </div>
                   <p className="text-[11px] font-medium text-neutral-800 dark:text-neutral-200 italic mb-2">"Is there a bulk discount?"</p>
                   <p className="text-[11px] text-neutral-500 leading-snug">Scanned: Pricing_Sheet_v2.pdf ... <br/>Suggested: Yes, 15% off for 20+ seats.</p>
                </div>
                
                {/* Web Search UI */}
                <div className="bg-neutral-50 dark:bg-neutral-900/50 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-5 border-l-2 border-l-[#3b82f6]">
                   <div className="flex items-center gap-2 mb-4">
                      <Search size={14} className="text-[#3b82f6]" />
                      <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">Web Source</span>
                   </div>
                   <p className="text-[11px] font-medium text-neutral-800 dark:text-neutral-200 italic mb-2">"Competitor X just added Y..."</p>
                   <p className="text-[11px] text-neutral-500 leading-snug">Found: Competitor X's feature Y is limited to enterprise plans...</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default IntelligenceBentoGrid;