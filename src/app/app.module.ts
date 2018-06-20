import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FormsModule } from '@angular/forms';
import { MatInputModule,
         MatCardModule,
         MatButtonModule,
         MatToolbarModule,
         MatListModule,
         MatBadgeModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { FarmComponent } from './farming/farm/farm.component';
import { HeaderComponent } from './header/header.component';
import { FarmListComponent } from './farming/farm-list/farm-list.component';


@NgModule({
  declarations: [
    AppComponent,
    FarmComponent,
    HeaderComponent,
    FarmListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatBadgeModule,
    AngularFireModule.initializeApp(environment.firebase, 'bdo-counter'),
    AngularFirestoreModule,
    AngularFireAuthModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
