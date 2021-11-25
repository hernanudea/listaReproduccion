import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from  '@angular/router';
import { ListaReproduccionModel } from '../../../models/listaReproduccionModel';
import { ListasService } from '../../../services/api/listas.service';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: []
})
export class EditarComponent implements OnInit {

  constructor(private activerouter:ActivatedRoute, private router:Router, private api: ListasService ) { }

  datosLista:ListaReproduccionModel;
  editarForm = new FormGroup({
    nombre: new FormControl(''),
    descripcion : new FormControl(''),

  });


  ngOnInit(): void {
    let nombreLista = this.activerouter.snapshot.paramMap.get('nombre');
    this.api.getSingleList(nombreLista).subscribe(data  =>{

    })

  }

  salir(){
    this.router.navigate(['dashboard']);
  }
}
