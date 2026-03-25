// import { useEffect, useState } from "react";

// export default function RotatingTitles() {
//   const titles = [
//     "Real-time Sourcing",
//     "Rapid Onboarding",
//     "Deal Summaries",
//     "Live Call Intelligence",
//     "Automated Follow-ups",
//     "CRM Sync Insights",
//   ];

//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 3) % titles.length);
//     }, 3000); // change every 3 sec

//     return () => clearInterval(interval);
//   }, []);

//   const visibleTitles = [
//     titles[index],
//     titles[(index + 1) % titles.length],
//     titles[(index + 2) % titles.length],
//   ];

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 border-t border-neutral-100 dark:border-neutral-900 font-sans overflow-hidden">

//       {visibleTitles.map((title, i) => (
//         <div
//           key={title}
//           className="p-10 text-center transition-all duration-700 ease-in-out opacity-0 animate-fadeIn"
//           style={{
//             animationDelay: `${i * 100}ms`,
//             animationFillMode: "forwards",
//           }}
//         >
//           <h4 className="text-sm font-medium italic text-black dark:text-white tracking-tight">
//             {title}
//           </h4>
//         </div>
//       ))}

//       {/* Vertical Dividers */}
//       {/* <div className="hidden md:block absolute inset-y-0 left-1/3 w-px bg-neutral-100 dark:bg-neutral-900" />
//       <div className="hidden md:block absolute inset-y-0 left-2/3 w-px bg-neutral-100 dark:bg-neutral-900" /> */}
//     </div>
//   );
// }