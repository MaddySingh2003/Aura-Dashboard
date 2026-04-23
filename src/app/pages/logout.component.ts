import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="min-h-screen bg-gray-50 flex flex-col justify-center items-center py-12 sm:px-6 lg:px-8">
      <div class="bg-white p-10 rounded-3xl shadow-soft-sm border border-gray-100 text-center max-w-md w-full">
        <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-500">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
        </div>
        <h2 class="text-3xl font-bold text-gray-900 mb-2">Logged Out</h2>
        <p class="text-gray-500 mb-8">You have been successfully logged out of your account. Have a great day!</p>
        
        <a routerLink="/login" class="inline-flex justify-center items-center py-3 px-8 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors">
          Return to Login
        </a>
      </div>
    </div>
  `
})
export class LogoutComponent implements OnInit {
  constructor(private router: Router) {}
  
  ngOnInit() {
    // In a real app, clear tokens here
    // localStorage.removeItem('token');
  }
}
