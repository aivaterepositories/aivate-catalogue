'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Inbox, MessageSquare, BarChart3, Settings, Users, Clock, AlertCircle, CheckCircle2, Circle, Filter, Search, ChevronRight, ArrowUpRight } from 'lucide-react';

const fadeUp = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };
const stagger = { show: { transition: { staggerChildren: 0.06 } } };

const stats = [
  { label: 'Open Tickets', value: '23', color: 'text-amber-400', bg: 'bg-amber-400/10' },
  { label: 'Avg Response', value: '1.4h', color: 'text-emerald-400', bg: 'bg-emerald-400/10' },
  { label: 'Resolved Today', value: '18', color: 'text-blue-400', bg: 'bg-blue-400/10' },
  { label: 'CSAT Score', value: '4.8', color: 'text-purple-400', bg: 'bg-purple-400/10' },
];

const tickets = [
  { id: 'TK-2847', subject: 'Cannot access billing portal after upgrade', from: 'maria.chen@acme.co', priority: 'High', status: 'Open', time: '12 min ago', avatar: 'MC' },
  { id: 'TK-2846', subject: 'API rate limiting returning 429 on batch requests', from: 'dev@techflow.io', priority: 'Urgent', status: 'Open', time: '28 min ago', avatar: 'TF' },
  { id: 'TK-2845', subject: 'Request: Export invoices as CSV', from: 'ops@meridian.health', priority: 'Normal', status: 'Pending', time: '1 hr ago', avatar: 'MH' },
  { id: 'TK-2844', subject: 'SSO login fails with SAML assertion error', from: 'it@pinnacle.group', priority: 'High', status: 'In Progress', time: '2 hrs ago', avatar: 'PG' },
  { id: 'TK-2843', subject: 'Dark mode rendering issue on Safari', from: 'design@nova.io', priority: 'Low', status: 'Open', time: '3 hrs ago', avatar: 'NI' },
  { id: 'TK-2842', subject: 'Webhook delivery delays on EU region', from: 'eng@atlas.vc', priority: 'Normal', status: 'Resolved', time: '4 hrs ago', avatar: 'AV' },
];

const priorityColor: Record<string, string> = {
  'Urgent': 'text-red-400 bg-red-400/10 border-red-400/20',
  'High': 'text-amber-400 bg-amber-400/10 border-amber-400/20',
  'Normal': 'text-blue-400 bg-blue-400/10 border-blue-400/20',
  'Low': 'text-white/30 bg-white/5 border-white/10',
};

const statusIcon: Record<string, typeof Circle> = {
  'Open': AlertCircle,
  'In Progress': Clock,
  'Pending': Circle,
  'Resolved': CheckCircle2,
};

const navItems = [
  { icon: Inbox, label: 'Inbox', count: 23, active: true },
  { icon: MessageSquare, label: 'Conversations', count: 8, active: false },
  { icon: Users, label: 'Customers', active: false },
  { icon: BarChart3, label: 'Analytics', active: false },
  { icon: Settings, label: 'Settings', active: false },
];

export default function BackofficeHelpdeskPage() {
  return (
    <div className="min-h-screen bg-[#0e1117] text-white overflow-hidden">
      <div className="fixed top-4 left-4 z-50">
        <Link href="/landing-pages" className="flex items-center gap-2 text-mint/60 hover:text-mint text-xs tracking-[0.2em] uppercase transition-colors px-3 py-2 rounded-lg bg-[#0e1117]/80 backdrop-blur-sm border border-white/5">
          <ArrowLeft className="w-3.5 h-3.5" />
          Portfolio
        </Link>
      </div>

      <div className="flex min-h-screen">
        {/* Sidebar */}
        <motion.aside
          className="w-16 md:w-56 bg-[#0b0e13] border-r border-white/5 flex flex-col py-5 flex-shrink-0"
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-4 md:px-5 mb-8">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-md bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              </div>
              <span className="hidden md:block text-sm font-semibold">HelpDesk</span>
            </div>
          </div>
          <nav className="flex-1 px-2 md:px-3 space-y-0.5">
            {navItems.map((item) => (
              <div
                key={item.label}
                className={`flex items-center gap-3 px-3 py-2 rounded-md transition-all cursor-pointer ${item.active ? 'bg-white/[0.06] text-white' : 'text-white/25 hover:text-white/50 hover:bg-white/[0.02]'}`}
              >
                <item.icon className="w-4 h-4 flex-shrink-0" strokeWidth={1.5} />
                <span className="hidden md:block text-[13px]">{item.label}</span>
                {item.count && <span className={`hidden md:block ml-auto text-[10px] px-1.5 py-0.5 rounded-full ${item.active ? 'bg-emerald-500/20 text-emerald-400' : 'bg-white/5 text-white/20'}`}>{item.count}</span>}
              </div>
            ))}
          </nav>
        </motion.aside>

        {/* Main */}
        <motion.div className="flex-1 flex flex-col min-w-0" initial="hidden" animate="show" variants={stagger}>
          {/* Stats bar */}
          <motion.div variants={fadeUp} className="grid grid-cols-2 lg:grid-cols-4 gap-3 p-5 border-b border-white/5">
            {stats.map((s) => (
              <div key={s.label} className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.02]">
                <div className={`w-10 h-10 rounded-lg ${s.bg} flex items-center justify-center`}>
                  <span className={`text-lg font-bold ${s.color}`}>{s.value}</span>
                </div>
                <span className="text-[11px] text-white/30 leading-tight">{s.label}</span>
              </div>
            ))}
          </motion.div>

          {/* Toolbar */}
          <motion.div variants={fadeUp} className="flex items-center justify-between px-5 py-3 border-b border-white/5">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-white/[0.04] rounded-md px-3 py-1.5 w-56">
                <Search className="w-3.5 h-3.5 text-white/20" />
                <span className="text-[13px] text-white/20">Search tickets...</span>
              </div>
              <button className="flex items-center gap-1.5 text-xs text-white/30 hover:text-white/50 transition-colors px-3 py-1.5 rounded-md border border-white/5">
                <Filter className="w-3 h-3" /> Filter
              </button>
            </div>
            <span className="text-[11px] text-white/15">Showing 6 of 23 tickets</span>
          </motion.div>

          {/* Ticket list */}
          <div className="flex-1 overflow-auto">
            {tickets.map((t) => {
              const StatusIcon = statusIcon[t.status] || Circle;
              return (
                <motion.div
                  key={t.id}
                  variants={fadeUp}
                  className="flex items-center gap-4 px-5 py-4 border-b border-white/[0.03] hover:bg-white/[0.02] transition-colors cursor-pointer group"
                >
                  <div className="w-8 h-8 rounded-full bg-white/[0.04] flex items-center justify-center text-[10px] font-bold text-white/30 flex-shrink-0">
                    {t.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-[11px] text-white/20 font-mono">{t.id}</span>
                      <span className={`text-[10px] px-1.5 py-0.5 rounded border ${priorityColor[t.priority]}`}>{t.priority}</span>
                    </div>
                    <p className="text-sm text-white/70 truncate group-hover:text-white transition-colors">{t.subject}</p>
                    <p className="text-[11px] text-white/20 mt-0.5">{t.from}</p>
                  </div>
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <div className="flex items-center gap-1.5 text-[11px] text-white/20">
                      <StatusIcon className="w-3 h-3" />
                      {t.status}
                    </div>
                    <span className="text-[10px] text-white/15 w-16 text-right">{t.time}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-white/10 group-hover:text-mint transition-colors" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      <div className="fixed bottom-4 right-4 text-[10px] text-white/10 tracking-widest uppercase">
        Helpdesk Dashboard &middot; Portfolio Piece by Aivate
      </div>
    </div>
  );
}
