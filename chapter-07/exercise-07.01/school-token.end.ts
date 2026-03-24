function Token(hasToken: boolean) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  return function (constructor: Function) {
    constructor.prototype.token = hasToken;
  }
}

@Token(true)
class TeacherB {
  constructor(public id: number, public name: string) { }
  // teacher specific code
}

const teacherB = new TeacherB(1, "John Smith");
console.log("Does the teacher have a token? ", teacherB["token"]);

@Token(false)
class Student {
  constructor(public id: number, public name: string) { }
  // student specific code
}

const student = new Student(101, "John Bender");
console.log("Does the student have a token? ", student["token"]);
