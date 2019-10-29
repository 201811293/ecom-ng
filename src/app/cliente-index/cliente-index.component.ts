import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-cliente-index',
  templateUrl: './cliente-index.component.html',
  styleUrls: ['./cliente-index.component.css']
})
export class ClienteIndexComponent implements OnInit {
  list: any;
  constructor(
    private route: ActivatedRoute,
    private clienteService: ClienteService,
  ) {
    this.getList();
  }
  ngOnInit() {
    this.getList();
  }
  getList() {
    this.clienteService.getList().subscribe(response => {
      this.list = response;
      console.log(this.list);
    });
  }
  delete(id) {
    console.log("delete : " +id);
    this.clienteService.delete(id).subscribe(response => {
      console.log("de = " + JSON.stringify(response));
      this.getList();
    });
  }
}
