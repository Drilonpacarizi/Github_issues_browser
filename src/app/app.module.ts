import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { Component } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { GraphQLModule } from "./graphql.module";
import { HttpClientModule } from "@angular/common/http";
import { Apollo, ApolloModule } from "apollo-angular";
import { HttpLink, HttpLinkModule } from "apollo-angular-link-http";
import { ApolloLink } from "apollo-link";
import { HttpHeaders } from "@angular/common/http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { environment } from "../environments/environment";
import { ApolloBoost } from "apollo-angular-boost";
import { FormsModule } from "@angular/forms";
import { Ng2SearchPipeModule } from "ng2-search-filter";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    //AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    // Apollo,
    // HttpLink,
    ApolloModule,
    HttpLinkModule,
    FormsModule,
    Ng2SearchPipeModule
    //ApolloLink
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(apollo: Apollo, httpLink: HttpLink) {}
}
