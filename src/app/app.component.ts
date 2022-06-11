import { Component , OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Proyectos } from './proyectos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'sinergiaFront';
  public proyectos:Proyectos | any

  constructor(private httpClient: HttpClient){

  }

  loadProyectos(){
    this.httpClient.get<any>('http://localhost:8090/sinergia/api/projects/all').subscribe((res: any)=>{
      this.proyectos=res;
      let conteo = 1
      for (let i = 0; i < this.proyectos.length; i++){
      switch (conteo) {
        case 1:
          this.proyectos[i].class = "azul"
          break;
          case 2:
            this.proyectos[i].class = "rojo"
            break;
            case 3:
              this.proyectos[i].class = "blanco"
              break;
        default:
          break;
      }

      if(conteo == 3){
        conteo = 0
      }
      conteo++
    }
    })
  }

  ngOnInit(): void {
    this.loadProyectos()
  }
  posicionamiento1(value:number){
    if(value%2 == 0){
      return false;
    }
    else{
      return true
    }
  }
}
