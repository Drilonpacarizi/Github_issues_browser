import { Component, OnInit } from "@angular/core";

import { Apollo } from "apollo-angular";
import gql from "graphql-tag";

import { Issue, Query } from "../app/models";
import { Observable } from "apollo-link";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  courses: Observable<Issue[]>;
  constructor(private apollo: Apollo) {}
  issues: [];
  propsBool: boolean;
  comments: [];
  body: "";
  title: "";
  searchText: string;

  ngOnInit() {
    this.propsBool = false;
    this.getIssues();
  }

  getIssues() {
    this.apollo
      .query({
        query: gql`
          {
            repositoryOwner(login: "angular") {
              repository(name: "angular") {
                issues(last: 100) {
                  edges {
                    node {
                      url
                      number
                      state
                      id
                      title
                      body
                      updatedAt
                      comments(first: 10) {
                        nodes {
                          body
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        `,
        fetchPolicy: "network-only"
      })
      .subscribe(response => {
        this.issues = response.data["repositoryOwner"].repository.issues.edges;
      });
  }

  detailsBtn(index) {
    this.comments = this.issues ? this.issues[index].node.comments.nodes : [];
    this.body = this.issues ? this.issues[index].node.body : "";
    this.title = this.issues ? this.issues[index].node.title : "";
    this.propsBool = true;
  }
}
