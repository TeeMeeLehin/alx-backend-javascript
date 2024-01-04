/* eslint class-methods-use-this: ["error", { "exceptMethods":
["validateName", "validateLength", "validateStudents"] }] */
export default class HolbertonCourse {
  constructor(name, length, students) {
    this.validateName(name);
    this.validateLength(length);
    this.validateStudents(students);

    this._name = name;
    this._length = length;
    this._students = students;
  }

  validateName(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
  }

  validateLength(length) {
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
  }

  validateStudents(students) {
    if (!Array.isArray(students) || !students.every((item) => typeof item === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this.validateName(newName);
    this._name = newName;
  }

  get length() {
    return this._length;
  }

  set length(newLength) {
    this.validateLength(newLength);
    this._length = newLength;
  }

  get students() {
    return this._students;
  }

  set students(newStudents) {
    this.validateStudents(newStudents);
    this._students = newStudents;
  }
}
