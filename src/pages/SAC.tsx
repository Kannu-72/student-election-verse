
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import PostCard from '@/components/PostCard';

const SAC = () => {
  // Sample data - in a real app, this would come from an API
  const posts = [
    {
      id: 'president',
      title: 'President',
      candidates: [
        {
          id: '1',
          name: 'Alex Johnson',
          department: 'Computer Science',
          year: '3rd Year',
          photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
          manifesto: 'Committed to enhancing student welfare through transparent governance and inclusive events that bring our campus community together.',
          status: 'Approved',
        },
        {
          id: '2',
          name: 'Taylor Rodriguez',
          department: 'Electrical Engineering',
          year: '4th Year',
          photo: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
          manifesto: 'Focusing on technological innovations for campus activities and creating more opportunities for interdisciplinary collaboration.',
          status: 'Approved',
        },
      ],
    },
    {
      id: 'secretary',
      title: 'Secretary',
      candidates: [
        {
          id: '3',
          name: 'Jordan Lee',
          department: 'Business Administration',
          year: '2nd Year',
          photo: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
          manifesto: 'Aiming to streamline administrative processes and improve communication between students and faculty.',
          status: 'Approved',
        },
      ],
    },
    {
      id: 'treasurer',
      title: 'Treasurer',
      candidates: [
        {
          id: '4',
          name: 'Jamie Smith',
          department: 'Finance',
          year: '3rd Year',
          photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
          manifesto: 'Planning to implement transparent budget management and secure more funding for student activities.',
          status: 'Pending',
        },
        {
          id: '5',
          name: 'Riley Davis',
          department: 'Economics',
          year: '4th Year',
          photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
          manifesto: 'Dedicated to equitable fund allocation and creating sustainable financial models for student organizations.',
          status: 'Approved',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Link to="/">
              <Button variant="outline" size="icon">
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>
            <h1 className="text-3xl font-bold">Student Activity Center (SAC) Elections</h1>
          </div>
          <div className="relative w-64">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search posts or candidates..." className="pl-8" />
          </div>
        </div>

        <div className="mb-6 bg-white p-4 rounded-lg shadow-sm">
          <p>
            The Student Activity Center (SAC) is the hub for all extracurricular activities on campus.
            Elected representatives organize events, manage facilities, and advocate for student interests.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard 
              key={post.id}
              postTitle={post.title}
              candidates={post.candidates as any}
              isVotingActive={true}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SAC;
