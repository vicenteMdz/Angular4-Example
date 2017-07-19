import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { ListPostRoutingModule } from './list-post/list-post-routing.module';
import { ListPostModule } from './list-post/list-post.module';
import { EmitterService } from './services/emitter.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadercomponentComponent } from './headercomponent/headercomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadercomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    ListPostModule,
    ListPostRoutingModule
  ],
  providers: [
    EmitterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
