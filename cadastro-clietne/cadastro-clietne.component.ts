import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Sexos } from '../../utils/interfaces/sexos';
import { CadastroServicesService } from '../../utils/services/cadastro-services.service';

@Component({
  selector: 'app-cadastro-clietne',
  templateUrl: './cadastro-clietne.component.html',
  styleUrls: ['./cadastro-clietne.component.scss']
})
export class CadastroClietneComponent implements OnInit {


  sexos: Array<Sexos> = [
    { sexo: 'Feminino' },
    { sexo: 'Masculino' }
  ]

  cadastroForm: FormGroup = this.formBuilder.group({
    nome:['',Validators.required],
    celular:['',Validators.required],
    sexo:['',Validators.required],
    idade:['',Validators.required],
  })

  constructor(private formBuilder: FormBuilder,
    private cadastroService: CadastroServicesService) {}

  ngOnInit(): void {
  }

  submitForm(){
    if(this.cadastroForm.valid){
      console.log(this.cadastroForm.value);
      this.cadastroService.cadastrarUsuario(this.cadastroForm.value).subscribe({
        next: (res) => res,

      });;
    }
  }
}
