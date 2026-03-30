import { ArrowRight, FileUp, Settings, UserPlus, Video, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';

const steps = [
  {
    id: 1,
    title: "Sign Up & Create Workspace",
    description: "Create your account in seconds. Invite your team members and configure workspace preferences.",
    icon: UserPlus,
    image: "/login1.png",
    color: "#c30010"
  },
  {
    id: 2,
    title: "Configure Your Playbook",
    description: "Set up BANT, MEDDPICC, or custom qualification frameworks that match your sales process.",
    icon: Settings,
    image: "/mock-config.png",
    color: "#c30010"
  },
  {
    id: 3,
    title: "Upload Knowledge Base",
    description: "Add battlecards, FAQs, pricing sheets, and product documentation. Our AI instantly prepares to assist.",
    icon: FileUp,
    image: "/mock-upload.png",
    color: "#c30010"
  },
  {
    id: 4,
    title: "Join Your Meeting",
    description: "Launch Google Meet, Zoom, or Teams as usual. Convverse AI appears automatically and listens.",
    icon: Video,
    image: "/mock-meet.png",
    color: "#c30010"
  },
  {
    id: 5,
    title: "Get Real-time Guidance",
    description: "Receive live prompts, battlecard suggestions, objection handlers, and qualification insights during the call.",
    icon: Zap,
    image: "/mock-meet.png",
    color: "#c30010"
  }
];

const DynamicHowItWorks = () => {
  const [counter, setCounter] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  // Derive progress and active step from counter
  const progress = counter % 100;

  // Auto-play Timer Logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((prev) => prev + 1);
    }, 50); // Speed of the progress bar (100 ticks = ~5 seconds per step)

    return () => clearInterval(timer);
  }, []);

  // Update active step when counter changes
  useEffect(() => {
    setActiveStep(Math.floor(counter / 100) % steps.length);
  }, [counter]);

  const handleStepClick = (index: number) => {
    setCounter(index * 100);
  };

  const handleImageLoad = (stepId: number) => {
    setLoadedImages((prev) => new Set(prev).add(stepId));
  };

  return (
    <section className="relative w-full bg-white dark:bg-black overflow-hidden py-12 md:py-14">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center px-6 md:px-8 lg:px-16 mb-12 md:mb-14">
          <p className="text-[#c30010] dark:text-[#c30010] text-sm font-normal tracking-wide mb-4">
            Five Steps to Success
          </p>
          <h2 className="text-black dark:text-white text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-6 leading-tight max-w-2xl">
            Get Started in Five Minutes
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm md:text-base max-w-2xl leading-relaxed">
            From signup to your first qualified call, convverse.ai gets you up and running quickly.
          </p>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 px-6 md:px-8 lg:px-16">
          
          {/* LEFT: Interactive Step Cards */}
          <div className="lg:col-span-4 space-y-0 divide-y divide-neutral-200 dark:divide-neutral-800">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === index;
              return (
                <div 
                  key={step.id}
                  onClick={() => {
                    handleStepClick(index);
                  }}
                  className={`relative group cursor-pointer px-4 md:px-5 py-5 md:py-6 transition-all duration-300 ${
                    isActive 
                      ? 'bg-neutral-50 dark:bg-neutral-900' 
                      : 'bg-transparent hover:bg-neutral-50/50 dark:hover:bg-neutral-900/30'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    
                    {/* Step Icon */}
                    <div className={`shrink-0 w-5 h-5 flex items-center justify-center transition-all ${
                      isActive 
                        ? 'text-[#c30010]' 
                        : 'text-neutral-400 dark:text-neutral-600'
                    }`}>
                      <Icon size={18} />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className={`text-sm md:text-base font-semibold transition-colors ${
                        isActive ? 'text-black dark:text-white' : 'text-neutral-700 dark:text-neutral-300 group-hover:text-black dark:group-hover:text-white'
                      }`}>
                        {step.title}
                      </h3>
                      
                      {/* Expandable Description */}
                      <div className={`overflow-hidden transition-all duration-300 ${
                        isActive ? 'max-h-20 opacity-100 mt-2' : 'max-h-0 opacity-0'
                      }`}>
                        <p className="text-xs md:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Arrow Icon */}
                    {isActive && (
                      <ArrowRight size={16} className="shrink-0 text-[#c30010] mt-0.5" />
                    )}
                  </div>

                  {/* Progress Bar */}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-neutral-100 dark:bg-neutral-800 overflow-hidden">
                      <div 
                        className="h-full bg-[#c30010] transition-all duration-100 linear"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* RIGHT: Dynamic Preview */}
          <div className="lg:col-span-8">
            <div className="sticky top-0">
              <div className="relative w-full bg-neutral-50 dark:bg-neutral-900 border-l rounded-2xl border-neutral-200 dark:border-neutral-800 shadow-lg overflow-hidden">
                
                {/* Browser Chrome */}
                <div className="absolute top-0 left-0 right-0 h-10 bg-white dark:bg-neutral-950 border-b border-neutral-200 dark:border-neutral-800 flex items-center px-4 gap-1.5 z-20">
                  <div className="size-2 rounded-full bg-[#FF5F56]" />
                  <div className="size-2 rounded-full bg-[#FFBD2E]" />
                  <div className="size-2 rounded-full bg-[#27C93F]" />
                </div>

                {/* Preview Content */}
                <div className="relative w-full pt-10 overflow-hidden">
                  {steps.map((step, index) => {
                    const Icon = step.icon;
                    return (
                      <div
                        key={step.id}
                        className={`transition-all duration-500 ease-out ${
                          activeStep === index 
                            ? 'relative opacity-100 translate-y-0 scale-100' 
                            : 'absolute inset-0 opacity-0 translate-y-1 scale-[0.995] pointer-events-none'
                        }`}
                      >
                        {/* Image or Fallback */}
                        <img 
                          src={step.image} 
                          alt={step.title}
                          className="w-full h-auto object-contain px-3"
                          onLoad={() => handleImageLoad(step.id)}
                        />
                        
                        {/* Fallback UI when image is missing */}
                        {!loadedImages.has(step.id) && (
                          <div className="absolute inset-0 flex flex-col items-center justify-center bg-white dark:bg-neutral-900 pt-12">
                          <Icon size={40} className="text-[#c30010] mb-4" />
                          <h4 className="text-lg font-semibold text-black dark:text-white text-center">{step.title}</h4>
                          <p className="text-sm text-neutral-500 dark:text-neutral-400 text-center mt-2 max-w-xs">
                            {step.description}
                          </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DynamicHowItWorks;