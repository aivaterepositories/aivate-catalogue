'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, BarChart3, PieChart, TrendingUp, Activity, Globe, Eye, MousePointerClick, Timer, Users, ArrowUpRight, ArrowDownRight, Layers, Settings } from 'lucide-react';

const fadeUp = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };
const stagger = { show: { transition: { staggerChildren: 0.06 } } };

const metrics = [
  { label: 'Page Views', value: '847K', change: '+18.2%', up: true, icon: Eye, spark: [30, 45, 38, 52, 48, 65, 72, 68, 85, 78, 92, 88] },
  { label: 'Unique Visitors', value: '234K', change: '+12.7%', up: true, icon: Users, spark: [20, 28, 32, 35, 30, 42, 45, 50, 48, 55, 58, 62] },
  { label: 'Avg Session', value: '4m 32s', change: '+8.4%', up: true, icon: Timer, spark: [40, 38, 42, 45, 50, 48, 52, 55, 58, 54, 60, 62] },
  { label: 'Bounce Rate', value: '32.1%', change: '-4.2%', up: false, icon: MousePointerClick, spark: [55, 50, 48, 45, 42, 44, 40, 38, 36, 35, 33, 32] },
];

const channels = [
  { name: 'Organic Search', value: 42, color: 'bg-emerald-500' },
  { name: 'Direct', value: 28, color: 'bg-blue-500' },
  { name: 'Social Media', value: 18, color: 'bg-purple-500' },
  { name: 'Referral', value: 8, color: 'bg-amber-500' },
  { name: 'Email', value: 4, color: 'bg-rose-500' },
];

const topPages = [
  { path: '/pricing', views: '48,291', change: '+24%' },
  { path: '/features', views: '35,847', change: '+18%' },
  { path: '/blog/ai-automation', views: '28,103', change: '+67%' },
  { path: '/demo', views: '22,456', change: '+31%' },
  { path: '/case-studies', views: '18,920', change: '+12%' },
];

const navItems = [
  { icon: BarChart3, label: 'Overview', active: true },
  { icon: Activity, label: 'Real-time', active: false },
  { icon: Globe, label: 'Acquisition', active: false },
  { icon: Layers, label: 'Behavior', active: false },
  { icon: PieChart, label: 'Conversions', active: false },
  { icon: Settings, label: 'Settings', active: false },
];

function MiniSparkline({ data, color }: { data: number[]; color: string }) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const points = data.map((v, i) => `${(i / (data.length - 1)) * 100},${100 - ((v - min) / range) * 80}`).join(' ');
  return (
    <svg viewBox="0 0 100 100" className="w-full h-10" preserveAspectRatio="none">
      <polyline fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" points={points} />
    </svg>
  );
}

export default function BackofficeAnalyticsPage() {
  return (
    <div className="min-h-screen bg-[#090b10] text-white overflow-hidden">
      <div className="fixed top-4 left-4 z-50">
        <Link href="/landing-pages" className="flex items-center gap-2 text-mint/60 hover:text-mint text-xs tracking-[0.2em] uppercase transition-colors px-3 py-2 rounded-lg bg-[#090b10]/80 backdrop-blur-sm border border-white/5">
          <ArrowLeft className="w-3.5 h-3.5" />
          Portfolio
        </Link>
      </div>

      <div className="flex min-h-screen">
        {/* Sidebar */}
        <motion.aside
          className="w-16 md:w-56 bg-[#070910] border-r border-white/5 flex flex-col py-5 flex-shrink-0"
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <div className="px-4 md:px-5 mb-8">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-md bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center">
                <Activity className="w-3.5 h-3.5 text-cyan-400" />
              </div>
              <span className="hidden md:block text-sm font-semibold">Analytics</span>
            </div>
          </div>
          <nav className="flex-1 px-2 md:px-3 space-y-0.5">
            {navItems.map((item) => (
              <div
                key={item.label}
                className={`flex items-center gap-3 px-3 py-2 rounded-md transition-all cursor-pointer ${item.active ? 'bg-white/[0.06] text-white' : 'text-white/25 hover:text-white/50'}`}
              >
                <item.icon className="w-4 h-4 flex-shrink-0" strokeWidth={1.5} />
                <span className="hidden md:block text-[13px]">{item.label}</span>
              </div>
            ))}
          </nav>
        </motion.aside>

        {/* Main */}
        <motion.main className="flex-1 p-6 overflow-auto" initial="hidden" animate="show" variants={stagger}>
          {/* Header */}
          <motion.div variants={fadeUp} className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-lg font-semibold">Dashboard Overview</h1>
              <p className="text-xs text-white/25 mt-0.5">Last 30 days &middot; All properties</p>
            </div>
            <div className="flex items-center gap-2 text-[11px] text-white/30 border border-white/5 rounded-md px-3 py-1.5 cursor-pointer hover:border-white/10 transition-colors">
              <Timer className="w-3 h-3" />
              Apr 1 - Apr 30, 2026
            </div>
          </motion.div>

          {/* Metrics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {metrics.map((m) => (
              <motion.div
                key={m.label}
                variants={fadeUp}
                className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors group"
              >
                <div className="flex items-center justify-between mb-2">
                  <m.icon className="w-4 h-4 text-white/15" />
                  <span className={`text-[10px] font-medium flex items-center gap-0.5 ${m.up ? 'text-emerald-400' : 'text-emerald-400'}`}>
                    {m.up ? <ArrowUpRight className="w-2.5 h-2.5" /> : <ArrowDownRight className="w-2.5 h-2.5" />}
                    {m.change}
                  </span>
                </div>
                <div className="text-2xl font-bold tracking-tight mb-1">{m.value}</div>
                <div className="text-[10px] text-white/20 mb-3">{m.label}</div>
                <MiniSparkline data={m.spark} color={m.up ? '#34d399' : '#34d399'} />
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Traffic Sources */}
            <motion.div variants={fadeUp} className="lg:col-span-1 p-5 rounded-xl bg-white/[0.02] border border-white/5">
              <h2 className="text-sm font-semibold mb-5">Traffic Sources</h2>
              <div className="space-y-4">
                {channels.map((c) => (
                  <div key={c.name}>
                    <div className="flex items-center justify-between text-[12px] mb-1.5">
                      <span className="text-white/50">{c.name}</span>
                      <span className="text-white/70 font-medium">{c.value}%</span>
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div className={`h-full rounded-full ${c.color} transition-all duration-700`} style={{ width: `${c.value}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Top Pages */}
            <motion.div variants={fadeUp} className="lg:col-span-2 p-5 rounded-xl bg-white/[0.02] border border-white/5">
              <h2 className="text-sm font-semibold mb-5">Top Pages</h2>
              <div className="space-y-0 divide-y divide-white/[0.03]">
                {topPages.map((p) => (
                  <div key={p.path} className="flex items-center justify-between py-3 group cursor-pointer">
                    <span className="text-[13px] text-white/50 font-mono group-hover:text-white/80 transition-colors">{p.path}</span>
                    <div className="flex items-center gap-4">
                      <span className="text-[13px] text-white/60 font-medium">{p.views}</span>
                      <span className="text-[11px] text-emerald-400/70 w-10 text-right">{p.change}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.main>
      </div>

      <div className="fixed bottom-4 right-4 text-[10px] text-white/10 tracking-widest uppercase">
        Analytics Dashboard &middot; Portfolio Piece by Aivate
      </div>
    </div>
  );
}
