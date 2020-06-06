const { setWorldConstructor } = require("cucumber");

class CustomWorld {
  constructor() {
    this.variable = 0;
    this.testData = {};
  }

  setTestData(key, value){
    this.testData[key] = value;
  }

  getTestData(){
    return this.testData;
  }

  setTo(number) {
    this.variable = number;
  }

  incrementBy(number) {
    this.variable += number;
  }
}

setWorldConstructor(CustomWorld);