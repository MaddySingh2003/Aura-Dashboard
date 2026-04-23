import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="max-w-4xl mx-auto">
      <div class="flex items-center justify-between mb-8">
        <h1 class="text-3xl font-bold text-gray-900">Notifications</h1>
        <button class="text-primary font-medium hover:underline transition-colors">
          Mark all as read
        </button>
      </div>

      <div class="bg-white rounded-3xl shadow-soft-sm border border-gray-50 overflow-hidden">
        <!-- Notification Item -->
        @for (i of [1, 2, 3, 4, 5]; track i) {
          <div class="p-6 border-b border-gray-50 flex items-start gap-4 hover:bg-gray-50 cursor-pointer transition-colors group">
            <div class="relative flex-shrink-0">
              <div class="w-12 h-12 rounded-full flex items-center justify-center" 
                   [class.bg-blue-50]="i % 2 === 0" [class.text-blue-500]="i % 2 === 0"
                   [class.bg-green-50]="i % 2 !== 0" [class.text-green-500]="i % 2 !== 0">
                @if (i % 2 === 0) {
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
                } @else {
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                }
              </div>
              @if (i === 1) {
                <span class="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
              }
            </div>
            <div class="flex-1">
              <div class="flex items-center justify-between mb-1">
                <h3 class="font-bold text-gray-900" [class.text-primary]="i === 1">
                  {{ i % 2 === 0 ? 'System Update' : 'Course Completed' }}
                </h3>
                <span class="text-xs text-gray-400 font-medium">{{ i === 1 ? 'Just now' : i + ' hours ago' }}</span>
              </div>
              <p class="text-sm text-gray-500">
                {{ i % 2 === 0 ? 'We have updated our terms of service and privacy policy. Please review them.' : 'Congratulations! You have successfully completed your course module.' }}
              </p>
            </div>
          </div>
        }
      </div>
    </div>
  `
})
export class NotificationComponent {}
