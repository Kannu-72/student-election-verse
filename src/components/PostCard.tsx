
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CandidateProfile from './CandidateProfile';

export interface Candidate {
  id: string;
  name: string;
  department: string;
  year: string;
  photo: string;
  manifesto: string;
  status: 'Approved' | 'Pending' | 'Rejected';
}

interface PostCardProps {
  postTitle: string;
  candidates: Candidate[];
  isVotingActive?: boolean;
}

const PostCard = ({ postTitle, candidates, isVotingActive = false }: PostCardProps) => {
  const [activeTab, setActiveTab] = useState<string>('nominations');

  return (
    <Card className="w-full h-full">
      <CardHeader className="bg-slate-50">
        <CardTitle>{postTitle}</CardTitle>
        <CardDescription>
          {candidates.length} candidate{candidates.length !== 1 ? 's' : ''} for this position
        </CardDescription>
      </CardHeader>
      <Tabs defaultValue="nominations" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="nominations">Nominations</TabsTrigger>
          <TabsTrigger value="voting" disabled={!isVotingActive}>
            Voting {!isVotingActive && '(Closed)'}
          </TabsTrigger>
        </TabsList>
        <TabsContent value="nominations">
          <CardContent className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {candidates.map((candidate) => (
                <CandidateProfile 
                  key={candidate.id} 
                  candidate={candidate} 
                  showVoteButton={false}
                />
              ))}
            </div>
          </CardContent>
        </TabsContent>
        <TabsContent value="voting">
          <CardContent className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {candidates.map((candidate) => (
                <CandidateProfile 
                  key={candidate.id} 
                  candidate={candidate} 
                  showVoteButton={true}
                />
              ))}
            </div>
          </CardContent>
        </TabsContent>
      </Tabs>
    </Card>
  );
};

export default PostCard;
