import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClientesService } from 'src/app/shared/services/clientes.service';
import { Cliente } from 'src/app/shared/models/cliente';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cliente: Cliente = {
    nombre: "",
    apellido: "",
    edad: 0,
    fecha_nac: ""
  }

  constructor(private clienteService: ClientesService) { }

  ngOnInit() {
    this.clienteService.getClientes().subscribe();
  }

  agregarCliente(){
    this.clienteService.postCliente(this.cliente).subscribe();
  }

}
