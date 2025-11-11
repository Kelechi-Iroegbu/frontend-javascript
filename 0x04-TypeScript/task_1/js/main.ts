nterface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Alice',
  lastName: 'Johnson',
  age: 22,
  location: 'Lagos',
};

const student2: Student = {
  firstName: 'Bob',
  lastName: 'Smith',
  age: 24,
  location: 'Abuja',
};

const studentsList: Student[] = [student1, student2];

// Render table
const table: HTMLTableElement = document.createElement('table');
const headerRow: HTMLTableRowElement = document.createElement('tr');

const headerFirstName: HTMLTableCellElement = document.createElement('th');
headerFirstName.textContent = 'First Name';

const headerLocation: HTMLTableCellElement = document.createElement('th');
headerLocation.textContent = 'Location';

headerRow.appendChild(headerFirstName);
headerRow.appendChild(headerLocation);
table.appendChild(headerRow);

studentsList.forEach((student: Student): void => {
  const row: HTMLTableRowElement = document.createElement('tr');

  const firstNameCell: HTMLTableCellElement = document.createElement('td');
  firstNameCell.textContent = student.firstName;

  const locationCell: HTMLTableCellElement = document.createElement('td');
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

table.style.border = '1px solid black';
table.style.borderCollapse = 'collapse';
table.style.marginTop = '20px';
table.style.width = '50%';
table.style.textAlign = 'left';
table.style.fontFamily = 'Arial, sans-serif';

document.body.appendChild(table);


/** --------------------------
 * 2. Teacher + Director
 * -------------------------- */
interface Teacher {
  readonly firstName: string;   // only modifiable at initialization
  readonly lastName: string;    // only modifiable at initialization
  fullTimeEmployee: boolean;    // always required
  location: string;             // always required
  yearsOfExperience?: number;   // optional
  [key: string]: any;           // allow additional properties
}

interface Director extends Teacher{
  numberOfReports: number;
}

const director1: Director = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

interface Teacher {
  firstName: string;
  lastName: string;
}

interface printTeacherFunction {
  (teacher: Teacher): string;
}

const printTeacher: printTeacherFunction = ({ firstName, lastName }) => {
  //return `${firstName.charAt(0)}. ${lastName}`;
  return `${firstName}. ${lastName}`;
};

// Example usage
console.log(printTeacher({ firstName: 'John', lastName: 'Doe' })); // J. Doe

/** --------------------------
 * 4. StudentClass + Interfaces
 * -------------------------- */
interface StudentClassInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage
const studentObj = new StudentClass('Alice', 'Johnson');
console.log(studentObj.displayName());     // Alice
console.log(studentObj.workOnHomework());  // Currently working


/** --------------------------
 * 5. Teacher with dynamic attributes
 * -------------------------- */
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,   // dynamically added property
};

console.log(teacher3);
