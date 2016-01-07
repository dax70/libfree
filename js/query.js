import { filter, map, reduce } from './pull';

export const ExpressionType {

}

export class MethodCall {

  constructor(name, expression) {
    this.name = name;
    this.expression = expression
  }

  toString() {
    return `Method: ${this.name} - ${this.expression}`;
  }

}

export class Provider {

  constructor() {

  }



}
