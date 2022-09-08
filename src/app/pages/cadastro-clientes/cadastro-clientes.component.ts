import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cadastro-clientes',
  templateUrl: './cadastro-clientes.component.html',
  styleUrls: ['./cadastro-clientes.component.css']
})
export class CadastroClientesComponent implements OnInit {

  mensagem_cadastro: string = '';

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
  }

formCadastroClientes = new FormGroup({

  nome: new FormControl('', [
    Validators.required,
    Validators.minLength(6),
    Validators.maxLength(150)
  ]),

  cpf: new FormControl('', [
    Validators.required,
    Validators.minLength(11),
    Validators.maxLength(11)
  ]),

  telefone: new FormControl('', [
    Validators.required,
    Validators.minLength(9),
    Validators.maxLength(15)
  ]),

  email: new FormControl('', [
    Validators.required,
    Validators.minLength(10),
    Validators.email
  ]),

  dataNascimento: new FormControl('', [
    Validators.required,
    Validators.minLength(7)
  ]),

});

get form(): any {
  return this.formCadastroClientes.controls;
}

  onSubmit(): void {
    this.httpClient.post(environment.API_URL + 
      "api/Clientes", this.formCadastroClientes.value)
      .subscribe(
        (data: any) => {
          this.mensagem_cadastro = data.mensagem;
          this.formCadastroClientes.reset();
        }
      );
  }
}