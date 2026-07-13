import { Component } from '@angular/core';

@Component({
  selector: 'calculator',
  imports: [],
  templateUrl: './calculator.html',
  styleUrl: './calculator.css',
})
export class Calculator {
  point() {
    if (this.FirstNumber.includes('.')) {
      return;
    }
  }
  equal() {
    if (this.operator == '+') {
      this.FirstNumber = (Number(this.FirstNumber) + Number(this.SecondNumber)).toString();
    }
    else if (this.operator == '*') {
      this.FirstNumber = (Number(this.FirstNumber) * Number(this.SecondNumber)).toString();
    }
    else if (this.operator == '/') {
      this.FirstNumber = (Number(this.FirstNumber) / Number(this.SecondNumber)).toString();
    }
    else if (this.operator == '-') {
      this.FirstNumber = (Number(this.SecondNumber) - Number(this.FirstNumber)).toString();
    }
    this.SecondNumber = '0';
    this.operator = '';
  }
  del() {
    let fn: string = this.FirstNumber;
    let main: string = fn.slice(0, fn.length - 1);
    this.FirstNumber = main;
    if (this.FirstNumber == '') {
      this.FirstNumber = '0';
    }
  }
  ac() {
    this.FirstNumber = '0';
    this.SecondNumber = '0';
    this.operator = '';
  }
  operatorF(operator: string) {
    this.operator = operator;
    this.SecondNumber = this.FirstNumber;
    this.FirstNumber = '0';
  }
  button(digit: string) {
    this.FirstNumber = Number(this.FirstNumber + digit).toString();
  }
  FirstNumber: string = '0'
  SecondNumber: string = '0'
  operator: string = ''
}
