import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-group',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <div class="flex items-center justify-between mb-8">
        <h1 class="text-3xl font-bold text-gray-900">Study Groups</h1>
        <button class="bg-gray-100 text-gray-900 px-5 py-2.5 rounded-full font-medium inline-flex items-center gap-2 hover:bg-gray-200 transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          Discover
        </button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        @for (group of [
          { name: 'Frontend Masters', members: 124, img: 'bg-blue-500' },
          { name: 'UI/UX Enthusiasts', members: 89, img: 'bg-indigo-500' },
          { name: 'Brand Strategy', members: 42, img: 'bg-pink-500' }
        ]; track group.name) {
          <div class="bg-white rounded-3xl p-6 shadow-soft-sm border border-gray-50 hover:-translate-y-1 hover:shadow-soft transition-all cursor-pointer">
            <div class="h-24 rounded-2xl mb-4 relative overflow-hidden" [ngClass]="group.img">
               <div class="absolute inset-0 bg-black/20"></div>
            </div>
            <h3 class="font-bold text-gray-900 text-lg mb-1">{{ group.name }}</h3>
            <p class="text-sm text-gray-400 mb-6">{{ group.members }} Members</p>
            
            <div class="flex items-center justify-between">
              <div class="flex -space-x-3">
                <img src="https://i.pravatar.cc/150?u=30" class="w-8 h-8 rounded-full border-2 border-white relative z-30">
                <img src="https://i.pravatar.cc/150?u=31" class="w-8 h-8 rounded-full border-2 border-white relative z-20">
                <img src="https://i.pravatar.cc/150?u=32" class="w-8 h-8 rounded-full border-2 border-white relative z-10">
                <div class="w-8 h-8 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-[10px] font-bold text-gray-500 relative z-0">
                  +{{ group.members - 3 }}
                </div>
              </div>
              <button class="text-sm font-semibold text-primary hover:underline">Join Group</button>
            </div>
          </div>
        }
      </div>
    </div>
  `
})
export class GroupComponent {}
