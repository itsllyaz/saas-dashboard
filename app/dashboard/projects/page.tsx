'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Trash2, Edit2, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    id: '1',
    name: 'Website Redesign',
    description: 'Complete overhaul of company website',
    status: 'in_progress',
    progress: 65,
    tasks: { total: 12, completed: 8 },
    team: ['Alice', 'Bob'],
    dueDate: '2024-05-15',
  },
  {
    id: '2',
    name: 'Mobile App Development',
    description: 'Build cross-platform mobile application',
    status: 'in_progress',
    progress: 45,
    tasks: { total: 18, completed: 8 },
    team: ['Charlie', 'David', 'Eve'],
    dueDate: '2024-06-30',
  },
  {
    id: '3',
    name: 'API Integration',
    description: 'Integrate third-party payment API',
    status: 'completed',
    progress: 100,
    tasks: { total: 8, completed: 8 },
    team: ['Frank'],
    dueDate: '2024-04-20',
  },
  {
    id: '4',
    name: 'Database Migration',
    description: 'Migrate from legacy database system',
    status: 'planning',
    progress: 10,
    tasks: { total: 15, completed: 2 },
    team: ['Grace', 'Henry'],
    dueDate: '2024-07-15',
  },
];

const statusConfig = {
  planning: {
    label: 'Planning',
    icon: AlertCircle,
    color: 'bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400',
  },
  in_progress: {
    label: 'In Progress',
    icon: Clock,
    color: 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400',
  },
  completed: {
    label: 'Completed',
    icon: CheckCircle,
    color: 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400',
  },
};

export default function ProjectsPage() {
  const [projects_list] = useState(projects);

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Projects</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">Manage and track your projects</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
          <Plus size={20} className="mr-2" />
          New Project
        </Button>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects_list.map((project) => {
          const config = statusConfig[project.status as keyof typeof statusConfig];
          const StatusIcon = config.icon;

          return (
            <Card
              key={project.id}
              className="p-6 bg-white dark:bg-slate-900 border-gray-200 dark:border-slate-800 hover:shadow-lg transition-shadow"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {project.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {project.description}
                  </p>
                </div>
                <div className="flex gap-2 ml-4">
                  <Button variant="ghost" size="icon" className="text-gray-500 dark:text-gray-400">
                    <Edit2 size={18} />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-gray-500 dark:text-gray-400 hover:text-red-600">
                    <Trash2 size={18} />
                  </Button>
                </div>
              </div>

              {/* Status and Due Date */}
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="secondary" className={config.color}>
                  <StatusIcon size={14} className="mr-1" />
                  {config.label}
                </Badge>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Due: {new Date(project.dueDate).toLocaleDateString()}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Progress</span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">{project.progress}%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-300"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>

              {/* Tasks and Team */}
              <div className="flex items-center justify-between text-sm">
                <div className="text-gray-600 dark:text-gray-400">
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {project.tasks.completed}
                  </span>
                  /{project.tasks.total} tasks completed
                </div>
                <div className="flex -space-x-2">
                  {project.team.map((member, idx) => (
                    <div
                      key={idx}
                      className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-xs font-semibold border border-white dark:border-slate-900"
                      title={member}
                    >
                      {member[0]}
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Tasks Summary Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
        <Card className="p-6 bg-white dark:bg-slate-900 border-gray-200 dark:border-slate-800">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Active Tasks
          </h3>
          <p className="text-4xl font-bold text-blue-600 dark:text-blue-400">24</p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Across all projects</p>
        </Card>

        <Card className="p-6 bg-white dark:bg-slate-900 border-gray-200 dark:border-slate-800">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Completed This Week
          </h3>
          <p className="text-4xl font-bold text-green-600 dark:text-green-400">12</p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">+15% from last week</p>
        </Card>

        <Card className="p-6 bg-white dark:bg-slate-900 border-gray-200 dark:border-slate-800">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Overdue
          </h3>
          <p className="text-4xl font-bold text-red-600 dark:text-red-400">3</p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Immediate attention needed</p>
        </Card>
      </div>
    </div>
  );
}
