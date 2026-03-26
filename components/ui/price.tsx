import { Check, Globe, Zap } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';

const ModernPricingSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const plans = [
    {
      name: "Pro",
      price: "$39",
      period: "per user / month",
      description: "Perfect for individual AEs and high-growth BDRs.",
      features: [
        "Real-time in-call qualification",
        "Live battlecards from PDFs and web",
        "Upload up to 3 Knowledge Base PDFs",
        "Live AE analytics (Talk time & Sentiment)",
        "Audio/Video capture with summaries",
        "Early access to the founding team"
      ],
      icon: <Zap size={18} className="text-[#c30010]" />,
      isFeatured: false
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "Tailored for your team",
      description: "Custom solutions for high-performance sales teams.",
      features: [
        "Salesforce & HubSpot integration",
        "Custom analytics & admin dashboards",
        "Multiple question templates",
        "SSO & SAML Authentication",
        "SOC 2 and ISO compliance support",
        "Dedicated account manager"
      ],
      icon: <Globe size={18} className="text-neutral-500" />,
      isFeatured: true
    }
  ];

  return (
    <section className="bg-white dark:bg-black py-24 px-6 font-sans">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-neutral-900 dark:text-white mb-4">
            Transparent Pricing
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 max-w-lg mx-auto">
            Choose the plan that fits your workflow. No hidden fees, just pure intelligence.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              className="relative"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              animate={{ y: hoveredIndex === idx ? -1 : 0 }}
              transition={{ duration: 0.22, ease: 'easeInOut' }}
            >
              <AnimatePresence>
                {hoveredIndex === idx && (
                  <motion.span
                    layoutId="pricingHoverBackground"
                    className="pointer-events-none absolute -inset-1 rounded-[2.2rem] bg-neutral-200/70 dark:bg-neutral-800/50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2, ease: 'easeInOut' }}
                  />
                )}
              </AnimatePresence>

              <div
                className={`relative z-10 flex flex-col p-8 rounded-[2rem] border transition-all duration-300 cursor-default
                  ${plan.isFeatured
                    ? 'bg-neutral-50/50 dark:bg-neutral-900/30 border-neutral-200 dark:border-neutral-800'
                    : 'bg-white dark:bg-black border-neutral-200 dark:border-neutral-800'
                  }
                  hover:border-neutral-300 dark:hover:border-neutral-700 hover:shadow-sm
                `}
              >
              {/* Card Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-100 dark:border-neutral-700 shadow-sm">
                  {plan.icon}
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                  {plan.name}
                </h3>
              </div>

              {/* Pricing Display */}
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-normal tracking-tight text-neutral-900 dark:text-white">
                    {plan.price}
                  </span>
                  <span className="text-sm text-neutral-500 dark:text-neutral-400 font-medium">
                    {plan.period}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                  {plan.description}
                </p>
              </div>

              {/* Feature List */}
              <div className="grow space-y-4 pt-6 border-t border-neutral-100 dark:border-neutral-800">
                {plan.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-3">
                    <div className="mt-1 size-5 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center shrink-0">
                      <Check size={12} className="text-neutral-600 dark:text-neutral-400" />
                    </div>
                    <span className="text-[14px] text-neutral-600 dark:text-neutral-400 leading-tight">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Single Primary CTA */}
        <div className="flex flex-col items-center gap-6">
          <button className="px-10 py-4 bg-[#c30010] hover:bg-[#a0000d] text-white rounded-full font-bold text-base shadow-lg shadow-[#c30010]/20 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]">
            Add to Chrome — It's free!
          </button>
          
         
        </div>

      </div>
    </section>
  );
};

export default ModernPricingSection;