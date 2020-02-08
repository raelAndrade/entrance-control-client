import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

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

import { routes } from './app-routing.module';

import { AppComponent } from './app.component';
import { MenubarComponent } from './components/menubar/menubar.component';
import { HeaderComponent } from '../app/components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MeetingsAddComponent } from './meetings/meetings-add/meetings-add.component';
import { MeetingsListComponent } from './meetings/meetings-list/meetings-list.component';
import { LocalsAddComponent } from './locals/locals-add/locals-add.component';
import { LocalsListComponent } from './locals/locals-list/locals-list.component';
import { MeetingsAuthenticationComponent } from './meetings/meetings-authentication/meetings-authentication.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/security/login/login.component';
import { AuthGuard } from './components/security/auth.guard';
import { AuthInterceptor } from './components/security/auth.interceptor';
import { SharedService } from './services/shared.service';
import { UserService } from './services/user.service';
import { ScheduleListChurchComponent } from './scheduled/schedule-list-church/schedule-list-church.component';
import { ScheduleAddComponent } from './scheduled/schedule-add/schedule-add.component';
import { ScheduleListMeetingComponent } from './scheduled/schedule-list-meeting/schedule-list-meeting.component';

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    HeaderComponent,
    FooterComponent,
    MeetingsAddComponent,
    MeetingsListComponent,
    LocalsAddComponent,
    LocalsListComponent,
    MeetingsAuthenticationComponent,
    HomeComponent,
    LoginComponent,
    ScheduleListChurchComponent,
    ScheduleAddComponent,
    ScheduleListMeetingComponent
  ],
  imports: [
    routes,
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
    ToggleButtonModule
  ],
  providers: [
    UserService,
    SharedService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
