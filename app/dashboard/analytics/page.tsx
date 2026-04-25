'use client';

import { Card } from '@/components/ui/card';
import { KPICard } from '@/components/dashboard/kpi-card';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import { TrendingUp, Target, Zap, Users } from 'lucide-react';

const monthlyRevenue = [
  { month: 'Jan', revenue: 24000, target: 25000 },
  { month: 'Feb', revenue: 28000, target: 28000 },
  { month: 'Mar', revenue: 32000, target: 30000 },
  { month: 'Apr', revenue: 35000, target: 35000 },
  { month: 'May', revenue: 42000, target: 40000 },
  { month: 'Jun', revenue: 48000, target: 45000 },
];

const userEngagement = [
  { day: 'Mon', email: 4000, social: 2400, organic: 2400 },
  { day: 'Tue', email: 3000, social: 1398, organic: 2210 },
  { day: 'Wed', email: 2000, social: 9800, organic: 2290 },
  { day: 'Thu', email: 2780, social: 3908, organic: 2000 },
  { day: 'Fri', email: 1890, social: 4800, organic: 2181 },
  { day: 'Sat', email: 2390, social: 3800, organic: 2500 },
  { day: 'Sun', email: 3490, social: 4300, organic: 2100 },
];

const conversionFunnel = [
  { name: 'Visitors', value: 120000 },
  { name: 'Leads', value: 45000 },
  { name: 'Customers', value: 12000 },
  { name: 'Retained', value: 9600 },
];

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444'];

export default function AnalyticsPage() {
  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Analytics</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">Detailed performance metrics and insights</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KPICard
          title="Conversion Rate"
          value="8.2%"
          change={2.1}
          trend="up"
          icon={<Target size={24} />}
        />
        <KPICard
          title="Avg. Session Duration"
          value="4m 28s"
          change={1.5}
          trend="up"
          icon={<Zap size={24} />}
        />
        <KPICard
          title="Customer Retention"
          value="94.2%"
          change={-0.5}
          trend="down"
          icon={<Users size={24} />}
        />
        <KPICard
          title="YoY Growth"
          value="42.8%"
          change={8.2}
          trend="up"
          icon={<TrendingUp size={24} />}
        />
      </div>

      {/* Main Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Revenue Trend */}
        <Card className="lg:col-span-2 p-6 bg-white dark:bg-slate-900 border-gray-200 dark:border-slate-800">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Monthly Revenue vs Target</h2>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={monthlyRevenue}>
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="currentColor" className="text-gray-200 dark:text-slate-700" />
              <XAxis stroke="currentColor" className="text-gray-600 dark:text-gray-400" />
              <YAxis stroke="currentColor" className="text-gray-600 dark:text-gray-400" />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(15, 23, 42, 0.9)',
                  border: '1px solid rgba(100, 116, 139, 0.5)',
                  borderRadius: '8px',
                }}
                labelStyle={{ color: 'white' }}
              />
              <Legend />
              <Area type="monotone" dataKey="revenue" stroke="#3b82f6" fillOpacity={1} fill="url(#colorRevenue)" />
              <Line type="monotone" dataKey="target" stroke="#10b981" strokeDasharray="5 5" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </Card>

        {/* Conversion Funnel */}
        <Card className="p-6 bg-white dark:bg-slate-900 border-gray-200 dark:border-slate-800">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Conversion Funnel</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={conversionFunnel}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={(entry) => `${entry.name}: ${entry.value}`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {conversionFunnel.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(15, 23, 42, 0.9)',
                  border: '1px solid rgba(100, 116, 139, 0.5)',
                  borderRadius: '8px',
                }}
                labelStyle={{ color: 'white' }}
              />
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* User Engagement by Channel */}
      <Card className="p-6 bg-white dark:bg-slate-900 border-gray-200 dark:border-slate-800">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">User Engagement by Channel</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={userEngagement}>
            <CartesianGrid strokeDasharray="3 3" stroke="currentColor" className="text-gray-200 dark:text-slate-700" />
            <XAxis stroke="currentColor" className="text-gray-600 dark:text-gray-400" />
            <YAxis stroke="currentColor" className="text-gray-600 dark:text-gray-400" />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(15, 23, 42, 0.9)',
                border: '1px solid rgba(100, 116, 139, 0.5)',
                borderRadius: '8px',
              }}
              labelStyle={{ color: 'white' }}
            />
            <Legend />
            <Bar dataKey="email" fill="#3b82f6" />
            <Bar dataKey="social" fill="#10b981" />
            <Bar dataKey="organic" fill="#f59e0b" />
          </BarChart>
        </ResponsiveContainer>
      </Card>
    </div>
  );
}
