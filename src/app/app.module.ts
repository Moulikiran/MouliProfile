import { DataService } from './services/data.service';
import { AdminAreaModule } from './admin-area/admin-area.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AllComponent } from './all/all.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RoutersRoutingModule } from './routers/routers-routing.module';
import { StudiesComponent } from './studies/studies.component';
import { NgxPopper } from 'angular-popper';
import { HttpModule } from '../../node_modules/@angular/http';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { MatProgressSpinner } from '@angular/material';
import { NgCircleProgressModule } from 'ng-circle-progress';



@NgModule({
  declarations: [
    AppComponent,
    StudiesComponent,
    AllComponent,
    AboutMeComponent,
    ActivitiesComponent,
    EducationComponent,
    SkillsComponent,
    ProjectsComponent,
    MatProgressSpinner
  ],
  imports: [
    BrowserModule,
    RoutersRoutingModule,
    NgxPopper,
    NgbModule.forRoot(),
    AdminAreaModule,
    HttpModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
