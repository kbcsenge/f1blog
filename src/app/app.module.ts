import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HomeComponent } from './whenloggedout/home/home.component';
import { LoginComponent } from './whenloggedout/login/login.component';
import { RegisterComponent } from './whenloggedout/register/register.component';
import { LoginhomeComponent } from './whenloggedin/loginhome/loginhome.component';
import { NewpostComponent } from './whenloggedin/newpost/newpost.component';
import { SeeothersComponent } from './whenloggedin/seeothers/seeothers.component';
import {RouterModule} from "@angular/router";
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatInput} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AngularFireModule} from "@angular/fire/compat";
import {provideHttpClient} from "@angular/common/http";
import {firebaseConfig} from "./env/environment";
import {MatOption, MatSelect} from "@angular/material/select";
import { LoggedinmenuComponent } from './loggedinmenu/loggedinmenu.component';
import { LoggedoutmenuComponent } from './loggedoutmenu/loggedoutmenu.component';
import { EditblogpostComponent } from './whenloggedin/editblogpost/editblogpost.component';
import {CustomDateFormatPipe} from "./pipe/customdateformat.pipe";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    LoginhomeComponent,
    NewpostComponent,
    SeeothersComponent,
    LoggedinmenuComponent,
    LoggedoutmenuComponent,
    EditblogpostComponent,
    CustomDateFormatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    RouterModule,
    MatFormField,
    MatFormFieldModule,
    MatIcon,
    MatInput,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    MatSelect,
    MatOption
  ],
  providers: [
    provideAnimationsAsync(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
