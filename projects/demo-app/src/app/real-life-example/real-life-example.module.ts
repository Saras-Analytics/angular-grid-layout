import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KtdRealLifeExampleComponent } from './real-life-example.component';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { KtdGridModule } from '@saras-analytics/angular-grid-layout';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { KtdTableSortingComponent } from './table-sorting/table-sorting.component';
import { MatSortModule } from '@angular/material/sort';

const routes: Routes = [
    { path: 'real-life-example', component: KtdRealLifeExampleComponent },
];

@NgModule({
    declarations: [
        KtdRealLifeExampleComponent,
        KtdTableSortingComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MatIconModule,
        KtdGridModule,
        NgxChartsModule,
        MatCardModule,
        MatTableModule,
        MatSortModule
    ]
})
export class KtdRealLifeExampleModule { }
