import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.css']
})
export class AddButtonComponent {
  currentView : string = '';
  tittle : string = '';
  currentAction: boolean = true;
  
  setCurrentAction(): void {
  if (this.route.snapshot.url[1].path == 'viewProdutor') {
    this.currentView = 'produtor';
    this.currentAction = false;
  } else {
    this.currentView = 'tecnico';
    this.currentAction = true;
  }
}

constructor(private route: ActivatedRoute) { }

ngOnInit() {
  this.setCurrentAction();
  this.tittle = this.currentView == 'produtor' ? 'Produtor' : 'Técnico';
}
}
