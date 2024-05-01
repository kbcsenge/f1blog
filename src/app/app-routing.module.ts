import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./whenloggedout/home/home.component";
import {LoginComponent} from "./whenloggedout/login/login.component";
import {RegisterComponent} from "./whenloggedout/register/register.component";
import {LoginhomeComponent} from "./whenloggedin/loginhome/loginhome.component";
import {NewpostComponent} from "./whenloggedin/newpost/newpost.component";
import {MaxVerstappenComponent} from "./drivers/max-verstappen/max-verstappen.component";
import {CharlesLeclercComponent} from "./drivers/charles-leclerc/charles-leclerc.component";
import {CarlosSainzComponent} from "./drivers/carlos-sainz/carlos-sainz.component";
import {LandoNorrisComponent} from "./drivers/lando-norris/lando-norris.component";
import {LewisHamiltonComponent} from "./drivers/lewis-hamilton/lewis-hamilton.component";
import {GeorgeRussellComponent} from "./drivers/george-russell/george-russell.component";
import {SergioPerezComponent} from "./drivers/sergio-perez/sergio-perez.component";
import {OscarPiastriComponent} from "./drivers/oscar-piastri/oscar-piastri.component";
import {DanielRicciardoComponent} from "./drivers/daniel-ricciardo/daniel-ricciardo.component";
import {PierreGaslyComponent} from "./drivers/pierre-gasly/pierre-gasly.component";
import {EstebanOconComponent} from "./drivers/esteban-ocon/esteban-ocon.component";
import {YukiTsunodaComponent} from "./drivers/yuki-tsunoda/yuki-tsunoda.component";
import {KevinMagnussenComponent} from "./drivers/kevin-magnussen/kevin-magnussen.component";
import {NicoHulkenbergComponent} from "./drivers/nico-hulkenberg/nico-hulkenberg.component";
import {LoganSargeantComponent} from "./drivers/logan-sargeant/logan-sargeant.component";
import {FernandoAlonsoComponent} from "./drivers/fernando-alonso/fernando-alonso.component";
import {AlexanderAlbonComponent} from "./drivers/alexander-albon/alexander-albon.component";
import {ValtteriBottasComponent} from "./drivers/valtteri-bottas/valtteri-bottas.component";
import {GuanyuZhouComponent} from "./drivers/guanyu-zhou/guanyu-zhou.component";
import {LanceStrollComponent} from "./drivers/lance-stroll/lance-stroll.component";
import {AuthGuard} from "@angular/fire/auth-guard";

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: LoginhomeComponent},
  { path : 'new' , component: NewpostComponent},
  { path : '' , component: HomeComponent}
];

export const drivers: Routes =[
  { path: 'verstappen', component: MaxVerstappenComponent },
  { path: 'leclerc', component: CharlesLeclercComponent },
  { path: 'sainz', component: CarlosSainzComponent },
  { path : 'norris' , component: LandoNorrisComponent},
  { path : 'hamilton' , component: LewisHamiltonComponent},
  { path : 'russell' , component: GeorgeRussellComponent},
  { path : 'perez' , component: SergioPerezComponent},
  { path : 'piastri' , component: OscarPiastriComponent},
  { path : 'ricciardo' , component: DanielRicciardoComponent},
  { path : 'gasly' , component: PierreGaslyComponent},
  { path : 'ocon' , component: EstebanOconComponent},
  { path : 'tsunoda' , component: YukiTsunodaComponent},
  { path : 'magnussen' , component: KevinMagnussenComponent},
  { path : 'hulkenberg' , component: NicoHulkenbergComponent},
  { path : 'sargeant' , component: LoganSargeantComponent},
  { path : 'alonso' , component: FernandoAlonsoComponent},
  { path : 'albon' , component: AlexanderAlbonComponent},
  { path : 'bottas' , component: ValtteriBottasComponent},
  { path : 'zhou' , component: GuanyuZhouComponent},
  { path : 'stroll' , component: LanceStrollComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule.forRoot(drivers)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
