import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <aside class="w-64 h-screen bg-white hidden md:flex flex-col border-r border-gray-100 px-6 py-8 fixed">
      <!-- Logo -->
      <div class="flex items-center gap-3 mb-12">
        <div class="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center shadow-soft">
          <img src="logo.png" alt="CourWorld Logo" class="w-full h-full object-cover">
        </div>
        <span class="text-xl font-bold text-gray-900">CourWorld</span>
      </div>

      <!-- Overview Menu -->
      <div class="mb-8">
        <p class="text-xs font-semibold text-gray-400 mb-4 tracking-wider uppercase">Overview</p>
        <nav class="space-y-2 flex flex-col">
          <a routerLink="/dashboard" routerLinkActive="bg-gray-50 text-gray-900 font-semibold active-link" class="flex items-center gap-3 px-3 py-2 rounded-xl text-gray-500 hover:text-gray-900 font-medium transition-colors relative group">
            <div class="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-primary rounded-r-md opacity-0 transition-opacity group-[.active-link]:opacity-100"></div>
            <svg class="w-5 h-5 group-[.active-link]:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
            Dashboard
          </a>
          <a routerLink="/inbox" routerLinkActive="bg-gray-50 text-gray-900 font-semibold active-link" class="flex items-center gap-3 px-3 py-2 rounded-xl text-gray-500 hover:text-gray-900 font-medium transition-colors relative group">
            <div class="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-primary rounded-r-md opacity-0 transition-opacity group-[.active-link]:opacity-100"></div>
            <svg class="w-5 h-5 group-[.active-link]:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path></svg>
            Inbox
          </a>
          <a routerLink="/lesson" routerLinkActive="bg-gray-50 text-gray-900 font-semibold active-link" class="flex items-center gap-3 px-3 py-2 rounded-xl text-gray-500 hover:text-gray-900 font-medium transition-colors relative group">
            <div class="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-primary rounded-r-md opacity-0 transition-opacity group-[.active-link]:opacity-100"></div>
            <svg class="w-5 h-5 group-[.active-link]:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
            Lesson
          </a>
          <a routerLink="/task" routerLinkActive="bg-gray-50 text-gray-900 font-semibold active-link" class="flex items-center gap-3 px-3 py-2 rounded-xl text-gray-500 hover:text-gray-900 font-medium transition-colors relative group">
            <div class="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-primary rounded-r-md opacity-0 transition-opacity group-[.active-link]:opacity-100"></div>
            <svg class="w-5 h-5 group-[.active-link]:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path></svg>
            Task
          </a>
          <a routerLink="/group" routerLinkActive="bg-gray-50 text-gray-900 font-semibold active-link" class="flex items-center gap-3 px-3 py-2 rounded-xl text-gray-500 hover:text-gray-900 font-medium transition-colors relative group">
            <div class="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-primary rounded-r-md opacity-0 transition-opacity group-[.active-link]:opacity-100"></div>
            <svg class="w-5 h-5 group-[.active-link]:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
            Group
          </a>
        </nav>
      </div>

      <!-- Friends Menu -->
      <div class="mb-8 flex-1">
        <p class="text-xs font-semibold text-gray-400 mb-4 tracking-wider uppercase">Friends</p>
        <div class="space-y-3">
          <div class="flex items-center gap-3 px-3 cursor-pointer group">
            <img src="https://i.pravatar.cc/150?u=11" alt="Friend" class="w-8 h-8 rounded-full border border-gray-100 group-hover:scale-110 transition-transform">
            <div>
              <p class="text-sm font-semibold text-gray-900">Bagas Mahpie</p>
              <p class="text-xs text-gray-400">Friend</p>
            </div>
          </div>
          <div class="flex items-center gap-3 px-3 cursor-pointer group">
            <img src="https://i.pravatar.cc/150?u=12" alt="Friend" class="w-8 h-8 rounded-full border border-gray-100 group-hover:scale-110 transition-transform">
            <div>
              <p class="text-sm font-semibold text-gray-900">Sir Dandy</p>
              <p class="text-xs text-gray-400">Old Friend</p>
            </div>
          </div>
          <div class="flex items-center gap-3 px-3 cursor-pointer group">
            <img src="https://i.pravatar.cc/150?u=13" alt="Friend" class="w-8 h-8 rounded-full border border-gray-100 group-hover:scale-110 transition-transform">
            <div>
              <p class="text-sm font-semibold text-gray-900">Jhon Tosan</p>
              <p class="text-xs text-gray-400">Friend</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Settings Menu -->
      <div class="mt-auto">
        <p class="text-xs font-semibold text-gray-400 mb-4 tracking-wider uppercase">Settings</p>
        <nav class="space-y-2">
          <a routerLink="/settings" routerLinkActive="bg-gray-50 text-gray-900 font-semibold active-link" class="flex items-center gap-3 px-3 py-2 text-gray-500 hover:text-gray-900 font-medium transition-colors rounded-xl relative group">
            <div class="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-primary rounded-r-md opacity-0 transition-opacity group-[.active-link]:opacity-100"></div>
            <svg class="w-5 h-5 group-[.active-link]:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            Setting
          </a>
          <a routerLink="/logout" class="flex items-center gap-3 px-3 py-2 text-red-500 hover:text-red-600 font-medium transition-colors rounded-xl">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
            Logout
          </a>
        </nav>
      </div>
    </aside>
  `
})
export class SidebarComponent {
  showAlert(message: string) {
    alert(message);
  }
}
