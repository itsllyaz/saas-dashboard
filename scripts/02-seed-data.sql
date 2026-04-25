-- Seed data for SaaS Dashboard demo
-- Note: This script assumes demo users exist in auth.users table
-- For local development, you'll need to create auth users first

-- Insert sample analytics data for the last 30 days
INSERT INTO analytics_data (team_id, metric_type, value, date)
SELECT 
  teams.id,
  metric_type,
  value,
  date
FROM teams, (
  SELECT 
    'revenue'::text as metric_type,
    FLOOR(RANDOM() * 50000 + 20000)::decimal as value,
    CURRENT_DATE - (row_number() over () - 1)::integer as date
  FROM generate_series(1, 30)
  UNION ALL
  SELECT 
    'traffic'::text as metric_type,
    FLOOR(RANDOM() * 100000 + 50000)::decimal as value,
    CURRENT_DATE - (row_number() over () - 1)::integer as date
  FROM generate_series(1, 30)
  UNION ALL
  SELECT 
    'engagement'::text as metric_type,
    FLOOR(RANDOM() * 100 + 60)::decimal as value,
    CURRENT_DATE - (row_number() over () - 1)::integer as date
  FROM generate_series(1, 30)
  UNION ALL
  SELECT 
    'users'::text as metric_type,
    FLOOR(RANDOM() * 5000 + 10000)::decimal as value,
    CURRENT_DATE - (row_number() over () - 1)::integer as date
  FROM generate_series(1, 30)
) metrics
LIMIT 1
ON CONFLICT (team_id, metric_type, date) DO NOTHING;

-- Insert sample projects for first team
INSERT INTO projects (team_id, name, description, status)
SELECT 
  id,
  name,
  description,
  status
FROM teams
CROSS JOIN (
  VALUES
    ('Website Redesign'::text, 'Complete overhaul of company website'::text, 'active'::text),
    ('Mobile App Development'::text, 'Build cross-platform mobile application'::text, 'in_progress'::text),
    ('API Integration'::text, 'Integrate third-party payment API'::text, 'active'::text),
    ('Database Migration'::text, 'Migrate from legacy database system'::text, 'completed'::text)
) as p(name, description, status)
LIMIT 4
ON CONFLICT DO NOTHING;

-- Insert sample tasks for each project
INSERT INTO tasks (project_id, title, description, status, priority, due_date)
SELECT 
  projects.id,
  task.title,
  task.description,
  task.status,
  task.priority,
  CURRENT_DATE + (RANDOM() * 30)::integer
FROM projects
CROSS JOIN (
  VALUES
    ('Design mockups'::text, 'Create UI/UX mockups for all pages'::text, 'done'::text, 'high'::text),
    ('Frontend development'::text, 'Implement responsive frontend'::text, 'in_progress'::text, 'high'::text),
    ('Backend API'::text, 'Build REST API endpoints'::text, 'in_progress'::text, 'medium'::text),
    ('Testing'::text, 'Comprehensive testing and QA'::text, 'todo'::text, 'medium'::text),
    ('Deployment'::text, 'Deploy to production'::text, 'todo'::text, 'high'::text)
) as task(title, description, status, priority)
LIMIT 5
ON CONFLICT DO NOTHING;
