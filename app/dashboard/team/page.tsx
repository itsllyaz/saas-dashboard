'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Plus, Trash2, Mail, Shield, User } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const teamMembers = [
  {
    id: '1',
    name: 'Alice Johnson',
    email: 'alice@example.com',
    role: 'owner',
    joinDate: '2024-01-15',
    status: 'active',
  },
  {
    id: '2',
    name: 'Bob Smith',
    email: 'bob@example.com',
    role: 'member',
    joinDate: '2024-02-20',
    status: 'active',
  },
  {
    id: '3',
    name: 'Charlie Davis',
    email: 'charlie@example.com',
    role: 'member',
    joinDate: '2024-03-10',
    status: 'active',
  },
  {
    id: '4',
    name: 'Diana Wilson',
    email: 'diana@example.com',
    role: 'member',
    joinDate: '2024-03-25',
    status: 'pending',
  },
];

const roleConfig = {
  owner: {
    label: 'Owner',
    icon: Shield,
    color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400',
  },
  member: {
    label: 'Member',
    icon: User,
    color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400',
  },
};

export default function TeamPage() {
  const [members] = useState(teamMembers);
  const [showAddMember, setShowAddMember] = useState(false);
  const [newMember, setNewMember] = useState({ name: '', email: '' });

  const handleAddMember = () => {
    if (newMember.name && newMember.email) {
      setNewMember({ name: '', email: '' });
      setShowAddMember(false);
    }
  };

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Team</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">Manage team members and permissions</p>
        </div>
        <Dialog open={showAddMember} onOpenChange={setShowAddMember}>
          <DialogTrigger asChild>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <Plus size={20} className="mr-2" />
              Add Member
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-white dark:bg-slate-900 border-gray-200 dark:border-slate-800">
            <DialogHeader>
              <DialogTitle className="text-gray-900 dark:text-white">Add Team Member</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-gray-700 dark:text-gray-300">Name</Label>
                <Input
                  id="name"
                  placeholder="Enter name"
                  value={newMember.name}
                  onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter email"
                  value={newMember.email}
                  onChange={(e) => setNewMember({ ...newMember, email: e.target.value })}
                  className="mt-1"
                />
              </div>
              <div className="flex gap-2 justify-end pt-4">
                <Button variant="outline" onClick={() => setShowAddMember(false)}>
                  Cancel
                </Button>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white" onClick={handleAddMember}>
                  Add Member
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Team Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 bg-white dark:bg-slate-900 border-gray-200 dark:border-slate-800">
          <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Members</h3>
          <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">{members.length}</p>
          <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
            {members.filter((m) => m.status === 'active').length} active
          </p>
        </Card>

        <Card className="p-6 bg-white dark:bg-slate-900 border-gray-200 dark:border-slate-800">
          <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">Pending Invites</h3>
          <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">
            {members.filter((m) => m.status === 'pending').length}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">Awaiting acceptance</p>
        </Card>

        <Card className="p-6 bg-white dark:bg-slate-900 border-gray-200 dark:border-slate-800">
          <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">Admin Members</h3>
          <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">
            {members.filter((m) => m.role === 'owner').length}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">With admin access</p>
        </Card>
      </div>

      {/* Members List */}
      <Card className="overflow-hidden bg-white dark:bg-slate-900 border-gray-200 dark:border-slate-800">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">
                  Member
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">
                  Role
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">
                  Joined
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
              {members.map((member) => {
                const roleConfig_item = roleConfig[member.role as keyof typeof roleConfig];
                const RoleIcon = roleConfig_item.icon;

                return (
                  <tr
                    key={member.id}
                    className="border-b border-gray-200 dark:border-slate-800 hover:bg-gray-50 dark:hover:bg-slate-800/50 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-semibold">
                          {member.name.charAt(0)}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-900 dark:text-white">
                            {member.name}
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 flex items-center gap-1">
                            <Mail size={12} />
                            {member.email}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <Badge variant="secondary" className={roleConfig_item.color}>
                        <RoleIcon size={14} className="mr-1" />
                        {roleConfig_item.label}
                      </Badge>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                      {new Date(member.joinDate).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4">
                      <Badge
                        variant="secondary"
                        className={
                          member.status === 'active'
                            ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                            : 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400'
                        }
                      >
                        {member.status === 'active' ? 'Active' : 'Pending'}
                      </Badge>
                    </td>
                    <td className="px-6 py-4 text-right">
                      {member.role !== 'owner' && (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-red-600 dark:text-red-400 hover:text-red-700"
                        >
                          <Trash2 size={16} />
                        </Button>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
