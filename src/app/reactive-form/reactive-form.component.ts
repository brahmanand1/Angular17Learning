import { Component } from "@angular/core";
import { SharedImports } from "../shared-imports";
import { AbstractControl, FormControl, FormGroup, Validators } from "@angular/forms";
@Component({
    selector : 'reactive-form',
    templateUrl : './reactive-form.component.html',
    styleUrls : ['./reactive-form.component.css'],
    standalone : true,
    imports : [SharedImports]
})

export class ReactiveFormComponent{

form : FormGroup<any>;


constructor(){
    this.form = new FormGroup({
        name : new FormControl('',[Validators.required,Validators.minLength(5),this.checkName]),
        password : new FormControl('',[Validators.required,Validators.minLength(10)]),
        conPassword : new FormControl(''),
        gender : new FormControl('', [Validators.required]),
        hobby : new FormGroup({
            reading : new FormControl(false),
            writing : new FormControl(false),
            playing : new FormControl(false)
        },{validators : this.hobbyVali})
    },{ validators: this.passwordMatch })

}

resethobby(){
    // this.form.controls['hobby'];
    // const hobby= this.form.controls['hobby']
    // ((this.form.get('hobby') as FormGroup).get('reading') as FormControl).setValue(true)
    // this.form.get('hobby.reading')?.setValue(true)
    this.form.reset({
        name: 'John',
        password: '',
        conPassword: '',
        gender: 'male',
      });
}

hobbyVali = (formGroup : any)=>{
    console.log("This is checkbox validation",formGroup)
    const controls = formGroup.controls;
    const checkedHobbies = Object.values(controls).filter((control:any) => control.value === true);

    if(checkedHobbies.length < 2){
        return {hobbyError : true}
    }
    return null;
}



checkName = (control : AbstractControl) => {
    console.log("This is check name",control)
   const value = control.value;
   if(value?.includes(' ')){
    return {checkName : true}
   }
   return null ;
}

passwordMatch = (abc : any)=>{
    console.log("this is password match ",abc)
    const password = abc.get('password')?.value;
    const conPassword = abc.get('conPassword')?.value;
    
    if (!password || !conPassword) {
        return null; // Don't validate if either field is empty
    }
    
    return password === conPassword ? null : { passwordMismatch: true };
}

resetGender(){
    this.form.get('gender')?.setValue('')
}

save(){
    console.log(this.form.value)
}


}