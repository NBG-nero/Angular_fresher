import { Component } from '@angular/core';
import { RecordsService } from '../records.service';
@Component({
  selector: 'app-emp-info',
  templateUrl: './emp-info.component.html',
  styleUrls: ['./emp-info.component.css'],
  providers: [RecordsService],
})
export class EmpInfoComponent {
  infoReceived1: string[] = [];
  infoReceived2: string[] = [];
  infoReceived3: string[] = [];

  getInfoFromServiceClass2() {
    this.infoReceived2 = this.rservice.geInfo2();
  }
  getInfoFromServiceClass1() {
    this.infoReceived1 = this.rservice.geInfo1();
  }
  getInfoFromServiceClass3() {
    this.infoReceived3 = this.rservice.geInfo3();
  }

  constructor(private rservice: RecordsService) {}

  updateInfo(frm: any) {
    this.rservice.addInfo(frm.value.location);
  }
}
