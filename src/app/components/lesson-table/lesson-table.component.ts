import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lesson } from '../../models/dashboard.model';

@Component({
  selector: 'app-lesson-table',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="mb-8">
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-xl font-bold text-gray-900">Your Lesson</h2>
        <a href="#" class="text-sm font-semibold text-primary hover:underline">See all</a>
      </div>

      <div class="bg-white rounded-2xl shadow-soft-sm border border-gray-50 overflow-hidden">
        <table class="w-full text-left border-collapse">
          <thead>
            <tr class="text-xs font-semibold text-gray-400 uppercase tracking-wider border-b border-gray-100">
              <th class="px-6 py-4 font-medium">Mentor</th>
              <th class="px-6 py-4 font-medium">Type</th>
              <th class="px-6 py-4 font-medium">Desc</th>
              <th class="px-6 py-4 font-medium text-center">Action</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-50">
            @for (lesson of lessons; track lesson.id) {
              <tr class="hover:bg-gray-50 transition-colors group">
                <td class="px-6 py-4">
                  <div class="flex items-center gap-3">
                    <img [src]="lesson.mentorAvatar" alt="Mentor" class="w-10 h-10 rounded-full border border-gray-100">
                    <div>
                      <p class="font-semibold text-gray-900 text-sm">{{ lesson.mentorName }}</p>
                      <p class="text-xs text-gray-400">{{ lesson.date }}</p>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <span class="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider bg-indigo-100 text-indigo-600">
                    <span class="mr-1">⌘</span> {{ lesson.type }}
                  </span>
                </td>
                <td class="px-6 py-4">
                  <p class="text-sm font-medium text-gray-900">{{ lesson.description }}</p>
                </td>
                <td class="px-6 py-4 text-center">
                  <button (click)="showAlert('Started lesson: ' + lesson.description)" class="w-8 h-8 rounded-full border border-gray-200 inline-flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors group-hover:border-primary">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7"></path></svg>
                  </button>
                </td>
              </tr>
            }
          </tbody>
        </table>
      </div>
    </div>
  `
})
export class LessonTableComponent {
  @Input() lessons: Lesson[] = [];

  showAlert(message: string) {
    alert(message);
  }
}
