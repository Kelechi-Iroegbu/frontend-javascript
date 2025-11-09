// Define the Teacher interface
interface Teacher {
  readonly firstName: string;      // Only modifiable during initialization
  readonly lastName: string;       // Only modifiable during initialization
  fullTimeEmployee: boolean;       // Must always be defined
  yearsOfExperience?: number;      // Optional
  location: string;                // Must always be defined
  [key: string]: any;              // Allows any additional properties (e.g. contract)
}

// Example object
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false, // Extra property allowed
};


// Define the Teacher interface
interface Teacher {
  readonly firstName: string;      // Only modifiable when initialized
  readonly lastName: string;       // Only modifiable when initialized
  fullTimeEmployee: boolean;       // Must always be defined
  yearsOfExperience?: number;      // Optional
  location: string;                // Must always be defined
  [key: string]: any;              // Allows any extra attributes
}

// Define the Directors interface that extends Teacher
interface Directors extends Teacher {
  numberOfReports: number;         // Required for Directors
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
