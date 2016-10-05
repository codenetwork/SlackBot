class helloWorlds {
  constructor() {
    this.examples = [
      '#  cat test.jl\
      println("Hello World")',

      'object HelloWorld {\
        def main(args: Array[String]) {\
          println("Hello World")\
        }\
      }',

      '#include<stdio.h>\
      main()\
      {\
        printf("Hello World");\
      }',

      'print("Hello World")',

      'PRINT *, "Hello World"\
      END',
      'console.log("Hello World")',

      'puts "Hello World"',
      '++++++++++[>+++++++>++++++++++>+++>+<<<<-]>++.>+.+++++++..+++.>++.<<+++++++++++++++.>.+++.------.--------.>+.>.',
      'class HelloWorldApp {\
         public static void main(String[] args) {\
         System.out.println("Hello World!");\
        }\
      }',
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

export default helloWorlds;
