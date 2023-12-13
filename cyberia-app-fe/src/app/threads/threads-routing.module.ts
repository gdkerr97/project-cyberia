import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThreadsComponent } from './threads/threads.component';

const routes: Routes = [
  {path: 'tech', component: ThreadsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ThreadsRoutingModule { }
