import { Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { EmployeeComponent } from './employee-component/employee-component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'employee', component: EmployeeComponent }
];
