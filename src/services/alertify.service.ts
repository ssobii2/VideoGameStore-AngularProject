// @ts-nocheck
import { Injectable } from '@angular/core';
import * as alertify from 'alertifyjs';

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  // function for success alert message
  success(message: string) {
    alertify.success(message);
  }

  // function for warning alert message
  warning(message: string) {
    alertify.warning(message);
  }

  // function for error alert message
  error(message: string) {
    alertify.error(message);
  }
}
