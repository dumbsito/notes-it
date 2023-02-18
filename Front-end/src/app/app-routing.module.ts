import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './pages/account/account.component';
import { CreateComponent } from './components/create/create.component';
import { FavouriteComponent } from './pages/favourite/favourite.component';
import { LoginComponent } from './pages/login/login.component';
import { NotesComponent } from './pages/notes/notes.component';
import { RegisterComponent } from './pages/register/register.component';
import { TrashComponent } from './pages/trash/trash.component';

const routes: Routes = [
  {path:"favourite",component:FavouriteComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"notes",component:NotesComponent},
  {path:"trash",component:TrashComponent},
  {path:"create",component:CreateComponent},
  {path:"account",component:AccountComponent},
  {path:"",component:CreateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
