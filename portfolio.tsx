import React from 'react';

// --- SVG Mockup for iPad/Tablet ---
const IpadMockup = () => (
  <div className="w-full h-full flex items-center justify-center p-4 md:p-8">
    <svg viewBox="0 0 1024 768" className="w-full h-auto max-w-full" style={{filter: 'drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))', aspectRatio: '4/3'}}>
      <rect x="0" y="0" width="1024" height="768" rx="40" fill="#1f2937" />
      <rect x="40" y="40" width="944" height="688" fill="#ffffff" />
      <circle cx="512" cy="20" r="6" fill="#4b5563" />
      <rect x="70" y="70" width="200" height="628" fill="#f3f4f6" />
      <rect x="90" y="90" width="160" height="20" rx="5" fill="#e5e7eb" />
      <rect x="90" y="130" width="120" height="10" rx="3" fill="#d1d5db" />
      <rect x="90" y="150" width="160" height="10" rx="3" fill="#d1d5db" />
      <rect x="90" y="170" width="140" height="10" rx="3" fill="#d1d5db" />
      <rect x="300" y="70" width="684" height="628" fill="#ffffff" />
      <rect x="320" y="90" width="250" height="20" rx="5" fill="#e5e7eb" />
      <rect x="320" y="130" width="644" height="10" rx="3" fill="#d1d5db" />
      <rect x="320" y="150" width="600" height="10" rx="3" fill="#d1d5db" />
      <rect x="320" y="170" width="620" height="10" rx="3" fill="#d1d5db" />
    </svg>
  </div>
);

// --- Proper SVG Mockup for iPhone (Responsive) ---
const IphoneMockup = ({ children }) => (
    <div className="relative w-full max-w-[280px] aspect-[375/812] mx-auto group">
        <div className="absolute inset-0 bg-black/30 rounded-[50px] blur-xl -z-10 transform-gpu group-hover:scale-105 transition-transform duration-300"></div>
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 375 812" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="bezelGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#4a4a4a', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#2c2c2c', stopOpacity: 1}} />
                </linearGradient>
            </defs>
            <rect width="375" height="812" rx="60" fill="url(#bezelGradient)"/>
            <rect x="4" y="4" width="367" height="804" rx="56" fill="transparent" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="2"/>
            <rect x="18" y="18" width="339" height="776" rx="42" fill="#000000"/>
        </svg>
        <div className="absolute top-[2.2%] left-[4.8%] w-[90.4%] h-[95.6%] rounded-[42px] overflow-hidden">
            {children}
        </div>
        <div className="absolute top-[3.7%] left-1/2 -translate-x-1/2 w-[33.3%] h-[4.3%] bg-black rounded-full"></div>
        <div className="absolute -left-px top-[13.5%] w-px h-[4%] bg-gray-700 rounded-l-sm opacity-80"></div>
        <div className="absolute -left-px top-[19.7%] w-px h-[4%] bg-gray-700 rounded-l-sm opacity-80"></div>
        <div className="absolute -right-px top-[16%] w-px h-[8%] bg-gray-700 rounded-r-sm opacity-80"></div>
    </div>
);

// --- Specific App Screen UIs ---

const AshLogo = () => (
    <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z" fill="#1C1C1C"/>
        <path d="M15.5 35V13H21.1V27.425L32.5 13H36.5V35H31V20.575L19.5 35H15.5Z" fill="white"/>
    </svg>
);


const MSKHubScreen = () => (
    <div className="w-full h-full bg-white p-4 text-center text-sm text-gray-700">
        <div className="flex justify-end"><span className="text-xl">×</span></div>
        <div className="relative w-32 h-32 mx-auto my-4">
            <svg className="w-full h-full" viewBox="0 0 36 36">
                <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#E6E6E6" strokeWidth="4"></path>
                <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#22c55e" strokeWidth="4" strokeDasharray="100, 100"></path>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center text-green-500 text-3xl">✓</div>
        </div>
        <h2 className="text-xl font-semibold text-black">Great, all done!</h2>
        <div className="flex justify-around my-4 text-xs">
            <div>🔥 12 <span className="block text-gray-400">Streak</span></div>
            <div>🏅 3 <span className="block text-gray-400">Badges</span></div>
            <div>📈 46 <span className="block text-gray-400">Sessions</span></div>
        </div>
        <div className="bg-gray-50 p-3 rounded-lg text-left">
            <p className="font-semibold text-black mb-2">AI-Enhanced Care Plan</p>
            <p>How were your exercises today?</p>
            <div className="flex justify-between my-2">
                <span>😞</span><span>😕</span><span>😐</span><span>🙂</span><span>😄</span>
            </div>
            <p className="text-gray-400 text-xs">Painful ... Too hard ... Challenging</p>
        </div>
        <div className="flex justify-between items-center p-2 border-t mt-2">
            <span className="text-gray-500">Give more feedback</span>
            <span className="text-xl">🎤</span>
        </div>
        <div className="flex gap-2 mt-4">
            <button className="w-1/2 py-2 border rounded-full">RESTART</button>
            <button className="w-1/2 py-2 bg-black text-white rounded-full">✓ DONE</button>
        </div>
    </div>
);

const PhysicalTherapyScreen = () => (
    <div className="w-full h-full bg-gray-50 p-4 text-sm text-gray-700 text-left">
        <div className="flex justify-between items-center">
            <p className="font-semibold text-black">Good morning, Jane!</p>
            <div>👤 🔔</div>
        </div>
        <div className="bg-white p-4 rounded-lg my-4 text-center shadow-sm">
            <div className="w-16 h-12 bg-gray-100 mx-auto rounded-md mb-2"></div>
            <h3 className="font-semibold text-black">Schedule a virtual session.</h3>
            <p className="text-xs text-gray-400 mb-2">No sessions currently scheduled.</p>
            <button className="py-2 px-4 border rounded-full text-xs font-semibold">SCHEDULE NOW</button>
        </div>
        <h3 className="font-bold text-black mb-2">Care Plan</h3>
        <div className="bg-white p-3 rounded-lg shadow-sm">
            <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
                <div>
                    <p className="font-semibold text-black">Joe Thomas</p>
                    <p className="text-xs text-gray-400">Physical Therapist</p>
                </div>
            </div>
            <div className="flex justify-between items-center mt-3 p-3 bg-blue-50 rounded-lg">
                <div>
                    <p className="font-semibold text-black">Knee rehabilitation</p>
                    <p className="text-xs text-gray-400">Updated 3 days ago</p>
                </div>
                <button className="py-1 px-3 bg-black text-white text-xs rounded-full flex items-center">START ▶</button>
            </div>
        </div>
    </div>
);

const AwardWinner = () => (
    <div className="flex items-center">
        <div className="w-8 h-8 bg-yellow-300 rounded-full flex items-center justify-center mr-2 text-lg">🏆</div>
        <div>
            <p className="text-sm font-semibold text-black">Award Winner</p>
            <p className="text-xs text-gray-500">Top Performer</p>
        </div>
    </div>
);

const UserRating = ({ rating }) => (
    <div className="flex items-center">
        <div className="flex mr-2">
            {[...Array(5)].map((_, i) => (
                <svg key={i} className={`w-4 h-4 ${i < 4 ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8-2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
            ))}
        </div>
        <div>
            <p className="text-sm font-semibold text-black">{rating} Ave. user rating</p>
        </div>
    </div>
);

// --- New Components from image ---
const UXCollectiveArticle = () => (
    <div className="p-6 h-full flex flex-col justify-between">
        <div>
            <span className="inline-block text-sm font-medium px-3 py-1 rounded-full border border-neutral-400 mb-4">Article</span>
            <div className="flex items-center mb-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2"><path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#3B82F6"></path><path d="M6.34314 12L12 6.34314L17.6569 12L12 17.6569L6.34314 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                <span className="font-semibold">UX Collective</span>
            </div>
            <h3 className="font-semibold text-lg text-black mb-2">Death to the double diamond</h3>
            <p className="text-sm text-gray-600">Here are two extremes. There's always the exact same predictable path to solving a problem. For example, I can tell you exactly...</p>
        </div>
        <div>
            <p className="font-semibold text-sm text-black">Eduardo Hernandez</p>
            <p className="text-xs text-gray-500">Aug 7, 2023</p>
        </div>
    </div>
);

const DetailsSection = () => (
    <div className="p-6 h-full">
        <span className="inline-block text-sm font-medium px-3 py-1 rounded-full border border-neutral-400 mb-4">Details</span>
        <div className="grid grid-cols-2 gap-4 text-center">
            <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-3xl">❤️</div>
                <p className="font-semibold mt-2">1:1's</p>
                <div className="flex justify-center gap-2 mt-2 text-gray-400">
                    <span>✏️</span><span>🗑️</span>
                </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-3xl">🏁</div>
                <p className="font-semibold mt-2">Beta Launch</p>
                <div className="flex justify-center gap-2 mt-2 text-gray-400">
                    <span>✏️</span><span>🗑️</span>
                </div>
            </div>
             <div className="bg-white p-4 rounded-lg shadow-sm">
                 <div className="h-8 w-8 rounded-full bg-gray-200 mx-auto flex items-center justify-center text-green-500">✓</div>
            </div>
        </div>
    </div>
);

const GymBillingApp = () => (
    <div className="p-6 h-full flex flex-col justify-between">
        <div>
           <span className="inline-block text-sm font-medium px-3 py-1 rounded-full border border-neutral-400 mb-4">Case Study</span>
           <div className="my-4">
                <svg viewBox="0 0 1024 768" className="w-full h-auto max-w-full rounded-lg shadow-lg" style={{aspectRatio: '4/3'}}>
                    <rect x="0" y="0" width="1024" height="768" rx="20" fill="#ffffff" />
                    <rect x="0" y="0" width="1024" height="60" fill="#f3f4f6"/>
                    <text x="20" y="40" fontFamily="Inter, sans-serif" fontSize="16" fill="#333">PROMOS</text>
                    <rect x="10" y="70" width="1004" height="688" fill="#f9fafb"/>
                     <text x="30" y="100" fontFamily="Inter, sans-serif" fontSize="14" fill="#666">All Claims</text>
                    <text x="30" y="120" fontFamily="Inter, sans-serif" fontSize="16" fill="#111" fontWeight="bold">LA Fitness South Bay</text>
                    {/* Table Header */}
                    {['Requisition', 'Type', 'Date', 'Status'].map((header, i) => (
                        <text key={i} x={30 + i * 150} y="150" fontFamily="Inter, sans-serif" fontSize="12" fill="#999">{header}</text>
                    ))}
                    {/* Table Rows - Dummy Data */}
                    {[...Array(6)].map((_, rowIndex) => (
                        <g key={rowIndex}>
                            <text x="30" y={180 + rowIndex * 30} fontFamily="Inter, sans-serif" fontSize="14" fill="#333">LA Fitness South Bay</text>
                             <text x="180" y={180 + rowIndex * 30} fontFamily="Inter, sans-serif" fontSize="14" fill="#333">Corporate</text>
                            <text x="330" y={180 + rowIndex * 30} fontFamily="Inter, sans-serif" fontSize="14" fill="#333">08/15/2023</text>
                            <rect x="470" y={170 + rowIndex * 30} width="60" height="20" rx="10" fill={rowIndex % 2 === 0 ? "#dcfce7" : "#e0e7ff"}/>
                             <text x="480" y={184 + rowIndex * 30} fontFamily="Inter, sans-serif" fontSize="12" fill={rowIndex % 2 === 0 ? "#166534" : "#3730a3"}>{rowIndex % 2 === 0 ? "Done" : "Assigned"}</text>
                        </g>
                    ))}
                     <rect x="700" y="70" width="314" height="688" fill="#ffffff" stroke="#e5e7eb" strokeWidth="1"/>
                </svg>
           </div>
        </div>
        <div className="flex items-start">
            <AshLogo />
            <div className="ml-3">
                <h3 className="text-lg font-semibold text-neutral-800">Internal Gym Billing App</h3>
                <p className="text-neutral-600 text-sm">Some awesome headline alv.</p>
            </div>
        </div>
    </div>
);


// --- Main Data Arrays ---
const portfolioData = [
    { id: 1, type: 'custom', content: <IpadMockup />, gridClass: 'lg:col-span-2', bgColor: 'bg-gradient-to-br from-purple-100 to-pink-100' },
    { id: 2, type: 'custom', gridClass: 'flex items-center justify-center', bgColor: 'bg-neutral-200', content: <img src="https://placehold.co/300x300/e0e0e0/555555?text=3D+Head" alt="3D Head" className="w-full h-full object-cover" /> },
    { id: 3, type: 'custom', gridClass: 'flex flex-col p-8', bgColor: 'bg-[#f8f6f2]', content: ( <div className="w-full h-full flex flex-col"> <div className="flex justify-between items-center text-neutral-600"> <span className="inline-block text-sm font-medium px-3 py-1 rounded-full border border-neutral-400">Create</span> <span className="text-sm font-medium">2022</span> </div> <div className="flex-grow flex items-center justify-center"> <h3 className="text-4xl text-neutral-300">Until now.</h3> </div> <div className="flex items-center"> <svg className="w-8 h-8 mr-3" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 32C37.2548 32 48 24.8366 48 16C48 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z" fill="#1C1C1C"></path><path d="M16.16 20.48H22.4V22.4H9.6V9.76H11.52V18.56L21.52 8.48L22.88 9.84L12.96 19.84H16.16V20.48Z" fill="white"></path></svg> <div> <h3 className="text-lg font-semibold text-neutral-800">Play, organize, and win!</h3> </div> </div> </div> ) },
    { id: 4, type: 'detailedMobileApp', badge: 'Case Study', appContent: <MSKHubScreen />, logo: <AshLogo />, title: 'ASHCare AI Enhanced MSK Hub', headline: 'Some awesome headline alv.', footerContent: <AwardWinner />, category: '2023', gridClass: 'md:row-span-2', bgColor: 'bg-gradient-to-br from-blue-100 via-green-50 to-teal-50' },
    { id: 5, type: 'detailedMobileApp', badge: 'Case Study', appContent: <PhysicalTherapyScreen />, logo: <AshLogo />, title: 'Virtual Physical Therapy', headline: 'Some awesome headline alv.', footerContent: <UserRating rating="4.86" />, category: '2022', gridClass: 'md:row-span-2', bgColor: 'bg-gradient-to-br from-gray-100 to-neutral-200' },
    { id: 6, type: 'custom', gridClass: 'lg:col-span-1', bgColor: 'bg-neutral-100', content: <UXCollectiveArticle /> },
    { id: 7, type: 'custom', gridClass: 'lg:col-span-2', bgColor: 'bg-gradient-to-br from-purple-100 to-indigo-100', content: <GymBillingApp /> },
    { id: 8, type: 'custom', gridClass: 'lg:col-span-1', bgColor: 'bg-neutral-100', content: <DetailsSection /> },
    { id: 9, type: 'custom', badge: '2020', title: 'Overview', description: 'A brief overview about this project. The goal was to fix the user journey and drop-off rates by improving the visual design of the app.', category: 'Case Study', gridClass: '', bgColor: 'bg-neutral-200/50' },
    { id: 10, type: 'custom', badge: null, gridClass: 'lg:col-span-2 flex items-center justify-center', bgColor: 'bg-gradient-to-br from-cyan-100 to-teal-100', content: ( <div className="text-center"> <img src="https://placehold.co/200x200/ffffff/e04b4b?text=HOLY" alt="Holy graphic" className="mx-auto" /> </div> ) }
];

function App() {
  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@400;500;600&display=swap');
          .font-serif-display { font-family: 'Playfair Display', serif; }
          .font-sans-body { font-family: 'Inter', sans-serif; }
        `}
      </style>
      <div className="bg-[#f8f6f2] min-h-screen font-sans-body text-black">
        <div className="p-4 md:p-8">
          <div className="border-l-2 border-black">
            <div className="pl-6 md:pl-8">

              <header className="grid grid-cols-1 md:grid-cols-3 items-center text-sm py-4 border-b-2 border-black">
                <div className="font-semibold relative">
                  <span className="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-red-500 rounded-full"></span>
                  © Eduardo Hernandez
                  <br />
                  <span className="font-normal text-neutral-600">Based in Salt Lake City, Utah</span>
                </div>
                <div className="hidden md:flex justify-center border-l-2 border-r-2 border-black h-full items-center px-4 my-[-1rem] py-4">
                  <div>
                    <span className="font-semibold">Currently available</span>
                    <br />
                    <span className="font-normal text-neutral-600">for freelance opportunities</span>
                  </div>
                </div>
                <div className="hidden md:flex justify-end items-center pr-4">
                  <nav className="flex items-center space-x-6">
                    <a href="#" className="font-semibold hover:underline">Dribbble</a>
                    <a href="#" className="font-semibold hover:underline">Twitter</a>
                    <a href="#" className="font-semibold hover:underline">Contact</a>
                  </nav>
                </div>
              </header>

              <main className="py-16 md:py-24 border-b-2 border-black">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none font-serif-display">
                      Product Designer.
                    </h1>
                  </div>
                  <div className="md:col-span-1">
                    <h4 className="font-semibold mb-3">Recent Highlights</h4>
                    <ul className="space-y-2 text-neutral-600">
                      <li>Harvard Business School Online<br /><span className="text-xs text-neutral-500">Disruptive Strategy</span></li>
                      <li>Awwwards - Site of the Day<br /><span className="text-xs text-neutral-500">Honorable Mention</span></li>
                      <li>The Webby Awards - Honoree<br /><span className="text-xs text-neutral-500">Websites and Mobile Sites</span></li>
                    </ul>
                  </div>
                </div>
              </main>

              <section className="grid grid-cols-1 md:grid-cols-2 text-sm border-b-2 border-black">
                <div className="p-8">
                    <div className="relative">
                        <span className="absolute -left-14 top-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
                        <p className="font-semibold">Eduardo Hernandez</p>
                        <p className="text-neutral-600">Open to new opportunities</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 md:border-l-2 border-black">
                     <div className="p-8">
                        <p className="text-neutral-600">Email me at</p>
                        <p className="font-semibold">Eduardoh@hey.com</p>
                    </div>
                    <div className="p-8">
                        <p className="text-neutral-600">Connect with me</p>
                         <div className="flex space-x-4 font-semibold">
                            <a href="#" className="underline hover:no-underline">LinkedIn</a>
                            <a href="#" className="underline hover:no-underline">BlueSky</a>
                            <a href="#" className="underline hover:no-underline">Medium</a>
                         </div>
                    </div>
                </div>
              </section>

              <section>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2px] bg-black">
                    {portfolioData.map(item => {
                        if (item.type === 'detailedMobileApp') {
                            return (
                                <div key={item.id} className={`p-6 flex flex-col justify-between ${item.gridClass || ''} ${item.bgColor || 'bg-[#f8f6f2]'}`}>
                                    <div>
                                        <div className="flex justify-between items-center text-neutral-600 mb-4">
                                            <span className="inline-block text-sm font-medium px-3 py-1 rounded-full border border-neutral-400">{item.badge}</span>
                                        </div>
                                        <div className="my-4">
                                            <IphoneMockup>
                                                {item.appContent}
                                            </IphoneMockup>
                                        </div>
                                    </div>
                                    <div className="text-left">
                                        <div className="flex items-start mb-2">
                                            {item.logo}
                                            <div className="ml-3">
                                                <h3 className="text-lg font-semibold text-neutral-800">{item.title}</h3>
                                                <p className="text-neutral-600 text-sm">{item.headline}</p>
                                            </div>
                                        </div>
                                        <div className="mt-4 pl-1">
                                            {item.footerContent}
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                        // Default card for 'custom' type
                        return (
                            <div key={item.id} className={`p-6 ${item.gridClass || ''} ${item.bgColor || 'bg-[#f8f6f2]'}`}>
                                {item.content ? (
                                    <div className="h-full w-full">{item.content}</div>
                                ) : (
                                    <div className='flex flex-col justify-between h-full'>
                                        <div>
                                            <div className="flex justify-between items-center text-neutral-600">
                                                {item.badge && <span className="inline-block text-sm font-medium px-3 py-1 rounded-full border border-neutral-400">{item.badge}</span>}
                                                {item.category && <span className="text-sm font-medium">{item.category}</span>}
                                            </div>
                                            {item.imageUrl && (
                                                <div className="my-4 aspect-auto overflow-hidden flex items-center justify-center">
                                                    <img src={item.imageUrl} alt={item.title || 'Project image'} className="w-full h-full object-contain" />
                                                </div>
                                            )}
                                        </div>
                                        <div className="flex items-center">
                                            <div>
                                                {item.title && <h3 className="text-lg font-semibold text-neutral-800">{item.title}</h3>}
                                                {item.description && <p className="text-neutral-600 text-sm">{item.description}</p>}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )
                    })}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

