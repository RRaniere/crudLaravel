import { Router } from '@angular/router';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Usuarios } from '../../utils/interfaces/usuarios';
import { CadastroServicesService } from '../../utils/services/cadastro-services.service';
import { Chart, Title } from 'chart.js';
import { config } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  usuarios!: number | string;
  mediaIdade!: number;
  displayColumns : string [] = [ 'id' , 'nome' , 'sexo' , 'idade' ];
  dataSource!: Array<Usuarios>;
  @ViewChild("myChart", {static: true}) elemento!: ElementRef;

  constructor(private service: CadastroServicesService, private router: Router) {}
  ngOnInit(): void {
    
    this.countUsuarios();
    this.mediaIdadeClientes();
    this.ultimosPedidos(); 
  }
  countUsuarios() {
    this.service.buscaUsuarios().subscribe(res => this.usuarios = this.pad(res , 4));
  }
  pad(num: number, size: number): string {
    let s = num + "";
    while (s.length < size) s = "0" + s;
    return s;
  }
  mediaIdadeClientes() { 
    this.service.mediaIdade().subscribe(res => this.mediaIdade = res);
  }
  ultimosPedidos() {
    this.service.ultimosPedidos().subscribe(res => {
      this.dataSource = res
    } );
  }
}
