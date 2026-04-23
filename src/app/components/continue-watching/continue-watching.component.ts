import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoItem } from '../../models/dashboard.model';

@Component({
  selector: 'app-continue-watching',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="mb-8">
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-xl font-bold text-gray-900">Continue Watching</h2>
        <div class="flex gap-2">
          <button (click)="showAlert('Previous clicked')" class="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-900 hover:bg-gray-50 transition-colors">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
          </button>
          <button (click)="showAlert('Next clicked')" class="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white shadow-sm hover:bg-primary-dark transition-colors">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
          </button>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        @for (item of items; track item.id) {
          <div (click)="showAlert('Watch ' + item.title)" class="bg-white rounded-2xl overflow-hidden shadow-soft-sm border border-gray-50 hover:-translate-y-1 hover:shadow-soft transition-all cursor-pointer group">
            <div class="relative h-40 overflow-hidden">
              <img [src]="item.thumbnailUrl" [alt]="item.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
              <button (click)="showAlert('Added to favorites'); $event.stopPropagation()" class="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-red-500 transition-colors">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
              </button>
            </div>
            <div class="p-4">
              <div class="inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-wider mb-2"
                   [ngClass]="{
                     'bg-blue-100 text-blue-600': item.category === 'FRONT END',
                     'bg-indigo-100 text-indigo-600': item.category === 'UI/UX DESIGN',
                     'bg-pink-100 text-pink-600': item.category === 'BRANDING'
                   }">
                <span class="mr-1">⌘</span> {{ item.category }}
              </div>
              <h3 class="font-bold text-gray-900 text-sm mb-4 line-clamp-2">{{ item.title }}</h3>
              
              <div class="flex items-center gap-2 border-t border-gray-100 pt-4 mt-auto">
                <img [src]="'https://i.pravatar.cc/150?u=' + item.id + '0'" alt="Mentor" class="w-6 h-6 rounded-full">
                <div class="flex flex-col">
                  <span class="text-xs font-semibold text-gray-900">{{ item.mentorName }}</span>
                  <span class="text-[10px] text-gray-400">Mentor</span>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  `
})
export class ContinueWatchingComponent {
  @Input() items: VideoItem[] = [];

  showAlert(message: string) {
    alert(message);
  }
}
