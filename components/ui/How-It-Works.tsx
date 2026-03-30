
const HowItWorksEditorial = () => {
  return (
    <section className="w-full bg-white dark:bg-black py-14 md:py-10 px-6 font-sans">
      <div className="max-w-[1100px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-normal tracking-tight text-neutral-900 dark:text-neutral-100">
            How it works
          </h2>
        </div>

        {/* 2-Column Storytelling Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card 1: The Input (Live Capture) */}
          <div className="group bg-white dark:bg-neutral-900 rounded-[2.5rem] p-8 md:p-12 border border-neutral-200/60 dark:border-neutral-800 shadow-sm flex flex-col justify-between min-h-[500px]">
            <div className="mb-12">
              <p className="text-2xl md:text-3xl leading-snug text-neutral-800 dark:text-neutral-200">
               convverse listens to your call and surfaces real-time 
<span className="inline-block mx-2 px-3 py-1 rounded-full bg-[#c30010] text-white text-xl md:text-2xl font-medium shadow-sm">
  battlecards
</span> 
so you always know what to say.
              </p>
            </div>

            {/* Mock UI: Live Transcription Style */}
            <div className="bg-[#FAF9F6] dark:bg-black rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-inner p-5 relative overflow-hidden">
              {/* MacOS Traffic Lights */}
              <div className="flex gap-1.5 mb-6">
                <div className="size-2 rounded-full bg-[#FF5F56]" />
                <div className="size-2 rounded-full bg-[#FFBD2E]" />
                <div className="size-2 rounded-full bg-[#27C93F]" />
              </div>

              <div className="space-y-4">
                <div className="h-4 w-32 bg-neutral-200 dark:bg-neutral-800 rounded animate-pulse" />
                <div className="space-y-3 pl-2 border-l-2 border-[#c30010]/30">
                  <p className="text-sm text-neutral-500 font-mono italic">“We have about 50+ employees right now...”</p>
                  <p className="text-sm text-neutral-500 font-mono italic">“Still doing CRM stuff manually...”</p>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-[#c30010] animate-ping" />
                    <div className="h-3 w-48 bg-neutral-100 dark:bg-neutral-800 rounded" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: The Output (AI Refinement) */}
          <div className="group bg-white dark:bg-neutral-900 rounded-[2.5rem] p-8 md:p-12 border border-neutral-200/60 dark:border-neutral-800 shadow-sm flex flex-col justify-between min-h-[500px]">
            <div className="mb-12">
              <p className="text-2xl md:text-3xl leading-snug text-neutral-800 dark:text-neutral-200">
                After the call, it enhances your notes with structured 
                <span className="inline-block mx-2 px-3 py-1 rounded-full bg-[#c30010] text-white text-xl md:text-2xl font-medium shadow-sm">
                  insights
                </span> 
                and next steps.
              </p>
            </div>

            {/* Mock UI: Structured Result Style */}
            <div className="bg-[#FAF9F6] dark:bg-black rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-sm p-5 relative">
              {/* MacOS Traffic Lights */}
                 <div className="flex gap-1.5 mb-6">
                <div className="size-2 rounded-full bg-[#FF5F56]" />
                <div className="size-2 rounded-full bg-[#FFBD2E]" />
                <div className="size-2 rounded-full bg-[#27C93F]" />
              </div>

              <div className="space-y-5">
                <div>
                  <h4 className="text-[10px] font-bold text-[#c30010] uppercase tracking-widest mb-2">Qualification</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-white dark:bg-neutral-900 p-2 rounded-lg border border-neutral-100 dark:border-neutral-800 text-[11px] font-medium">
                      Size: 50+ Employees
                    </div>
                    <div className="bg-white dark:bg-neutral-900 p-2 rounded-lg border border-neutral-100 dark:border-neutral-800 text-[11px] font-medium">
                      Pain: Manual CRM
                    </div>
                  </div>
                </div>
                
                <div className="pt-2">
                  <h4 className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-2">Next Steps</h4>
                  <div className="flex items-center gap-2 text-[11px] text-neutral-600 dark:text-neutral-400">
                    <div className="size-3 rounded border border-neutral-300 dark:border-neutral-700 flex items-center justify-center text-[8px]">✓</div>
                    Send automation case study
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorksEditorial;