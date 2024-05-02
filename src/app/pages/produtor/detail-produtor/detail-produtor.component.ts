import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-produtor',
  templateUrl: './detail-produtor.component.html',
  styleUrls: ['./detail-produtor.component.css']
})
export class DetailProdutorComponent {
currentView : string = '';
tittle : string = '';

private setCurrentAction(): void {
  if (this.route.snapshot.url[1].path == 'viewProdutor') {
    this.currentView = 'produtor';
  } else {
    this.currentView = 'tecnico';
  }
}

constructor(private route: ActivatedRoute) { }

ngOnInit() {
  this.setCurrentAction();
  this.tittle = this.currentView == 'produtor' ? 'Produtor' : 'Técnico';
}

}
