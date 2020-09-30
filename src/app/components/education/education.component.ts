import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  studiesListObject = [{
    title: "Bachelor in technology",
    college: "Jawaharlal Nehru Technological University - Anantapur",
    specialization: "Computer Science Engineering",
    year: "2010-2014",
    percentage: "77.6%"
  },
  {
    title: "Intermediate School of Education",
    college: "Krishna Chaitanya Junior College",
    specialization: "Maths Physics and Chemistry (MPC)",
    year: "2008-2010",
    percentage: "85%"
  },
  {
    title: "Secondary School of Education",
    college: "Y.K.Achari E.M School",
    specialization: "10th standard.",
    year: "2008",
    percentage: "77%"
  }];

  constructor() { }

  ngOnInit() {
  
  }
}
