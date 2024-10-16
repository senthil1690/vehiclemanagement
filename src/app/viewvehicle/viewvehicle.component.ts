import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewvehicle',
  templateUrl: './viewvehicle.component.html',
  styleUrls: ['./viewvehicle.component.scss']
})
export class ViewvehicleComponent implements OnInit {


  dataCols = [
    { field: 'ownerName', header: 'Owner Name' },
    { field: 'VehicleName', header: 'Vehicle Name' },
    { field: 'model', header: 'Model' },
    { field: 'vin', header: 'VI No' },
    { field: 'insuranceprovider', header: 'Provider' },
    { field: 'policynumber', header: 'Policy No.' },
    { field: 'startDate', header: 'Start Date' },
    { field: 'endDate', header: 'End date' }
  ];

  data = [{
    "ownerName": "asdasd", "VehicleName": "Bajaj", "model": "1988", "vin": "78979", "insuranceprovider": "UIC", "policynumber": "7894567893", "startDate": "12-05-2022",
    "endDate": "15-05-1990"
  }];
  showForm = false;

  constructor() { }


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  onAdd() {
    this.showForm = true;
  }

  onEdit() {
    this.showForm = true;
  }
  onBack() {
    this.showForm = false;

  }

}
