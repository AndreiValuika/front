import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import{HttpClientModule} from '@angular/common/http';
import { EmployeesTableComponent } from './components/employees-table/employees-table.component'
@NgModule({
    imports:[
         BrowserModule,
         FormsModule,
         HttpClientModule,
    ],
    declarations: [ AppComponent, EmployeesTableComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }