import { Component, OnInit } from '@angular/core';
import { Chart} from 'chart.js';
import { UserService } from '../user.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  PieChart = [];
  DoughnutChart = [];
  SIZE_OF_COMMUNITY = 100;
  totalRegisteredUsersArr = [];
  totalRegisteredFemaleMaleCountArr = [];
  maleCount;
  femaleCount;
  totalreguser;

  constructor( private userService:UserService ) { }

  ngOnInit(): void {
    this.getRegisteredUserCountHandler();
    this.getRegisteredMaleCountHandler();
  }

  getRegisteredMaleCountHandler(){
    this.userService.getRegisteredMaleCount().subscribe(
      response => {
          console.log(response);
          this.totalRegisteredFemaleMaleCountArr.push(response);
          this.getRegisteredFemaleCountHandler();
      });
  }

  getRegisteredFemaleCountHandler(){
    this.userService.getRegisteredFemaleCount().subscribe(
      response => {
        console.log(response);
        this.totalRegisteredFemaleMaleCountArr.push(response);
        this.drawRegisteredFemaleMaleDonughtChart();
      });
  }

  getRegisteredUserCountHandler(){
    this.userService.getRegisteredUserCount().subscribe(
        response => {
          console.log(response);
          this.totalRegisteredUsersArr.push(this.SIZE_OF_COMMUNITY);
          this.totalRegisteredUsersArr.push(response);
          // this.totalRegisteredFemaleMaleCountArr.push(response);
          this.drawRegisteredUsersPieChart();
          console.log("dhgccccckd",this.totalRegisteredFemaleMaleCountArr);
        });
   }

  drawRegisteredUsersPieChart(){
    this.PieChart = new Chart('piechart',{
      type:'pie',
        data : {
          labels:["Total community members","Total registered members"],
          datasets : [{
            label : "Census",
            data : this.totalRegisteredUsersArr,
            backgroundColor: [
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 99, 132, 0.2)',
            ],
            borderWidth : 1
          }]
        },
      options : {
        title : {
          text : "Total registered users VS total community members",
          display : true
        },
        scales: {
          YAxes:[{
            ticks:{
              beginAtZero : true
            }
          }]
        }
      } 
    });
  }

  drawRegisteredFemaleMaleDonughtChart(){
    this.DoughnutChart = new Chart('donutchart',{
      type:'doughnut',
        data : {
          labels:["Male","Female"],
          datasets : [{
            label : "Census",
            data : this.totalRegisteredFemaleMaleCountArr,
            backgroundColor: [
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(228, 122, 172, 0.64)'
            ],
            borderColor: [
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(228, 122, 172, 0.64)'
            ],
            borderWidth : 1
          }]
        },
        options : {
          title : {
            text : "In total registered members male members VS female members",
            display : true
          },
          scales: {
            YAxes:[{
              ticks:{
                  beginAtZero : true
                }
            }]
          }
        }
    });
  }
}
