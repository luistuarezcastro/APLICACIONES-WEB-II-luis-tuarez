import { Component } from '@angular/core';
import { Observable } from 'rxjs';

//para las validaciones
import { Validators, FormGroup, FormControl, ValidatorFn, AbstractControl } from '@angular/forms';

import { platosService } from '../../../services/platos/platos.service';
import { Iplato,Iplatos } from '../../../interfaces/platos';

@Component({
  selector: 'app-platos',
  templateUrl: './platos.component.html',
  styleUrls: ['./platos.component.css']
})
export class platosComponent {
form: FormGroup;
  submitted = false;

  id: string='';;

  dataplatos:Iplatos = { sum:0, platos:[] };
  title:string = 'Platos';

  constructor(private platosService: platosService,){
    this.form= new FormGroup({
      id: new FormControl(''),
      nombre: new FormControl('', [Validators.required, nameFormatValidator()]),
      calorias: new FormControl('', [Validators.min(0), Validators.max(9999)]),

    });
  }

  ngOnInit() {
    this.platosService.getplatos()
    .subscribe(data => {
      this.dataplatos= data;
    })
  }
  submitData(value: Iplato) {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    const id = this.id;
    let body:Iplato = {
      nombre: value.nombre,
      calorias: value.calorias,
    }

    if (this.id.trim().length==0)
    {
    this.platosService.createplato(body)
      .subscribe(response => {
        console.log(response);
        this.ngOnInit();
      })
    }
    else
    {
      this.platosService.updateplato(this.id, body)
        .subscribe(response => {
          console.log(response);
          this.ngOnInit();
        })
    }
  }

  deleteplato(id: string) {
    this.platosService.deleteplato(id)
      .subscribe(response => {
        console.log('plato eliminado:', response);
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
