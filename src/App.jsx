import React, { useState } from 'react';
import { Home, Users, Tv, Siren, Calendar, PlayCircle, Skull } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- DONNÉES ---
const TEAM_MEMBERS = [
  { name: "Matteo", role: "El Presidente", totem: "👑", color: "border-GI-orange" },
  { name: "Léa", role: "VP & Tréso", totem: "💎", color: "border-GI-pink" },
  { name: "Thomas", role: "Respo Soirée", totem: "🍺", color: "border-GI-cyan" },
  { name: "Chloé", role: "Respo Com", totem: "📸", color: "border-GI-orange" },
];

const EVENTS = [
  { title: "Lancement Campagne", date: "Lun 24", time: "18h", loc: "Foyer" },
  { title: "Petit Dej", date: "Mar 25", time: "08h", loc: "Hall B" },
  { title: "Soirée GI", date: "Jeu 27", time: "23h", loc: "Le Club" },
];

// --- COMPOSANTS ---
const HomePage = ({ setTab }) => (
  <div className="flex flex-col h-full items-center justify-center px-4 pb-20 relative overflow-hidden pt-10">
    {/* Effets de fond flous */}
    <div className="absolute top-0 left-0 w-64 h-64 bg-GI-pink opacity-20 blur-[100px] rounded-full"></div>
    <div className="absolute bottom-0 right-0 w-64 h-64 bg-GI-orange opacity-20 blur-[100px] rounded-full"></div>

    <motion.div 
      initial={{ scale: 0.8, opacity: 0 }} 
      animate={{ scale: 1, opacity: 1 }} 
      className="text-center z-10 mb-10"
    >
      <h1 className="text-7xl font-black text-white drop-shadow-[0_0_20px_rgba(255,159,28,0.6)]">GI</h1>
      <div className="flex items-center justify-center gap-2 mt-2">
        {/*<Skull className="text-GI-cyan" size={20} />*/}
        <p className="text-GI-pink font-bold tracking-[0.3em] uppercase">GI les autres</p>
        {/*<Skull className="text-GI-cyan" size={20} />*/}
      </div>
    </motion.div>

    {/* Carte Info */}
    <div className="w-full bg-[#1E1E1E]/80 backdrop-blur border border-gray-800 p-6 rounded-2xl shadow-xl relative z-10">
      <div className="absolute -top-3 right-4 bg-GI-cyan text-black font-bold px-3 py-1 rounded-full text-xs animate-bounce">INFO DU JOUR</div>
      <h3 className="text-GI-orange font-bold text-xl mb-2">GI !</h3>
      <p className="text-gray-300 leading-relaxed">
        La campagne commence fort ! <br/>
        <span className="text-white font-bold">Rendez-vous au stand pour les shots offerts.</span>
      </p>
    </div>

    {/* Bouton SOS */}
    <motion.button 
      whileTap={{ scale: 0.95 }} 
      onClick={() => setTab('sos')}
      className="w-full mt-8 bg-gradient-to-r from-GI-orange to-orange-600 text-black font-black text-xl py-5 rounded-full shadow-[0_0_30px_rgba(255,159,28,0.4)] flex items-center justify-center gap-3 z-10 border-2 border-white/10"
    >
      <Siren size={28} className="animate-pulse" /> SOS
    </motion.button>
  </div>
);

const TeamPage = () => (
  <div className="px-4 py-6 pb-24">
    <h2 className="text-3xl font-bold text-white mb-6"><span className="text-GI-cyan">La</span> Familia</h2>
    <div className="grid grid-cols-2 gap-4">
      {TEAM_MEMBERS.map((m, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className={`bg-[#1E1E1E] border-2 ${m.color} rounded-xl p-4 flex flex-col items-center text-center`}
        >
          <div className="text-4xl mb-2 shadow-lg">{m.totem}</div>
          <h3 className="font-bold text-white">{m.name}</h3>
          <p className="text-gray-400 text-xs uppercase">{m.role}</p>
        </motion.div>
      ))}
    </div>
  </div>
);

const OfrendaPage = () => (
  <div className="px-4 py-6 pb-24 space-y-8">
    <section>
      <h2 className="text-3xl font-bold text-white mb-4 flex gap-2"><Calendar className="text-GI-orange"/> Agenda</h2>
      <div className="space-y-4">
        {EVENTS.map((e, i) => (
          <div key={i} className="bg-[#1E1E1E] p-4 rounded-lg border-l-4 border-GI-pink flex justify-between items-center shadow-lg">
            <div>
              <h4 className="font-bold text-lg text-white">{e.title}</h4>
              <p className="text-gray-400 text-sm">{e.date} • {e.time} • {e.loc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    <section>
      <h2 className="text-3xl font-bold text-white mb-4 flex gap-2"><PlayCircle className="text-GI-cyan"/> Vidéos</h2>
      <div className="bg-black aspect-video rounded-xl border border-gray-800 flex items-center justify-center relative">
        <p className="text-gray-500">Teaser Coming Soon...</p>
      </div>
    </section>
  </div>
);

const SosPage = () => (
  <div className="px-4 py-6 flex flex-col items-center pb-24">
    <Siren size={64} className="text-GI-orange mb-4 animate-pulse mt-4" />
    <h2 className="text-3xl font-bold text-white mb-2">Zone SOS</h2>
    <p className="text-gray-400 mb-6">Une galère ? On arrive.</p>
    
    {/* Conteneur du formulaire Tally: on retire la contrainte de hauteur */}
    <div className="w-full bg-[#1E1E1E] rounded-xl border border-gray-800 shadow-2xl relative overflow-hidden">
      <iframe 
        src="https://tally.so/r/J99rWr?transparentBackground=1" 
        width="100%" 
        height="1200px" // 👈 Changement ici : Hauteur forcée pour éliminer le scroll interne
        frameBorder="0" 
        title="SOS Form"
      ></iframe>
    </div>
  </div>
);

export default function App() {
  const [tab, setTab] = useState('home');

  const Content = () => {
    if (tab === 'home') return <HomePage setTab={setTab} />;
    if (tab === 'team') return <TeamPage />;
    if (tab === 'ofrenda') return <OfrendaPage />;
    if (tab === 'sos') return <SosPage />;
  };

  return (
    <div className="min-h-screen w-full bg-GI-black text-white font-sans selection:bg-GI-orange selection:text-black">
      <AnimatePresence mode="wait">
        <motion.div 
          key={tab} 
          initial={{opacity:0, y:10}} 
          animate={{opacity:1, y:0}} 
          exit={{opacity:0, y:-10}}
          transition={{duration: 0.2}}
          className="h-full min-h-screen w-full"
        >
          {Content()}
        </motion.div>
      </AnimatePresence>

      <nav className="fixed bottom-0 w-full bg-[#121212]/95 backdrop-blur border-t border-gray-800 h-20 flex justify-around items-center z-50 pb-safe">
        <NavIcon I={Home} l="GI" a={tab==='home'} c="text-GI-orange" onClick={() => setTab('home')} />
        <NavIcon I={Users} l="GI fam" a={tab==='team'} c="text-GI-pink" onClick={() => setTab('team')} />
        <NavIcon I={Tv} l="GI vids" a={tab==='ofrenda'} c="text-GI-cyan" onClick={() => setTab('ofrenda')} />
        <NavIcon I={Siren} l="SOS" a={tab==='sos'} c="text-orange-500" onClick={() => setTab('sos')} />
      </nav>
    </div>
  );
}

const NavIcon = ({ I, l, a, c, onClick }) => (
  <button onClick={onClick} className={`flex flex-col items-center justify-center w-16 transition-all ${a ? 'scale-110 opacity-100' : 'opacity-50 hover:opacity-80'}`}>
    <I size={24} className={`mb-1 ${a ? c : 'text-white'}`} strokeWidth={a?3:2} />
    <span className={`text-[10px] font-bold uppercase ${a ? c : 'text-gray-400'}`}>{l}</span>
  </button>
);