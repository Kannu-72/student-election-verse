
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Candidate } from './PostCard';
import { Check } from 'lucide-react';

interface CandidateProfileProps {
  candidate: Candidate;
  showVoteButton: boolean;
  onVote?: () => void;
  isSelected?: boolean;
}

const CandidateProfile = ({ 
  candidate, 
  showVoteButton, 
  onVote,
  isSelected = false 
}: CandidateProfileProps) => {
  const { name, department, year, photo, manifesto, status } = candidate;

  return (
    <Card className={`overflow-hidden hover:shadow-md transition-shadow ${isSelected ? 'border-2 border-green-500' : ''}`}>
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
          <Button 
            onClick={onVote} 
            className="w-full"
            variant={isSelected ? "outline" : "default"}
            disabled={isSelected}
          >
            {isSelected ? (
              <span className="flex items-center">
                <Check className="h-4 w-4 mr-2" />
                Voted
              </span>
            ) : 'Vote'}
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default CandidateProfile;
