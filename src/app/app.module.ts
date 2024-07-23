import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiModule } from './components/ui/ui.module';
import { MainModule } from './components/main/main.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { roleReducer } from './reducers/role.reducer';
import { logReducer } from './reducers/log.reducer';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    UiModule,
    MainModule,
    HttpClientModule,
    StoreModule.forRoot({ role: roleReducer, log: logReducer}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
