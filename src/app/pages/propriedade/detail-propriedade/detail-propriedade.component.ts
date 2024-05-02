import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-propriedade',
  templateUrl: './detail-propriedade.component.html',
  styleUrls: ['./detail-propriedade.component.css']
})
export class DetailPropriedadeComponent {
  currentView : string = '';
  tittle : string = '';
  currentAction: boolean = true;
  
  private setCurrentAction(): void {
    if(this.route.snapshot.url[0].path == 'new'){
      this.currentView = 'Nova propriedade';
      this.currentAction = false;
      return;
    }
    if (this.route.snapshot.url[1].path == 'viewProdutor') {
      this.currentView = 'Edição de propriedade';
      this.currentAction = false;
    } if (this.route.snapshot.url[1].path == 'viewTecnico') {
      this.currentView = 'Vizualização de propriedade';
      this.currentAction = true;
    }
  }
  
  constructor(private route: ActivatedRoute) { }
  
  ngOnInit() {
    this.setCurrentAction();
  }
}
