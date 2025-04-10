
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import PostCard from '@/components/PostCard';

const ECell = () => {
  // Sample data - in a real app, this would come from an API
  const posts = [
    {
      id: 'president',
      title: 'E-Cell President',
      candidates: [
        {
          id: '1',
          name: 'Mira Shah',
          department: 'Business Administration',
          year: '3rd Year',
          photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
          manifesto: 'Focusing on creating a robust startup ecosystem on campus and bringing industry mentors for student entrepreneurs.',
          status: 'Approved',
        },
        {
          id: '2',
          name: 'Aarav Kumar',
          department: 'Computer Science',
          year: '4th Year',
          photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
          manifesto: 'Planning to establish a tech incubator and secure seed funding opportunities for student startups.',
          status: 'Approved',
        },
      ],
    },
    {
      id: 'innovation-head',
      title: 'Innovation Head',
      candidates: [
        {
          id: '3',
          name: 'Nisha Verma',
          department: 'Engineering Design',
          year: '3rd Year',
          photo: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
          manifesto: 'Committed to organizing innovation challenges and design thinking workshops to foster creative problem-solving.',
          status: 'Approved',
        },
      ],
    },
    {
      id: 'marketing-director',
      title: 'Marketing Director',
      candidates: [
        {
          id: '4',
          name: 'Rohan Joshi',
          department: 'Marketing',
          year: '2nd Year',
          photo: 'https://images.unsplash.com/photo-1567784177951-6fa58317e16b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
          manifesto: 'Aiming to increase E-Cell's visibility through strategic digital marketing and partnerships with business media.',
          status: 'Approved',
        },
        {
          id: '5',
          name: 'Sanya Gupta',
          department: 'Mass Communication',
          year: '3rd Year',
          photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
          manifesto: 'Planning to build a strong brand identity for E-Cell and expand our outreach to schools and other colleges.',
          status: 'Pending',
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
            <h1 className="text-3xl font-bold">Entrepreneurship Cell (E-Cell) Elections</h1>
          </div>
          <div className="relative w-64">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search posts or candidates..." className="pl-8" />
          </div>
        </div>

        <div className="mb-6 bg-white p-4 rounded-lg shadow-sm">
          <p>
            The Entrepreneurship Cell (E-Cell) fosters innovation and startup culture on campus. 
            Elected representatives organize pitch competitions, workshops, and connect students with industry mentors.
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

export default ECell;
