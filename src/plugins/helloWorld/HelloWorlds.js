export default class helloWorlds {
  constructor() {
    this.examples = [
      '```\n' +
      'println("Hello World")\n' +
      '```',

      '```\n' +
      'object HelloWorld {\n' +
      '   def main(args: Array[String]) {\n' +
      '    println("Hello World")\n' +
      '  }\n' +
      '}\n' +
      '```',

      '```\n' +
      '#include<stdio.h>\n' +
      'main()\n' +
      '{\n' +
      '  printf("Hello World");\n' +
      '}\n' +
      '```',

      '```\n' +
      'print("Hello World")\n' +
      '```',

      '```\n' +
      'PRINT *, "Hello World"\n' +
      'END\n' +
      '```',

      '```\n' +
      'console.log("Hello World")\n' +
      '```',

      '```\n' +
      'puts "Hello World"\n ' +
      '```',

      '```\n' +
      '++++++++++[>+++++++>++++++++++>+++>+<<<<-]>++.>+.+++++++..+++.>++.<<+++++++++++++++.>.+++.------.--------.>+.>.\n' +
      '```',

      '```\n' +
      ' class HelloWorldApp {\n' +
      '    public static void main(String[] args) {\n' +
      '    System.out.println("Hello World!");\n' +
      '   }\n' +
      ' }\n' +
      '```',
    ];
  }

  getHelloWorld() {
    return this.examples[helloWorlds.getRandomInt(0, this.examples.length)];
  }

  static getRandomInt(min, max) {
    const newMin = Math.ceil(min);
    const newMax = Math.floor(max);
    return Math.floor(Math.random() * (newMax - newMin)) + newMin;
  }
}
