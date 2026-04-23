import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar.component';
import { NavbarComponent } from './navbar.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, SidebarComponent, NavbarComponent],
  template: `
    <div class="flex h-screen overflow-hidden bg-background">
      <!-- Sidebar -->
      <app-sidebar class="z-20"></app-sidebar>
      
      <!-- Main Content Area -->
      <div class="flex-1 flex flex-col md:ml-64 overflow-hidden relative">
        <app-navbar></app-navbar>
        
        <main class="flex-1 overflow-y-auto overflow-x-hidden p-6 md:p-8">
          <router-outlet></router-outlet>
        </main>
      </div>
    </div>
  `
})
export class MainLayoutComponent {}
