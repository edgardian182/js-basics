// Using classes to build a catalog of schools for the Department of Education.

/*
  1. Build a School class (name, level, numberOfStudents)
  2. Create properties getters
  3. Create a setter for numberOfStudents --> must be a number or generate an error message
  4. Generate a quickFacts method to get a summary of the school
  5. Create a static method pickSubstituteTeacher from a passed Array
  6. Create a PrimarySchool subclass from School with a pickUpPolicy property and getter
  7. Create a HighSchool subclass from School with a sportsTeams property and getter
  8. Create an instance of Primaty and High School
*/

class Shcool {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }

  get name() {
    return this._name;
  }

  get level() {
    return this._level;
  }

  get numberOfStudents() {
    return this._numberOfStudents;
  }

  set numberOfStudents(newNumberOfStudents) {
    if (typeof newNumberOfStudents === 'number') {
      this._numberOfStudents = newNumberOfStudents;
    } else {
      console.log('Invalid input: numberOfStudents must be a Number');
      return 'Invalid input: numberOfStudents must be a Number';
    }
  }

  quickFacts() {
    console.log(`${this._name} educates ${this._numberOfStudents} students at ${this._level} level`);
  }

  static pickSubstituteTeacher(substituteTeachers) {
    return substituteTeachers[Math.floor(Math.random() * substituteTeachers.length)];
  }
}

// Primary School
class PrimarySchool extends Shcool {
  constructor(name, numberOfStudents, pickUpPolicy) {
    super(name, 'primary', numberOfStudents);
    this._pickUpPolicy = pickUpPolicy;
  }

  get pickUpPolicy() {
    return this._pickUpPolicy;
  }
}

// High School
class HighSchool extends Shcool {
  constructor(name, numberOfStudents, sportsTeams) {
    super(name, 'high', numberOfStudents);
    this._sportsTeams = sportsTeams;
  }

  get sportsTeams() {
    return this._sportsTeams;
  }
}

const chesterPalmer = new PrimarySchool('Chester Palmer', 455, 'Students must be picked up by their parents or a subscribed adult');
chesterPalmer.quickFacts();
console.log(chesterPalmer.pickUpPolicy);

const rosario = new HighSchool('Rosario', 311, ['soccer', 'basketball', 'baseball']);
rosario.quickFacts();
rosario.numberOfStudents = 478;
console.log('new number of students:', rosario.numberOfStudents);
console.log('sport teams:', rosario.sportsTeams);