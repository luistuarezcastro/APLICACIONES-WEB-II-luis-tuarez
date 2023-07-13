import { Component } from '@angular/core';
import { Observable } from 'rxjs';

//para las validaciones
import { Validators, FormGroup, FormControl, ValidatorFn, AbstractControl } from '@angular/forms';


import { pacientesService } from '../../../services/pacientes/pacientes.service';
import { Ipaciente,Ipacientes } from '../../../interfaces/pacientes';



@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class pacientesComponent {

  form: FormGroup;
  submitted = false;

  id: string='';;

  datapacientes:Ipacientes = { sum:0, pacientes:[] };
  title:string = 'Pacientes';

  constructor(private pacientesService: pacientesService,){
    this.form= new FormGroup({
      id: new FormControl(''),
      nombre: new FormControl('', [Validators.required, nameFormatValidator()]),
      identificacion: new FormControl('', [Validators.min(0), Validators.max(9999)]),
      telefono: new FormControl('', [Validators.min(0), Validators.max(9999999999)]),
      direccion: new FormControl('', [Validators.required, nameFormatValidator()]),
    });
  }

  ngOnInit() {
    this.pacientesService.getpacientes()
    .subscribe(data => {
      this.datapacientes= data;
    })
  }
  submitData(value: Ipaciente) {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    const id = this.id;
    let body:Ipaciente = {
      nombre: value.nombre,
      identificacion: value.identificacion,
      telefono: value.telefono,
      direccion: value.direccion,
    }

    if (this.id.trim().length==0)
    {
    this.pacientesService.createpaciente(body)
      .subscribe(response => {
        console.log(response);
        this.ngOnInit();
      })
    }
    else
    {
      this.pacientesService.updatepacienteid(this.id, body)
        .subscribe(response => {
          console.log(response);
          this.ngOnInit();
        })
    }
  }

  deletepaciente(id: string) {
    this.pacientesService.deletepaciente(id)
      .subscribe(response => {
        console.log('paciente eliminado:', response);
        this.ngOnInit();
      });
  }


}
function nameFormatValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value = control.value;
    //primera mayuscula el resto minuscula
    const regex = /^([A-Z][a-z]*\s*)+$/; // Regex pattern for the desired format

    if (value && !regex.test(value)) {
      return { lowercase: true };
    }

    return null;
  };
}
