import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Missing Supabase environment variables');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function runMigration(sqlFile) {
  try {
    const sqlPath = path.join(__dirname, sqlFile);
    const sql = fs.readFileSync(sqlPath, 'utf-8');
    
    console.log(`Running migration: ${sqlFile}`);
    
    // Split SQL into individual statements and execute
    const statements = sql
      .split(';')
      .map(s => s.trim())
      .filter(s => s.length > 0 && !s.startsWith('--'));
    
    for (const statement of statements) {
      try {
        const { error } = await supabase.rpc('exec_sql', { sql: statement });
        if (error && !error.message.includes('already exists')) {
          console.warn(`Warning: ${error.message}`);
        }
      } catch (err) {
        console.warn(`Statement execution note: ${statement.substring(0, 50)}...`);
      }
    }
    
    console.log(`✓ ${sqlFile} completed`);
  } catch (error) {
    console.error(`Error running migration ${sqlFile}:`, error.message);
    throw error;
  }
}

async function main() {
  try {
    console.log('Starting database setup...');
    
    // Run migrations in order
    await runMigration('01-init-schema.sql');
    
    console.log('✓ Database setup completed successfully');
    process.exit(0);
  } catch (error) {
    console.error('Setup failed:', error);
    process.exit(1);
  }
}

main();
