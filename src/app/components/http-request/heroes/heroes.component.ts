import { Component, OnInit } from '@angular/core';
import { HeroeService } from 'src/app/services/heroe.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes: any[] = [];

  loading: boolean = true;
  constructor(private heroesService: HeroeService) {
    this.heroesService.getHeroes()
      .subscribe((response) => {
        this.heroes = response;
        setTimeout(() => {
          this.loading = false;
        }, 2000);
      });
  }

  ngOnInit() {
  }

  borrarHeroe(key$: string) {
    this.heroesService.borrarHeroe(key$)
      .subscribe((response) => {
        this.loading = true;
        this.heroes = [];
        console.log({ response });
        if (response) {
          console.error({ response });
        } else {
          delete this.heroes[key$];
          this.heroesService.getHeroes()
            .subscribe((response) => {
              this.heroes = response;
              setTimeout(() => {
                this.loading = false;
              }, 2000);
            });
        }
      });
  }
}
