
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Candidate } from './PostCard';
import { toast } from 'sonner';

interface CandidateProfileProps {
  candidate: Candidate;
  showVoteButton: boolean;
}

const CandidateProfile = ({ candidate, showVoteButton }: CandidateProfileProps) => {
  const { name, department, year, photo, manifesto, status } = candidate;

  const handleVote = () => {
    toast.success(`Vote cast for ${name}`);
    // Here you would implement actual voting logic
  };

  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative">
        <div className="absolute right-2 top-2">
          <Badge 
            variant={status === 'Approved' ? 'default' : status === 'Pending' ? 'outline' : 'destructive'}
          >
            {status}
          </Badge>
        </div>
        <img 
          src={photo} 
          alt={name} 
          className="w-full h-48 object-cover object-center"
        />
      </div>
      <CardHeader className="pb-2">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-muted-foreground">{department} • {year}</p>
      </CardHeader>
      <CardContent>
        <div className="text-sm">
          <h4 className="font-medium mb-1">Manifesto:</h4>
          <p className="text-gray-600">{manifesto}</p>
        </div>
      </CardContent>
      {showVoteButton && status === 'Approved' && (
        <CardFooter>
          <Button onClick={handleVote} className="w-full">Vote</Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default CandidateProfile;
