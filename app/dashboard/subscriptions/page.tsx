'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Download, CreditCard, AlertCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const currentPlan = {
  name: 'Professional',
  price: '$99',
  cycle: 'month',
  status: 'active',
  features: [
    'Up to 10 projects',
    'Up to 50 team members',
    'Advanced analytics',
    'Priority support',
    'Custom integrations',
    'API access',
  ],
};

const invoices = [
  {
    id: 'INV-2024-06',
    date: '2024-06-01',
    amount: '$99.00',
    status: 'paid',
    dueDate: '2024-06-30',
  },
  {
    id: 'INV-2024-05',
    date: '2024-05-01',
    amount: '$99.00',
    status: 'paid',
    dueDate: '2024-05-31',
  },
  {
    id: 'INV-2024-04',
    date: '2024-04-01',
    amount: '$99.00',
    status: 'paid',
    dueDate: '2024-04-30',
  },
  {
    id: 'INV-2024-03',
    date: '2024-03-01',
    amount: '$99.00',
    status: 'paid',
    dueDate: '2024-03-31',
  },
];

const plans = [
  {
    name: 'Starter',
    price: '$29',
    cycle: 'month',
    description: 'Perfect for small teams',
    features: [
      'Up to 3 projects',
      'Up to 10 team members',
      'Basic analytics',
      'Email support',
    ],
    recommended: false,
  },
  {
    name: 'Professional',
    price: '$99',
    cycle: 'month',
    description: 'Best for growing teams',
    features: [
      'Up to 10 projects',
      'Up to 50 team members',
      'Advanced analytics',
      'Priority support',
      'Custom integrations',
      'API access',
    ],
    recommended: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    cycle: 'year',
    description: 'For large organizations',
    features: [
      'Unlimited projects',
      'Unlimited team members',
      'Custom analytics',
      '24/7 phone support',
      'Dedicated account manager',
      'Custom development',
    ],
    recommended: false,
  },
];

export default function SubscriptionsPage() {
  const [currentTab, setCurrentTab] = useState<'current' | 'plans' | 'invoices'>('current');

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Subscription</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">Manage your plan and billing</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 border-b border-gray-200 dark:border-slate-800">
        <button
          onClick={() => setCurrentTab('current')}
          className={`pb-4 px-4 font-medium border-b-2 transition-colors ${
            currentTab === 'current'
              ? 'border-blue-600 text-blue-600 dark:text-blue-400'
              : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300'
          }`}
        >
          Current Plan
        </button>
        <button
          onClick={() => setCurrentTab('plans')}
          className={`pb-4 px-4 font-medium border-b-2 transition-colors ${
            currentTab === 'plans'
              ? 'border-blue-600 text-blue-600 dark:text-blue-400'
              : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300'
          }`}
        >
          Plans
        </button>
        <button
          onClick={() => setCurrentTab('invoices')}
          className={`pb-4 px-4 font-medium border-b-2 transition-colors ${
            currentTab === 'invoices'
              ? 'border-blue-600 text-blue-600 dark:text-blue-400'
              : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300'
          }`}
        >
          Invoices
        </button>
      </div>

      {/* Current Plan Tab */}
      {currentTab === 'current' && (
        <div className="space-y-6">
          <Card className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-blue-200 dark:border-blue-800">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  {currentPlan.name} Plan
                </h2>
                <div className="flex items-baseline gap-2 mt-2">
                  <span className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                    {currentPlan.price}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400">/{currentPlan.cycle}</span>
                </div>
              </div>
              <Badge variant="secondary" className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400">
                Active
              </Badge>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              {currentPlan.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <Check size={20} className="text-green-600 dark:text-green-400 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex gap-4 mt-8">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Upgrade Plan
              </Button>
              <Button variant="outline" className="text-red-600 hover:text-red-700">
                Cancel Subscription
              </Button>
            </div>
          </Card>

          {/* Billing Info */}
          <Card className="p-6 bg-white dark:bg-slate-900 border-gray-200 dark:border-slate-800">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Billing Information
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Current Period</span>
                <span className="font-medium text-gray-900 dark:text-white">
                  Jun 1 - Jun 30, 2024
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Next Billing Date</span>
                <span className="font-medium text-gray-900 dark:text-white">July 1, 2024</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Payment Method</span>
                <span className="font-medium text-gray-900 dark:text-white">
                  Visa ending in 4242
                </span>
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* Plans Tab */}
      {currentTab === 'plans' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`p-6 relative transition-all ${
                plan.recommended
                  ? 'bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-2 border-blue-600 dark:border-blue-400 shadow-lg'
                  : 'bg-white dark:bg-slate-900 border-gray-200 dark:border-slate-800'
              }`}
            >
              {plan.recommended && (
                <div className="absolute top-0 right-0 bg-blue-600 dark:bg-blue-500 text-white px-4 py-1 rounded-bl-lg rounded-tr-lg text-sm font-semibold">
                  Recommended
                </div>
              )}

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-4">
                {plan.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                {plan.description}
              </p>

              <div className="flex items-baseline gap-2 my-6">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  {plan.price}
                </span>
                {plan.price !== 'Custom' && (
                  <span className="text-gray-600 dark:text-gray-400">/{plan.cycle}</span>
                )}
              </div>

              <Button
                className={`w-full mb-6 ${
                  plan.recommended
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : 'bg-gray-200 dark:bg-slate-800 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-slate-700'
                }`}
              >
                {plan.name === 'Professional' ? 'Current Plan' : 'Upgrade'}
              </Button>

              <div className="space-y-3">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Check size={16} className="text-green-600 dark:text-green-400 flex-shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* Invoices Tab */}
      {currentTab === 'invoices' && (
        <div className="space-y-4">
          <Card className="overflow-hidden bg-white dark:bg-slate-900 border-gray-200 dark:border-slate-800">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">
                      Invoice ID
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">
                      Amount
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">
                      Status
                    </th>
                    <th className="px-6 py-3 text-right text-sm font-semibold text-gray-900 dark:text-white">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {invoices.map((invoice) => (
                    <tr
                      key={invoice.id}
                      className="border-b border-gray-200 dark:border-slate-800 hover:bg-gray-50 dark:hover:bg-slate-800/50 transition-colors"
                    >
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                        {invoice.id}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                        {new Date(invoice.date).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 text-sm font-semibold text-gray-900 dark:text-white">
                        {invoice.amount}
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <Badge
                          variant="secondary"
                          className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400"
                        >
                          {invoice.status === 'paid' ? 'Paid' : 'Pending'}
                        </Badge>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <Button variant="ghost" size="sm">
                          <Download size={16} />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}
