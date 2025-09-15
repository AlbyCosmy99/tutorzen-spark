import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Clock, Award, Heart } from "lucide-react";

interface TeacherCardProps {
  name: string;
  subject: string;
  location: string;
  rating: number;
  reviews: number;
  hourlyRate: number;
  experience: string;
  avatar: string;
  specialties: string[];
  isVerified?: boolean;
  responseTime?: string;
}

const TeacherCard = ({
  name,
  subject,
  location,
  rating,
  reviews,
  hourlyRate,
  experience,
  avatar,
  specialties,
  isVerified = false,
  responseTime = "Entro 1 ora"
}: TeacherCardProps) => {
  return (
    <div className="card-teacher group">
      <div className="flex items-start space-x-4">
        {/* Avatar */}
        <div className="relative">
          <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 p-1">
            <img
              src={avatar}
              alt={name}
              className="h-full w-full rounded-full object-cover"
            />
          </div>
          {isVerified && (
            <div className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full bg-success flex items-center justify-center">
              <Award className="h-3 w-3 text-success-foreground" />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Header */}
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                {name}
              </h3>
              <p className="text-muted-foreground font-medium">{subject}</p>
            </div>
            <button className="opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-accent/50 rounded-lg">
              <Heart className="h-5 w-5 text-muted-foreground hover:text-destructive transition-colors" />
            </button>
          </div>

          {/* Stats */}
          <div className="flex items-center space-x-4 mb-3">
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 fill-accent text-accent" />
              <span className="font-medium text-sm">{rating}</span>
              <span className="text-muted-foreground text-sm">({reviews} recensioni)</span>
            </div>
            <div className="flex items-center space-x-1 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">{location}</span>
            </div>
          </div>

          {/* Experience & Response */}
          <div className="flex items-center space-x-4 mb-3 text-sm text-muted-foreground">
            <span>{experience}</span>
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>Risponde {responseTime}</span>
            </div>
          </div>

          {/* Specialties */}
          <div className="flex flex-wrap gap-2 mb-4">
            {specialties.map((specialty, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {specialty}
              </Badge>
            ))}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between">
            <div className="flex items-baseline space-x-1">
              <span className="text-2xl font-bold text-gradient-primary">€{hourlyRate}</span>
              <span className="text-muted-foreground text-sm">/ora</span>
            </div>
            <div className="flex space-x-2">
              <Button variant="ghost" size="sm" className="text-primary hover:text-primary">
                Profilo
              </Button>
              <Button variant="premium" size="sm">
                Contatta
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherCard;