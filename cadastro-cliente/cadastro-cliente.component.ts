import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Sexos } from '../uteis/sexos';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.scss']
})
export class CadastroClienteComponent implements OnInit {

  sexos: Array<Sexos> = [
    { sexo: 'Feminino' },
    { sexo: 'Masculino' }
  ]

  cadastroForm: FormGroup = this.formBuilder.group({



  })

  constructor(private formBuilder: FormBuilder) {




  }

  ngOnInit(): void {
  }

}
