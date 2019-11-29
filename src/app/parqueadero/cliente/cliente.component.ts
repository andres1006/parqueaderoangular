import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente/cliente.service';

declare var require: any;




@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})

 


export class ClienteComponent implements OnInit {
  
private data;

  ngOnInit() {
  }

 
  

  rows = [];
    loadingIndicator: boolean = true;
    reorderable: boolean = true;

    // DataTable Content Titles
    columns = [
        { prop: 'name' },
        { name: 'Gender' },
        { name: 'Company' }
    ];

    constructor(private clienteservice:  ClienteService) {
      //consulta
      this.data = clienteservice.consultarClientes();
        this.rows = this.data;
        setTimeout(() => { this.loadingIndicator = false; }, 1500);
    }

    getRowHeight(row) {
      return row.height;
    }

 

}
