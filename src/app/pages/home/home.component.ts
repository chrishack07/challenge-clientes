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
  promedio: number
  varianza: number
  fecha_muerte: '02/03/10'
  
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
      this.varianza = Math.sqrt(diferenciasPromedioAlCuadrado)
      console.log('Desviacion estandar ', this.varianza)    
    }
  }
}
