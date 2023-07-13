import { Component } from '@angular/core';

import { registrosService } from '../../../services/registros/registros.service';
import { Iregistro,Iregistros } from '../../../interfaces/registros';

//platos
import {platosService} from '../../../services/platos/platos.service';
import { Iplato,Iplatos } from '../../../interfaces/platos';

//pacientes
import { pacientesService } from '../../../services/pacientes/pacientes.service';
import { Ipaciente,Ipacientes } from '../../../interfaces/pacientes';

@Component({
  selector: 'app-ejerciciorealizados',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.css']
})
export class registrosComponent {

  id: string='';;

  dataregistros:Iregistros = {sum:0, registros:[]};
  title:string = 'registros';

  //platos
  dataplatos:Iplatos = { sum:0, platos:[] };
  titleplatos:string = 'platos';

  //pacientez
  datapacientes:Ipacientes = { sum:0, pacientes:[] };
  titlepacientes:string = 'pacientes';

  constructor(
    private registrosService: registrosService,
    private platosService: platosService,
    private pacientesService: pacientesService
  ){}

  ngOnInit() {
    this.registrosService.getregistros()
     .subscribe(data => {
       this.dataregistros= data;
       console.log(data)
    });
    this.platosService.getplatos()
     .subscribe(data => {
       this.dataplatos= data;
    });
    this.pacientesService.getpacientes()
     .subscribe(data => {
       this.datapacientes= data;
     });
  }
  submitData(value: Iregistro) {
    const id = this.id;
    let body:Iregistro = {
      descripcion: value.descripcion,
      ID_Plato: value.ID_Plato,
      ID_Paciente: value.ID_Paciente,
      fecha: value.fecha,
      hora: value.hora,
      N_Calorias: value.N_Calorias,
      N_Porciones: value.N_Porciones
    }
    if (this.id.trim().length==0)
    {
    this.registrosService.createregistro(body)
      .subscribe(response => {
        console.log(response);
        this.ngOnInit();
      })
    }else
    {
      this.registrosService.updateregistro(this.id, body)
        .subscribe(response => {
          console.log(response);
          this.ngOnInit();
        })
    }
  }
  deleteregistro(id: string) {
    this.registrosService.deleteregistro(id)
      .subscribe(response => {
        console.log('registro eliminado con exito:', response);
        // Realiza cualquier otra acción necesaria después de eliminar el deportista.
        this.ngOnInit();
      });
  }

}
