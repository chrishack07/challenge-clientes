import { Component, OnInit, OnChanges } from '@angular/core';
import { Cliente } from 'src/app/shared/models/cliente';
import { ClienteService } from 'src/app/shared/servicios/cliente.service';


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

  // clientes: Cliente
  clientes: Cliente[] = []
  promedio: number
  desviacionEstandar: number
  fecha_muerte: '02/03/10'
  
  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
    this.obtenerCliente()
  }

  obtenerCliente(){    
    console.log('CLIENTES INICIAR ',this.clientes)
    this.clienteService.getClientes().subscribe( r =>  {          
      for(var i in r) {
        this.clientes.push(r[i])
      }
      console.log('CLIENTES  ', this.clientes )
    });             
  }
  
  agregarCliente(){    
    this.clienteService.postCliente(this.cliente).subscribe()
  }
  
  promedioEdades(){
    let personas = this.clientes
    let sumatoria = 0    
    for(let i in personas){
      sumatoria = (sumatoria + personas[i].edad)
    }
    this.promedio = sumatoria/Object.keys(personas).length
  }

  desviacionEstandardEdades(promedio: number){
    let personas = this.clientes
    let diferencia = 0
    let diferenciasPromedioAlCuadrado = 0
    if(promedio>0){
      for(let i in personas){
        diferencia = personas[i].edad - promedio
        diferenciasPromedioAlCuadrado =  diferenciasPromedioAlCuadrado + Math.pow(diferencia,2)
      }
      this.desviacionEstandar = Math.sqrt(diferenciasPromedioAlCuadrado)
      console.log('Desviacion estandar ', this.desviacionEstandar)    
    }
  }
}
