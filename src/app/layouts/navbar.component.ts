import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  template: `
    <header class="flex items-center justify-between py-6 px-8 bg-background sticky top-0 z-10">
      <!-- Search Bar -->
      <div class="relative w-full max-w-md">
        <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input 
          type="text" 
          placeholder="Search your course...." 
          class="block w-full pl-11 pr-4 py-3 border-none rounded-full bg-white shadow-sm focus:ring-2 focus:ring-primary focus:outline-none text-sm placeholder-gray-400 transition-shadow"
        >
      </div>

      <!-- Right Actions -->
      <div class="flex items-center gap-6">
        <div class="flex items-center gap-4">
          <a routerLink="/inbox" class="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-500 hover:text-gray-900 shadow-sm transition-colors relative cursor-pointer">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
          </a>
          <a routerLink="/notification" class="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-500 hover:text-gray-900 shadow-sm transition-colors relative cursor-pointer">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
            <span class="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
          </a>
        </div>
        
        <a routerLink="/profile" class="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
          <img src="https://i.pravatar.cc/150?u=4" alt="Jason Ranti" class="w-10 h-10 rounded-full border border-gray-100">
          <span class="text-sm font-semibold text-gray-900 hidden sm:block">Jason Ranti</span>
        </a>
      </div>
    </header>
  `
})
export class NavbarComponent {}
