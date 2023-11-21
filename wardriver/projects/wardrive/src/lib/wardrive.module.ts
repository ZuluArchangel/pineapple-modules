import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { wardriveComponent } from './components/wardrive.component';
import { RouterModule, Routes } from '@angular/router';

import {MaterialModule} from './modules/material/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';

import {FormsModule} from '@angular/forms';

const routes: Routes = [
    { path: '', component: wardriveComponent }
];

@NgModule({
    declarations: [wardriveComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MaterialModule,
        FlexLayoutModule,
        FormsModule,
    ],
    exports: [wardriveComponent]
})
export class wardriveModule { }
