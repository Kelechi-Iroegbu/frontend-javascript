// task_4/js/subjects/Java.ts
import { Subjects } from '../Teacher';
import { Subject } from './Subject';

export namespace Subjects {
  // ✅ Using declaration merging to add a new optional attribute experienceTeachingJava? (number) to the Teacher interface
  export interface Teacher {
    experienceTeachingJava?: number;
  }

  // class Java that extends Subject:
  export class Java extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for Java';
    }

    getAvailableTeacher(): string {
      if (!this.teacher || this.teacher.experienceTeachingJava === undefined || this.teacher.experienceTeachingJava <= 0) {
        return 'No available teacher';
      }
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}
