(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{tYC2:function(n,l,o){"use strict";o.r(l);var e=o("8Y7J");class t{}var u=o("pMnS"),r=o("iInd");class s{constructor(n,l,o){this.activatedRoute=n,this.scriptService=l,this.highlightService=o,this.codeRoutes="import { NgModule } from '@angular/core';\nimport { RouterModule, Routes } from '@angular/router';\n\nimport { NewProjectComponent } from './components/new-project/new-project.component';\nimport { LibrariesComponent } from './components/libraries/libraries.component';\nimport { UserComponent } from './components/user/user.component';\n\nconst routes: Routes = [\n    { path: 'new-angular-project', component: NewProjectComponent },\n    { path: 'libraries', component: LibrariesComponent },\n    {\n        path: 'user/:id',\n        component: UserComponent,\n        children: [\n          { path: 'newUser', component: NewUserComponent },\n          { path: 'editUser', component: EditUserComponent },\n          { path: 'detailUser', component: DetailUserComponent },\n          { path: '**', redirectTo: 'newUser', pathMatch: 'full' },\n        ]\n    },\n    { path: '**', component: NewProjectComponent },\n    { path: '', redirectTo: 'new-angular-project', pathMatch: 'full' },\n];\n\n@NgModule({\n    imports: [RouterModule.forRoot(routes)],\n    exports: [RouterModule]\n})\nexport class AppRoutingModule {}",this.codeRoutes2="import { NgModule } from '@angular/core';\nimport { RouterModule, Routes } from '@angular/router';\n\nimport { NewProjectComponent } from './components/new-project/new-project.component';\nimport { LibrariesComponent } from './components/libraries/libraries.component';\nimport { UserComponent } from './components/user/user.component';\n\nimport { childRoutes } from './components/user/user.routing';\n\nconst routes: Routes = [\n    { path: 'new-angular-project', component: NewProjectComponent },\n    { path: 'libraries', component: LibrariesComponent },\n    {\n        path: 'user/:id',\n        component: UserComponent,\n        children: childRoutes\n    },\n    { path: '**', component: NewProjectComponent },\n    { path: '', redirectTo: 'new-angular-project', pathMatch: 'full' },\n];\n\n@NgModule({\n    imports: [RouterModule.forRoot(routes)],\n    exports: [RouterModule]\n})\nexport class AppRoutingModule {}",this.codeRoutes3="import { NgModule } from '@angular/core';\nimport { Routes } from '@angular/router';\n\nimport { NewUserComponent } from './new-user.component';\nimport { EditUserComponent } from './edit-user.component';\nimport { DetailUserComponent } from './detail-user.component';\n\nexport const childRoutes: Routes = [\n    { path: 'newUser', component: NewUserComponent },\n    { path: 'editUser', component: EditUserComponent },\n    { path: 'detailUser', component: DetailUserComponent },\n    { path: '**', redirectTo: 'newUser', pathMatch: 'full' },\n];",this.codeParams="import { Component, OnInit } from '@angular/core';\nimport { ActivatedRoute } from '@angular/router';\n\n@Component({\n  selector: 'app-new-user',\n  templateUrl: './new-user.component.html',\n  styles: []\n})\nexport class NewUserComponent implements OnInit {\n\n  constructor(private activatedRoute: ActivatedRoute) {\n    this.activatedRoute.parent.params.subscribe((params) => {\n      this.id = params.id;\n    });\n  }\n\n  ngOnInit() {\n  }\n\n}",this.codeRoutes4="import { NgModule } from '@angular/core';\nimport { RouterModule, Routes } from '@angular/router';\n\nimport { PagesComponent } from './pages.component';\nimport { NewProjectComponent } from './new-project/new-project.component';\nimport { LibrariesComponent } from './libraries/libraries.component';\nimport { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';\nimport { RoutesComponent } from './routes/routes.component';\nimport { ServicesComponent } from './services/services.component';\nimport { InputOutputComponent } from './input-output/input-output.component';\nimport { PipesComponent } from './pipes/pipes.component';\nimport { HttpRequestComponent } from './http-request/http-request.component';\nimport { MiscellaneousComponent } from './miscellaneous/miscellaneous.component';\nimport { UserComponent } from './user/user.component';\nimport { childRoutes } from './user/user.routing';\nimport { GuardsComponent } from './guards/guards.component';\nimport { AuthGuard } from '../guards/auth.guard';\n\nconst routes: Routes = [\n    {\n        path: '',\n        component: PagesComponent,\n        canActivate: [AuthGuard],\n        children: [\n            { path: 'new-angular-project', component: NewProjectComponent },\n            { path: 'libraries', component: LibrariesComponent },\n            { path: 'structural-directives', component: StructuralDirectivesComponent },\n            { path: 'routes', component: RoutesComponent },\n            { path: 'services', component: ServicesComponent },\n            { path: 'input-output', component: InputOutputComponent },\n            { path: 'pipes', component: PipesComponent },\n            { path: 'http-request', component: HttpRequestComponent },\n            { path: 'miscellaneous', component: MiscellaneousComponent },\n            {\n                path: 'user/:id',\n                component: UserComponent,\n                children: childRoutes\n            },\n            { path: 'guards', component: GuardsComponent },\n            { path: '', redirectTo: 'new-angular-project', pathMatch: 'full' },\n        ]\n    },\n];\n\n@NgModule({\n    imports: [RouterModule.forChild(routes)],\n    exports: [RouterModule]\n})\nexport class PagesRoutingModule {}",this.codeRoutes5="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { FormsModule } from '@angular/forms';\nimport { RouterModule } from '@angular/router';\nimport { HttpClientModule } from '@angular/common/http';\n\nimport { PagesComponent } from './pages.component';\n\n/* modules */\nimport { SharedModule } from './shared/shared.module';\n\nimport { NewProjectComponent } from './new-project/new-project.component';\nimport { LibrariesComponent } from './libraries/libraries.component';\nimport { MiscellaneousComponent } from './miscellaneous/miscellaneous.component';\nimport { RoutesComponent } from './routes/routes.component';\nimport { ServicesComponent } from './services/services.component';\nimport { InputOutputComponent } from './input-output/input-output.component';\nimport { PipesComponent } from './pipes/pipes.component';\nimport { HttpRequestComponent } from './http-request/http-request.component';\nimport { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';\nimport { UserComponent } from './user/user.component';\nimport { NewUserComponent } from './user/new-user.component';\nimport { EditUserComponent } from './user/edit-user.component';\nimport { DetailUserComponent } from './user/detail-user.component';\nimport { GuardsComponent } from './guards/guards.component';\n\n/* pipes */\nimport { CapitalizadoPipe } from '../pipes/capitalizado.pipe';\nimport { SafeDomPipe } from '../pipes/safe-dom.pipe';\n\n/* directives */\nimport { ResaltadoDirective } from '../directives/resaltado.directive';\n\n/* routing */\nimport { PagesRoutingModule } from './pages.routing';\n\n@NgModule({\n    declarations: [\n        PagesComponent,\n        NewProjectComponent,\n        LibrariesComponent,\n        MiscellaneousComponent,\n        RoutesComponent,\n        ServicesComponent,\n        InputOutputComponent,\n        PipesComponent,\n        HttpRequestComponent,\n        StructuralDirectivesComponent,\n        CapitalizadoPipe,\n        SafeDomPipe,\n        ResaltadoDirective,\n        UserComponent,\n        NewUserComponent,\n        EditUserComponent,\n        DetailUserComponent,\n        GuardsComponent,\n    ],\n    imports: [CommonModule, SharedModule, FormsModule, RouterModule, HttpClientModule, PagesRoutingModule],\n    exports: [\n        NewProjectComponent,\n        LibrariesComponent,\n        MiscellaneousComponent,\n        RoutesComponent,\n        ServicesComponent,\n        InputOutputComponent,\n        PipesComponent,\n        HttpRequestComponent,\n        StructuralDirectivesComponent,\n        CapitalizadoPipe,\n        SafeDomPipe,\n        ResaltadoDirective,\n        UserComponent,\n        NewUserComponent,\n        EditUserComponent,\n        DetailUserComponent,\n        GuardsComponent,\n    ],\n    providers: [],\n})\nexport class PagesModule { }",this.codeRoutes6="import { BrowserModule } from '@angular/platform-browser';\nimport { NgModule, LOCALE_ID } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { HttpClientModule } from '@angular/common/http';\n\n/* modules */\nimport { PagesModule } from './components/pages.module';\n\n/* routing */\nimport { AppRoutingModule } from './app.routing';\n\n/* services */\nimport { ScriptService } from './services/script.service';\nimport { HighlightService } from './services/highlight.service';\n\nimport { AppComponent } from './app.component';\nimport { LoginComponent } from './components/login/login.component';\nimport { registerLocaleData } from '@angular/common';\nimport  localeEs from '@angular/common/locales/es';\nimport { RegisterComponent } from './components/login/register.component';\nimport { FormsModule } from '@angular/forms';\nregisterLocaleData(localeEs);\n\n@NgModule({\n  declarations: [\n    AppComponent,\n    LoginComponent,\n    RegisterComponent,\n  ],\n  imports: [\n    BrowserModule,\n    PagesModule,\n    AppRoutingModule,\n    CommonModule,\n    HttpClientModule,\n    FormsModule\n  ],\n  providers: [\n    HighlightService,\n    ScriptService,\n    { provide: LOCALE_ID, useValue: 'es'}\n  ],\n  bootstrap: [AppComponent]\n})\nexport class AppModule { }",this.highlighted=!1,l.load("prism").then(n=>{}),this.activatedRoute.params.subscribe(n=>{console.log("ruta padre"),console.log(n)})}ngOnInit(){this.highlightService.highlightAll()}ngAfterViewChecked(){this.highlighted||(this.highlightService.highlightAll(),this.highlighted=!0)}}var p=o("OB/d"),i=o("SrJx"),a=e.mb({encapsulation:2,styles:[],data:{}});function m(n){return e.Jb(0,[(n()(),e.ob(0,0,null,null,1,"header",[],null,null,null,null,null)),(n()(),e.Hb(-1,null,["Rutas hijas"])),(n()(),e.ob(2,0,null,null,23,"div",[["class","row my-3"]],null,null,null,null,null)),(n()(),e.ob(3,0,null,null,22,"div",[["class","col-md-12 tex-center"]],null,null,null,null,null)),(n()(),e.ob(4,0,null,null,21,"div",[["aria-label","Basic example"],["class","btn-group"],["role","group"]],null,null,null,null,null)),(n()(),e.ob(5,0,null,null,6,"button",[["class","btn btn-secondary"],["routerLinkActive","active"],["type","button"]],null,[[null,"click"]],function(n,l,o){var t=!0;return"click"===l&&(t=!1!==e.zb(n,6).onClick()&&t),t},null,null)),e.nb(6,16384,[[1,4]],0,r.l,[r.k,r.a,[8,null],e.B,e.k],{routerLink:[0,"routerLink"]},null),e.Ab(7,1),e.nb(8,1720320,null,2,r.m,[r.k,e.k,e.B,[2,r.l],[2,r.n]],{routerLinkActive:[0,"routerLinkActive"]},null),e.Fb(603979776,1,{links:1}),e.Fb(603979776,2,{linksWithHrefs:1}),(n()(),e.Hb(-1,null,["Nuevo"])),(n()(),e.ob(12,0,null,null,6,"button",[["class","btn btn-secondary"],["routerLinkActive","active"],["type","button"]],null,[[null,"click"]],function(n,l,o){var t=!0;return"click"===l&&(t=!1!==e.zb(n,13).onClick()&&t),t},null,null)),e.nb(13,16384,[[3,4]],0,r.l,[r.k,r.a,[8,null],e.B,e.k],{routerLink:[0,"routerLink"]},null),e.Ab(14,1),e.nb(15,1720320,null,2,r.m,[r.k,e.k,e.B,[2,r.l],[2,r.n]],{routerLinkActive:[0,"routerLinkActive"]},null),e.Fb(603979776,3,{links:1}),e.Fb(603979776,4,{linksWithHrefs:1}),(n()(),e.Hb(-1,null,["Editar"])),(n()(),e.ob(19,0,null,null,6,"button",[["class","btn btn-secondary"],["routerLinkActive","active"],["type","button"]],null,[[null,"click"]],function(n,l,o){var t=!0;return"click"===l&&(t=!1!==e.zb(n,20).onClick()&&t),t},null,null)),e.nb(20,16384,[[5,4]],0,r.l,[r.k,r.a,[8,null],e.B,e.k],{routerLink:[0,"routerLink"]},null),e.Ab(21,1),e.nb(22,1720320,null,2,r.m,[r.k,e.k,e.B,[2,r.l],[2,r.n]],{routerLinkActive:[0,"routerLinkActive"]},null),e.Fb(603979776,5,{links:1}),e.Fb(603979776,6,{linksWithHrefs:1}),(n()(),e.Hb(-1,null,["Detalle"])),(n()(),e.ob(26,0,null,null,2,"div",[["class","my-3"]],null,null,null,null,null)),(n()(),e.ob(27,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),e.nb(28,212992,null,0,r.p,[r.b,e.M,e.j,[8,null],e.h],null,null),(n()(),e.ob(29,0,null,null,1,"header",[],null,null,null,null,null)),(n()(),e.Hb(-1,null,["Recibir par\xe1metros por URL del padre en las rutas hijas"])),(n()(),e.ob(31,0,null,null,8,"ul",[["class","list-group"]],null,null,null,null,null)),(n()(),e.ob(32,0,null,null,1,"li",[["class","list-group-item bg-ligth"]],null,null,null,null,null)),(n()(),e.Hb(-1,null,["Importar ActivatedRoute de @angular/core."])),(n()(),e.ob(34,0,null,null,1,"li",[["class","list-group-item bg-ligth"]],null,null,null,null,null)),(n()(),e.Hb(-1,null,["Declarar las variables y/o constantes que vamos a recibir."])),(n()(),e.ob(36,0,null,null,1,"li",[["class","list-group-item bg-ligth"]],null,null,null,null,null)),(n()(),e.Hb(-1,null,["Inyectar ActivatedRoute en el constructor."])),(n()(),e.ob(38,0,null,null,1,"li",[["class","list-group-item bg-ligth"]],null,null,null,null,null)),(n()(),e.Hb(-1,null,["Suscribirse al observable params del padre en el constructor."])),(n()(),e.ob(40,0,null,null,2,"pre",[["class","line-numbers compodoc-sourcecode my-3"]],null,null,null,null,null)),(n()(),e.ob(41,0,null,null,0,"code",[["class","language-typescript"]],[[8,"innerHTML",1]],null,null,null,null)),(n()(),e.Hb(-1,null,["\n"])),(n()(),e.ob(43,0,null,null,1,"header",[],null,null,null,null,null)),(n()(),e.Hb(-1,null,["Ejemplo rutas hijas"])),(n()(),e.ob(45,0,null,null,2,"pre",[["class","line-numbers compodoc-sourcecode my-3"]],null,null,null,null,null)),(n()(),e.ob(46,0,null,null,0,"code",[["class","language-typescript"]],[[8,"innerHTML",1]],null,null,null,null)),(n()(),e.Hb(-1,null,["\n"])),(n()(),e.ob(48,0,null,null,1,"header",[],null,null,null,null,null)),(n()(),e.Hb(-1,null,["Ejemplo rutas hijas separadas en un archivo (arreglo de rutas)"])),(n()(),e.ob(50,0,null,null,2,"pre",[["class","line-numbers compodoc-sourcecode my-3"]],null,null,null,null,null)),(n()(),e.ob(51,0,null,null,0,"code",[["class","language-typescript"]],[[8,"innerHTML",1]],null,null,null,null)),(n()(),e.Hb(-1,null,["\n"])),(n()(),e.ob(53,0,null,null,2,"pre",[["class","line-numbers compodoc-sourcecode my-3"]],null,null,null,null,null)),(n()(),e.ob(54,0,null,null,0,"code",[["class","language-typescript"]],[[8,"innerHTML",1]],null,null,null,null)),(n()(),e.Hb(-1,null,["\n"])),(n()(),e.ob(56,0,null,null,1,"header",[],null,null,null,null,null)),(n()(),e.Hb(-1,null,["Rutas hijas separadas en un archivo"])),(n()(),e.ob(58,0,null,null,1,"p",[["class","my-3"]],null,null,null,null,null)),(n()(),e.Hb(-1,null,["Las rutas hijas est\xe1n separadas en un archivo y exportadas como una clase: PagesRoutingModule e importadas en un modulo, pages.module.ts que a su vez est\xe1 importado en el app.module.ts."])),(n()(),e.ob(60,0,null,null,1,"h4",[["class","my-3"]],null,null,null,null,null)),(n()(),e.Hb(-1,null,["Archivo: pages.routing.ts"])),(n()(),e.ob(62,0,null,null,2,"pre",[["class","line-numbers compodoc-sourcecode my-3"]],null,null,null,null,null)),(n()(),e.ob(63,0,null,null,0,"code",[["class","language-typescript"]],[[8,"innerHTML",1]],null,null,null,null)),(n()(),e.Hb(-1,null,["\n"])),(n()(),e.ob(65,0,null,null,1,"h4",[["class","my-3"]],null,null,null,null,null)),(n()(),e.Hb(-1,null,["Archivo: pages.module.ts"])),(n()(),e.ob(67,0,null,null,2,"pre",[["class","line-numbers compodoc-sourcecode my-3"]],null,null,null,null,null)),(n()(),e.ob(68,0,null,null,0,"code",[["class","language-typescript"]],[[8,"innerHTML",1]],null,null,null,null)),(n()(),e.Hb(-1,null,["\n"])),(n()(),e.ob(70,0,null,null,1,"h4",[["class","my-3"]],null,null,null,null,null)),(n()(),e.Hb(-1,null,["Archivo: app.module.ts"])),(n()(),e.ob(72,0,null,null,2,"pre",[["class","line-numbers compodoc-sourcecode my-3"]],null,null,null,null,null)),(n()(),e.ob(73,0,null,null,0,"code",[["class","language-typescript"]],[[8,"innerHTML",1]],null,null,null,null)),(n()(),e.Hb(-1,null,["\n"]))],function(n,l){var o=n(l,7,0,"newUser");n(l,6,0,o),n(l,8,0,"active");var e=n(l,14,0,"editUser");n(l,13,0,e),n(l,15,0,"active");var t=n(l,21,0,"detailUser");n(l,20,0,t),n(l,22,0,"active"),n(l,28,0)},function(n,l){var o=l.component;n(l,41,0,o.codeParams),n(l,46,0,o.codeRoutes),n(l,51,0,o.codeRoutes2),n(l,54,0,o.codeRoutes3),n(l,63,0,o.codeRoutes4),n(l,68,0,o.codeRoutes5),n(l,73,0,o.codeRoutes6)})}function c(n){return e.Jb(0,[(n()(),e.ob(0,0,null,null,1,"app-user",[],null,null,null,m,a)),e.nb(1,8503296,null,0,s,[r.a,p.a,i.a],null,null)],function(n,l){n(l,1,0)},null)}var d=e.kb("app-user",s,c,{},{},[]);class b{constructor(n){this.activatedRoute=n,this.activatedRoute.parent.params.subscribe(n=>{this.id=n.id})}ngOnInit(){}}var h=e.mb({encapsulation:2,styles:[],data:{}});function g(n){return e.Jb(0,[(n()(),e.ob(0,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),e.Hb(-1,null,["new-user works!"])),(n()(),e.ob(2,0,null,null,1,"p",[["class","my-3"]],null,null,null,null,null)),(n()(),e.Hb(3,null,["Valor del id (parametro del padre): ",""]))],null,function(n,l){n(l,3,0,l.component.id)})}function C(n){return e.Jb(0,[(n()(),e.ob(0,0,null,null,1,"app-new-user",[],null,null,null,g,h)),e.nb(1,114688,null,0,b,[r.a],null,null)],function(n,l){n(l,1,0)},null)}var f=e.kb("app-new-user",b,C,{},{},[]);class v{constructor(n){this.activatedRoute=n,this.activatedRoute.parent.params.subscribe(n=>{this.id=n.id})}ngOnInit(){}}var R=e.mb({encapsulation:2,styles:[],data:{}});function M(n){return e.Jb(0,[(n()(),e.ob(0,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),e.Hb(-1,null,["edit-user works!"])),(n()(),e.ob(2,0,null,null,1,"p",[["class","my-3"]],null,null,null,null,null)),(n()(),e.Hb(3,null,["Valor del id (parametro del padre): ",""]))],null,function(n,l){n(l,3,0,l.component.id)})}function w(n){return e.Jb(0,[(n()(),e.ob(0,0,null,null,1,"app-edit-user",[],null,null,null,M,R)),e.nb(1,114688,null,0,v,[r.a],null,null)],function(n,l){n(l,1,0)},null)}var k=e.kb("app-edit-user",v,w,{},{},[]);class H{constructor(n){this.activatedRoute=n,this.activatedRoute.parent.params.subscribe(n=>{this.id=n.id})}ngOnInit(){}}var U=e.mb({encapsulation:2,styles:[],data:{}});function y(n){return e.Jb(0,[(n()(),e.ob(0,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),e.Hb(-1,null,["detail-user works!"])),(n()(),e.ob(2,0,null,null,1,"p",[["class","my-3"]],null,null,null,null,null)),(n()(),e.Hb(3,null,["Valor del id (parametro del padre): ",""]))],null,function(n,l){n(l,3,0,l.component.id)})}function L(n){return e.Jb(0,[(n()(),e.ob(0,0,null,null,1,"app-detail-user",[],null,null,null,y,U)),e.nb(1,114688,null,0,H,[r.a],null,null)],function(n,l){n(l,1,0)},null)}var j=e.kb("app-detail-user",H,L,{},{},[]),A=o("SVse");class P{}o.d(l,"UserModuleNgFactory",function(){return N});var N=e.lb(t,[],function(n){return e.xb([e.yb(512,e.j,e.X,[[8,[u.a,d,f,k,j]],[3,e.j],e.v]),e.yb(4608,A.r,A.q,[e.s,[2,A.L]]),e.yb(1073742336,A.c,A.c,[]),e.yb(1073742336,r.o,r.o,[[2,r.t],[2,r.k]]),e.yb(1073742336,P,P,[]),e.yb(1073742336,t,t,[]),e.yb(1024,r.i,function(){return[[{path:"",component:s,children:[{path:"newUser",component:b},{path:"editUser",component:v},{path:"detailUser",component:H},{path:"**",redirectTo:"newUser",pathMatch:"full"}]}]]},[])])})}}]);