// Define the Teacher interface
interface Teacher {
  readonly firstName: string;      // Only modifiable at initialization
  readonly lastName: string;       // Only modifiable at initialization
  fullTimeEmployee: boolean;       // Must always be defined
  yearsOfExperience?: number;      // Optional
  location: string;                // Must always be defined
  [key: string]: any;              // Allows extra attributes like contract
}

// Example object
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false, // Extra attribute allowed
};

console.log(teacher3);
