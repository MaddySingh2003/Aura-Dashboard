import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartData } from '../../models/dashboard.model';

@Component({
  selector: 'app-analytics-chart',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-gray-50/50 rounded-2xl p-6 border border-gray-100 mb-6">
      <div class="flex items-end justify-between h-32 mb-4 relative gap-4">
        <!-- Grid lines -->
        <div class="absolute inset-0 flex flex-col justify-between pointer-events-none">
          <div class="w-full border-t border-dashed border-gray-200"></div>
          <div class="w-full border-t border-dashed border-gray-200"></div>
          <div class="w-full border-t border-dashed border-gray-200"></div>
          <div class="w-full border-t border-dashed border-gray-200"></div>
        </div>

        <!-- Bars -->
        @for (data of chartData; track data.label; let i = $index) {
          <div class="relative flex-1 flex items-end justify-center z-10 h-full group">
             <!-- Tooltip (simplified) -->
             <div class="absolute -top-8 bg-gray-900 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
               {{ data.value }}%
             </div>
             <!-- Simulated complex bars from image -->
             <div class="flex gap-1.5 items-end h-full">
                <!-- If it's the middle bar, make it look lower. Just hardcoding a nice shape to match the image -->
                <div [ngClass]="{
                  'h-[40%] bg-primary/30': i === 0,
                  'h-[30%] bg-primary/30': i === 1,
                  'h-[80%] bg-primary': i === 2
                }" class="w-8 rounded-t-md hover:bg-primary transition-colors cursor-pointer"></div>
             </div>
          </div>
        }
      </div>
      <div class="flex justify-between px-2">
        <span class="text-[10px] font-semibold text-gray-400">1-10 Aug</span>
        <span class="text-[10px] font-semibold text-gray-400">11-20 Aug</span>
        <span class="text-[10px] font-semibold text-gray-400">21-30 Aug</span>
      </div>
    </div>
  `
})
export class AnalyticsChartComponent {
  @Input() chartData: ChartData[] = [];
}
