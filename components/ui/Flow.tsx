// import React, { useEffect, useState, useRef } from 'react';
// import { MessageSquare, Mic, Database, Zap, FileText, RefreshCw, BarChart3, Target } from 'lucide-react';

// const IntegrationFlow = () => {
//   const [mounted, setMounted] = useState(false);
  
//   // Trigger animation after mount to ensure layout is calculated
//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   const inputs = [
//     { id: 'in-1', label: 'Live Sales Calls', icon: <Mic size={14} />, color: '#c30010' },
//     { id: 'in-2', label: 'Customer Responses', icon: <MessageSquare size={14} />, color: '#3b82f6' },
//     { id: 'in-3', label: 'Deal Context', icon: <Database size={14} />, color: '#f59e0b' },
//   ];

//   const outputs = [
//     { id: 'out-1', label: 'Live Insights', icon: <Zap size={16} />, x: 0, y: -40 },
//     { id: 'out-2', label: 'Auto Summaries', icon: <FileText size={16} />, x: 40, y: -10 },
//     { id: 'out-3', label: 'CRM Sync', icon: <RefreshCw size={16} />, x: -10, y: 50 },
//     { id: 'out-4', label: 'Battlecards', icon: <Target size={16} />, x: 50, y: 60 },
//     { id: 'out-5', label: 'Next Best Actions', icon: <BarChart3 size={16} />, x: 10, y: 110 },
//   ];

//   return (
//     <section className="relative w-full bg-[#FAFAFA] dark:bg-black py-24 overflow-hidden select-none">
//       {/* 1. Dotted Grid Background */}
//       <div className="absolute inset-0 opacity-[0.4] dark:opacity-[0.1]" 
//            style={{ backgroundImage: 'radial-gradient(#000 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />

//       <div className="max-w-6xl mx-auto px-6 relative h-[500px] flex items-center justify-between">
        
//         {/* 2. SVG Connection Layer */}
//         <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
//           <defs>
//             <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
//               <stop offset="0%" stopColor="#c30010" stopOpacity="0.2" />
//               <stop offset="50%" stopColor="#c30010" stopOpacity="0.5" />
//               <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
//             </linearGradient>
//           </defs>

//           {mounted && (
//             <>
//               {/* Left to Center Lines */}
//               {inputs.map((_, i) => (
//                 <path
//                   key={`in-line-${i}`}
//                   d={`M 180,${180 + i * 70} C 350,${180 + i * 70} 400,250 500,250`}
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="1.5"
//                   className="text-neutral-200 dark:text-neutral-800"
//                 />
//               ))}
              
//               {/* Animated Flowing Dashes (Input) */}
//               {inputs.map((_, i) => (
//                 <path
//                   key={`in-anim-${i}`}
//                   d={`M 180,${180 + i * 70} C 350,${180 + i * 70} 400,250 500,250`}
//                   fill="none"
//                   stroke="#c30010"
//                   strokeWidth="1.5"
//                   strokeDasharray="4, 12"
//                   className="animate-[flow_10s_linear_infinite]"
//                   style={{ strokeDashoffset: 100 }}
//                 />
//               ))}

//               {/* Center to Right Lines */}
//               {outputs.map((out, i) => (
//                 <path
//                   key={`out-line-${i}`}
//                   d={`M 500,250 C 650,250 750,${200 + out.y} ${850 + out.x},${200 + out.y}`}
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="1.5"
//                   className="text-neutral-200 dark:text-neutral-800"
//                 />
//               ))}

//               {/* Animated Flowing Dashes (Output) */}
//               {outputs.map((out, i) => (
//                 <path
//                   key={`out-anim-${i}`}
//                   d={`M 500,250 C 650,250 750,${200 + out.y} ${850 + out.x},${200 + out.y}`}
//                   fill="none"
//                   stroke="#3b82f6"
//                   strokeWidth="1.5"
//                   strokeDasharray="4, 16"
//                   className="animate-[flow_8s_linear_infinite]"
//                 />
//               ))}
//             </>
//           )}
//         </svg>

//         {/* 3. LEFT ZONE: Inputs */}
//         <div className="flex flex-col gap-12 z-10 w-48">
//           {inputs.map((item) => (
//             <div key={item.id} className="flex items-center gap-3 group">
//               <div className="size-8 rounded-lg bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm flex items-center justify-center text-neutral-500 group-hover:text-black dark:group-hover:text-white transition-colors">
//                 {item.icon}
//               </div>
//               <span className="text-xs font-medium text-neutral-500 tracking-tight">{item.label}</span>
//             </div>
//           ))}
//         </div>

//         {/* 4. CENTER ZONE: The Engine */}
//         <div className="relative z-20">
//           <div className="size-20 rounded-2xl bg-white dark:bg-neutral-900 border-[1.5px] border-neutral-200 dark:border-neutral-800 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] flex items-center justify-center p-4">
//             <img src="/logo.png" alt="convverse.ai" className="w-full grayscale dark:invert opacity-80" />
//           </div>
//           {/* Status Badge */}
//           <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50 border border-blue-100 shadow-sm">
//             <div className="size-1.5 rounded-full bg-blue-500 animate-pulse" />
//             <span className="text-[10px] font-bold text-blue-600 uppercase tracking-tighter">Connected</span>
//           </div>
//         </div>

//         {/* 5. RIGHT ZONE: Output Grid */}
//         <div className="relative z-10 w-64 h-full flex items-center">
//           {outputs.map((node) => (
//             <div 
//               key={node.id}
//               className="absolute bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 p-3 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group cursor-default"
//               style={{ transform: `translate(${node.x}px, ${node.y}px)` }}
//             >
//               <div className="flex items-center gap-2.5">
//                 <div className="size-8 rounded-lg bg-neutral-50 dark:bg-black flex items-center justify-center text-blue-500">
//                   {node.icon}
//                 </div>
//                 <span className="text-[11px] font-bold text-neutral-700 dark:text-neutral-300 whitespace-nowrap">
//                   {node.label}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes flow {
//           from { stroke-dashoffset: 200; }
//           to { stroke-dashoffset: 0; }
//         }
//       `}</style>

//       {/* Responsive Overlay for Mobile */}
//       <div className="md:hidden absolute inset-0 bg-white dark:bg-black z-50 flex items-center justify-center px-10 text-center">
//         <p className="text-xs text-neutral-400">Please view the Intelligence Flow on a larger screen to see the system diagram.</p>
//       </div>
//     </section>
//   );
// };

// export default IntegrationFlow;