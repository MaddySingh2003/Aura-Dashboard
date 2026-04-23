import { Injectable, signal } from '@angular/core';
import { Course, VideoItem, Lesson, Mentor, ChartData } from '../models/dashboard.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  
  // Using Signals for state management
  courses = signal<Course[]>([
    {
      id: '1',
      title: 'UI/UX Design',
      category: 'UI/UX DESIGN',
      watched: 2,
      total: 8,
      iconBg: 'bg-indigo-100',
      iconColor: 'text-indigo-600',
      svgIcon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path></svg>'
    },
    {
      id: '2',
      title: 'Branding',
      category: 'BRANDING',
      watched: 3,
      total: 8,
      iconBg: 'bg-pink-100',
      iconColor: 'text-pink-600',
      svgIcon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg>'
    },
    {
      id: '3',
      title: 'Front End',
      category: 'FRONT END',
      watched: 6,
      total: 12,
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      svgIcon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>'
    }
  ]);

  continueWatching = signal<VideoItem[]>([
    {
      id: '1',
      title: 'Beginner\'s Guide to Becoming a Professional Front-End Developer',
      category: 'FRONT END',
      mentorName: 'Leonardo samsul',
      thumbnailUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: '2',
      title: 'Optimizing User Experience with the Best UI/UX Design',
      category: 'UI/UX DESIGN',
      mentorName: 'Bayu Salto',
      thumbnailUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: '3',
      title: 'Reviving and Refreshing Company Image',
      category: 'BRANDING',
      mentorName: 'Padhang Satrio',
      thumbnailUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=400&q=80'
    }
  ]);

  lessons = signal<Lesson[]>([
    {
      id: '1',
      mentorName: 'Padhang Satrio',
      mentorAvatar: 'https://i.pravatar.cc/150?u=1',
      date: '2/16/2004', // the image says "2/16/2004"
      type: 'UI/UX DESIGN',
      description: 'Understand Of UI/UX Design'
    }
  ]);

  mentors = signal<Mentor[]>([
    {
      id: '1',
      name: 'Padhang Satrio',
      role: 'Mentor',
      avatar: 'https://i.pravatar.cc/150?u=1'
    },
    {
      id: '2',
      name: 'Zakir Horizontal',
      role: 'Mentor',
      avatar: 'https://i.pravatar.cc/150?u=2'
    },
    {
      id: '3',
      name: 'Leonardo Samsul',
      role: 'Mentor',
      avatar: 'https://i.pravatar.cc/150?u=3'
    }
  ]);

  chartData = signal<ChartData[]>([
    { label: '1-10 Aug', value: 40 },
    { label: '11-20 Aug', value: 80 },
    { label: '21-30 Aug', value: 30 }
  ]);

}
