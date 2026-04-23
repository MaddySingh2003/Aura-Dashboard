export interface Course {
  id: string;
  title: string;
  category: string;
  watched: number;
  total: number;
  iconBg: string;
  iconColor: string;
  svgIcon: string;
}

export interface VideoItem {
  id: string;
  title: string;
  category: string;
  mentorName: string;
  thumbnailUrl: string;
}

export interface Lesson {
  id: string;
  mentorName: string;
  mentorAvatar: string;
  date: string;
  type: string;
  description: string;
}

export interface Mentor {
  id: string;
  name: string;
  role: string;
  avatar: string;
}

export interface ChartData {
  label: string;
  value: number; // percentage 0-100
}
