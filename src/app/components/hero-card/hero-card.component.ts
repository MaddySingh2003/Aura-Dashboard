import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-card',
  standalone: true,
  template: `
    <div class="relative bg-gradient-to-r from-primary-dark via-primary to-primary-light rounded-3xl p-8 md:p-10 text-white overflow-hidden shadow-soft-sm mb-8">
      <!-- Decorative Elements -->
      <div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div class="absolute bottom-0 right-1/4 w-32 h-32 bg-white/20 rounded-full blur-2xl translate-y-1/2"></div>
      <svg class="absolute top-8 right-12 w-24 h-24 text-white/20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 0L53.1979 38.3585L91.3176 41.5564L53.1979 44.7543L50 83.1128L46.8021 44.7543L8.68241 41.5564L46.8021 38.3585L50 0Z" fill="currentColor"/>
      </svg>
      <svg class="absolute bottom-12 right-1/3 w-12 h-12 text-white/20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 0L53.1979 38.3585L91.3176 41.5564L53.1979 44.7543L50 83.1128L46.8021 44.7543L8.68241 41.5564L46.8021 38.3585L50 0Z" fill="currentColor"/>
      </svg>

      <div class="relative z-10 max-w-lg">
        <p class="text-white/80 font-medium text-xs tracking-widest uppercase mb-3">Online Course</p>
        <h1 class="text-3xl md:text-4xl font-bold leading-tight mb-8">
          Sharpen Your Skills with Professional Online Courses
        </h1>
        <button (click)="showAlert('Join Now clicked!')" class="bg-gray-900 text-white px-6 py-3 rounded-full font-medium inline-flex items-center gap-3 hover:bg-black transition-colors shadow-soft">
          Join Now
          <div class="bg-white text-gray-900 rounded-full w-6 h-6 flex items-center justify-center">
            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7"></path></svg>
          </div>
        </button>
      </div>
    </div>
  `
})
export class HeroCardComponent {
  showAlert(message: string) {
    alert(message);
  }
}
