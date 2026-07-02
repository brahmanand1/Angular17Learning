import { Component, signal } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
    selector : 'parent',
    templateUrl : './parent.component.html',
    standalone : true,
    imports : [RouterOutlet]
})

export class ParentComponent{
   name =  signal("from parent name is---------");

    changeNameEmit(value : string){
        console.log("flow is comming on pafrent component")
      console.log(value);
    }

}