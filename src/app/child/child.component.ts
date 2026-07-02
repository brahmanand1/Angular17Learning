import { Component, Output,Input, EventEmitter} from '@angular/core';

@Component({
    selector : 'child',
    templateUrl : './child.component.html',
    standalone : true

})

export class ChildComponent{

@Input() name : any ;
@Output() changeName = new EventEmitter();

ngOnInit(): void {
    console.log('calling fro child component')
    this.changeName.emit("name got vhanged")
}

}