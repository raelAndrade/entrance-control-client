import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeetingsListComponent } from './meetings-list/meetings-list.component';
import { MeetingsAuthenticationComponent } from './meetings-authentication/meetings-authentication.component';
import { MeetingsAddComponent } from './meetings-add/meetings-add.component';
import { MeetingsRoutingModule } from './meetings.routing.module';

@NgModule({
    imports: [
        CommonModule,
        MeetingsRoutingModule
    ],
    exports: [],
    declarations: [
        MeetingsAddComponent,
        MeetingsAuthenticationComponent,
        MeetingsListComponent
    ],
    providers: [],
})
export class MeetingsModule { }
