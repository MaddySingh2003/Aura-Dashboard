import { Component } from '@angular/core';

@Component({
  selector: 'app-stats-card',
  standalone: true,
  template: `
    <div class="bg-white rounded-3xl p-6 shadow-soft-sm border border-gray-50 flex flex-col items-center mb-6 relative overflow-hidden">
      <div class="absolute top-4 right-4 text-gray-400 cursor-pointer hover:text-gray-900 transition-colors">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path></svg>
      </div>

      <div class="relative mb-4 mt-2">
        <!-- SVG Circle Progress -->
        <svg class="w-32 h-32 transform -rotate-90">
          <circle cx="64" cy="64" r="56" stroke="currentColor" stroke-width="6" fill="transparent" class="text-gray-100" />
          <circle cx="64" cy="64" r="56" stroke="currentColor" stroke-width="6" fill="transparent" stroke-dasharray="351.8" stroke-dashoffset="239.2" stroke-linecap="round" class="text-primary" />
        </svg>
        <div class="absolute inset-0 flex items-center justify-center p-2">
          <img src="https://i.pravatar.cc/150?u=4" alt="Jason" class="w-24 h-24 rounded-full object-cover">
        </div>
        <div class="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-full border-2 border-white">
          32%
        </div>
      </div>

      <h2 class="text-xl font-bold text-gray-900 mb-2 flex items-center gap-1">
        Good Morning Jason <span class="text-xl">🔥</span>
      </h2>
      <p class="text-xs text-gray-400 text-center max-w-[200px] leading-relaxed">
        Continue your learning to achieve your target!
      </p>
    </div>
  `
})
export class StatsCardComponent {
  showAlert(message: string) {
    alert(message);
  }
}
