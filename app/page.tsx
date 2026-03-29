  "use client"
  import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  Navbar,
  NavbarButton,
  NavBody,
  NavItems,
} from "@/components/ui/resizable-navbar";
import {
  Brain,
  CheckCircle2,
  ChevronDown,
  ExternalLink,
  FileText,
  Moon,
  MoreVertical,
  PlayCircle,
  Sun,
  X
} from 'lucide-react';
import { useTheme } from "next-themes";

import HowItWorksEditorial from "@/components/ui/How-It-Works";
import ModernPricingSection from "@/components/ui/price";
import { IconBrandChrome } from '@tabler/icons-react';
import { MouseEvent, useEffect, useRef, useState } from 'react';
import Link from "next/link";
import IntelligenceBento from "@/components/ui/bento";
import IntelligenceBentoGrid from "@/components/ui/bento";
  export default function LandingPage() {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [openFaq, setOpenFaq] = useState<number | null>(0); // First one open by default
  const [offset, setOffset] = useState({ x: 0, y: 0 });
    const containerRef = useRef<HTMLDivElement>(null);
    const navItems = [
  { name: "Features", link: "#features" },
  { name: "Pricing", link: "#pricing" },
];
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
        
        {/* 1px Blueprint Lines removed */}

        {/* Navigation */}
      <Navbar className="fixed top-0 inset-x-0 z-60">
  <NavBody className="justify-between items-center">

    {/* LEFT: LOGO */}
    <div className="flex items-center">
      <img
        src="/logo.png"
        alt="convverse.ai"
        className="h-9 object-contain dark:invert"
      />
    </div>

    {/* CENTER: NAV ITEMS */}
    <div className="hidden md:flex justify-center flex-1">
      <NavItems
        items={navItems}
        onItemClick={(e) => {
          const id = (e.currentTarget.textContent || "").toLowerCase();
          const section = document.getElementById(id);
          if (section) {
            section.scrollIntoView({ behavior: "smooth" });
          }
        }}
      />
    </div>

    {/* RIGHT: ACTIONS */}
    <div className="flex items-center gap-3">

      {/* Theme Toggle */}
      <button
        type="button"
        onClick={() =>
          setTheme(resolvedTheme === "dark" ? "light" : "dark")
        }
        className="p-2 rounded-full border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition"
      >
        {resolvedTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
      </button>

      {/* CTA */}
      <NavbarButton
        variant="primary"
        className="rounded-full mx-[-3] bg-black text-white dark:bg-white dark:text-black"
      >
        Start Building
      </NavbarButton>
    </div>

  </NavBody>

  <MobileNav>
    <MobileNavHeader>
      <img
        src="/logo.png"
        alt="convverse.ai"
        className="h-8 object-contain"
      />
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
          className="p-2 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition"
        >
          {resolvedTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <MobileNavToggle
          isOpen={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((prev) => !prev)}
        />
      </div>
    </MobileNavHeader>

    <MobileNavMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)}>
      {navItems.map((item) => (
        <a
          key={item.name}
          href={item.link}
          onClick={() => setMobileMenuOpen(false)}
          className="w-full rounded-md px-2 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-800"
        >
          {item.name}
        </a>
      ))}
      <NavbarButton
        variant="primary"
        className="w-full rounded-full  bg-black text-white dark:bg-white dark:text-black"
      >
        Start Building
      </NavbarButton>
    </MobileNavMenu>
  </MobileNav>
</Navbar>
        {/* Hero Section */}
  <header className="relative pt-30 pb-15 bg-white dark:bg-black overflow-hidden">
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
            <span className="text-[#c30010] dark:text-[#c30010]">sales question</span> again
          </h1>

          {/* Subtext scaled to match the 6xl headline */}
        <p className="text-neutral-600 dark:text-neutral-400 text-sm md:text-base lg:text-lg max-w-2xl mx-auto mt-6 mb-10 leading-relaxed font-normal px-4">
    convverse.ai gives real-time prompts inside Google Meet so you always know <strong>what to ask and what to answer</strong> – right when it matters. 
  Close more, stress less.
  </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-sm sm:max-w-none px-6">
            <button className="bg-[#171717] dark:bg-white text-white dark:text-black w-full sm:w-auto px-6 py-2.5 rounded-xl text-sm font-medium transition-all hover:opacity-90 active:scale-[0.98]">
              Try for Chrome-Its's free
            </button>
            <Link href="#pricing">
            <button className="bg-white dark:bg-transparent border border-neutral-200 dark:border-neutral-800 text-black dark:text-white w-full sm:w-auto px-6 py-2.5 rounded-xl text-sm font-medium transition-all hover:bg-neutral-50 dark:hover:bg-neutral-900 active:scale-[0.98]">
              View pricing
            </button>
            </Link>
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
      
  <section id="dashboard" className="relative w-full py-8 px-4 md:px-20 lg:px-32 bg-white dark:bg-black">
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
                src="/conv.jpeg"/>
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
        <HowItWorksEditorial/>
        {/* <section id="how-it-works" className="relative overflow-hidden bg-white py-20 dark:bg-black md:py-24">
          <div className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-[#EF4444]/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-7xl px-6">
            <div className="mx-auto mb-14 max-w-2xl text-center">
              <span className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-600 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-300">
                Process
              </span>
              <h2 className="mt-5 text-3xl font-medium tracking-tight text-black dark:text-white md:text-5xl">
                How It Works In 15 Minutes
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400 md:text-base">
                A simple setup flow, then real-time guidance during every sales conversation.
              </p>
            </div>

            <div className="relative">
              <div className="pointer-events-none absolute left-0 right-0 top-9.5 hidden h-px bg-linear-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700 md:block" />

              <div className="grid grid-cols-1 gap-5 md:grid-cols-5">
                {[
                  {
                    step: "01",
                    title: "Sign Up",
                    desc: "Create your workspace and invite your team in minutes.",
                    icon: <Globe className="h-4 w-4" />,
                  },
                  {
                    step: "02",
                    title: "Configure",
                    desc: "Set qualification prompts and your preferred playbook.",
                    icon: <Layout className="h-4 w-4" />,
                  },
                  {
                    step: "03",
                    title: "Upload Docs",
                    desc: "Drop in FAQs, battlecards, and product collateral.",
                    icon: <Plus className="h-4 w-4" />,
                  },
                  {
                    step: "04",
                    title: "Join Calls",
                    desc: "Use it live in Google Meet, Zoom, and Teams.",
                    icon: <Monitor className="h-4 w-4" />,
                  },
                  {
                    step: "05",
                    title: "Close Faster",
                    desc: "Get real-time guidance, objections, and next-best actions.",
                    icon: <Zap className="h-4 w-4" />,
                  },
                ].map((item) => (
                  <article
                    key={item.step}
                    className="group relative rounded-2xl border border-neutral-200 bg-white/90 p-5 shadow-[0_10px_35px_-20px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_-20px_rgba(0,0,0,0.45)] dark:border-neutral-800 dark:bg-neutral-950/85"
                  >
                    <div className="mb-4 flex items-center justify-between">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#EF4444]/10 text-[#EF4444] dark:bg-[#FB7185]/10 dark:text-[#FB7185]">
                        {item.icon}
                      </span>
                      <span className="text-[11px] font-bold tracking-[0.18em] text-neutral-400 dark:text-neutral-500">
                        STEP {item.step}
                      </span>
                    </div>

                    <h3 className="mb-2 text-base font-semibold tracking-tight text-black dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
                      {item.desc}
                    </p>

                    <svg
                      viewBox="0 0 120 12"
                      className="mt-5 h-3 w-full text-neutral-200 opacity-80 transition-opacity group-hover:opacity-100 dark:text-neutral-800"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path d="M1 6h118" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 6" />
                    </svg>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-12 rounded-2xl border border-neutral-200 bg-neutral-50/80 p-6 dark:border-neutral-800 dark:bg-neutral-950/60 md:p-8">
              <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#EF4444] dark:text-[#FB7185]">
                    Ready To Start
                  </p>
                  <p className="mt-2 text-lg font-medium tracking-tight text-black dark:text-white">
                    Launch your first guided call this week.
                  </p>
                </div>
                <button className="inline-flex items-center gap-2 rounded-xl bg-black px-5 py-2.5 text-sm font-semibold text-white transition-all hover:opacity-90 dark:bg-white dark:text-black">
                  Get Started Now
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>
            </div>
          </div>
        </section> */}
    <section id="features" className="relative  bg-white dark:bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto border-x border-neutral-100 dark:border-neutral-900">
          
          {/* Header Section */}
          <div className="flex flex-col items-center pt-8 pb-8 text-center px-6">
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
              <div className="w-full bg-neutral-50 dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 h-55 shadow-inner">
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
                <div className="absolute bottom-0 left-0 right-0 h-36 pointer-events-none bg-linear-to-b from-transparent to-white dark:to-black" />
  
                {/* Ambient glow */}
                <div
                  className="absolute inset-x-12 top-1/2 -translate-y-1/2 -z-10 blur-[80px] opacity-15 dark:opacity-25 rounded-full"
                  style={{ background: 'radial-gradient(circle, #10b981 0%, #3b82f6 40%, transparent 70%)' }}
                />
              </div>
            </div>

          </div>
{/* Integration Node Flow */}
{/* <IntegrationFlow/> */}
{/* <IntegrationFlow/> */}
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
      
  {/* <IntelligenceBentoGrid/> */}
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
     <ModernPricingSection/>

    {/* Download CTA Section */}
    <section id="cta" className="w-full bg-white dark:bg-black pt-8 pb-16 md:pt-10 md:pb-20 px-6">
      {/* Large Rounded Container with Brand Background */}
      <div className="max-w-7xl mx-auto rounded-[2rem] bg-[#c30010] p-4 md:p-8 shadow-2xl shadow-[#c30010]/20">
        
        {/* Inset Light Card (Off-white / Light Gray) */}
        <div className="bg-white dark:bg-neutral-900 rounded-[1.5rem] p-8 md:p-16 lg:p-20 shadow-inner relative overflow-hidden">
          
          {/* macOS Style Traffic Lights (Top Left) */}
          <div className="absolute top-6 left-8 flex gap-2">
            <div className="size-3 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
            <div className="size-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
            <div className="size-3 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
          </div>

          {/* Main Content Area - Left Aligned */}
          <div className="max-w-3xl flex flex-col items-start pt-6">
            
            {/* Elegant Typography Headline (Serif + Handwritten) */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-neutral-950 dark:text-white leading-[1.15] mb-6">
  Smarter conversations, <span className="italic text-[#c30010] font-light">stronger deals</span>
</h2>

<p className="text-neutral-600 dark:text-neutral-400 text-base md:text-lg lg:text-xl font-normal leading-relaxed max-w-2xl mb-12">
  Let <strong className="text-neutral-900 dark:text-white font-semibold">convverse.ai</strong> handle insights, summaries, and analysis — so you can focus on what matters.
</p>
            {/* CTA Buttons - Platform Based */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              
              {/* Primary CTA: Install Extension (Chrome/Meet based) */}
              <button className="group flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full transition-all duration-300 shadow-md shadow-emerald-500/20 w-full sm:w-auto">
                <IconBrandChrome size={20} className="group-hover:scale-110 transition-transform" />
                <span className="font-semibold text-sm md:text-base">Install Extension</span>
              </button>

              {/* Secondary CTA: Watch Demo / Learn More (Neutral Gray/Beige) */}
              <button className="flex items-center justify-center gap-3 bg-[#F1F0EA] dark:bg-neutral-800 hover:bg-[#EAE9E1] dark:hover:bg-neutral-700 text-neutral-900 dark:text-white px-8 py-4 rounded-full transition-all duration-300 border border-neutral-200 dark:border-neutral-700 w-full sm:w-auto">
                <PlayCircle size={20} className="text-[#c30010]" />
                <span className="font-semibold text-sm md:text-base">Watch Demo</span>
              </button>
            </div>
          </div>
          
          {/* Subtle Accent: Background Glow */}
          <div className="absolute -bottom-20 -right-20 size-80 bg-[#c30010]/5 blur-[100px] rounded-full pointer-events-none" />
        </div>
      </div>
    </section>
      {/* Bottom CTA Bar */}
      {/* <div className="py-12 flex justify-center bg-white dark:bg-black">
        <button className="px-10 py-3.5 bg-black dark:bg-white text-white dark:text-black rounded-full text-sm font-bold shadow-xl hover:scale-[1.02] transition-all active:scale-95">
          Add to Chrome — It's free!
        </button>
      </div> */}
 
 {/* <ModernPricingSection/> */}
{/* <PremiumPricing/> */}
        {/* FAQ */}
  {/* FAQ Section - Full Width Divider Style */}
        <section className="relative py-8 bg-white dark:bg-black overflow-hidden">
      
          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <h2 className="text-3xl md:text-4xl font-medium mb-10 text-center tracking-tight text-black dark:text-white">
              Frequently asked questions
            </h2>
            
            <div className="flex flex-col">
              {faqData.map((item, i) => (
                <div key={i} className="border-b border-neutral-200 dark:border-neutral-800">
                  <button 
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between py-5 text-left group transition-all"
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
                      openFaq === i ? 'max-h-75 opacity-100 pb-8' : 'max-h-0 opacity-0'
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
      <footer className="relative w-full py-14 md:pb-20 bg-white dark:bg-black overflow-hidden border-t border-neutral-200 dark:border-neutral-900">
      
      {/* 1. ACTUAL FOOTER CONTENT (Standard Grid Layout) */}
     <div className="relative z-10 max-w-7xl mx-auto px-10 grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        
        {/* Left Section: Identity & Email */}
     <div className="md:col-span-6 flex flex-col items-start gap-5">
  
  <img 
    src="/logo.png" 
    alt="convverse.ai" 
    className="h-8 w-auto object-contain dark:invert" 
  />

  <div className="flex items-center gap-2 text-sm font-semibold text-neutral-900 dark:text-neutral-100">
    <span className="text-neutral-400 dark:text-neutral-500 font-medium">email:</span>
    <a href="mailto:sales@convverse.ai" className="hover:text-[#c30010] transition-colors">
      sales@convverse.ai
    </a>
  </div>

  <p className="text-[13px] font-bold text-neutral-400 dark:text-neutral-500 tracking-tight">
    © 2026 Convverse AI Technologies. All rights reserved
  </p>

</div>

        {/* Right Section: Structured Links (2 Columns) */}
        <div className="md:col-span-6 grid grid-cols-2 gap-8 md:justify-items-end">
          
          {/* Column 1 */}
          <div className="flex flex-col gap-5">
            <a href="#" className="text-sm font-bold text-neutral-900 dark:text-neutral-100 hover:text-[#c30010] underline decoration-neutral-300 dark:decoration-neutral-700 underline-offset-4 transition-all">
              Privacy Policy
            </a>
            <a href="#" className="text-sm font-bold text-neutral-900 dark:text-neutral-100 hover:text-[#c30010] underline decoration-neutral-300 dark:decoration-neutral-700 underline-offset-4 transition-all">
              Terms and Conditions
            </a>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-5">
            <a href="#" className="text-sm font-bold text-neutral-900 dark:text-neutral-100 hover:text-[#c30010] underline decoration-neutral-300 dark:decoration-neutral-700 underline-offset-4 transition-all">
              Refund Policy
            </a>
            <a href="#" className="text-sm font-bold text-neutral-900 dark:text-neutral-100 hover:text-[#c30010] underline decoration-neutral-300 dark:decoration-neutral-700 underline-offset-4 transition-all">
              Contact Us
            </a>
          </div>

        </div>
      </div>

      {/* 2. OVERSIZED BACKGROUND TEXT (Remains Centered) */}
      {/* <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none select-none z-0 translate-y-1/3">
        <h2 className="text-[120px] md:text-[220px] lg:text-[320px] font-bold tracking-tighter leading-none text-neutral-100/80 dark:text-neutral-900/80 text-center">
          convverse
        </h2>
      </div> */}

    </footer>
      </div>
    );
  }