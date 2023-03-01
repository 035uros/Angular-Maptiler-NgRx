import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { mapReducer } from './reducers/counter.reducer';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({mapState: mapReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
