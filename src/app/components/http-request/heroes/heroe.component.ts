import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Heroe } from './heroe.interface';
import { HeroeService } from 'src/app/services/heroe.service';



@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  heroe: Heroe = {
    nombre: "",
    bio: "",
    casa: "Marvel"
  }

  nuevo: boolean = true;
  id: string;

  constructor(private heroeService: HeroeService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['id'];
      if (this.id !== 'nuevo') {
        this.nuevo = false;
        this.heroeService.getHeroe(this.id)
          .subscribe(heroeResponse => {
            console.log("heroeResponse: ",heroeResponse);
             this.heroe = heroeResponse
          });
      }
    })
  }

  ngOnInit() {
  }

  guardar() {
    console.log(this.heroe);
    if (this.id === 'nuevo') {
      this.heroeService.nuevoHeroe(this.heroe)
        .subscribe(data => {
          this.nuevo = false
          this.router.navigate(['/http-request/heroes'])
        });
    } else {
      this.heroeService.actualizarHeroe(this.heroe, this.id)
        .subscribe(data => { this.nuevo = false });
    }
  }

  agregarNuevo(formulario: NgForm){
    this.nuevo = true;
    this.router.navigate(['/http-request/heroe', 'nuevo']);
    formulario.reset({
      casa:"Marvel"
    });
  }
}
