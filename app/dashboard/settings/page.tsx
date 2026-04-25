'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { useTheme } from 'next-themes';
import { toast } from 'sonner';
import { Bell, Lock, Palette, LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { mockCurrentUser } from '@/lib/mock-data';

export default function SettingsPage() {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [formData, setFormData] = useState({
    fullName: mockCurrentUser.name,
    email: mockCurrentUser.email,
  });
  const [preferences, setPreferences] = useState({
    notifications_enabled: true,
    email_digest: true,
    marketing_emails: false,
  });

  const handleSaveProfile = () => {
    toast.success('Profile updated successfully!');
  };

  const handleLogout = () => {
    toast.success('Logged out successfully');
    router.push('/');
  };

  return (
    <div className="p-6 space-y-8 max-w-4xl">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Settings</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">Manage your account and preferences</p>
      </div>

      {/* Profile Settings */}
      <Card className="p-6 bg-white dark:bg-slate-900 border-gray-200 dark:border-slate-800">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <Lock size={20} />
          Profile Information
        </h2>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="fullName" className="text-gray-700 dark:text-gray-300 mb-2 block">
                Full Name
              </Label>
              <Input
                id="fullName"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="bg-gray-50 dark:bg-slate-800 border-gray-200 dark:border-slate-700"
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-gray-700 dark:text-gray-300 mb-2 block">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-gray-50 dark:bg-slate-800 border-gray-200 dark:border-slate-700"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="company" className="text-gray-700 dark:text-gray-300 mb-2 block">
              Company
            </Label>
            <Input
              id="company"
              value={mockCurrentUser.company}
              disabled
              className="bg-gray-50 dark:bg-slate-800 border-gray-200 dark:border-slate-700"
            />
          </div>

          <div className="flex justify-end">
            <Button
              onClick={handleSaveProfile}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Save Changes
            </Button>
          </div>
        </div>
      </Card>

      {/* Theme Settings */}
      <Card className="p-6 bg-white dark:bg-slate-900 border-gray-200 dark:border-slate-800">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <Palette size={20} />
          Appearance
        </h2>

        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-slate-800 rounded-lg">
            <div>
              <p className="font-medium text-gray-900 dark:text-white">Dark Mode</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Toggle dark mode for easier viewing</p>
            </div>
            <Switch
              checked={theme === 'dark'}
              onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
            />
          </div>
        </div>
      </Card>

      {/* Notification Settings */}
      <Card className="p-6 bg-white dark:bg-slate-900 border-gray-200 dark:border-slate-800">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <Bell size={20} />
          Notifications
        </h2>

        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-slate-800 rounded-lg">
            <div>
              <p className="font-medium text-gray-900 dark:text-white">Push Notifications</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Receive updates about your projects</p>
            </div>
            <Switch
              checked={preferences.notifications_enabled}
              onCheckedChange={(checked) =>
                setPreferences({ ...preferences, notifications_enabled: checked })
              }
            />
          </div>

          <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-slate-800 rounded-lg">
            <div>
              <p className="font-medium text-gray-900 dark:text-white">Email Digest</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Weekly summary of your activity</p>
            </div>
            <Switch
              checked={preferences.email_digest}
              onCheckedChange={(checked) =>
                setPreferences({ ...preferences, email_digest: checked })
              }
            />
          </div>

          <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-slate-800 rounded-lg">
            <div>
              <p className="font-medium text-gray-900 dark:text-white">Marketing Emails</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Updates about new features and offers</p>
            </div>
            <Switch
              checked={preferences.marketing_emails}
              onCheckedChange={(checked) =>
                setPreferences({ ...preferences, marketing_emails: checked })
              }
            />
          </div>
        </div>
      </Card>

      {/* Danger Zone */}
      <Card className="p-6 bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-900/50">
        <h2 className="text-xl font-semibold text-red-600 dark:text-red-400 mb-4 flex items-center gap-2">
          <LogOut size={20} />
          Danger Zone
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Once you log out, you&apos;ll need to sign in again to access your dashboard.
        </p>
        <Button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 text-white"
        >
          <LogOut size={18} className="mr-2" />
          Log Out
        </Button>
      </Card>
    </div>
  );
}
