import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

/* routing */
import { HttpRequestRoutingModule, routedComponents } from './http-request.routing';

/* pipes */
import { KeysPipe } from 'src/app/pipes/keys.pipe';


@NgModule({
    declarations: [
        ...routedComponents,
        KeysPipe,
    ],
    imports: [
        CommonModule, HttpClientModule, FormsModule, HttpRequestRoutingModule
    ],
})
export class HttpRequestModule {}