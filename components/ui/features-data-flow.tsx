"use client";

import {
    AlertTriangle,
    BarChart3,
    Brain,
    FileText,
    MessageSquareText,
    Mic,
    Target,
    Zap,
} from "lucide-react";
import React, { forwardRef, useRef } from "react";

import { AnimatedBeam } from "@/components/ui/animated-beam";
import { cn } from "@/lib/utils";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 border-neutral-200 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] dark:border-neutral-800 dark:bg-neutral-950",
        className,
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export default function FeaturesDataFlow() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Input Refs (Left)
  const leftOneRef = useRef<HTMLDivElement>(null);
  const leftTwoRef = useRef<HTMLDivElement>(null);
  const leftThreeRef = useRef<HTMLDivElement>(null);

  // Center Ref (Hub)
  const centerRef = useRef<HTMLDivElement>(null);

  // Output Refs (Right)
  const rightOneRef = useRef<HTMLDivElement>(null);
  const rightTwoRef = useRef<HTMLDivElement>(null);
  const rightThreeRef = useRef<HTMLDivElement>(null);
  const rightFourRef = useRef<HTMLDivElement>(null);
  const rightFiveRef = useRef<HTMLDivElement>(null);

  return (
    <section className="w-full border-t border-neutral-100 py-24 dark:border-neutral-900">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Semantic Header */}
        <div className="mb-20 flex flex-col items-center text-center gap-4">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c30010]">System Architecture</p>
          <h3 className="text-3xl font-medium tracking-tight text-neutral-900 dark:text-white md:text-5xl">
            Real-time Intelligence Flow
          </h3>
        </div>

        {/* The Animated Canvas */}
        <div
          className="relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-3xl border border-neutral-100 bg-neutral-50/30 dark:border-neutral-800 dark:bg-black/20"
          ref={containerRef}
        >
          <div className="flex size-full max-w-3xl flex-row items-stretch justify-between gap-10 px-10">
            
            {/* COLUMN 1: INPUTS */}
            <div className="flex flex-col justify-center gap-12">
              <Circle ref={leftOneRef}>
                <Mic className="size-5 text-neutral-500" />
              </Circle>
              <Circle ref={leftTwoRef}>
                <MessageSquareText className="size-5 text-neutral-500" />
              </Circle>
              <Circle ref={leftThreeRef}>
                <BarChart3 className="size-5 text-neutral-500" />
              </Circle>
            </div>

            {/* COLUMN 2: THE HUB */}
            <div className="flex flex-col justify-center">
              <Circle ref={centerRef} className="size-20 border-[#c30010]/30 shadow-2xl shadow-[#c30010]/20">
                <img 
                  src="/logo-icon.png" 
                  alt="convverse" 
                  className="size-10 object-contain dark:invert" 
                  onError={(e) => (e.currentTarget.src = "https://framerusercontent.com/images/kY6M8N5lZ4uD1P2P3.png")} // Fallback logic
                />
              </Circle>
            </div>

            {/* COLUMN 3: OUTPUTS */}
            <div className="flex flex-col justify-center gap-6">
              <Circle ref={rightOneRef}>
                <Zap className="size-5 text-[#c30010]" />
              </Circle>
              <Circle ref={rightTwoRef}>
                <Brain className="size-5 text-blue-500" />
              </Circle>
              <Circle ref={rightThreeRef}>
                <AlertTriangle className="size-5 text-amber-500" />
              </Circle>
              <Circle ref={rightFourRef}>
                <Target className="size-5 text-emerald-500" />
              </Circle>
              <Circle ref={rightFiveRef}>
                <FileText className="size-5 text-sky-500" />
              </Circle>
            </div>
          </div>

          {/* --- BEAM ORCHESTRATION --- */}

          {/* Left to Center (Inputs) */}
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={leftOneRef}
            toRef={centerRef}
            curvature={-75}
            endYOffset={-10}
            gradientStartColor="#c30010"
            gradientStopColor="#c30010"
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={leftTwoRef}
            toRef={centerRef}
            gradientStartColor="#c30010"
            gradientStopColor="#c30010"
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={leftThreeRef}
            toRef={centerRef}
            curvature={75}
            endYOffset={10}
            gradientStartColor="#c30010"
            gradientStopColor="#c30010"
          />

          {/* Center to Right (Outputs) */}
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={centerRef}
            toRef={rightOneRef}
            curvature={-100}
            startYOffset={-15}
            gradientStartColor="#c30010"
            gradientStopColor="#3b82f6"
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={centerRef}
            toRef={rightTwoRef}
            curvature={-40}
            startYOffset={-5}
            gradientStartColor="#c30010"
            gradientStopColor="#3b82f6"
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={centerRef}
            toRef={rightThreeRef}
            gradientStartColor="#c30010"
            gradientStopColor="#3b82f6"
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={centerRef}
            toRef={rightFourRef}
            curvature={40}
            startYOffset={5}
            gradientStartColor="#c30010"
            gradientStopColor="#3b82f6"
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={centerRef}
            toRef={rightFiveRef}
            curvature={100}
            startYOffset={15}
            gradientStartColor="#c30010"
            gradientStopColor="#3b82f6"
          />
        </div>
      </div>
    </section>
  );
}