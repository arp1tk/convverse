import { Check, Info, Layout, Users } from 'lucide-react';

const PremiumPricing = () => {
  const plans = [
    {
      name: "Pro",
      subtitle: "Perfect for individual AEs and high-growth BDRs.",
      price: "39",
      isFree: false,
      cta: "Add to Chrome — It's free!",
      icon: <Layout size={18} />,
      features: [
        "Real-time in-call qualification",
        "Live battlecards from PDFs and web",
        "Upload up to 3 Knowledge Base PDFs",
        "Live AE analytics (Talk time & Sentiment)",
        "Audio/Video capture with deal summaries",
        "Early access to the founding team"
      ],
      promo: "Promotional pricing, few slots left"
    },
    {
      name: "Enterprise",
      subtitle: "Custom solutions for high-performance sales teams.",
      price: "Custom",
      isFree: false,
      cta: "Contact Us",
      icon: <Users size={18} />,
      features: [
        "Salesforce integration",
        "Custom analytics & dashboards",
        "Multiple question templates",
        "SSO & Advanced Security",
        "SOC 2 and ISO support",
        "Dedicated account manager"
      ],
      promo: "Coming soon"
    }
  ];

  return (
    <section className="bg-white dark:bg-black py-24 px-6 min-h-screen">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {plans.map((plan, idx) => (
          <div 
            key={idx} 
            className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-[2rem] overflow-hidden shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)]"
          >
            {/* Top Header Section */}
            <div className="p-8 border-b border-neutral-100 dark:border-neutral-800">
              <h3 className="text-xl font-semibold text-black dark:text-white mb-1">{plan.name}</h3>
              <p className="text-neutral-500 text-sm">{plan.subtitle}</p>
            </div>

            {/* Pricing & CTA Section */}
            <div className="p-8">
              <div className="mb-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-normal text-black dark:text-white">
                    {plan.price !== "Custom" ? `$${plan.price}` : plan.price}
                  </span>
                  <span className="text-neutral-400 text-sm">
                    {plan.price !== "Custom" ? "per user per month" : ""}
                  </span>
                </div>
                {plan.promo && (
                  <p className={`text-[11px] font-bold mt-4 uppercase tracking-wider ${idx === 0 ? 'text-[#c30010]' : 'text-neutral-400'}`}>
                    {plan.promo}
                  </p>
                )}
              </div>

              {/* Action Button */}
              <button className={`w-full flex items-center justify-center gap-3 py-4 rounded-full font-bold text-sm transition-all duration-300 ${
                idx === 0 
                ? 'bg-[#c30010] hover:bg-[#c30010] text-white shadow-lg shadow-[#c30010]/20' 
                : 'bg-white border border-neutral-200 text-black hover:bg-neutral-50 shadow-sm'
              }`}>
                {plan.icon}
                {plan.cta}
              </button>

              {/* Feature List */}
              <div className="mt-10 space-y-4">
                {plan.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-3 group">
                    <div className="mt-0.5 size-5 rounded-full bg-[#f1f3e9] dark:bg-neutral-800 flex items-center justify-center shrink-0">
                      <Check size={12} className="text-[#848e5e] dark:text-neutral-400" />
                    </div>
                    <div className="flex items-center gap-1.5">
                       <span className="text-sm text-neutral-700 dark:text-neutral-300 font-medium tracking-tight">
                        {feature}
                      </span>
                      {/* Only add info icon for specific feature types if needed */}
                      {feature.includes('history') && <Info size={13} className="text-neutral-300" />}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Footer Note */}
      <div className="text-center mt-12">
        <p className="text-neutral-400 text-xs font-medium uppercase tracking-[0.2em]">
          Billed Annually • Secured with AES-256
        </p>
      </div>
    </section>
  );
};

export default PremiumPricing;