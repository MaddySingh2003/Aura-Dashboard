import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroCardComponent } from '../components/hero-card/hero-card.component';
import { CourseCardComponent } from '../components/course-card/course-card.component';
import { ContinueWatchingComponent } from '../components/continue-watching/continue-watching.component';
import { LessonTableComponent } from '../components/lesson-table/lesson-table.component';
import { StatsCardComponent } from '../components/stats-card/stats-card.component';
import { AnalyticsChartComponent } from '../components/analytics-chart/analytics-chart.component';
import { MentorListComponent } from '../components/mentor-list/mentor-list.component';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    HeroCardComponent,
    CourseCardComponent,
    ContinueWatchingComponent,
    LessonTableComponent,
    StatsCardComponent,
    AnalyticsChartComponent,
    MentorListComponent
  ],
  template: `
    <div class="grid grid-cols-1 xl:grid-cols-3 gap-8">
      <!-- Main Column (Left + Center) -->
      <div class="xl:col-span-2">
        <app-hero-card></app-hero-card>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          @for (course of dashboardService.courses(); track course.id) {
            <app-course-card [course]="course"></app-course-card>
          }
        </div>

        <app-continue-watching [items]="dashboardService.continueWatching()"></app-continue-watching>
        
        <app-lesson-table [lessons]="dashboardService.lessons()"></app-lesson-table>
      </div>

      <!-- Right Sidebar Column -->
      <div class="xl:col-span-1">
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-xl font-bold text-gray-900">Statistic</h2>
          <button (click)="showAlert('Statistic Options')" class="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center text-gray-400 transition-colors">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path></svg>
          </button>
        </div>

        <app-stats-card></app-stats-card>
        <app-analytics-chart [chartData]="dashboardService.chartData()"></app-analytics-chart>
        <app-mentor-list [mentors]="dashboardService.mentors()"></app-mentor-list>
      </div>
    </div>
  `
})
export class DashboardComponent {
  dashboardService = inject(DashboardService);

  showAlert(message: string) {
    alert(message);
  }
}
