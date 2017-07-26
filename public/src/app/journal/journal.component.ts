import { Component, OnInit } from '@angular/core';
import { Journal } from './../journal';
import { JournalService } from './../journal.service';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})
export class JournalComponent implements OnInit {

  journal = new Journal();


  constructor(private _journalService: JournalService) { }

  ngOnInit() {
  	this.journal.date = new Date();
  }

  createEntry(){
  	console.log("IN COMPONENT");
  	this._journalService.serviceCreateEntry(this.journal).then().catch();
  }
}
