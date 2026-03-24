/////////////////////////
const loggerA = {
    info: (message: string) => {
        console.log(`[INFO]: ${message}`);
    },
};

type ConstructableB = { new (...args: any[]): object };

function LogClass(message: string) {
    return function <T extends ConstructableB>(constructor: T) {
        const loggingConstructor: any = function(...args: unknown[]){
            loggerA.info(message);
            return new constructor(...args);
        }
        loggingConstructor.prototype = constructor.prototype;
        return loggingConstructor;
    };
}

//////////////////////

@LogClass("Teacher decorator")
class TeacherE {
    constructor(public id: number, public name: string) {
        console.log("Constructing a teacher");
    }
}
/////////////////////////
const teacherE = new TeacherE(1, "John Smith");
console.log("Teacher name: ", teacherE.name,  "Teacher id: ", teacherE.id);

for (let index = 0; index < 10; index++) {
    const louAnne = new TeacherE(index +1, "LouAnne Johnson");
    console.log("Teacher name: ", louAnne.name,  "Teacher id: ", louAnne.id);
}

