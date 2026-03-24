type ConstructableA = { new(...args: unknown[]): object };

function Token(hasToken: boolean) {
  return function <T extends ConstructableA>(constructor: T) {
    return class extends constructor {
      token: boolean = hasToken;
    }
  }
}

@Token(true)
class TeacherD {
  constructor(public id: number, public name: string) { }
  // teacher specific code
}

const teacherD = new TeacherD(1, "John Smith");
console.log("Do we have a token:", teacherD["token"]);
console.log("Do we have a token property: ", Object.prototype.hasOwnProperty.call(teacherD, "token"));

