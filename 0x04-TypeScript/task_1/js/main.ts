// Define the Teacher interface
interface Teacher {
  readonly firstName: string;      // Only set during initialization
  readonly lastName: string;       // Only set during initialization
  fullTimeEmployee: boolean;       // Must always be defined
  yearsOfExperience?: number;      // Optional
  location: string;                // Must always be defined
  [key: string]: any;              // Allows additional properties (like contract)
}

// Example object using the interface
const teacher3: Teacher = {
  firstName: "John",
  fullTimeEmployee: false,
  lastName: "Doe",
  location: "London",
  contract: false, // Extra property — works because of index signature
};

console.log(teacher3);
 // Define the Teacher interface
interface Teacher {
  readonly firstName: string;      // Only modifiable at initialization
  readonly lastName: string;       // Only modifiable at initialization
  fullTimeEmployee: boolean;       // Must always be defined
  yearsOfExperience?: number;      // Optional
  location: string;                // Must always be defined
  [key: string]: any;              // Allows additional properties
}

// Define the Directors interface that extends Teacher
interface Directors extends Teacher {
  numberOfReports: number;         // Required property for Directors
}

// Example object using the Directors interface
const director1: Directors = {
  firstName: "John",
  lastName: "Doe",
  location: "London",
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);
