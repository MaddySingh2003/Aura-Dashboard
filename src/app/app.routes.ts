import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./pages/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'logout',
    loadComponent: () => import('./pages/logout.component').then(m => m.LogoutComponent)
  },
  {
    path: '',
    loadComponent: () => import('./layouts/main-layout.component').then(m => m.MainLayoutComponent),
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { 
        path: 'dashboard', 
        loadComponent: () => import('./pages/dashboard.component').then(m => m.DashboardComponent) 
      },
      { 
        path: 'inbox', 
        loadComponent: () => import('./pages/inbox.component').then(m => m.InboxComponent) 
      },
      { 
        path: 'lesson', 
        loadComponent: () => import('./pages/lesson.component').then(m => m.LessonComponent) 
      },
      { 
        path: 'task', 
        loadComponent: () => import('./pages/task.component').then(m => m.TaskComponent) 
      },
      { 
        path: 'group', 
        loadComponent: () => import('./pages/group.component').then(m => m.GroupComponent) 
      },
      { 
        path: 'profile', 
        loadComponent: () => import('./pages/profile.component').then(m => m.ProfileComponent) 
      },
      { 
        path: 'notification', 
        loadComponent: () => import('./pages/notification.component').then(m => m.NotificationComponent) 
      },
      { 
        path: 'settings', 
        loadComponent: () => import('./pages/settings.component').then(m => m.SettingsComponent) 
      },
      { path: '**', redirectTo: 'dashboard' }
    ]
  }
];
