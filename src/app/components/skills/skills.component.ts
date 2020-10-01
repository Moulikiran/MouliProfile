import { Component, OnInit } from '@angular/core';
import { MatProgressSpinner } from '@angular/material';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  progress = 10;

  skills = [
    {
      skillName:"DS & Algo",
      progress: "40",
      color: "#ff8763"
    },
    {
      skillName:"CoreJava",
      progress: "70",
      color: "#9ad880"
    },
    {
      skillName:"Spring Boot",
      progress: "50",
      color: "#4882c2"
    },
    {
      skillName:"Rest Services",
      progress: "70",
      color: "#ff8763"
    },
    {
      skillName:"Hibernate",
      progress: "50",
      color: "#9ad880"
    },
    {
      skillName:"Angular Js",
      progress: "70",
      color: "#4882c2"
    },
    {
      skillName:"Angular 2+",
      progress: "60",
      color: "#ff8763"
    },
    {
      skillName:"Tomcat",
      progress: "50",
      color: "#9ad880"
    },
    {
      skillName:"Jenkins",
      progress: "70",
      color: "#4882c2"
    },
    {
      skillName:"Kubernetes & Docker",
      progress: "40",
      color: "#ff8763"
    },
    {
      skillName:"Agile Methodlogies",
      progress: "80",
      color: "#9ad880"
    },
    {
      skillName:"SQL Server",
      progress: "50",
      color: "#4882c2"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
