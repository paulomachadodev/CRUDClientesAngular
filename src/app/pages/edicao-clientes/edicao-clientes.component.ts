import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { formatDate } from '@angular/common';


@Component({
  selector: 'app-edicao-clientes',
  templateUrl: './edicao-clientes.component.html',
  styleUrls: ['./edicao-clientes.component.css']
})
export class EdicaoClientesComponent implements OnInit {

  mensagem_sucesso: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
      
    var idCliente = this.activatedRoute.snapshot.paramMap
      .get('idCliente') as string;

    this.httpClient.get(environment.API_URL + "api/Clientes/" + idCliente)
      .subscribe(
        (data: any) => {
          this.formEdicao.patchValue(data);

          this.formEdicao.controls['dataNascimento'].setValue(
            formatDate(data.dataNascimento as Date, 'yyyy-MM-dd', 'en')
          );
        }
      )
  }

  formEdicao = new FormGroup({ 

    idCliente: new FormControl(),

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
          Validators.minLength(6),
          Validators.maxLength(15)
        ]),
            
        email: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(30),
          Validators.email
        ]),
    
        dataNascimento: new FormControl('', [
          Validators.required
        ])
      });

      get form(): any {
        return this.formEdicao.controls;
      }

  onSubmit(): void {
    this.httpClient.put(environment.API_URL + "api/Clientes", 
    this.formEdicao.value)
      .subscribe(
        (data: any) => {
          this.mensagem_sucesso = data.mensagem;
        }
      )
  }
  

}
