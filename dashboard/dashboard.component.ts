import { Router } from '@angular/router';
import { Component, ElementRef, OnChanges, OnInit, ViewChild } from '@angular/core';
import { Usuarios } from '../../utils/interfaces/usuarios';
import { CadastroServicesService } from '../../utils/services/cadastro-services.service';
import { ChartConfiguration, ChartData, ChartType} from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit, OnChanges {
  clientesSexoMasculino!: number;
  usuarios!: number | string;
  mediaIdade!: number;
  displayColumns : string [] = [ 'id' , 'nome' , 'sexo' , 'idade' ];
  dataSource!: Array<Usuarios>;
  

  constructor(private service: CadastroServicesService, private router: Router) { }

  sexoMasculino() { 
    this.service.sexoMasculino().subscribe(res => { 
      this.clientesSexoMasculino = res
      console.log(this.clientesSexoMasculino)
    })
  }


  ngOnChanges() { 
    this.sexoMasculino()
    console.log(this.clientesSexoMasculino)
  }


  ngOnInit(): void {
    
    this.countUsuarios();
    this.mediaIdadeClientes();
    this.ultimosPedidos(); 
    this.sexoMasculino()
    
    console.log(this.clientesSexoMasculino)
    
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

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  // Pie
  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend:{
        display: true,
        position: 'left',
        maxWidth: 25
      },
    }
  };
  
  public pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: [ 'Feminino', 'Masculino' ],
    datasets: [ {
      data: [ 5, 15]
    } ]
  };

  public pieChartType: ChartType = 'pie';
  
}
