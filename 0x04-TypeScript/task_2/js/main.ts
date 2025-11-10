/** --------------------------
 * 1. Interfaces
 * -------------------------- */

// Director interface
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// Teacher interface
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}


/** --------------------------
 * 2. Classes implementing interfaces
 * -------------------------- */

// Director class
class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

// Teacher class
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}


/** --------------------------
 * 3. createEmployee Function
 * -------------------------- */
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  } else if (typeof salary === 'string') {
    const salaryNumber = parseInt(salary, 10);
    if (salaryNumber < 500) {
      return new Teacher();
    }
    return new Director();
  } else {
    return new Director();
  }
}


/** --------------------------
 * 4. Example usage
 * -------------------------- */

// Director example
const directorEmployee = createEmployee(1000);
console.log(directorEmployee.workFromHome());        // Working from home
console.log('Director tasks:', (directorEmployee as Director).workDirectorTasks());

// Teacher example
const teacherEmployee = createEmployee(200);
console.log(teacherEmployee.workFromHome());         // Cannot work from home
console.log('Teacher tasks:', (teacherEmployee as Teacher).workTeacherTasks());

// Salary as string example
const employeeFromString = createEmployee('400');
console.log(employeeFromString.workFromHome());      // Cannot work from home
