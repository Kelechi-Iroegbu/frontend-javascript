// Define the Teacher interface
interface Teacher {
  readonly firstName: string;      // Only modifiable during initialization
  readonly lastName: string;       // Only modifiable during initialization
  fullTimeEmployee: boolean;       // Must always be defined
  yearsOfExperience?: number;      // Optional
  location: string;                // Must always be defined
  [key: string]: any;              // Allows any extra attributes
}

// Define the Directors interface extending Teacher
interface Directors extends Teacher {
  numberOfReports: number;         // Mandatory new property
}

// Example object
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

// Output the object
/ Define the Teacher interface
interface Teacher {
  readonly firstName: string;      // Only modifiable at initialization
  readonly lastName: string;       // Only modifiable at initialization
  fullTimeEmployee: boolean;       // Must always be defined
  yearsOfExperience?: number;      // Optional
  location: string;                // Must always be defined
  [key: string]: any;              // Allows extra attributes like contract
}

// Define the Directors interface extending Teacher
interface Directors extends Teacher {
  numberOfReports: number;         // Required property for Directors
}

// Example usage
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);
console.log(director1);
