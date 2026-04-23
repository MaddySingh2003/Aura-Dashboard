import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardService } from '../services/dashboard.service';
import { CourseCardComponent } from '../components/course-card/course-card.component';
import { LessonTableComponent } from '../components/lesson-table/lesson-table.component';

@Component({
  selector: 'app-lesson',
  standalone: true,
  imports: [CommonModule, CourseCardComponent, LessonTableComponent],
  template: `
    <div>
      <div class="flex items-center justify-between mb-8">
        <h1 class="text-3xl font-bold text-gray-900">All Lessons</h1>
        <div class="flex gap-2">
          <button class="bg-white border border-gray-200 text-gray-600 px-4 py-2 rounded-full font-medium text-sm hover:bg-gray-50 transition-colors shadow-sm">
            Filter
          </button>
        </div>
      </div>

      <h2 class="text-lg font-bold text-gray-900 mb-4">In Progress</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        @for (course of dashboardService.courses(); track course.id) {
          <app-course-card [course]="course"></app-course-card>
        }
      </div>

      <app-lesson-table [lessons]="dashboardService.lessons()"></app-lesson-table>
    </div>
  `
})
export class LessonComponent {
  dashboardService = inject(DashboardService);
}
