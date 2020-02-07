import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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

import { AppRoutingModule } from './app-routing.module';

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
    LoginComponent
  ],
  imports: [
    AppRoutingModule,
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
    SelectButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
