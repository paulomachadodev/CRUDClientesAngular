import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment'; 
import { HttpClient } from '@angular/common/http';    

@Component({
  selector: 'app-consulta-clientes',
  templateUrl: './consulta-clientes.component.html',
  styleUrls: ['./consulta-clientes.component.css']
})
export class ConsultaClientesComponent implements OnInit {

  clientes: any[] = [];

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {

    this.httpClient.get(environment.API_URL + "api/Clientes")
      .subscribe(
        (data) => {
          this.clientes = data as any[];
        }
      )
  }

  onDelete(idCliente: string): void {

    if (window.confirm('Deseja realmente excluir o cliente selecionado?')) 
    {
      this.httpClient.delete(environment.API_URL 
                     + "api/Cliente/" + idCliente)
        .subscribe(
          (data: any) => {
            alert(data.mensagem);
            this.ngOnInit(); 
          }
        )
    }
  }
}