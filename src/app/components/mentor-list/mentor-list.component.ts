import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Mentor } from '../../models/dashboard.model';

@Component({
  selector: 'app-mentor-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-white rounded-3xl p-6 shadow-soft-sm border border-gray-50 mb-6">
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-lg font-bold text-gray-900">Your mentor</h2>
        <button class="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-900 hover:bg-gray-50 transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
        </button>
      </div>

      <div class="space-y-4 mb-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-100 before:to-transparent">
        @for (mentor of mentors; track mentor.id) {
          <div class="flex items-center justify-between relative group">
            <div class="flex items-center gap-3">
              <div class="relative">
                <img [src]="mentor.avatar" alt="Mentor" class="w-10 h-10 rounded-full border border-gray-100 z-10 relative bg-white">
                <div class="absolute -bottom-1 -right-1 w-4 h-4 bg-gray-900 text-white rounded-full flex items-center justify-center border-2 border-white z-20">
                  <svg class="w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 4v16m8-8H4"></path></svg>
                </div>
              </div>
              <div>
                <p class="text-sm font-semibold text-gray-900">{{ mentor.name }}</p>
                <p class="text-xs text-gray-400">{{ mentor.role }}</p>
              </div>
            </div>
            <button (click)="showAlert('Followed ' + mentor.name)" class="text-xs font-semibold text-primary flex items-center gap-1 hover:underline">
              <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
              Follow
            </button>
          </div>
          <!-- Divider -->
          <div class="border-b border-dashed border-gray-100 w-full ml-14 group-last:hidden"></div>
        }
      </div>

      <button (click)="showAlert('See All Mentors')" class="w-full py-3 bg-primary/5 text-primary font-bold rounded-2xl hover:bg-primary/10 transition-colors">
        See All
      </button>
    </div>
  `
})
export class MentorListComponent {
  @Input() mentors: Mentor[] = [];

  showAlert(message: string) {
    alert(message);
  }
}
