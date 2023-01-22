import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nest';
//createdData:any = [];
demodata = {
  "orders":{
    "total" : 17,
    "data": [
      {
        "id":10896,
        "createdAt":"2019-12-30T07:18:19.182Z",
        "amount":6000,
        "dealer":{
          "company":{
            "name":"UjjwalTechnicalTips"
          }
        },
        "transactions":[
          {},
          {},
          {},
          {
            "stripe" : {
              "status":"Succeeded",
              "card":{
                "funding":"unknown"
              }
            }
          }
        ]
      }
    ]
  }
}




}
