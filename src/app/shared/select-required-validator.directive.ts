import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
import { Directive, Input } from '@angular/core';

@Directive({
        selector: '[appSelectValidator]',
        providers: [{
           provide: NG_VALIDATORS,
           useExisting: SelectRequiredDirective,
           multi: true
        }]
})

export class SelectRequiredDirective implements Validator {

    // tslint:disable-next-line:no-input-rename
    @Input('appSelectValidator') defaultValue: string;

    validate(control: AbstractControl): { [key: string]: any; } | null {
        return control.value === this.defaultValue ? {'defaultSelected' : true} : null;
    }

}
