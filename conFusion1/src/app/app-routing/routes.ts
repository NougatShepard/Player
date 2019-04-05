import { Routes } from '@angular/router';

import { AddComponent } from '../add/add.component';
import { PlayerdetailComponent } from '../playerdetail/playerdetail.component';
import { AlterComponent } from '../alter/alter.component';
import { DeleteComponent } from '../delete/delete.component';
import { SearchComponent } from '../search/search.component';
import { ResultComponent } from '../result/result.component';

export const routes: Routes = [
  { path: 'add',  component: AddComponent },
  { path: 'alter',     component: AlterComponent },
//   { path: '', redirectTo: '/home', pathMatch: 'full' }
  { path: 'delete',     component: DeleteComponent },
  { path: 'search',     component: SearchComponent },
  {path: 'playerdetail/:number', component: PlayerdetailComponent},
  { path: 'result',     component: ResultComponent },

];