import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../../models/dashboard.model';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div (click)="showAlert('Opening course: ' + course.title)" class="bg-white rounded-2xl p-5 shadow-soft-sm flex items-center justify-between border border-gray-50 hover:-translate-y-1 transition-transform cursor-pointer">
      <div class="flex items-center gap-4">
        <div [class]="'w-12 h-12 rounded-xl flex items-center justify-center ' + course.iconBg + ' ' + course.iconColor" [innerHTML]="course.svgIcon">
        </div>
        <div>
          <p class="text-xs text-gray-400 font-medium mb-1">{{ course.watched }}/{{ course.total }} watched</p>
          <h3 class="text-gray-900 font-bold text-sm">{{ course.title }}</h3>
        </div>
      </div>
      <button (click)="showAlert('Options clicked for ' + course.title); $event.stopPropagation()" class="text-gray-400 hover:text-gray-900 transition-colors">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path></svg>
      </button>
    </div>
  `
})
export class CourseCardComponent {
  @Input() course!: Course;

  showAlert(message: string) {
    alert(message);
  }
}
