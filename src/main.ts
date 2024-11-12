import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { appRoutingProviders } from './app/app.routes';
import { HomepageComponent } from './app/homepage/homepage.component';

bootstrapApplication(AppComponent, {
  providers: [
    appRoutingProviders // Provide the routing configuration
  ]
}).catch((err) => console.error(err));
