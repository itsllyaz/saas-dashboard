export const mockAnalyticsData = [
  { month: 'Jan', revenue: 4000, conversions: 240, customers: 1200 },
  { month: 'Feb', revenue: 5100, conversions: 300, customers: 1500 },
  { month: 'Mar', revenue: 6200, conversions: 380, customers: 1800 },
  { month: 'Apr', revenue: 7400, conversions: 450, customers: 2100 },
  { month: 'May', revenue: 8800, conversions: 520, customers: 2400 },
  { month: 'Jun', revenue: 10500, conversions: 610, customers: 2800 },
];

export const mockProjects = [
  {
    id: '1',
    name: 'Website Redesign',
    status: 'in-progress',
    progress: 65,
    dueDate: '2024-05-30',
    team: 'Design Team',
    tasks: 24,
    completedTasks: 16,
    priority: 'high',
  },
  {
    id: '2',
    name: 'Mobile App Launch',
    status: 'in-progress',
    progress: 45,
    dueDate: '2024-06-15',
    team: 'Dev Team',
    tasks: 32,
    completedTasks: 14,
    priority: 'high',
  },
  {
    id: '3',
    name: 'Database Migration',
    status: 'completed',
    progress: 100,
    dueDate: '2024-04-10',
    team: 'Backend Team',
    tasks: 18,
    completedTasks: 18,
    priority: 'medium',
  },
  {
    id: '4',
    name: 'API Integration',
    status: 'pending',
    progress: 0,
    dueDate: '2024-07-01',
    team: 'Dev Team',
    tasks: 15,
    completedTasks: 0,
    priority: 'medium',
  },
];

export const mockTeamMembers = [
  { id: '1', name: 'Alice Johnson', role: 'Admin', email: 'alice@company.com', status: 'active' },
  { id: '2', name: 'Bob Smith', role: 'Manager', email: 'bob@company.com', status: 'active' },
  { id: '3', name: 'Carol White', role: 'Developer', email: 'carol@company.com', status: 'active' },
  { id: '4', name: 'David Brown', role: 'Designer', email: 'david@company.com', status: 'inactive' },
  { id: '5', name: 'Emma Davis', role: 'Developer', email: 'emma@company.com', status: 'active' },
];

export const mockSubscriptions = [
  {
    id: '1',
    plan: 'Starter',
    price: 29,
    status: 'active',
    startDate: '2024-01-15',
    endDate: '2025-01-15',
    users: 5,
    features: ['Up to 5 users', 'Basic analytics', 'Email support'],
  },
  {
    id: '2',
    plan: 'Professional',
    price: 99,
    status: 'active',
    startDate: '2023-06-20',
    endDate: '2025-06-20',
    users: 20,
    features: ['Up to 20 users', 'Advanced analytics', 'Priority support', 'Custom integrations'],
  },
  {
    id: '3',
    plan: 'Enterprise',
    price: 299,
    status: 'active',
    startDate: '2023-01-01',
    endDate: '2025-12-31',
    users: 100,
    features: ['Unlimited users', 'Custom analytics', '24/7 support', 'Dedicated account manager'],
  },
];

export const mockInvoices = [
  {
    id: 'INV-001',
    date: '2024-04-01',
    amount: 99,
    status: 'paid',
    plan: 'Professional',
    dueDate: '2024-04-15',
  },
  {
    id: 'INV-002',
    date: '2024-03-01',
    amount: 99,
    status: 'paid',
    plan: 'Professional',
    dueDate: '2024-03-15',
  },
  {
    id: 'INV-003',
    date: '2024-02-01',
    amount: 99,
    status: 'paid',
    plan: 'Professional',
    dueDate: '2024-02-15',
  },
  {
    id: 'INV-004',
    date: '2024-05-01',
    amount: 99,
    status: 'pending',
    plan: 'Professional',
    dueDate: '2024-05-15',
  },
];

export const mockEngagementData = [
  { name: 'Mobile', value: 35, fill: '#3b82f6' },
  { name: 'Desktop', value: 45, fill: '#8b5cf6' },
  { name: 'Tablet', value: 20, fill: '#ec4899' },
];

export const mockConversionFunnel = [
  { stage: 'Visits', value: 10000, percentage: 100 },
  { stage: 'Signup', value: 3500, percentage: 35 },
  { stage: 'Trial', value: 2100, percentage: 60 },
  { stage: 'Paid', value: 840, percentage: 40 },
];

export const mockCurrentUser = {
  name: 'Sarah Anderson',
  email: 'sarah@company.com',
  role: 'Admin',
  company: 'TechCorp Inc',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
};
