import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';

/* Módulos dos components */
import { MeetingsModule } from './meetings/meetings.module';
import { ScheduledModule } from './scheduled/scheduled.module';
import { LocalsModule } from './locals/locals.module';

/* Componentes PrimeNG */
import { MessagesModule } from 'primeng/components/messages/messages';
import { PanelModule } from 'primeng/components/panel/panel';
import { TableModule } from 'primeng/components/table/table';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { CalendarModule } from 'primeng/components/calendar/calendar';
import { FieldsetModule } from 'primeng/components/fieldset/fieldset';
import { AutoCompleteModule } from 'primeng/components/autocomplete/autocomplete';
import { ButtonModule } from 'primeng/components/button/button';
import { DropdownModule } from 'primeng/components/dropdown/dropdown';
import { CheckboxModule } from 'primeng/components/checkbox/checkbox';
import { SelectButtonModule } from 'primeng/components/selectbutton/selectbutton';
import { ToggleButtonModule } from 'primeng/components/togglebutton/togglebutton';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { MenubarComponent } from './components/menubar/menubar.component';
import { HeaderComponent } from '../app/components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/security/login/login.component';

import { environment } from '../environments/environment';

import { AuthService } from './components/security/auth.service';
import { SharedService } from './services/shared.service';
import { UserService } from './services/user.service';

import { AuthGuard } from './components/guards/auth.guard';
import { ScheduledGuard } from './scheduled/guards/scheduled.guard';
import { MeetingsGuard } from './meetings/guards/meetings.guard';
import { LocalsGuard } from './locals/guards/locals.guard';


@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MessagesModule,
    PanelModule,
    TableModule,
    InputTextModule,
    CalendarModule,
    FieldsetModule,
    AutoCompleteModule,
    ButtonModule,
    DropdownModule,
    CheckboxModule,
    SelectButtonModule,
    ToggleButtonModule,
    MeetingsModule,
    ScheduledModule,
    LocalsModule,
    /*JwtModule.forRoot({
      config: {
        tokenGetter: function tokenGetter() {
          return localStorage.getItem('access_token');
        },
        whitelistedDomains: ['localhost:3000'],
        blacklistedRoutes: [`${environment.apiUrlUsers}/login`]
      }
    }),*/
    AppRoutingModule,
  ],
  providers: [
    AuthGuard,
    AuthService,
    MeetingsGuard,
    ScheduledGuard,
    LocalsGuard,
    UserService,
    SharedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
