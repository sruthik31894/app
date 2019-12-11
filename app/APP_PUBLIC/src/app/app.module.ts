import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { HomeListComponent } from './home-list/home-list.component';
import { FrameworkComponent } from './framework/framework.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { APP_BASE_HREF } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CreateComponent } from './create/create.component';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [
    HomeListComponent,
	FrameworkComponent,
	HomepageComponent,
	AboutComponent,
	HeaderComponent,
	CreateComponent,
	DetailPageComponent,
	EditComponent
  ],
  imports: [
    BrowserModule,
	HttpModule,
	RouterModule.forRoot([
	{
		path: '',
		component: HomepageComponent
	},
	{
		path: 'about',
		component: AboutComponent
	},
    {
        path: 'create',
        component: CreateComponent
    },
    {
        path: 'movie/:movieid',
        component: DetailPageComponent
	},
	{
		path: 'edit/:movieid',
        component: EditComponent
	}
	]),
    FormsModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [FrameworkComponent]
})
export class AppModule { }



