import { Component, OnInit, OnChanges } from '@angular/core';
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

  clientes: Cliente

  constructor(private clienteService: ClientesService) { }

  ngOnInit() {
    this.obtenerCliente()
  }

  obtenerCliente(){    
    this.clienteService.getClientes().subscribe( r =>  {          
      this.clientes = r
    });       
  }
  
  agregarCliente(){    
    this.clienteService.postCliente(this.cliente).subscribe()
  }

}
