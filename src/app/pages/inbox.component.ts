import { Component } from '@angular/core';

@Component({
  selector: 'app-inbox',
  standalone: true,
  template: `
    <div class="max-w-4xl mx-auto">
      <div class="flex items-center justify-between mb-8">
        <h1 class="text-3xl font-bold text-gray-900">Inbox</h1>
        <button class="bg-primary text-white px-5 py-2.5 rounded-full font-medium inline-flex items-center gap-2 hover:bg-primary-dark transition-colors shadow-soft-sm">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
          New Message
        </button>
      </div>

      <div class="bg-white rounded-3xl shadow-soft-sm border border-gray-50 overflow-hidden">
        <!-- Message Item -->
        @for (i of [1, 2, 3, 4, 5]; track i) {
          <div class="p-6 border-b border-gray-50 flex items-start gap-4 hover:bg-gray-50 cursor-pointer transition-colors group">
            <div class="relative">
              <img [src]="'https://i.pravatar.cc/150?u=' + (i + 20)" alt="Sender" class="w-12 h-12 rounded-full border border-gray-100">
              @if (i === 1) {
                <span class="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
              }
            </div>
            <div class="flex-1">
              <div class="flex items-center justify-between mb-1">
                <h3 class="font-bold text-gray-900" [class.text-primary]="i === 1">Design Team Lead</h3>
                <span class="text-xs text-gray-400 font-medium">{{ i === 1 ? '10:42 AM' : 'Yesterday' }}</span>
              </div>
              <p class="text-sm text-gray-900 font-medium mb-1">Feedback on the new dashboard iteration</p>
              <p class="text-sm text-gray-500 line-clamp-1">Hi Jason, I reviewed the latest designs for the admin panel. The gradients look great, but we should discuss the sidebar...</p>
            </div>
          </div>
        }
      </div>
    </div>
  `
})
export class InboxComponent {}
