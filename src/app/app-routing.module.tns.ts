import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from '@nativescript/angular';
import { routes } from '@src/app/app.routes';
import { AuthGuard } from './auth/auth.guard';

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  providers: [AuthGuard],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
