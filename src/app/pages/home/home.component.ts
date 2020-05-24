import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/shared/services/clientes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private clienteService: ClientesService) { }

  ngOnInit() {
    let data={
      nombre: 'nancy',
      apellido: 'garcia',
      edad: 36,
      fecha_nacimiento: '01/01/1984',
    }
    this.clienteService.postCliente(data);
  }

}
