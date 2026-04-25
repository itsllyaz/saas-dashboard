'use client';

import { DollarSign, TrendingUp, Users, Activity } from 'lucide-react';
import { KPICard } from '@/components/dashboard/kpi-card';
import { Card } from '@/components/ui/card';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const revenueData = [
  { month: 'Jan', revenue: 24000, expenses: 9600 },
  { month: 'Feb', revenue: 28000, expenses: 9800 },
  { month: 'Mar', revenue: 32000, expenses: 10200 },
  { month: 'Apr', revenue: 35000, expenses: 10500 },
  { month: 'May', revenue: 42000, expenses: 11200 },
  { month: 'Jun', revenue: 48000, expenses: 12000 },
];

const trafficData = [
  { date: 'Week 1', sessions: 45000, users: 12000 },
  { date: 'Week 2', sessions: 52000, users: 14000 },
  { date: 'Week 3', sessions: 48000, users: 13000 },
  { date: 'Week 4', sessions: 61000, users: 16000 },
];

export default function DashboardPage() {
  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">Welcome back! Here&apos;s your performance overview.</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KPICard
          title="Total Revenue"
          value="$48,000"
          change={12}
          trend="up"
          icon={<DollarSign size={24} />}
        />
        <KPICard
          title="Traffic"
          value="61K"
          change={8}
          trend="up"
          icon={<TrendingUp size={24} />}
        />
        <KPICard
          title="Active Users"
          value="2,847"
          change={5}
          trend="up"
          icon={<Users size={24} />}
        />
        <KPICard
          title="Engagement Rate"
          value="72%"
          change={3}
          trend="up"
          icon={<Activity size={24} />}
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <Card className="p-6 bg-white dark:bg-slate-900 border-gray-200 dark:border-slate-800">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Revenue vs Expenses</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueData}>
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
              <Line type="monotone" dataKey="revenue" stroke="#3b82f6" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="expenses" stroke="#ef4444" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        {/* Traffic Chart */}
        <Card className="p-6 bg-white dark:bg-slate-900 border-gray-200 dark:border-slate-800">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Traffic & Users</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={trafficData}>
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
              <Bar dataKey="sessions" fill="#3b82f6" />
              <Bar dataKey="users" fill="#10b981" />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>
    </div>
  );
}
