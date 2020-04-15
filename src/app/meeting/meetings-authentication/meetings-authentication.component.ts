import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { MeetingService } from 'src/app/services/meeting.service';
import { Meeting } from 'src/app/models/meeting.model';
import { ActivatedRoute } from '@angular/router';

import * as moment from 'moment';
import 'moment/locale/pt-br';

@Component({
  selector: 'app-meetings-authentication',
  templateUrl: './meetings-authentication.component.html',
  styleUrls: ['./meetings-authentication.component.css']
})
export class MeetingsAuthenticationComponent implements OnInit {

  meeting = new Meeting('', '', '', '', '', '', '', '', '', '', null, null, null, null, null, null, null);

  constructor(
     private serviceMeetings: MeetingService,
     private route: ActivatedRoute
  )  { }

  ngOnInit() {
    let id: string = this.route.snapshot.params['id'];    
    if (id != undefined) {
      this.findById(id);
    }
  }

  findById(id: string){
    this.serviceMeetings.findMeetingById(id).subscribe((meeting: Meeting) => {
      this.meeting = meeting;
    });    
  }

  

  gerarPDF() {

    var documento = new jsPDF();
    documento.setFont("Courier");
    documento.setFontStyle("bold");
    documento.setFontSize(20);
    documento.text("Relatório da Reunião", 65, 15);

    documento.setFillColor(50, 50, 50);
    documento.rect(10, 20, 30, 8, "FD");
    documento.rect(10, 28, 30, 8, "FD");
    documento.rect(10, 36, 30, 8, "FD");
    documento.rect(10, 44, 30, 8, "FD");

    documento.rect(40, 20, 160, 8, "S");
    documento.rect(40, 28, 160, 8, "S");
    documento.rect(40, 36, 160, 8, "S");
    documento.rect(40, 44, 160, 8, "S");

    documento.setFontSize(12);
    documento.setTextColor(255, 255, 255);
    documento.text("Reunião", 12, 25);
    documento.text("Data", 12, 33);
    documento.text("Descrição", 12, 41);
    documento.text("Grupos", 12, 49);

    documento.setFontStyle("normal");
    documento.setTextColor(0, 0, 0);
    documento.text("Reunião Ministerial", 42, 25);
    documento.text("08/02/2020", 42, 33);
    documento.text("Reunião dos serviços Ministerial no vale do paraíba.", 42, 41);
    documento.text("Ministerial", 42, 49);

    documento.setFont("Courier");
    documento.setFontStyle("bold");
    documento.setFontSize(20);
    documento.text("Participantes", 10, 60);

    documento.setFillColor(0, 0, 0);
    documento.rect(10, 65, 190, 8, "DF");
    documento.rect(10, 73, 190, 8, "S");
    documento.rect(10, 81, 190, 8, "S");

    documento.setFontSize(12);
    documento.setTextColor(255, 255, 255);
    documento.text("Nome", 12, 70);
    documento.text("Categoria", 150, 70);

    documento.setFontStyle("normal");
    documento.setTextColor(0, 0, 0);
    documento.text("Raimundo Luís Iago da Luz", 12, 78);
    documento.text("Ancião", 154, 78);

    documento.setTableHeaderRow(true)
    documento.table(10, 90, 2, 2);

    documento.output('dataurlnewwindow');
  }

}
