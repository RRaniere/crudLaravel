import { Router } from '@angular/router';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Chart } from 'chart.js';
import { Usuarios } from '../../utils/interfaces/usuarios';
import { CadastroServicesService } from 'src/app/utils/services/cadastro-services.service';


@Component({
  selector: 'app-tabela-clientes',
  templateUrl: './tabela-clientes.component.html',
  styleUrls: ['./tabela-clientes.component.scss']
})
export class TabelaClientesComponent implements OnInit {
  usuarios!: number | string;
  displayColumns : string [] = [ 'id' , 'nome' , 'sexo' , 'idade' ];
  dataSource!: Array<Usuarios>;

  constructor(private service: CadastroServicesService, private router: Router) { }
  
  ngOnInit(): void {
    this.buscaTotalUsuarios(); 
    console.log(this.dataSource)
    }

    /*ultimosPedidos() {
      this.service.ultimosPedidos().subscribe(res => {
        this.dataSource = res
      } );*/

    buscaTotalUsuarios() { 
      this.service.buscaTotalUsuarios().subscribe(res => { 
        this.dataSource = res
      })
    }
    
  }
  

