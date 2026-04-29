'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Users, Calendar, FileText, Award, Settings, UserPlus, Clock, CheckCircle2, AlertCircle, MoreHorizontal, ChevronRight, Building2, TrendingUp } from 'lucide-react';

const fadeUp = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };
const stagger = { show: { transition: { staggerChildren: 0.06 } } };

const stats = [
  { label: 'Total Employees', value: '248', sub: '12 new this month', icon: Users, color: 'text-violet-400', bg: 'bg-violet-400/10' },
  { label: 'On Leave Today', value: '8', sub: '3.2% of workforce', icon: Calendar, color: 'text-amber-400', bg: 'bg-amber-400/10' },
  { label: 'Open Positions', value: '14', sub: '6 in engineering', icon: UserPlus, color: 'text-emerald-400', bg: 'bg-emerald-400/10' },
  { label: 'Retention Rate', value: '94%', sub: '+2.1% vs last quarter', icon: TrendingUp, color: 'text-blue-400', bg: 'bg-blue-400/10' },
];

const employees = [
  { name: 'Elena Vasquez', role: 'Senior Engineer', dept: 'Engineering', status: 'Active', avatar: 'EV', joined: 'Mar 2024' },
  { name: 'James Okafor', role: 'Product Designer', dept: 'Design', status: 'Active', avatar: 'JO', joined: 'Jun 2024' },
  { name: 'Priya Sharma', role: 'Marketing Lead', dept: 'Marketing', status: 'On Leave', avatar: 'PS', joined: 'Jan 2023' },
  { name: 'Marcus Chen', role: 'DevOps Engineer', dept: 'Engineering', status: 'Active', avatar: 'MC', joined: 'Nov 2023' },
  { name: 'Sophie Laurent', role: 'HR Business Partner', dept: 'People', status: 'Active', avatar: 'SL', joined: 'Aug 2024' },
  { name: 'Kai Tanaka', role: 'Frontend Developer', dept: 'Engineering', status: 'Probation', avatar: 'KT', joined: 'Apr 2026' },
];

const deptBreakdown = [
  { name: 'Engineering', count: 94, pct: 38 },
  { name: 'Sales', count: 52, pct: 21 },
  { name: 'Marketing', count: 34, pct: 14 },
  { name: 'Design', count: 28, pct: 11 },
  { name: 'Operations', count: 22, pct: 9 },
  { name: 'People', count: 18, pct: 7 },
];

const statusColor: Record<string, string> = {
  'Active': 'text-emerald-400 bg-emerald-400/10',
  'On Leave': 'text-amber-400 bg-amber-400/10',
  'Probation': 'text-blue-400 bg-blue-400/10',
};

const navItems = [
  { icon: Users, label: 'Directory', active: true },
  { icon: Calendar, label: 'Time Off', active: false },
  { icon: FileText, label: 'Documents', active: false },
  { icon: Award, label: 'Performance', active: false },
  { icon: Building2, label: 'Org Chart', active: false },
  { icon: Settings, label: 'Settings', active: false },
];

export default function BackofficeHrPage() {
  return (
    <div className="min-h-screen bg-[#0d0f14] text-white overflow-hidden">
      <div className="fixed top-4 left-4 z-50">
        <Link href="/landing-pages" className="flex items-center gap-2 text-mint/60 hover:text-mint text-xs tracking-[0.2em] uppercase transition-colors px-3 py-2 rounded-lg bg-[#0d0f14]/80 backdrop-blur-sm border border-white/5">
          <ArrowLeft className="w-3.5 h-3.5" />
          Portfolio
        </Link>
      </div>

      <div className="flex min-h-screen">
        {/* Sidebar */}
        <motion.aside
          className="w-16 md:w-56 bg-[#0a0c10] border-r border-white/5 flex flex-col py-5 flex-shrink-0"
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <div className="px-4 md:px-5 mb-8">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-md bg-violet-500/20 border border-violet-500/30 flex items-center justify-center">
                <Users className="w-3.5 h-3.5 text-violet-400" />
              </div>
              <span className="hidden md:block text-sm font-semibold">PeopleOS</span>
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
          <motion.div variants={fadeUp} className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-lg font-semibold">People Directory</h1>
              <p className="text-xs text-white/25 mt-0.5">248 employees across 6 departments</p>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-violet-500/20 text-violet-300 text-xs tracking-wide rounded-md hover:bg-violet-500/30 transition-colors border border-violet-500/20">
              <UserPlus className="w-3.5 h-3.5" /> Add Employee
            </button>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats.map((s) => (
              <motion.div key={s.label} variants={fadeUp} className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <div className={`w-9 h-9 rounded-lg ${s.bg} flex items-center justify-center mb-3`}>
                  <s.icon className={`w-4 h-4 ${s.color}`} />
                </div>
                <div className="text-2xl font-bold tracking-tight">{s.value}</div>
                <div className="text-[10px] text-white/25 mt-0.5">{s.sub}</div>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Employee table */}
            <motion.div variants={fadeUp} className="lg:col-span-2 rounded-xl bg-white/[0.02] border border-white/5 overflow-hidden">
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/5">
                <h2 className="text-sm font-semibold">Recent Employees</h2>
                <button className="text-xs text-white/30 hover:text-white/60 flex items-center gap-1">View all <ChevronRight className="w-3 h-3" /></button>
              </div>
              <div className="divide-y divide-white/[0.03]">
                {employees.map((e) => (
                  <div key={e.name} className="flex items-center gap-4 px-5 py-3.5 hover:bg-white/[0.02] transition-colors cursor-pointer group">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500/20 to-indigo-500/20 border border-white/5 flex items-center justify-center text-[10px] font-bold text-white/40">
                      {e.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-white/70 font-medium group-hover:text-white transition-colors">{e.name}</p>
                      <p className="text-[11px] text-white/25">{e.role} &middot; {e.dept}</p>
                    </div>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full ${statusColor[e.status]}`}>{e.status}</span>
                    <span className="text-[10px] text-white/15 w-16 text-right">{e.joined}</span>
                    <MoreHorizontal className="w-4 h-4 text-white/10 group-hover:text-white/30 transition-colors" />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Department breakdown */}
            <motion.div variants={fadeUp} className="p-5 rounded-xl bg-white/[0.02] border border-white/5">
              <h2 className="text-sm font-semibold mb-5">By Department</h2>
              <div className="space-y-4">
                {deptBreakdown.map((d) => (
                  <div key={d.name}>
                    <div className="flex items-center justify-between text-[12px] mb-1.5">
                      <span className="text-white/50">{d.name}</span>
                      <span className="text-white/30">{d.count} ({d.pct}%)</span>
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full rounded-full bg-violet-500/60 transition-all duration-700" style={{ width: `${d.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.main>
      </div>

      <div className="fixed bottom-4 right-4 text-[10px] text-white/10 tracking-widest uppercase">
        HR Dashboard &middot; Portfolio Piece by Aivate
      </div>
    </div>
  );
}
