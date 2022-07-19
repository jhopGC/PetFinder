import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';
import { ListPetsComponent } from './components/list-pets/list-pets.component';
import { PetDetailsComponent } from './components/pet-details/pet-details.component';

const routes: Routes = [
  { path: "listPets", component: ListPetsComponent },
  { path: "petDetails/:id", component: PetDetailsComponent, canActivate: [AuthGuard]},
  { path:'', redirectTo:'listPets', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
