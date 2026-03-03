import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { Send, Copy, Check, Menu, X, ExternalLink, Bird, Heart, Globe, ShieldCheck } from 'lucide-react';

const CA = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
const LOGO_URL = "https://lcaryepoaiuzuppladzq.supabase.co/storage/v1/object/public/ccc/bop.jpg";
const BANNER_URL = "https://lcaryepoaiuzuppladzq.supabase.co/storage/v1/object/public/ccc/banner%20-%202026-03-03T185504.314.png";

export default function App() {
  const [copied, setCopied] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(CA);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen font-sans overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
        <nav className="max-w-6xl mx-auto glass rounded-2xl px-6 py-3 flex items-center justify-between shadow-lg shadow-black/5">
          <div className="flex items-center gap-3">
            <img 
              src={LOGO_URL} 
              alt="BOP Logo" 
              className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
              referrerPolicy="no-referrer"
            />
            <span className="font-bold text-xl tracking-tight hidden sm:block">Bird of Peace</span>
            <span className="font-bold text-xl tracking-tight sm:hidden">$BOP</span>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 rounded-full border border-slate-200">
              <span className="text-xs font-mono text-slate-500">CA:</span>
              <span className="text-xs font-mono truncate w-32">{CA}</span>
              <button 
                onClick={copyToClipboard}
                className="p-1 hover:bg-white rounded-md transition-colors"
              >
                {copied ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
              </button>
            </div>
            <a 
              href="https://t.me/BirdOfPeaceSol" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-sky-500 text-white rounded-full hover:bg-sky-600 transition-all hover:scale-110"
            >
              <Send size={18} />
            </a>
            <a 
              href="https://pump.fun" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-5 py-2 bg-slate-900 text-white rounded-full text-sm font-semibold hover:bg-slate-800 transition-all"
            >
              Buy $BOP
            </a>
          </div>

          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <p className="text-xs font-mono text-slate-500 mb-2">Contract Address</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-mono break-all">{CA}</span>
                  <button onClick={copyToClipboard} className="p-2">
                    {copied ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
                  </button>
                </div>
              </div>
              <a href="https://t.me/BirdOfPeaceSol" className="flex items-center gap-3 text-lg font-medium">
                <Send className="text-sky-500" /> Telegram
              </a>
              <a href="https://pump.fun" className="w-full py-4 bg-slate-900 text-white rounded-2xl text-center font-bold text-lg">
                Buy on Pump.fun
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-sky-200/30 blur-3xl rounded-full -z-10" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-100/30 blur-3xl rounded-full -z-10" />
          
          <motion.div 
            style={{ opacity, scale }}
            className="text-center max-w-4xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative inline-block mb-8"
            >
              <div className="absolute inset-0 bg-white/50 blur-2xl rounded-full -z-10" />
              <img 
                src={LOGO_URL} 
                alt="Bird of Peace" 
                className="w-48 h-48 md:w-64 md:h-64 rounded-full border-8 border-white shadow-2xl animate-float"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-4 -right-4 bg-white px-4 py-2 rounded-2xl shadow-lg border border-slate-100">
                <span className="text-2xl font-bold text-slate-900">$BOP</span>
              </div>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-8xl font-black tracking-tighter text-slate-900 mb-6"
            >
              BIRD OF <span className="text-sky-500">PEACE</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-2xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              In a world divided by conflict in 2026, one bird rises to bring us all together. 
              The ultimate symbol of harmony on the Solana blockchain.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a 
                href="https://pump.fun" 
                className="w-full sm:w-auto px-10 py-4 bg-slate-900 text-white rounded-full font-bold text-lg hover:bg-slate-800 transition-all hover:scale-105 shadow-xl shadow-black/10"
              >
                Join the Peace
              </a>
              <button 
                onClick={copyToClipboard}
                className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-full font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
              >
                {copied ? <Check size={20} className="text-green-500" /> : <Copy size={20} />}
                {copied ? "Copied!" : "Copy CA"}
              </button>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-400"
          >
            <div className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center p-1">
              <div className="w-1 h-2 bg-slate-300 rounded-full" />
            </div>
          </motion.div>
        </section>

        {/* About Section */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <img 
                src={BANNER_URL} 
                alt="Bird of Peace Banner" 
                className="rounded-3xl shadow-2xl w-full object-cover aspect-[21/9]"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
                Why the World Needs <br/>
                <span className="text-sky-500">Bird of Peace</span>
              </h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
                <p>
                  It is the year 2026. Global tensions have reached an all-time high, and the world feels more fractured than ever. 
                  Amidst the noise of conflict and the shadows of war, a new symbol has emerged from the digital ether.
                </p>
                <p>
                  The <strong>Bird of Peace ($BOP)</strong> is not just another memecoin. It is a movement. 
                  Represented by the majestic white pigeon showing the universal "V" sign with its foot, 
                  it reminds us that even in the most turbulent times, peace is a choice we can make together.
                </p>
                <p>
                  Launched on <strong>pump.fun</strong>, $BOP aims to build a community where harmony and prosperity go hand in hand. 
                  We don't just want to moon; we want to bring the light of peace to every wallet on Solana.
                </p>
              </div>
              
              <div className="mt-12 flex flex-wrap justify-center gap-4">
                <div className="flex items-center gap-2 px-6 py-3 bg-slate-50 rounded-xl border border-slate-100">
                  <Globe size={18} className="text-sky-500" />
                  <span className="font-semibold">Global Mission</span>
                </div>
                <div className="flex items-center gap-2 px-6 py-3 bg-slate-50 rounded-xl border border-slate-100">
                  <Heart size={18} className="text-rose-500" />
                  <span className="font-semibold">Community Driven</span>
                </div>
                <div className="flex items-center gap-2 px-6 py-3 bg-slate-50 rounded-xl border border-slate-100">
                  <ShieldCheck size={18} className="text-emerald-500" />
                  <span className="font-semibold">Solana Secured</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features / Tokenomics */}
        <section className="py-24 px-6 bg-slate-50">
          <div className="max-w-6xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-black mb-4">Peace-onomics</h2>
            <p className="text-slate-500">Fair, transparent, and built for the people.</p>
          </div>

          <div className="max-w-6xl mx-auto grid sm:grid-cols-3 gap-8">
            {[
              { title: "Fair Launch", desc: "100% fair launch on pump.fun. No team tokens, no pre-sale.", icon: <Bird className="text-sky-500" /> },
              { title: "Deflationary", desc: "A portion of every transaction helps spread the message of peace.", icon: <Heart className="text-rose-500" /> },
              { title: "Community Owned", desc: "The contract is renounced and liquidity is burned upon migration.", icon: <Globe className="text-emerald-500" /> }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-white rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-2"
              >
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.1),transparent)]" />
            
            <h2 className="text-4xl md:text-6xl font-black mb-8 relative z-10">Ready to spread <br/> the peace?</h2>
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 relative z-10">
              Join thousands of others who believe that 2026 can be the year of harmony. 
              Get your $BOP today on pump.fun.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
              <a 
                href="https://pump.fun" 
                className="w-full sm:w-auto px-12 py-5 bg-white text-slate-900 rounded-full font-bold text-xl hover:bg-slate-100 transition-all hover:scale-105"
              >
                Buy $BOP Now
              </a>
              <a 
                href="https://t.me/BirdOfPeaceSol" 
                className="w-full sm:w-auto px-12 py-5 bg-sky-500 text-white rounded-full font-bold text-xl hover:bg-sky-600 transition-all flex items-center justify-center gap-3"
              >
                <Send /> Telegram
              </a>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-100">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <img 
              src={LOGO_URL} 
              alt="BOP Logo" 
              className="w-8 h-8 rounded-full"
              referrerPolicy="no-referrer"
            />
            <span className="font-bold text-lg">Bird of Peace</span>
          </div>
          
          <p className="text-slate-400 text-sm">
            © 2026 Bird of Peace. Built for harmony on Solana.
          </p>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors">Twitter</a>
            <a href="https://t.me/BirdOfPeaceSol" className="text-slate-400 hover:text-slate-900 transition-colors">Telegram</a>
            <a href="https://pump.fun" className="text-slate-400 hover:text-slate-900 transition-colors">Pump.fun</a>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-slate-50 text-center">
          <p className="text-[10px] text-slate-300 uppercase tracking-widest">
            Disclaimer: $BOP is a memecoin for entertainment purposes only. No financial advice.
          </p>
        </div>
      </footer>
    </div>
  );
}
