import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'capitalizado'})
export class CapitalizadoPipe implements PipeTransform {
    transform(value: any): any {
        value = value.toLowerCase();
        let words = value.split(' ');
        for (const key in words) {
            words[key] = words[key][0].toUpperCase() + words[key].substr(1);
        }
        return words.join(" ");
    }
}