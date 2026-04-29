'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, LayoutDashboard, Users, GitBranch, CheckSquare, BarChart3, Bell, Search, MoreHorizontal, TrendingUp, TrendingDown, Clock, ChevronRight } from 'lucide-react';

const fadeUp = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };
const stagger = { show: { transition: { staggerChildren: 0.08 } } };

const kpis = [
  { label: 'Total Contacts', value: '2,847', change: '+12.3%', up: true, icon: Users },
  { label: 'Active Deals', value: '142', change: '+8.1%', up: true, icon: GitBranch },
  { label: 'Revenue MTD', value: '$284K', change: '+23.5%', up: true, icon: TrendingUp },
  { label: 'Tasks Overdue', value: '7', change: '-3', up: false, icon: CheckSquare },
];

const pipeline = [
  { stage: 'Qualified', color: 'bg-blue-500', cards: [
    { name: 'Acme Corp', value: '$45,000', days: 3 },
    { name: 'TechFlow Inc', value: '$28,000', days: 7 },
  ]},
  { stage: 'Proposal Sent', color: 'bg-amber-500', cards: [
    { name: 'Meridian Health', value: '$120,000', days: 2 },
    { name: 'Nova Logistics', value: '$67,000', days: 5 },
  ]},
  { stage: 'Negotiation', color: 'bg-emerald-500', cards: [
    { name: 'Pinnacle Group', value: '$89,000', days: 1 },
    { name: 'Atlas Ventures', value: '$210,000', days: 4 },
  ]},
];

const activity = [
  { user: 'Sarah M.', action: 'Moved deal "Acme Corp" to Negotiation', time: '2 min ago', avatar: 'SM' },
  { user: 'Jason K.', action: 'Added note to contact "Maria Chen"', time: '15 min ago', avatar: 'JK' },
  { user: 'Lisa R.', action: 'Completed task "Follow up on proposal"', time: '1 hr ago', avatar: 'LR' },
  { user: 'David P.', action: 'Created new deal "Vertex Solutions"', time: '2 hrs ago', avatar: 'DP' },
  { user: 'Emma T.', action: 'Sent proposal to "Pacific Trading Co"', time: '3 hrs ago', avatar: 'ET' },
];

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
  { icon: Users, label: 'Contacts', active: false },
  { icon: GitBranch, label: 'Pipeline', active: false },
  { icon: CheckSquare, label: 'Tasks', active: false },
  { icon: BarChart3, label: 'Reports', active: false },
];

export default function BackofficeCrmPage() {
  return (
    <div className="min-h-screen bg-[#0c0f14] text-white overflow-hidden">
      {/* Portfolio back link */}
      <div className="fixed top-4 left-4 z-50">
        <Link href="/landing-pages" className="flex items-center gap-2 text-mint/60 hover:text-mint text-xs tracking-[0.2em] uppercase transition-colors px-3 py-2 rounded-lg bg-[#0c0f14]/80 backdrop-blur-sm border border-white/5">
          <ArrowLeft className="w-3.5 h-3.5" />
          Portfolio
        </Link>
      </div>

      <div className="flex min-h-screen">
        {/* Sidebar */}
        <motion.aside
          className="w-16 md:w-64 bg-[#0a0d11] border-r border-white/5 flex flex-col py-6 flex-shrink-0"
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <div className="px-4 md:px-6 mb-10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo to-mint flex items-center justify-center">
                <span className="text-xs font-bold text-white">A</span>
              </div>
              <span className="hidden md:block text-sm font-semibold tracking-wide">Aivate CRM</span>
            </div>
          </div>

          <nav className="flex-1 px-2 md:px-3 space-y-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all cursor-pointer ${item.active ? 'bg-white/[0.06] text-white' : 'text-white/30 hover:text-white/60 hover:bg-white/[0.03]'}`}
              >
                <item.icon className="w-4.5 h-4.5 flex-shrink-0" strokeWidth={item.active ? 2 : 1.5} />
                <span className="hidden md:block text-sm">{item.label}</span>
                {item.active && <div className="hidden md:block ml-auto w-1.5 h-1.5 rounded-full bg-mint" />}
              </div>
            ))}
          </nav>

          <div className="px-2 md:px-3 mt-auto">
            <div className="flex items-center gap-3 px-3 py-3 rounded-lg bg-white/[0.03] cursor-pointer">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-indigo to-purple-500 flex items-center justify-center text-[10px] font-bold flex-shrink-0">CB</div>
              <div className="hidden md:block">
                <div className="text-xs font-medium">Cob Bautista</div>
                <div className="text-[10px] text-white/30">Admin</div>
              </div>
            </div>
          </div>
        </motion.aside>

        {/* Main content */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Top bar */}
          <motion.header
            className="h-14 border-b border-white/5 flex items-center justify-between px-6 flex-shrink-0"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 bg-white/[0.04] rounded-lg px-3 py-1.5 w-64">
              <Search className="w-4 h-4 text-white/20" />
              <span className="text-sm text-white/20">Search contacts, deals...</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative cursor-pointer">
                <Bell className="w-4.5 h-4.5 text-white/40 hover:text-white/70 transition-colors" />
                <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-red-500" />
              </div>
            </div>
          </motion.header>

          {/* Dashboard content */}
          <motion.main
            className="flex-1 p-6 overflow-auto"
            initial="hidden"
            animate="show"
            variants={stagger}
          >
            {/* KPI Row */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {kpis.map((kpi) => (
                <motion.div
                  key={kpi.label}
                  variants={fadeUp}
                  className="p-5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-colors group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <kpi.icon className="w-4 h-4 text-white/20 group-hover:text-white/40 transition-colors" />
                    <span className={`text-[11px] font-medium flex items-center gap-1 ${kpi.up ? 'text-emerald-400' : 'text-red-400'}`}>
                      {kpi.up ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                      {kpi.change}
                    </span>
                  </div>
                  <div className="text-2xl font-bold tracking-tight mb-1">{kpi.value}</div>
                  <div className="text-[11px] text-white/25 tracking-wide">{kpi.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {/* Pipeline Kanban */}
              <motion.div variants={fadeUp} className="lg:col-span-2">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-sm font-semibold tracking-wide">Sales Pipeline</h2>
                  <button className="text-xs text-white/30 hover:text-white/60 transition-colors flex items-center gap-1">
                    View All <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {pipeline.map((col) => (
                    <div key={col.stage} className="space-y-3">
                      <div className="flex items-center gap-2 mb-1">
                        <div className={`w-2 h-2 rounded-full ${col.color}`} />
                        <span className="text-xs text-white/40 tracking-wide">{col.stage}</span>
                        <span className="text-[10px] text-white/15 ml-auto">{col.cards.length}</span>
                      </div>
                      {col.cards.map((card) => (
                        <div
                          key={card.name}
                          className="p-3.5 rounded-lg bg-white/[0.03] border border-white/5 hover:border-white/10 transition-all cursor-pointer group"
                        >
                          <div className="text-sm font-medium mb-2 group-hover:text-mint transition-colors">{card.name}</div>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-white/50 font-medium">{card.value}</span>
                            <span className="flex items-center gap-1 text-[10px] text-white/20">
                              <Clock className="w-2.5 h-2.5" />{card.days}d
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Recent Activity */}
              <motion.div variants={fadeUp}>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-sm font-semibold tracking-wide">Recent Activity</h2>
                  <MoreHorizontal className="w-4 h-4 text-white/20 cursor-pointer hover:text-white/40 transition-colors" />
                </div>
                <div className="space-y-1">
                  {activity.map((a, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/[0.02] transition-colors cursor-pointer">
                      <div className="w-7 h-7 rounded-full bg-white/[0.06] flex items-center justify-center text-[10px] font-bold text-white/40 flex-shrink-0 mt-0.5">
                        {a.avatar}
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs text-white/60 leading-relaxed">
                          <span className="text-white/80 font-medium">{a.user}</span> {a.action}
                        </p>
                        <p className="text-[10px] text-white/20 mt-0.5">{a.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.main>
        </div>
      </div>

      {/* Portfolio watermark */}
      <div className="fixed bottom-4 right-4 text-[10px] text-white/10 tracking-widest uppercase">
        CRM Dashboard &middot; Portfolio Piece by Aivate
      </div>
    </div>
  );
}
