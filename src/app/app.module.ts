import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';

/* Módulos dos components */
import { MeetingsModule } from './meeting/meetings.module';
import { ScheduledModule } from './schedule/scheduled.module';
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
import { LoginComponent } from './security/login/login.component';

import { AuthService } from './security/auth.service';
import { SharedService } from './services/shared.service';
import { UserService } from './services/user.service';

import { AuthGuard } from './guards/auth.guard';
import { ScheduledGuard } from './schedule/guards/scheduled.guard';
import { MeetingsGuard } from './meeting/guards/meetings.guard';
import { LocalsGuard } from './locals/guards/locals.guard';
import { InterceptorService } from './security/interceptor.service';


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
    AppRoutingModule,
  ],
  providers: [
    AuthGuard,
    AuthService,
    MeetingsGuard,
    ScheduledGuard,
    LocalsGuard,
    UserService,
    SharedService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
