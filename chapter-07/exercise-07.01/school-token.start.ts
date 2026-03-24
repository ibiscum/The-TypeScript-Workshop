// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
function Token (constructor: Function) {
    constructor.prototype.token = true;
}

@Token
class TeacherA {
    constructor (public id: number, public name: string) {}
    // teacher specific code
}

const teacherA = new TeacherA(1, "John Smith");
console.log("Does the teacher have a token? ",teacherA["token"]);


class StudentA {
    constructor (public id: number, public name: string) {}
    // student specific code
}

const studentA = new StudentA(101, "John Bender");
console.log("Does the student have a token? ",studentA["token"]);
