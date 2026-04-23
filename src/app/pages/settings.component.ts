import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  standalone: true,
  template: `
    <div class="max-w-4xl mx-auto">
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900">Settings</h1>
        <p class="text-gray-500 mt-2">Manage your account settings and preferences.</p>
      </div>

      <div class="bg-white rounded-3xl shadow-soft-sm border border-gray-50 overflow-hidden">
        <div class="flex border-b border-gray-100">
          <button class="px-6 py-4 text-primary font-semibold border-b-2 border-primary">General</button>
          <button class="px-6 py-4 text-gray-400 hover:text-gray-900 font-medium transition-colors">Security</button>
          <button class="px-6 py-4 text-gray-400 hover:text-gray-900 font-medium transition-colors">Billing</button>
        </div>

        <div class="p-8">
          <h2 class="text-lg font-bold text-gray-900 mb-6">Personal Information</h2>
          
          <form class="space-y-6 max-w-2xl">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-semibold text-gray-900 mb-2">First Name</label>
                <input type="text" value="Jason" class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition-shadow bg-gray-50 text-gray-900">
              </div>
              <div>
                <label class="block text-sm font-semibold text-gray-900 mb-2">Last Name</label>
                <input type="text" value="Ranti" class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition-shadow bg-gray-50 text-gray-900">
              </div>
            </div>
            
            <div>
              <label class="block text-sm font-semibold text-gray-900 mb-2">Email Address</label>
              <input type="email" value="jason.ranti@example.com" class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition-shadow bg-gray-50 text-gray-900">
            </div>

            <div class="pt-4 flex justify-end">
               <button type="button" class="bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary-dark transition-colors shadow-soft-sm">
                 Save Changes
               </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `
})
export class SettingsComponent {}
