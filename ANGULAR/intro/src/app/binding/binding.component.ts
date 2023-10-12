import { Component } from '@angular/core';

@Component({
  selector: 'binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent {
  //variabile utilizzata per l'interpolazione di stringa
  numTests: number = 25;

  //oggetto utilizzato per le proprietà
  car = {
    model: "Alfa Romeo Giulia",
    img:"https://upload.wikimedia.org/wikipedia/commons/7/74/Alfa_Romeo_Giulia_Super.jpg",
    available:false
  }

  // Variabili utilizzate per la proprietà vincolante class
  myClass:string = "red";
  setBlueClass:boolean = false;

  // Variabili utilizzate per la direttiva ngClass
  componentClasses = {
    show: true,
    warning: false
  }
  formOk:boolean = false;
  admin:boolean = false;

  // Oggetto utilizzato per la direttiva ngStyle
  componentStyle = {
    'width':'300px',
    'height.px':100,
    'backgroundColor':'forestgreen'
  }

  // Variabile utilizzata per "Two-way binding" con [(ngModel)]
  textSize:number = 20;
  username: string = "";
  voto:number=6;

  //Vetore utilizzato per la direttiva ngFor
  ingredients=[
    'avocado',
    'pomodoro',
    'lattuga',
    'maionese',
    'pancetta',
    'pane',
    'birra'
  ];

  //per generarlo automaticamente, premere alt invio sul richiamo all'evento
  getClick() {
    console.log("Btn clicked!");
    this.car.available = !this.car.available;
    this.setBlueClass = !this.setBlueClass;
    this.myClass = "blue";
    this.formOk = !this.formOk;
    this.admin = !this.admin;
  }

  inviaDati() {
    console.log("Nome utente inserito: "+this.username);
  }

  getColor() {
    if(this.voto>=6)
      return "lightgreen";
    else
      return "red";
  }

  delete(item:string) {
    this.ingredients = this.ingredients.filter(function (element){
      return element != item;
    });
  }
}
