
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import PostCard from '@/components/PostCard';

const NSS = () => {
  // Sample data - in a real app, this would come from an API
  const posts = [
    {
      id: 'coordinator',
      title: 'NSS Coordinator',
      candidates: [
        {
          id: '1',
          name: 'Sam Wilson',
          department: 'Social Sciences',
          year: '3rd Year',
          photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
          manifesto: 'Committed to expanding our community service initiatives and partnering with more local organizations.',
          status: 'Approved',
        },
        {
          id: '2',
          name: 'Morgan Taylor',
          department: 'Environmental Studies',
          year: '2nd Year',
          photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
          manifesto: 'Focusing on environmental conservation projects and sustainable campus initiatives.',
          status: 'Approved',
        },
      ],
    },
    {
      id: 'secretary',
      title: 'NSS Secretary',
      candidates: [
        {
          id: '3',
          name: 'Casey Brown',
          department: 'Health Sciences',
          year: '3rd Year',
          photo: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
          manifesto: 'Planning to organize more health awareness camps and blood donation drives.',
          status: 'Pending',
        },
      ],
    },
    {
      id: 'outreach',
      title: 'Outreach Officer',
      candidates: [
        {
          id: '4',
          name: 'Avery Garcia',
          department: 'Mass Communication',
          year: '2nd Year',
          photo: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
          manifesto: 'Aiming to improve our social media presence and develop partnerships with local media for better coverage of our activities.',
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
            <h1 className="text-3xl font-bold">National Service Scheme (NSS) Elections</h1>
          </div>
          <div className="relative w-64">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search posts or candidates..." className="pl-8" />
          </div>
        </div>

        <div className="mb-6 bg-white p-4 rounded-lg shadow-sm">
          <p>
            The National Service Scheme (NSS) focuses on community service and social welfare. 
            Representatives coordinate volunteering activities, awareness campaigns, and social impact projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard 
              key={post.id}
              postTitle={post.title}
              candidates={post.candidates as any}
              isVotingActive={false}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NSS;
