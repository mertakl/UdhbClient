import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  constructor(public snackBar: MatSnackBar) {
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  enumSelector(definition) {
    return Object.keys(definition)
      .map(key => ({value: definition[key], title: key}));
  }
}
