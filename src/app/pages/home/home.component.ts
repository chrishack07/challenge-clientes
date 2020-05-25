import { Component, OnInit, OnChanges } from '@angular/core';
import { Cliente } from 'src/app/shared/models/cliente';
import { ClienteService } from 'src/app/shared/servicios/cliente.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


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
    profesion: "",
    fecha_nac: "",  
    fecha_muerte: ""
  }

  clientes: Cliente[] = []
  promedio: number
  desviacionEstandar: number
  clienteSeleccionado: Cliente

  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
    this.obtenerCliente()
  }

  obtenerCliente(){
    this.clientes = []
    this.clienteService.getClientes().subscribe( r =>  {          
      for(let i in r) {
        this.clientes.push(r[i])
      }
    });             
  }
  
  agregarCliente(){    
    this.clienteService.postCliente(this.cliente).subscribe(()=>{
      setTimeout(() => {
        this.obtenerCliente()  
      }, 1000);
      
    })
    
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
    }
  }

  buscarPersona(posicion){
    let personas = this.clientes
    for(let i in personas){
      if(i == posicion){
        this.clienteSeleccionado = personas[i]
      }
    }
  }
}
