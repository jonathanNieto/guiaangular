import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { ScriptService } from 'src/app/services/script.service';
import { HighlightService } from 'src/app/services/highlight.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  dataForm: FormGroup;

  user = {
    fullName: {
      name: 'John',
      lastname: 'Doe'
    },
    email: 'john.doe@mail.com',
    username: 'john.doe',
    password: '1',
    confirm: '2',
    hobbies: ['running', 'drawing', 'fishing']
  };

  highlighted: boolean = false;
  constructor(private scriptService: ScriptService, private highlightService: HighlightService) {
    scriptService
      .load('prism')
      .then(data => { });

    this.dataForm = new FormGroup({

      'fullName': new FormGroup({
        'name': new FormControl(
          '', [Validators.required, Validators.minLength(3)]
        ),
        'lastname': new FormControl('', Validators.required)
      }),
      'email': new FormControl(
        '',
        [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$")]
      ),
      'username': new FormControl('', Validators.required, this.existsUsername),
      'password': new FormControl('', Validators.required),
      'confirm': new FormControl(),
      'hobbies': new FormArray([
        new FormControl('', Validators.required),
        new FormControl('', Validators.required),
        new FormControl('', Validators.required),
      ])
    });

    /* this.dataForm.valueChanges.subscribe((data) =&gt; {
      console.log(data);
    }) */
    
    this.dataForm.controls['username'].valueChanges.subscribe((data) => {
      console.log(data);
    })

    this.dataForm.controls['username'].statusChanges.subscribe((data) => {
      console.log(data);
    })

    this.dataForm.setValue(this.user);

    this.dataForm.get('confirm').setValidators([
      Validators.required, this.notEqual.bind(this.dataForm)
    ]);
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

  onSubmit() {
    console.log(this.dataForm);
    this.dataForm.reset(this.user);
  }

  addHobbie() {
    (<FormArray>this.dataForm.controls['hobbies']).push(
      new FormControl('', Validators.required)
    );
  }

  notEqual(control: FormControl): { [s: string]: boolean } {
    const dataForm: any = this;
    if (control.value !== dataForm.controls['password'].value) {
      return { notEqual:true}
    }
    return null;
  }

  existsUsername(control: FormControl): Promise<any> | Observable<any> {
    let promesa = new Promise( (resolve, reject) => {
      setTimeout(() => {
        if (control.value === "john.doe") {
          resolve({ exists: true });
        } else {
          resolve(null);
        }
      }, 3000);
    })
    return promesa;
  }


  /* variables para renderizar html */
  codeDataForm0 = `dataForm: FormGroup;
  
constructor() {
  this.dataForm = new FormGroup({
    'name': new FormControl('John'),
    'lastname': new FormControl('Doe'),
    'email': new FormControl(),
    'password': new FormControl()
  });
}`;
  codeDataForm1 = `&lt;form [formGroup]="dataForm" (ngSubmit)="onSubmit()" novalidate&gt;`;
  codeDataForm2 = `&lt;input type="text" class="form-control" placeholder="Name" formControlName="name"&gt;`;

  codeDataForm3 = `constructor() {
  this.dataForm = new FormGroup({
    'name': new FormControl('', Validators.required),
    'lastname': new FormControl('', Validators.required),
    'email': new FormControl(
      '',
      [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$")]
    ),
    'password': new FormControl('', Validators.required)
  });
}`;

  codeDataForm4 = `&lt;input type="text" class="form-control" placeholder="Name" formControlName="name" 
[ngClass]="{'is-invalid': ( 
                dataForm.controls['name'].touched && 
                (dataForm.controls['name'].errors?.required || dataForm.controls['name'].errors?.minlength) 
                ),
                'is-valid': (dataForm.controls['name'].touched && dataForm.controls['name'].valid)}"&gt;
&lt;div class="animated fadeIn invalid-feedback"&gt;
    &lt;span *ngIf="dataForm.controls['name'].touched && dataForm.controls['name'].errors?.required"&gt;Please
        type your name.&lt;/span&gt;
    &lt;span *ngIf="dataForm.controls['name'].touched && dataForm.controls['name'].errors?.minlength"&gt;At least
        {{dataForm.controls['name'].errors.minlength.requiredLength}} characters.&lt;/span&gt;
&lt;/div&gt;`

  codeDataForm5 = `notEqual(control: FormControl): { [s: string]: boolean } {
  const dataForm: any = this;
  if (control.value !== dataForm.controls['password'].value) {
    return { notEqual:true}
  }
  return null;
}`;
  
  codeDataForm6 = `this.dataForm.get('confirm').setValidators([
  Validators.required, this.notEqual.bind(this.dataForm)
]);`
  
  codeDataForm7 = `existsUsername(control: FormControl): Promise&lt;any&gt; | Observable&lt;any&gt; {
  let promesa = new Promise( (resolve, reject) =&gt; {
    setTimeout(() =&gt; {
      if (control.value === "john.doe") {
        resolve({ exists: true });
      } else {
        resolve(null);
      }
    }, 3000);
  })
  return promesa;
}`;
  codeDataForm8 = `this.dataForm = new FormGroup({
  'fullName': new FormGroup({
    'name': new FormControl(
      '', [Validators.required, Validators.minLength(3)]
    ),
    'lastname': new FormControl('', Validators.required)
  }),
  'email': new FormControl(
    '',
    [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$")]
  ),
  'username': new FormControl('', Validators.required, this.existsUsername),
  'password': new FormControl('', Validators.required),
  'confirm': new FormControl(),
  'hobbies': new FormArray([
    new FormControl('', Validators.required),
    new FormControl('', Validators.required),
    new FormControl('', Validators.required),
  ])
});`;

  codeDataForm9 = `&lt;form [formGroup]="dataForm" (ngSubmit)="onSubmit()" novalidate&gt;
 &lt;div formGroupName="fullName"&gt;
     &lt;div class="form-group row"&gt;
         &lt;label class="col-sm-2 col-form-label"&gt;Name&lt;/label&gt;
         &lt;div class="col-sm-10"&gt;
             &lt;input type="text" class="form-control" placeholder="Name" formControlName="name"
                 [ngClass]="{'is-invalid': ( 
                         dataForm.get('fullName.name').touched && 
                         (dataForm.get('fullName.name').errors?.required || dataForm.get('fullName.name').errors?.minlength) 
                         ),
                         'is-valid': (dataForm.get('fullName.name').touched && dataForm.get('fullName.name').valid)}"&gt;
             &lt;div class="animated fadeIn invalid-feedback"&gt;
                 &lt;span
                     *ngIf="dataForm.get('fullName.name').touched && dataForm.get('fullName.name').errors?.required"&gt;Please
                     type your name.&lt;/span&gt;
                 &lt;span
                     *ngIf="dataForm.get('fullName.name').touched && dataForm.get('fullName.name').errors?.minlength"&gt;At
                     least
                     {{dataForm.get('fullName.name').errors.minlength.requiredLength}} characters.&lt;/span&gt;
             &lt;/div&gt;
         &lt;/div&gt;
     &lt;/div&gt;
     &lt;div class="form-group row"&gt;
         &lt;label class="col-sm-2 col-form-label"&gt;Lastname&lt;/label&gt;
         &lt;div class="col-sm-10"&gt;
             &lt;input type="email" class="form-control" placeholder="Lastname" formControlName="lastname"
                 [ngClass]="{'is-invalid': ( 
                         dataForm.get('fullName.lastname').touched && 
                         (dataForm.get('fullName.lastname').errors?.required || dataForm.get('fullName.lastname').errors?.minlength) 
                         ),
                         'is-valid': (dataForm.get('fullName.lastname').touched && dataForm.get('fullName.lastname').valid)}"&gt;
             &lt;div class="animated fadeIn invalid-feedback"&gt;
                 &lt;span
                     *ngIf="dataForm.get('fullName.lastname').touched && dataForm.get('fullName.lastname').errors?.required"&gt;Please
                     type your lastname.&lt;/span&gt;
                 &lt;span
                     *ngIf="dataForm.get('fullName.lastname').touched && dataForm.get('fullName.lastname').errors?.minlength"&gt;At
                     least
                     {{dataForm.get('fullName.lastname').errors.minlength.requiredLength}} characters.&lt;/span&gt;
             &lt;/div&gt;
         &lt;/div&gt;
     &lt;/div&gt;
 &lt;/div&gt;
 &lt;div class="form-group row"&gt;
     &lt;label class="col-sm-2 col-form-label"&gt;Email&lt;/label&gt;
     &lt;div class="col-sm-10"&gt;
         &lt;input type="email" class="form-control" placeholder="Email" formControlName="email" [ngClass]="{'is-invalid': ( 
                         dataForm.get('email').touched && 
                         (dataForm.controls['email'].errors?.required || dataForm.controls['email'].errors?.pattern) 
                         ),
                         'is-valid': (dataForm.controls['email'].touched && dataForm.controls['email'].valid)}"&gt;
         &lt;div class="animated fadeIn invalid-feedback"&gt;
             &lt;span *ngIf="dataForm.controls['email'].touched && dataForm.controls['email'].errors?.required"&gt;Please
                 type your email.&lt;/span&gt;
             &lt;span *ngIf="dataForm.controls['email'].touched && dataForm.controls['email'].errors?.pattern"&gt;Please
                 type
                 a valid email.&lt;/span&gt;
         &lt;/div&gt;
     &lt;/div&gt;
 &lt;/div&gt;
 &lt;div class="form-group row"&gt;
     &lt;label class="col-sm-2 col-form-label"&gt;Username&lt;/label&gt;
     &lt;div class="col-sm-10"&gt;
         &lt;input type="text" class="form-control" placeholder="Email" formControlName="username" [ngClass]="{'is-invalid': ( 
                         dataForm.get('username').touched && 
                         (dataForm.get('username').errors?.required || dataForm.get('username').errors?.pattern || dataForm.get('username').errors?.exists) 
                         ),
                         'is-valid': (dataForm.get('username').touched && dataForm.get('username').valid)}"&gt;
         &lt;div class="animated fadeIn invalid-feedback"&gt;
             &lt;span *ngIf="dataForm.get('username').touched && dataForm.controls['email'].errors?.required"&gt;Please
                 type your username.&lt;/span&gt;
             &lt;span *ngIf="dataForm.get('username').touched && dataForm.get('username').errors?.exists"&gt;
                 Username already exists.
             &lt;/span&gt;
         &lt;/div&gt;
     &lt;/div&gt;
 &lt;/div&gt;
 &lt;div class="form-group row"&gt;
     &lt;label class="col-sm-2 col-form-label"&gt;Password&lt;/label&gt;
     &lt;div class="col-sm-10"&gt;
         &lt;input type="password" class="form-control" placeholder="Password" formControlName="password"
             [ngClass]="{'is-invalid': ( 
                         dataForm.controls['password'].touched && 
                         (dataForm.controls['password'].errors?.required || dataForm.controls['password'].errors?.minlength) 
                         ),
                         'is-valid': (dataForm.controls['password'].touched && dataForm.controls['password'].valid)}"&gt;
         &lt;div class="animated fadeIn invalid-feedback"&gt;
             &lt;span
                 *ngIf="dataForm.controls['password'].touched && dataForm.controls['password'].errors?.required"&gt;Please
                 type your password.&lt;/span&gt;
             &lt;span
                 *ngIf="dataForm.controls['password'].touched && dataForm.controls['password'].errors?.minlength"&gt;At
                 least
                 {{dataForm.controls['password'].errors.minlength.requiredLength}} characters.&lt;/span&gt;
         &lt;/div&gt;
     &lt;/div&gt;
 &lt;/div&gt;
 &lt;div class="form-group row"&gt;
     &lt;label class="col-sm-2 col-form-label"&gt;Confirm Password&lt;/label&gt;
     &lt;div class="col-sm-10"&gt;
         &lt;input type="password" class="form-control" placeholder="Confirm Password" formControlName="confirm"
             [ngClass]="{'is-invalid': ( 
                         dataForm.get('confirm').touched && 
                         (dataForm.get('confirm').errors?.required || dataForm.get('confirm').errors?.minlength || dataForm.get('confirm').errors?.notEqual) 
                         ),
                         'is-valid': (dataForm.get('confirm').touched && dataForm.get('confirm').valid)}"&gt;
         &lt;div class="animated fadeIn invalid-feedback"&gt;
             &lt;span *ngIf="dataForm.get('confirm').touched && dataForm.get('confirm').errors?.required"&gt;Please
                 type your confirm.&lt;/span&gt;
             &lt;span *ngIf="dataForm.get('confirm').touched && dataForm.get('confirm').errors?.minlength"&gt;At
                 least
                 {{dataForm.get('confirm').errors.minlength.requiredLength}} characters.&lt;/span&gt;
             &lt;span *ngIf="dataForm.get('confirm').touched && dataForm.get('confirm').errors?.notEqual"&gt;
                 Password and confirm password are not equal.
             &lt;/span&gt;
         &lt;/div&gt;
     &lt;/div&gt;
 &lt;/div&gt;
 &lt;div class="form-group row"&gt;
     &lt;label class="col-sm-2 col-form-label"&gt;Hobbies&lt;/label&gt;
     &lt;div class="col-sm-8" formArrayName="hobbies"&gt;
         &lt;input *ngFor="let hobbie of dataForm.get('hobbies').controls; let i = index" type="text"
             class="form-control mb-3" formControlName={{i}}&gt;
     &lt;/div&gt;
     &lt;div class="col-sm-1"&gt;
         &lt;button (click)="addHobbie()" type="button" class="btn btn-primary"&gt;Nuevo&lt;/button&gt;
     &lt;/div&gt;
 &lt;/div&gt;
 &lt;div class="form-group row"&gt;
     &lt;div class="col-sm-10"&gt;
         &lt;button type="submit" class="btn btn-primary"&gt;Sign in&lt;/button&gt;
     &lt;/div&gt;
 &lt;/div&gt;
&lt;/form&gt;`;

  codeDataForm10 = `import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { ScriptService } from 'src/app/services/script.service';
import { HighlightService } from 'src/app/services/highlight.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  dataForm: FormGroup;

  user = {
    fullName: {
      name: 'John',
      lastname: 'Doe'
    },
    email: 'john.doe@mail.com',
    username: 'john.doe',
    password: '1',
    confirm: '2',
    hobbies: ['running', 'drawing', 'fishing']
  };

  constructor() {
    this.dataForm = new FormGroup({
      'fullName': new FormGroup({
        'name': new FormControl(
          '', [Validators.required, Validators.minLength(3)]
        ),
        'lastname': new FormControl('', Validators.required)
      }),
      'email': new FormControl(
        '',
        [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$")]
      ),
      'username': new FormControl('', Validators.required, this.existsUsername),
      'password': new FormControl('', Validators.required),
      'confirm': new FormControl(),
      'hobbies': new FormArray([
        new FormControl('', Validators.required),
        new FormControl('', Validators.required),
        new FormControl('', Validators.required),
      ])
    });

    /* Escuchar eventos de cambios en el formulario completo o en inputs especificos */
    this.dataForm.valueChanges.subscribe((data) =&gt; {
      console.log(data);
    });
    
    this.dataForm.controls['username'].valueChanges.subscribe((data) =&gt; {
      console.log(data);
    });

    this.dataForm.controls['username'].statusChanges.subscribe((data) =&gt; {
      console.log(data);
    });

    this.dataForm.setValue(this.user);

    this.dataForm.get('confirm').setValidators([
      Validators.required, this.notEqual.bind(this.dataForm)
    ]);
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.dataForm);
    this.dataForm.reset(this.user);
  }

  addHobbie() {
    (&lt;FormArray&gt;this.dataForm.controls['hobbies']).push(
      new FormControl('', Validators.required)
    );
  }

  notEqual(control: FormControl): { [s: string]: boolean } {
    const dataForm: any = this;
    if (control.value !== dataForm.controls['password'].value) {
      return { notEqual:true}
    }
    return null;
  }

  existsUsername(control: FormControl): Promise&lt;any&gt; | Observable&lt;any&gt; {
    let promesa = new Promise( (resolve, reject) =&gt; {
      setTimeout(() =&gt; {
        if (control.value === "john.doe") {
          resolve({ exists: true });
        } else {
          resolve(null);
        }
      }, 3000);
    })
    return promesa;
  }
}`;
}
