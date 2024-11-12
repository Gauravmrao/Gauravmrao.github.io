import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';  // Import the HomeComponent
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
    { path: '', component: HomepageComponent },  // Default route (Home)
    { path: 'about', component: AboutComponent }, // Route for the About page
    { path: '**', redirectTo: '', pathMatch: 'full' }  // Fallback to Home if no route is found
];

export const appRoutingProviders = [provideRouter(routes)];