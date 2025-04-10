
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import PostCard from '@/components/PostCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from 'sonner';
import { Candidate } from '@/components/PostCard';

const NCC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('nominations');
  const [votingActive, setVotingActive] = useState(false);
  const [userVotes, setUserVotes] = useState<Record<string, string>>({});

  // Sample data - in a real app, this would come from an API
  const posts = [
    {
      id: 'cadet-captain',
      title: 'Cadet Captain',
      candidates: [
        {
          id: '1',
          name: 'Raj Sharma',
          department: 'Mechanical Engineering',
          year: '4th Year',
          photo: 'https://images.unsplash.com/photo-1618077360395-f3068be8e001?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
          manifesto: 'Dedicated to strengthening discipline and leadership qualities among cadets through rigorous training programs.',
          status: 'Approved' as const,
        },
        {
          id: '2',
          name: 'Priya Patel',
          department: 'Physics',
          year: '3rd Year',
          photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
          manifesto: "Focusing on enhanced academic integration with NCC activities and promoting women's leadership in cadets.",
          status: 'Approved' as const,
        },
      ],
    },
    {
      id: 'admin-officer',
      title: 'Administrative Officer',
      candidates: [
        {
          id: '3',
          name: 'Arjun Singh',
          department: 'Political Science',
          year: '3rd Year',
          photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
          manifesto: 'Committed to streamlining administrative processes and improving coordination with college administration.',
          status: 'Approved' as const,
        },
      ],
    },
    {
      id: 'training-officer',
      title: 'Training Officer',
      candidates: [
        {
          id: '4',
          name: 'Vikram Malhotra',
          department: 'Physical Education',
          year: '4th Year',
          photo: 'https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
          manifesto: 'Planning to introduce innovative physical training methods and increase participation in inter-college competitions.',
          status: 'Pending' as const,
        },
      ],
    },
  ];

  // Filter posts and candidates based on search query
  const filteredPosts = posts.filter(post => {
    const matchesPostTitle = post.title.toLowerCase().includes(searchQuery.toLowerCase());
    const hasCandidateMatch = post.candidates.some(candidate => 
      candidate.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      candidate.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      candidate.manifesto.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    return matchesPostTitle || hasCandidateMatch;
  });

  const toggleVotingStatus = () => {
    setVotingActive(!votingActive);
    toast.info(`Voting has been ${!votingActive ? 'activated' : 'deactivated'} for NCC elections.`);
  };

  const handleVoteForCandidate = (postId: string, candidateId: string, candidateName: string) => {
    if (userVotes[postId]) {
      toast.error(`You have already voted for this position`);
      return;
    }
    
    setUserVotes(prev => ({
      ...prev,
      [postId]: candidateId
    }));
    
    toast.success(`Vote cast for ${candidateName}`);
  };

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
            <h1 className="text-3xl font-bold">National Cadet Corps (NCC) Elections</h1>
          </div>
          <div className="relative w-64">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search posts or candidates..." 
              className="pl-8" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="mb-6 bg-white p-4 rounded-lg shadow-sm">
          <p>
            The National Cadet Corps (NCC) focuses on developing leadership, character, and a spirit of service among students.
            Elected representatives organize training camps, parades, and community service initiatives.
          </p>
        </div>

        <div className="flex justify-between items-center mb-6">
          <Tabs 
            defaultValue="nominations" 
            className="w-[400px]"
            value={activeTab}
            onValueChange={setActiveTab}
          >
            <TabsList>
              <TabsTrigger value="nominations">Nominations</TabsTrigger>
              <TabsTrigger value="voting" disabled={!votingActive}>
                Voting {!votingActive && '(Closed)'}
              </TabsTrigger>
            </TabsList>
          </Tabs>
          
          <Button 
            onClick={toggleVotingStatus}
            variant={votingActive ? "destructive" : "default"}
          >
            {votingActive ? "Close Voting" : "Open Voting"}
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <PostCard 
              key={post.id}
              postTitle={post.title}
              candidates={post.candidates}
              isVotingActive={votingActive && activeTab === 'voting'}
              onVote={(candidateId, candidateName) => 
                handleVoteForCandidate(post.id, candidateId, candidateName)
              }
              selectedCandidateId={userVotes[post.id]}
            />
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-10">
            <p className="text-gray-500">No posts or candidates found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NCC;
