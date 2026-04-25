'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { BarChart3, TrendingUp, Users, Zap, ArrowRight } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-gray-600 to-gray-400 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">DashHub</span>
          </div>
          <Link href="/dashboard">
            <Button className="bg-gradient-to-r from-gray-700 to-gray-500 hover:from-gray-600 hover:to-gray-400 text-white border-0">
              Enter Dashboard
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="text-center space-y-6 mb-16 animate-fadeInUp">
          <div className="inline-block animate-slideIn">
            <div className="px-4 py-2 rounded-full bg-gray-800/40 border border-gray-700 text-gray-300 text-sm font-medium backdrop-blur-sm">
              ⚡ Sleek SaaS Dashboard MVP
            </div>
          </div>
          <h1 className="text-5xl sm:text-7xl font-bold text-white text-balance">
            Analytics & Project{' '}
            <span className="bg-gradient-to-r from-gray-300 via-gray-500 to-gray-300 text-transparent bg-clip-text animate-pulse-subtle">
              Management Simplified
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto text-balance">
            Powerful dashboard to track analytics, manage projects, handle subscriptions, and collaborate with your team all in one place.
          </p>
          <div className="flex gap-4 justify-center pt-4">
            <Link href="/dashboard">
              <Button size="lg" className="bg-gradient-to-r from-gray-700 to-gray-500 hover:from-gray-600 hover:to-gray-400 text-white border-0 h-12 px-8 text-base hover-lift">
                Explore Dashboard
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 my-20">
          <div className="p-6 rounded-xl bg-gradient-to-br from-gray-800/40 to-gray-700/20 border border-gray-700 hover:border-gray-500 hover-lift animate-fadeInUp">
            <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-400 rounded-lg flex items-center justify-center mb-4">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Analytics Dashboard</h3>
            <p className="text-gray-400">Real-time insights with interactive charts and KPI tracking for data-driven decisions.</p>
          </div>

          <div className="p-6 rounded-xl bg-gradient-to-br from-gray-800/40 to-gray-700/20 border border-gray-700 hover:border-gray-500 hover-lift animate-fadeInUp">
            <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-400 rounded-lg flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Project Management</h3>
            <p className="text-gray-400">Track projects, tasks, and deadlines with intuitive status management and progress visualization.</p>
          </div>

          <div className="p-6 rounded-xl bg-gradient-to-br from-gray-800/40 to-gray-700/20 border border-gray-700 hover:border-gray-500 hover-lift animate-fadeInUp">
            <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-400 rounded-lg flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Subscription Billing</h3>
            <p className="text-gray-400">Manage plans, track invoices, and monitor customer churn with detailed billing analytics.</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-4 my-16 p-8 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700">
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-300">6</div>
            <p className="text-gray-400 text-sm mt-2">Dashboard Pages</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-300">5+</div>
            <p className="text-gray-400 text-sm mt-2">Chart Types</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-300">100%</div>
            <p className="text-gray-400 text-sm mt-2">Client-Side</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-300">Ready</div>
            <p className="text-gray-400 text-sm mt-2">To Deploy</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center p-12 rounded-xl bg-gradient-to-r from-gray-800/40 to-gray-700/20 border border-gray-700 backdrop-blur-sm">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to explore?</h2>
          <p className="text-gray-400 mb-6">Jump into the dashboard and see all features in action with sample data.</p>
          <Link href="/dashboard">
            <Button className="bg-gradient-to-r from-gray-700 to-gray-500 hover:from-gray-600 hover:to-gray-400 text-white border-0 h-11 px-8">
              Enter Dashboard
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

