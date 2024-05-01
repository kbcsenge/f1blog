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
import { MaxVerstappenComponent } from './drivers/max-verstappen/max-verstappen.component';
import { CharlesLeclercComponent } from './drivers/charles-leclerc/charles-leclerc.component';
import { CarlosSainzComponent } from './drivers/carlos-sainz/carlos-sainz.component';
import { LandoNorrisComponent } from './drivers/lando-norris/lando-norris.component';
import { LewisHamiltonComponent } from './drivers/lewis-hamilton/lewis-hamilton.component';
import { GeorgeRussellComponent } from './drivers/george-russell/george-russell.component';
import { SergioPerezComponent } from './drivers/sergio-perez/sergio-perez.component';
import { OscarPiastriComponent } from './drivers/oscar-piastri/oscar-piastri.component';
import { LanceStrollComponent } from './drivers/lance-stroll/lance-stroll.component';
import { FernandoAlonsoComponent } from './drivers/fernando-alonso/fernando-alonso.component';
import { KevinMagnussenComponent } from './drivers/kevin-magnussen/kevin-magnussen.component';
import { NicoHulkenbergComponent } from './drivers/nico-hulkenberg/nico-hulkenberg.component';
import { ValtteriBottasComponent } from './drivers/valtteri-bottas/valtteri-bottas.component';
import { PierreGaslyComponent } from './drivers/pierre-gasly/pierre-gasly.component';
import { EstebanOconComponent } from './drivers/esteban-ocon/esteban-ocon.component';
import { AlexanderAlbonComponent } from './drivers/alexander-albon/alexander-albon.component';
import { LoganSargeantComponent } from './drivers/logan-sargeant/logan-sargeant.component';
import { YukiTsunodaComponent } from './drivers/yuki-tsunoda/yuki-tsunoda.component';
import { DanielRicciardoComponent } from './drivers/daniel-ricciardo/daniel-ricciardo.component';
import { GuanyuZhouComponent } from './drivers/guanyu-zhou/guanyu-zhou.component';
import {DriversComponent} from "./drivers/drivers.component";
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AngularFireModule} from "@angular/fire/compat";
import {provideHttpClient} from "@angular/common/http";
import {firebaseConfig} from "./env/environment";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    LoginhomeComponent,
    NewpostComponent,
    SeeothersComponent,
    MaxVerstappenComponent,
    CharlesLeclercComponent,
    CarlosSainzComponent,
    LandoNorrisComponent,
    LewisHamiltonComponent,
    GeorgeRussellComponent,
    SergioPerezComponent,
    OscarPiastriComponent,
    LanceStrollComponent,
    FernandoAlonsoComponent,
    KevinMagnussenComponent,
    NicoHulkenbergComponent,
    ValtteriBottasComponent,
    PierreGaslyComponent,
    EstebanOconComponent,
    AlexanderAlbonComponent,
    LoganSargeantComponent,
    YukiTsunodaComponent,
    DanielRicciardoComponent,
    GuanyuZhouComponent,
    DriversComponent
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
    provideStorage(() => getStorage())
  ],
  providers: [
    provideAnimationsAsync(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
