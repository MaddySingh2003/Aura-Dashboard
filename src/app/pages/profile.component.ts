import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="max-w-4xl mx-auto">
      <div class="flex items-center justify-between mb-8">
        <h1 class="text-3xl font-bold text-gray-900">My Profile</h1>
        <button class="bg-gray-900 text-white px-5 py-2.5 rounded-full font-medium inline-flex items-center gap-2 hover:bg-black transition-colors shadow-soft-sm">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
          Edit Profile
        </button>
      </div>

      <div class="bg-white rounded-3xl shadow-soft-sm border border-gray-50 overflow-hidden relative">
        <!-- Cover Photo -->
        <div class="h-48 bg-gradient-to-r from-primary-dark via-primary to-primary-light"></div>
        
        <!-- Profile Info -->
        <div class="px-8 pb-8 relative">
          <div class="flex justify-between items-start">
            <div class="-mt-16 relative">
              <img src="https://i.pravatar.cc/150?u=4" alt="Jason Ranti" class="w-32 h-32 rounded-full border-4 border-white shadow-soft object-cover bg-white">
              <div class="absolute bottom-2 right-2 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
            <div class="mt-4 flex gap-3">
              <div class="text-center px-4">
                <p class="text-2xl font-bold text-gray-900">12</p>
                <p class="text-xs text-gray-400 font-semibold uppercase tracking-wider">Courses</p>
              </div>
              <div class="text-center px-4 border-l border-gray-100">
                <p class="text-2xl font-bold text-gray-900">4</p>
                <p class="text-xs text-gray-400 font-semibold uppercase tracking-wider">Certificates</p>
              </div>
            </div>
          </div>
          
          <div class="mt-4">
            <h2 class="text-2xl font-bold text-gray-900">Jason Ranti</h2>
            <p class="text-primary font-medium mb-4">Senior UI/UX Designer</p>
            <p class="text-gray-500 max-w-2xl leading-relaxed">
              Passionate designer with over 5 years of experience in creating intuitive and engaging digital experiences. Currently focusing on mastering advanced frontend frameworks to bridge the gap between design and engineering.
            </p>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ProfileComponent {}
