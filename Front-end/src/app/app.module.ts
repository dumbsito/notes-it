import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { LoginComponent } from './pages/login/login.component';

import { FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http"
import { CreateComponent } from './components/create/create.component';
import { NotesComponent } from './pages/notes/notes.component';
import { TrashComponent } from './pages/trash/trash.component';
import { FavouriteComponent } from './pages/favourite/favourite.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CardComponent } from './components/card/card.component';
import { RegisterComponent } from './pages/register/register.component';
import { AccountComponent } from './pages/account/account.component';
import { FriendsComponent } from './pages/friends/friends.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateComponent,
    NotesComponent,
    TrashComponent,
    FavouriteComponent,
    DashboardComponent,
    CardComponent,
    RegisterComponent,
    AccountComponent,
    FriendsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
