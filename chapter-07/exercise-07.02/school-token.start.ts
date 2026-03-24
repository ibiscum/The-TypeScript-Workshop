class TeacherC {
    constructor (public id: number, public name: string) {}
    // teacher specific code
}

const teacherC = new TeacherC(1, "John Smith");
console.log("Do we have a token:", teacherC["token"]);
console.log("Do we have a token property: ", Object.prototype.hasOwnProperty.call(teacherC, "token"));
