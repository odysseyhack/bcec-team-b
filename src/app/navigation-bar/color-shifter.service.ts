import {Injectable} from "@angular/core";
import {Subject} from "rxjs";

@Injectable()
export class ColorShifterService {

  newColor: Subject<string>;

  constructor() {
    this.newColor = new Subject();
    this.newColor.asObservable();
  }

  changeColor(colorCode: string) {
    this.newColor.next(colorCode);
  }

}
