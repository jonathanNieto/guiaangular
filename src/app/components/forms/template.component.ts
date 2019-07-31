import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ScriptService } from 'src/app/services/script.service';
import { HighlightService } from 'src/app/services/highlight.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  user = {
    name: '',
    lastname: '',
    email: '',
    city: '',
    state: '',
    codezip: '',
    terms: null,
    country: '',
    gender: ''
  };

  countries = [
    {
      code: 'MX',
      name: 'México'
    },
    {
      code: 'ARG',
      name: 'Argentina'
    },
    {
      code: 'CRI',
      name: 'Costa Rica'
    },
    {
      code: 'CH',
      name: 'Chile'
    },
    {
      code: 'BR',
      name: 'Brasil'
    },
  ];

  highlighted: boolean = false;
  constructor(private scriptService: ScriptService, private highlightService: HighlightService) {
    scriptService
      .load('prism')
      .then(data => { });
  }

  ngOnInit() {
    this.highlightService.highlightAll();
  }

  ngAfterViewChecked() {
    if (!this.highlighted) {
      this.highlightService.highlightAll();
      this.highlighted = true;
    }
  }

  onSubmit(templateForm: NgForm) {
    console.log({ templateForm });
    console.log(templateForm.value);
    console.log(this.user);
  }

  codeTemplate1 = `&lt;form class="needs-validation" novalidate #templateForm="ngForm" (ngSubmit)="onSubmit(templateForm)"&gt;
  &lt;div class="form-row"&gt;
      &lt;div class="col-md-4 mb-3"&gt;
          &lt;label for="validationCustom01"&gt;First name&lt;/label&gt;
          &lt;input [(ngModel)]="user.name" name="name" type="text" class="form-control" placeholder="First name"
              minlength="3" required #thisname="ngModel"&gt;
          &lt;span
              *ngIf="(thisname.touched && thisname.errors?.required) || (templateForm.submitted && thisname.errors?.required)"
              class="animated fadeIn text-danger"&gt;
              Please type your name.
          &lt;/span&gt;
          &lt;span
              *ngIf="(thisname.touched && thisname.errors?.minlength) || (templateForm.submitted && thisname.errors?.minlength)"
              class="animated fadeIn text-danger"&gt;
              At least {{thisname.errors.minlength.requiredLength}} characters.
          &lt;/span&gt;
      &lt;/div&gt;
      &lt;div class="col-md-4 mb-3"&gt;
          &lt;label for="validationCustom02"&gt;Last name&lt;/label&gt;
          &lt;input [(ngModel)]="user.lastname" name="lastname" type="text" class="form-control" placeholder="Last name"
              minlength="3" required #lastname="ngModel"&gt;
          &lt;span
              *ngIf="(lastname.touched && lastname.errors?.required) || (templateForm.submitted && lastname.errors?.required)"
              class="animated fadeIn text-danger"&gt;
              Please type your lastname.
          &lt;/span&gt;
          &lt;span
              *ngIf="(lastname.touched && lastname.errors?.minlength) || (templateForm.submitted && lastname.errors?.minlength)"
              class="animated fadeIn text-danger"&gt;
              At least {{lastname.errors.minlength.requiredLength}} characters.
          &lt;/span&gt;
      &lt;/div&gt;
      &lt;div class="col-md-4 mb-3"&gt;
          &lt;label for="validationCustomUsername"&gt;Email&lt;/label&gt;
          &lt;div class="input-group"&gt;
              &lt;div class="input-group-prepend"&gt;
                  &lt;span class="input-group-text" id="inputGroupPrepend"&gt;@&lt;/span&gt;
              &lt;/div&gt;
              &lt;input [(ngModel)]="user.email" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  type="text" class="form-control" placeholder="Email" minlength="3"
                  aria-describedby="inputGroupPrepend" required #thisemail="ngModel"&gt;
          &lt;/div&gt;
          &lt;span
              *ngIf="(thisemail.touched && thisemail.errors?.required) || (templateForm.submitted && thisemail.errors?.required)"
              class="animated fadeIn text-danger"&gt;
              Please type your email.
          &lt;/span&gt;
          &lt;span
              *ngIf="(thisemail.touched && thisemail.errors?.pattern) || (templateForm.submitted && thisemail.errors?.pattern)"
              class="animated fadeIn text-danger"&gt;
              Please type a valid email.
          &lt;/span&gt;
      &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="form-row"&gt;
      &lt;div class="col-md-6 mb-3"&gt;
          &lt;label for="validationCustom03"&gt;City&lt;/label&gt;
          &lt;input [(ngModel)]="user.city" name="city" type="text" class="form-control" placeholder="City" required
              #city="ngModel"&gt;
          &lt;span *ngIf="(city.touched && city.errors?.required) || (templateForm.submitted && city.errors?.required)"
              class="animated fadeIn text-danger"&gt;
              Please type your city.
          &lt;/span&gt;
      &lt;/div&gt;
      &lt;div class="col-md-3 mb-3"&gt;
          &lt;label for="validationCustom04"&gt;State&lt;/label&gt;
          &lt;input [(ngModel)]="user.state" name="state" type="text" class="form-control" placeholder="State" required
              #state="ngModel"&gt;
          &lt;span
              *ngIf="(state.touched && state.errors?.required) || (templateForm.submitted && state.errors?.required)"
              class="animated fadeIn text-danger"&gt;
              Please provide a state.
          &lt;/span&gt;
      &lt;/div&gt;
      &lt;div class="col-md-3 mb-3"&gt;
          &lt;label for="validationCustom05"&gt;Zip&lt;/label&gt;
          &lt;input [(ngModel)]="user.codezip" name="codezip" type="text" class="form-control" placeholder="Zip" required
              #codezip="ngModel"&gt;
          &lt;span
              *ngIf="(codezip.touched && codezip.errors?.required) || (templateForm.submitted && codezip.errors?.required)"
              class="animated fadeIn text-danger"&gt;
              Please provide a valid zip.
          &lt;/span&gt;
      &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="form-group"&gt;
      &lt;div class="form-check"&gt;
          &lt;input [(ngModel)]="user.terms" name="terms" class="form-check-input" type="checkbox" required
              #conditions="ngModel"&gt;
          Agree to terms and conditions
          &lt;label class="form-check-label" for="invalidCheck"&gt;
          &lt;/label&gt;
      &lt;/div&gt;
      &lt;span
          *ngIf="(conditions.touched && conditions.errors?.required) || (templateForm.submitted && conditions.errors?.required)"
          class="animated fadeIn text-danger"&gt;
          You must agree before submitting.
      &lt;/span&gt;
  &lt;/div&gt;
  &lt;div class="form-row"&gt;
      &lt;div class="col-md-3 mb-3"&gt;
          &lt;label for="validationCustom05"&gt;Country&lt;/label&gt;
          &lt;select [(ngModel)]="user.country" name="country" class="custom-select my-1 mr-sm-2"&gt;
              &lt;option selected value=""&gt;Choose...&lt;/option&gt;
              &lt;option *ngFor="let country of countries" [value]="country.code"&gt;{{country.name}}&lt;/option&gt;
          &lt;/select&gt;
      &lt;/div&gt;
      &lt;div class="col-md-3 mb-3"&gt;
          &lt;label&gt;Gender&lt;/label&gt;
          &lt;div class="form-check"&gt;
              &lt;input [(ngModel)]="user.gender" class="form-check-input" type="radio" name="gender" value="male"
                  checked&gt;
              &lt;label class="form-check-label"&gt;
                  Male
              &lt;/label&gt;
          &lt;/div&gt;
          &lt;div class="form-check"&gt;
              &lt;input [(ngModel)]="user.gender" class="form-check-input" type="radio" name="gender" value="female"&gt;
              &lt;label class="form-check-label"&gt;
                  Female
              &lt;/label&gt;
          &lt;/div&gt;
      &lt;/div&gt;
  &lt;/div&gt;
  &lt;button [disabled]="templateForm.invalid" class="btn btn-primary" type="submit"&gt;Submit form&lt;/button&gt;
&lt;/form&gt;`;
  
  codeTemplate2 = `import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ScriptService } from 'src/app/services/script.service';
import { HighlightService } from 'src/app/services/highlight.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  user: Object = {
    name: '',
    lastname: '',
    email: '',
    city: '',
    state: '',
    codezip: '',
    terms: null,
    country: '',
    gender: ''
  };

  countries = [
    {
      code: 'MX',
      name: 'México'
    },
    {
      code: 'ARG',
      name: 'Argentina'
    },
    {
      code: 'CRI',
      name: 'Costa Rica'
    },
    {
      code: 'CH',
      name: 'Chile'
    },
    {
      code: 'BR',
      name: 'Brasil'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  onSubmit(templateForm: NgForm) {
    console.log({ templateForm });
    console.log(templateForm.value);
    console.log(this.user);
  }
}`;

}
