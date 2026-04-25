import { ArrowUp, ArrowDown } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface KPICardProps {
  title: string;
  value: string;
  change?: number;
  icon: React.ReactNode;
  trend?: 'up' | 'down' | 'neutral';
}

export function KPICard({ title, value, change, icon, trend = 'neutral' }: KPICardProps) {
  const trendColor = trend === 'up' ? 'text-green-600 dark:text-green-400' : trend === 'down' ? 'text-red-600 dark:text-red-400' : 'text-gray-600 dark:text-gray-400';
  const bgColor = trend === 'up' ? 'bg-green-50 dark:bg-green-900/20' : trend === 'down' ? 'bg-red-50 dark:bg-red-900/20' : 'bg-gray-50 dark:bg-slate-800';

  return (
    <Card className="p-6 bg-gradient-to-br from-white to-gray-50 dark:from-slate-900 dark:to-slate-800 border-gray-200 dark:border-slate-700 hover-lift animate-fadeInUp">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">{title}</p>
          <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">{value}</p>
          {change !== undefined && (
            <div className={`flex items-center gap-1 mt-3 ${trendColor}`}>
              {trend === 'up' ? (
                <ArrowUp size={16} />
              ) : trend === 'down' ? (
                <ArrowDown size={16} />
              ) : null}
              <span className="text-sm font-semibold">{Math.abs(change)}%</span>
            </div>
          )}
        </div>
        <div className={`p-3 rounded-lg ${bgColor}`}>
          <div className="text-gray-700 dark:text-gray-300">{icon}</div>
        </div>
      </div>
    </Card>
  );
}
