class TeacherF {
  constructor(public name: string) { }

  private _title: string = "";

  public get title() {
    return this._title;
  }

  public set title(value: string) {
    this._title = value;
  }

  public teach() {
    console.log(`${this.name} is teaching`)
  }
}

const teacherF = new TeacherF("John Smith");
for (const key in teacherF) {
  console.log(key);
}
