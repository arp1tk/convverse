"use client"
import {
  ArrowRight,
  CheckCircle2, MessageSquare,
  Moon,
  Plus,
  ShieldCheck,
  Brain, FileText, 
  Monitor,Layout,Globe,ExternalLink,MoreVertical, X,ChevronDown,
  Sun,
  Zap
} from 'lucide-react';
import { useTheme } from "next-themes";
import { useEffect, useState ,useRef,MouseEvent} from 'react';
import { MacbookScroll } from '@/components/ui/macbook-scroll';
import { TextHoverEffect } from '@/components/ui/text-hover-effect';

export default function LandingPage() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0); // First one open by default
const [offset, setOffset] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
 const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    
    // Calculate how far the mouse is from the center of the image
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    // "Strength" of the movement (lower = more subtle)
    const strength = 0.06; 

    setOffset({
      x: distanceX * strength,
      y: distanceY * strength,
    });
  };
const faqData = [
    { 
      q: "What is convverse.ai?", 
      a: "convverse.ai is a Chrome extension for Google Meet that gives sales reps real-time prompts to ask the right questions and answer customer objections live." 
    },
    { 
      q: "Who should use convverse.ai?", 
      a: "BDRs, AEs, SEs, Account Managers, and Sales Leaders who want more effective discovery, smoother qualification, and fewer 'I will get back to you' moments." 
    },
    { 
      q: "Can multiple team members use it on the same call?", 
      a: "Yes. Each role can add their own playbook. AEs can focus on qualification, SEs on technical scope, and others on their goals, all in one call." 
    },
    { 
      q: "What can I upload?", 
      a: "Upload sales FAQs, product docs, pricing sheets, or battlecards. We recommend 3 PDFs, 5 to 10 pages each, for the best experience." 
    },
    { 
      q: "How safe is my data?", 
      a: "We use enterprise grade encryption (AES-256, TLS 1.2+) and GDPR best practices. Your data is only used to support your calls, never sold or shared." 
    },
    { 
      q: "How do I get started?", 
      a: "Add convverse.ai to Chrome, sign up, add your questions, and hit Publish. Upload PDFs, and start using it in your next Google Meet. Setup takes less than 15 minutes." 
    }
  ];
  const handleMouseLeave = () => {
    setOffset({ x: 0, y: 0 });
  };
  // Avoid hydration mismatch
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white font-sans selection:bg-blue-500 selection:text-white transition-colors duration-300">
      
      {/* 1px Blueprint Lines */}
      <div className="fixed inset-0 pointer-events-none border-x border-neutral-200 dark:border-neutral-800 max-w-7xl mx-auto z-50" />

      {/* Navigation */}
      <nav className="sticky top-0 z-[60] bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#EF4444] rounded flex items-center justify-center font-bold text-xl text-white">C</div>
            <span className="text-xl font-semibold tracking-tight">convverse.ai</span>
          </div>

          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#features" className="text-neutral-500 hover:text-black dark:hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="text-neutral-500 hover:text-black dark:hover:text-white transition-colors">Pricing</a>
            
            {/* Theme Toggle Button */}
            <button 
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-all"
            >
              {resolvedTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button className="bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-lg hover:opacity-80 transition-all active:scale-95">
              Start Building
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
<header className="relative pt-30 pb-16 border-b border-neutral-100 dark:border-neutral-800 bg-white dark:bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10 text-center flex flex-col items-center">
        
        {/* Sub-header with Flowing Glow */}
        <div className="mb-1">
          <span 
            className="flowing-glow  text-sm font-normal tracking-wide"
            data-text="Live on Google Meet, Zoom, and Teams"
          >
            Live on Google Meet, Zoom, and Teams
          </span>
        </div>

        {/* Headline using your EXACT provided classes */}
        <h1 className="text-center text-3xl font-medium tracking-tight text-black md:text-4xl lg:text-6xl dark:text-white mt-4 leading-[1.1]">
          Never fumble a <br className="hidden sm:block" /> 
           <span className="text-[#EF4444] dark:text-[#FB7185]">sales question</span> again
        </h1>

        {/* Subtext scaled to match the 6xl headline */}
      <p className="text-neutral-600 dark:text-neutral-400 text-sm md:text-base lg:text-lg max-w-2xl mx-auto mt-6 mb-10 leading-relaxed font-normal px-4">
  convverse.ai gives real-time prompts inside Google Meet so you always know 
  <br className="hidden md:block" />
  <strong>what to ask and what to answer</strong> – right when it matters. 
  <span className="text-[#EF4444] dark:text-[#FB7185] ml-1">Live.</span> Close more, stress less.
</p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-sm sm:max-w-none px-6">
          <button className="bg-[#171717] dark:bg-white text-white dark:text-black w-full sm:w-auto px-6 py-2.5 rounded-xl text-sm font-medium transition-all hover:opacity-90 active:scale-[0.98]">
            Try for Chrome-Its's free
          </button>
          <button className="bg-white dark:bg-transparent border border-neutral-200 dark:border-neutral-800 text-black dark:text-white w-full sm:w-auto px-6 py-2.5 rounded-xl text-sm font-medium transition-all hover:bg-neutral-50 dark:hover:bg-neutral-900 active:scale-[0.98]">
            View pricing
          </button>
        </div>

        {/* Social Proof */}
        {/* <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-0 text-xs text-neutral-500 dark:text-neutral-600 font-medium">
          <div className="flex items-center gap-2 pr-0 sm:pr-3 sm:border-r sm:border-neutral-200 sm:dark:border-neutral-800">
             <span className="text-neutral-900 dark:text-neutral-200 font-bold">G</span>
             <span className="text-neutral-400">★★★★★</span>
          </div>
          <span className="pl-0 sm:pl-3 text-center sm:text-left">
            Innovative AI solution 2026 by <strong className="text-neutral-900 dark:text-neutral-200 font-semibold">Gartner.</strong>
          </span>
        </div> */}
      </div>
    </header>
    
<section id="dashboard" className="relative w-full py-12 px-4 md:px-20 lg:px-32 bg-white dark:bg-black border-y border-neutral-100 dark:border-neutral-900">
        <div 
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="max-w-6xl mx-auto relative p-2 md:p-4 bg-neutral-50 dark:bg-neutral-900/30 rounded-3xl"
        >
          {/* Black Square Dots exactly on corner intersections */}
          <div className="absolute -top-1 -left-1 size-2 bg-black dark:bg-white z-20" />
          <div className="absolute -top-1 -right-1 size-2 bg-black dark:bg-white z-20" />
          <div className="absolute -bottom-1 -left-1 size-2 bg-black dark:bg-white z-20" />
          <div className="absolute -bottom-1 -right-1 size-2 bg-black dark:bg-white z-20" />

          {/* Centered Image with Floating Animation */}
          <div 
            className="relative z-10 w-full overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 transition-transform duration-500 ease-out"
            style={{ 
              transform: `translate(${offset.x}px, ${offset.y}px)`,
            }}
          >
            <img 
              alt="Dashboard" 
              className="w-full h-auto shadow-2xl"
              src="/convverse.png"/>
          </div>

          {/* Centered Background Shadow following image */}
          <div 
            className="absolute inset-0 -z-10 blur-[80px] opacity-20 dark:opacity-40 transition-transform duration-700 ease-out pointer-events-none"
            style={{
              transform: `translate(${offset.x * 1.5}px, ${offset.y * 1.5}px)`,
              background: 'radial-gradient(circle, #EF4444 0%, transparent 70%)' 
            }}
          />
        </div>
      </section>
<section id="features" className="relative border-t border-neutral-200 dark:border-neutral-900 bg-white dark:bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto border-x border-neutral-100 dark:border-neutral-900">
        
        {/* Header Section */}
        <div className="flex flex-col items-center pt-18 pb-10 text-center px-6">
          <p className="text-[#EF4444] dark:text-[#FB7185] text-sm font-normal tracking-wide mb-4">Core Intelligence</p>
          <h2 className="text-black dark:text-white text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-6 leading-tight max-w-2xl">
            Built for Real-time Sales Performance
          </h2>
        </div>

        {/* Feature Grid */}
        <div className="grid  grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-neutral-200 dark:divide-neutral-900 border-t border-neutral-200 dark:border-neutral-900">
          
          {/* Feature 1: Qualify Better */}
          <div className="p-8 md:p-12 lg:p-16 flex flex-col items-start group">
            <div className="flex items-center gap-3 mb-5">
              <Brain className="w-5 h-5 text-neutral-800 dark:text-neutral-200" />
              <h3 className="text-lg font-medium tracking-tight">Qualify Better</h3>
            </div>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-12 max-w-md">
              Never miss a critical question again. Qualify customers better by <strong>always knowing what to ask.</strong>
            </p>
            
            {/* Playbook UI Mockup */}
            <div className="w-full bg-neutral-50 dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 h-[220px] shadow-inner">
               <div className="space-y-3 mt-4">
                 {['Configure BANT or MEDDPICC', 'Live response summary', 'Follow-up on incomplete data', ].map((text, i) => (
                   <div key={i} className="flex items-center gap-3 bg-white dark:bg-black p-3.5 rounded-xl border border-neutral-100 dark:border-neutral-800 shadow-sm">
                      <CheckCircle2 className="w-4 h-4 text-[#EF4444]" />
                      <span className="text-xs font-medium text-neutral-700 dark:text-neutral-300">{text}</span>
                   </div>
                 ))}
               </div>
            </div>
          </div>

          {/* Feature 2: REPLICATED & DIMINISHED BATTLECARD UI */}
           <div className="p-8 md:p-12 lg:p-16 flex flex-col items-start group relative overflow-hidden">
            <div className="flex items-center gap-3 mb-5">
              <FileText className="w-5 h-5 text-neutral-800 dark:text-neutral-200" />
              <h3 className="text-lg font-medium tracking-tight">AI Battlecards</h3>
            </div>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-10 max-w-md">
              Never say "I will get back to you". <strong>Build credibility</strong> by answering difficult customer questions live.
            </p>
 
            {/* Fixed height + overflow-hidden = card gets clipped mid-content */}
            <div className="relative w-full h-64 overflow-hidden">
 
              {/* Main Extension Container */}
              <div className="w-full bg-white dark:bg-neutral-950 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-2xl overflow-hidden">
 
                {/* Window Header */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-100 dark:border-neutral-800">
                  <span className="text-[14px] font-bold text-black dark:text-white tracking-tight">convverse.ai</span>
                  <div className="flex items-center gap-2 text-neutral-400">
                    <ExternalLink size={15} />
                    <MoreVertical size={15} />
                    <X size={15} />
                  </div>
                </div>
 
                {/* Extension Tabs */}
                <div className="flex border-b border-neutral-100 dark:border-neutral-800">
                  <div className="flex-1 py-2.5 text-center text-[11px] font-medium text-neutral-400 flex items-center justify-center gap-1 cursor-pointer">
                    <span className="opacity-50 tracking-tighter font-bold">ˇˇ</span> Qualify
                  </div>
                  <div className="flex-1 py-2.5 text-center text-[11px] font-bold text-blue-600 border-b-2 border-blue-600 flex items-center justify-center gap-1 cursor-pointer">
                    <FileText size={11} /> Battlecards
                  </div>
                </div>
 
                {/* Inner Content */}
                <div className="p-4 bg-white dark:bg-neutral-950">
                  <div className="flex justify-end mb-3">
                    <span className="text-[10px] text-neutral-400 flex items-center gap-1 cursor-pointer hover:text-neutral-600">
                      <X size={9} /> Collapse all
                    </span>
                  </div>
 
                  {/* Green Card */}
                  <div className="rounded-xl border-2 border-emerald-500 p-4 bg-emerald-50 dark:bg-emerald-950/20 mb-3">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-[13px] font-bold text-neutral-800 dark:text-neutral-100 leading-tight">What is convverse.ai?</h4>
                      <ChevronDown size={15} className="text-neutral-400" />
                    </div>
                    <div className="h-px w-full bg-emerald-200 dark:bg-emerald-800 mb-3" />
                    <p className="text-[12px] text-neutral-600 dark:text-neutral-400 leading-[1.6]">
                      convverse.ai is an AI-powered sales expert designed to help AEs and BDRs run better discovery and qualification calls. It integrates with Google Meet, Zoom, and Teams.
                    </p>
                  </div>
 
                  {/* Second card — this one gets eaten by the fade */}
                  <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-4 bg-white dark:bg-neutral-900">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-[13px] font-bold text-neutral-800 dark:text-neutral-100 leading-tight">How does pricing work?</h4>
                      <ChevronDown size={15} className="text-neutral-400" />
                    </div>
                    <div className="h-px w-full bg-neutral-200 dark:bg-neutral-700 mb-3" />
                    <p className="text-[12px] text-neutral-600 dark:text-neutral-400 leading-[1.6]">
                      We offer a simple flat-rate Growth plan at $39/mo with unlimited calls, battlecards, and CRM sync...
                    </p>
                  </div>
                </div>
              </div>
 
              {/* Fade — overlays the bottom, dissolves into section background */}
              <div className="absolute bottom-0 left-0 right-0 h-36 pointer-events-none bg-gradient-to-b from-transparent to-white dark:to-black" />
 
              {/* Ambient glow */}
              <div
                className="absolute inset-x-12 top-1/2 -translate-y-1/2 -z-10 blur-[80px] opacity-15 dark:opacity-25 rounded-full"
                style={{ background: 'radial-gradient(circle, #10b981 0%, #3b82f6 40%, transparent 70%)' }}
              />
            </div>
          </div>

        </div>

        {/* Use Cases Bottom Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-neutral-100 dark:divide-neutral-900 border-t border-neutral-100 dark:border-neutral-900">
           {['Real-time Sourcing', 'Rapid Onboarding', 'Deal Summaries'].map((title) => (
             <div key={title} className="p-10 text-center hover:bg-neutral-50 dark:hover:bg-neutral-950 transition-colors cursor-default">
                <h4 className="text-sm font-medium italic text-black dark:text-white tracking-tight">{title}</h4>
             </div>
           ))}
        </div>
        {/* <RotatingTitles/> */}
      </div>
    </section>
      {/* Bento Grid Features */}
      {/* <section id="features" className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          
          <div className="md:col-span-8 group relative rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 p-8 overflow-hidden hover:border-blue-500/50 transition-all">
            <Zap className="text-blue-500 w-8 h-8 mb-4" />
            <h3 className="text-2xl font-medium mb-3">Qualify Better</h3>
            <p className="text-neutral-500 dark:text-neutral-400 mb-6 max-w-md">Never miss a critical question. suggested follow-ups based on BANT, MEDDPICC, or custom playbooks.</p>
            <div className="flex flex-wrap gap-3">
              {['Live Response', 'Follow-ups', 'CRM Sync'].map(tag => (
                <span key={tag} className="px-3 py-1 rounded-md bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 text-xs font-mono">{tag}</span>
              ))}
            </div>
            <div className="absolute -bottom-4 -right-4 w-64 h-40 bg-blue-500/10 blur-3xl group-hover:bg-blue-500/20 transition-all" />
          </div>

          <div className="md:col-span-4 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 p-8 flex flex-col justify-center text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">15 min</div>
            <p className="text-neutral-500 dark:text-neutral-400 text-sm tracking-tight">Time to first qualification. Just add to Chrome and start closing.</p>
          </div>

          <div className="md:col-span-4 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 p-8">
            <ShieldCheck className="text-emerald-500 w-8 h-8 mb-4" />
            <h3 className="text-xl font-medium mb-2">Security First</h3>
            <p className="text-neutral-500 dark:text-neutral-400 text-sm">Enterprise grade AES-256 encryption. Your data is never sold or used for training.</p>
          </div>

          <div className="md:col-span-8 group relative rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 p-8 overflow-hidden hover:border-blue-500/50 transition-all">
             <div className="flex items-center gap-3 mb-4">
              <MessageSquare className="text-blue-500 w-6 h-6" />
              <h3 className="text-2xl font-medium">Real-time Battlecards</h3>
            </div>
            <p className="text-neutral-500 dark:text-neutral-400 mb-6 leading-relaxed">Instantly handle objections. When competitor names are mentioned, the winning pitch appears.</p>
            <div className="bg-white dark:bg-black p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 font-mono text-[10px] sm:text-xs">
              <span className="text-blue-500">{"// Objections Detected"}</span><br/>
              <span className="text-neutral-400">Prospect: "We currently use Competitor X."</span><br/>
              <span className="text-emerald-500">Convverse AI: Suggest highlighting our superior API support...</span>
            </div>
          </div>
        </div>
      </section> */}

      {/* Pricing */}
{/* Pricing Section - Now with Blueprint Alignment and Vertical Dividers */}
    <section id="pricing" className="relative border-t border-neutral-200 dark:border-neutral-900 bg-white dark:bg-black overflow-hidden">
  {/* Background Dots */}
  <div 
    className="absolute inset-0 opacity-[0.15] dark:opacity-[0.1] pointer-events-none" 
    style={{
      backgroundImage: `radial-gradient(#000 0.5px, transparent 0.5px)`,
      backgroundSize: '24px 24px',
    }}
  />

  <div className="relative z-10 max-w-7xl mx-auto border-x border-neutral-100 dark:border-neutral-900">
    
    {/* Header Section */}
    <div className="flex flex-col items-center pt-20 pb-10 text-center px-6">
      <h2 className="text-4xl font-medium tracking-tight text-black dark:text-white">
        Pricing
      </h2>
    </div>

    {/* The Pricing Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 border-t border-neutral-200 dark:border-neutral-900">
      
      {/* Column 1: Pro Plan */}
      <div className="flex flex-col border-b md:border-b-0 md:border-r border-neutral-100 dark:border-neutral-900">
        
        {/* Top Header Area - Uses grid to align button perfectly with neighbor */}
        <div className="p-8 lg:p-12 grid grid-rows-[auto_1fr_auto] gap-4 border-b border-neutral-100 dark:border-neutral-900 bg-white dark:bg-black">
          <div>
            <h3 className="text-xl font-bold mb-4">Pro</h3>
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-xl text-neutral-400 line-through font-medium">$59</span>
              <span className="text-3xl font-bold text-[#EF4444]">$39</span>
            </div>
            <p className="text-[10px] text-neutral-500 font-medium uppercase tracking-tight">/ user/month billed annually</p>
          </div>
          
          <p className="text-[#EF4444] text-xs font-bold self-center">Promotional pricing, few slots left</p>
          
          <button className="w-full py-3 rounded-xl border border-neutral-200 dark:border-neutral-800 text-sm font-bold hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-all">
            Add to Chrome — It's free!
          </button>
        </div>

        {/* Feature List Area */}
        <div className="p-8 lg:p-12">
          <ul className="space-y-4 w-full">
            {[
              'Real-time in-call qualification',
              'Live battlecards from PDFs and the internet',
              'Upload upto 3 PDFs (FAQs/Technical/ any doc)',
              'Live AE analytics (talk time, speech rate, call sentiment)',
              'Audio and video capture with deal summary email',
              'Early access to the founding team'
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-neutral-600 dark:text-neutral-400">
                <span className="text-neutral-400 font-bold mt-0.5">✓</span> 
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Column 2: Enterprise Plan */}
      <div className="flex flex-col border-b md:border-b-0 border-neutral-100 dark:border-neutral-900 bg-neutral-50/30 dark:bg-neutral-950/20">
        
        {/* Top Header Area - Matches Row Structure of Pro */}
        <div className="p-8 lg:p-12 grid grid-rows-[auto_1fr_auto] gap-4 border-b border-neutral-100 dark:border-neutral-900">
          <div>
            <h3 className="text-xl font-bold mb-4">Enterprise</h3>
            <div className="text-3xl font-bold mb-1">Custom</div>
          </div>
          
          <p className="text-neutral-500 text-sm font-medium self-center">(coming soon)</p>
          
          <button className="w-full py-3 rounded-xl border border-neutral-200 dark:border-neutral-800 text-sm font-bold hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-all">
            Contact Us
          </button>
        </div>

        {/* Feature List Area */}
        <div className="p-8 lg:p-12">
          <ul className="space-y-4 w-full">
            {[
              'Salesforce integration',
              'Custom analytics',
              'Multiple question templates',
              'SSO',
              'SOC 2 and ISO support'
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-neutral-600 dark:text-neutral-400">
                <span className="text-neutral-400 font-bold mt-0.5">✓</span> 
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </div>

    {/* Bottom CTA Bar */}
    <div className="border-t border-neutral-100 dark:border-neutral-900 py-12 flex justify-center bg-white dark:bg-black">
      <button className="px-10 py-3.5 bg-black dark:bg-white text-white dark:text-black rounded-full text-sm font-bold shadow-xl hover:scale-[1.02] transition-all active:scale-95">
        Add to Chrome — It's free!
      </button>
    </div>
  </div>
</section>

      {/* FAQ */}
 {/* FAQ Section - Full Width Divider Style */}
      <section className="relative py-18 bg-white dark:bg-black overflow-hidden border-t border-neutral-100 dark:border-neutral-900">
    
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-4xl font-medium mb-16 text-center tracking-tight text-black dark:text-white">
            Frequently asked questions
          </h2>
          
          <div className="flex flex-col">
            {faqData.map((item, i) => (
              <div 
                key={i} 
                className="border-t border-neutral-200 dark:border-neutral-800 last:border-b"
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between py-7 text-left group transition-all"
                >
                  <span className={`text-base md:text-lg font-medium transition-colors duration-200 ${
                    openFaq === i ? 'text-black dark:text-white' : 'text-neutral-600 dark:text-neutral-400 group-hover:text-black dark:group-hover:text-white'
                  }`}>
                    {item.q}
                  </span>
                  <div className={`p-1 rounded-full border border-neutral-200 dark:border-neutral-800 transition-transform duration-300 ${
                    openFaq === i ? 'rotate-180 bg-neutral-50 dark:bg-neutral-900' : ''
                  }`}>
                    <ChevronDown size={18} className="text-neutral-500" />
                  </div>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openFaq === i ? 'max-h-[300px] opacity-100 pb-8' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-sm md:text-base leading-relaxed text-neutral-500 dark:text-neutral-400 max-w-3xl">
                    {item.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-neutral-200 dark:border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-neutral-500 text-sm italic">© 2026 convverse.ai • Made with ❤️ in India</p>
          <div className="flex gap-8 text-sm font-medium text-neutral-500">
            <a href="#" className="hover:text-blue-500 transition-colors">Privacy</a>
            <a href="#" className="hover:text-blue-500 transition-colors">Terms</a>
            <a href="#" className="hover:text-blue-500 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}