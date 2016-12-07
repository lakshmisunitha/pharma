import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medicines',
  template: `
  <div>
 <img class="img-responsive" src="medical devices.jpg">
 </div>
  `,
  providers: [  ],
  styleUrls: ['./medicaldevices.component.css']
})
export class MedicaldevicesComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}
