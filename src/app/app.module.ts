import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListPetsComponent } from './components/list-pets/list-pets.component';
import { PetDetailsComponent } from './components/pet-details/pet-details.component';
import { AuthButtonComponent } from './components/auth-button/auth-button.component';
import { AuthModule } from '@auth0/auth0-angular';

// Import the HTTP interceptor from the Auth0 Angular SDK
import { AuthHttpInterceptor } from '@auth0/auth0-angular';

@NgModule({
  declarations: [
    AppComponent,
    ListPetsComponent,
    PetDetailsComponent,
    AuthButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule.forRoot({
      // The domain and clientId were configured in the previous chapter
      domain: 'dev-va9l1-67.us.auth0.com',
      clientId: 'zx8sMRHR0zfzepGsuW4nZEpbm6x5EwPD',
    
      // Request this audience at user authentication time
      audience: 'https://test-api-azure',
    
      // Specify configuration for the interceptor              
      httpInterceptor: {
        allowedList: [
          {
            // Match any request that starts 'https://dev-va9l1-67.us.auth0.com/api/v2/' (note the asterisk)
            uri: 'https://localhost:7158/api/*',
            tokenOptions: {
              // The attached token should target this audience
              audience: 'https://test-api-azure',
            }
          },          
        ]
      }
    })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
