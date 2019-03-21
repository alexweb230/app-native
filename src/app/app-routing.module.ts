import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import {MainComponent} from "~/app/main/main.component";
import {MainDetailComponent} from "~/app/main-detail/main-detail.component";

const routes: Routes = [
    { path: "", redirectTo: "/main", pathMatch: "full" },
    { path: "main", component: MainComponent },
    { path: "detail", component: MainDetailComponent },
    { path: "browse", loadChildren: "~/app/browse/browse.module#BrowseModule" },
    { path: "search", loadChildren: "~/app/search/search.module#SearchModule" },
    { path: "featured", loadChildren: "~/app/featured/featured.module#FeaturedModule" },
    { path: "settings", loadChildren: "~/app/settings/settings.module#SettingsModule" }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
