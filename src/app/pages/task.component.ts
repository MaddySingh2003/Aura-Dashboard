import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <div class="flex items-center justify-between mb-8">
        <h1 class="text-3xl font-bold text-gray-900">My Tasks</h1>
        <button class="bg-gray-900 text-white px-5 py-2.5 rounded-full font-medium inline-flex items-center gap-2 hover:bg-black transition-colors shadow-soft-sm">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
          Add Task
        </button>
      </div>

      <div class="bg-white rounded-3xl shadow-soft-sm border border-gray-50 p-6">
        <div class="flex flex-col gap-4">
          <!-- Task Item -->
          @for (task of [
            { title: 'Finish UI/UX Module 2', tag: 'UI/UX DESIGN', tagClass: 'bg-indigo-100 text-indigo-600', done: false },
            { title: 'Review Frontend concepts', tag: 'FRONT END', tagClass: 'bg-blue-100 text-blue-600', done: true },
            { title: 'Create personal brand guidelines', tag: 'BRANDING', tagClass: 'bg-pink-100 text-pink-600', done: false }
          ]; track task.title) {
            <div class="flex items-center justify-between p-4 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-soft transition-all group">
              <div class="flex items-center gap-4">
                <div class="w-6 h-6 rounded-md border-2 flex items-center justify-center cursor-pointer transition-colors"
                     [class]="task.done ? 'bg-primary border-primary' : 'border-gray-300 hover:border-primary'">
                  @if (task.done) {
                    <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                  }
                </div>
                <div>
                  <h3 class="font-bold text-gray-900" [class.line-through]="task.done" [class.text-gray-400]="task.done">{{ task.title }}</h3>
                </div>
              </div>
              <div class="flex items-center gap-4">
                <span class="inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-wider" [ngClass]="task.tagClass">
                  {{ task.tag }}
                </span>
                <button class="text-gray-400 hover:text-gray-900 opacity-0 group-hover:opacity-100 transition-opacity">
                   <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path></svg>
                </button>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  `
})
export class TaskComponent {}
