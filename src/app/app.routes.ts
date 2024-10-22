import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';  // Import the HomeComponent

export const routes: Routes = [
    { path: '', component: HomepageComponent },  // Default route (Home)
    { path: '**', redirectTo: '', pathMatch: 'full' }  // Fallback to Home if no route is found
];

