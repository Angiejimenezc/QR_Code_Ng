import { Component } from "@angular/core";

interface Datos {
  name: string;
  surname: string;
  email: string;
  phone: string;
  linkedIn?: string;
  web?: string;
}
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  
  codes: Datos[] = [];

  public values: string;
  public level: "L" | "M" | "Q" | "H";
  public width: number;
  public background: string;
  public data: Datos = {
    name: '',
    surname: '',
    email: '',
    phone: '',
    linkedIn: '',
    web: '',
  };

  constructor() {
    this.level = "L";
    this.values = JSON.stringify(this.data);
    this.width = 150;
    this.background = "white";
  }

    qrLevel(val: "L" | "M" | "Q" | "H") {
    this.level = val;
  }

    qrData(val: string) {
    let cliente = this.data;
    let clienteStr = JSON.stringify(this.data);
    console.log(clienteStr);
      this.codes.push({
         name: cliente.name,
         surname: cliente.surname,
         email: cliente.email,
         phone: cliente.phone,
         linkedIn: cliente.linkedIn,
         web: cliente.web,
    });
    let i: number;
    for (i = 0; i < this.codes.length; i++) {
      if (i == this.codes.length - 1) {
        clienteStr = JSON.stringify(this.codes[i]);
        this.values = clienteStr;
        val = clienteStr;
        console.log(val);
      }
    }
  }

    qrWidth(val: number) {
    this.width = val;
  }
    qrBackground(val: "RED" |"WHITE"|"GREEN" | "YELLOW") {
    switch (val) {
        case "RED":
        this.background = "#CC0000";
        break;
        case "WHITE":
        this.background = "#FFFFFF";
        break;
        case "GREEN":
        this.background = "#00FF00";
        break;
        case "YELLOW":
        this.background = "#FFFF00";
        break;
    }
  }

  

}
