import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ThreadsComponent } from './threads/threads.component';
import { ThreadsRoutingModule } from './threads-routing.module';
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './form/form.component';
import { CatalogComponent } from './catalog/catalog.component';
import { FooterComponent } from './footer/footer.component';
import { PostComponent } from './post/post.component';



@NgModule({
  declarations: [
    NavbarComponent,
    ThreadsComponent,
    HeaderComponent,
    FormComponent,
    CatalogComponent,
    FooterComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    ThreadsRoutingModule
  ]
})
export class ThreadsModule { }
