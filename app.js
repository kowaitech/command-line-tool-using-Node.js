import { students } from "./students.js";
import {
    listStudents,
    findStudent,
    filterByDept,
    addStudent,
    countStudents
} from "./utils.js";

// Get command line arguments
const args = process.argv.slice(2);

const command = args[0];

switch (command) {

    case "list":
        listStudents(students);
        break;

    case "find":
        findStudent(students, args[1]);
        break;

    case "filter":
        filterByDept(students, args[1]);
        break;

    case "add":
        addStudent(students, args[1], args[2], args[3]);
        break;

    case "count":
        countStudents(students);
        break;

    default:
        console.log("❌ Invalid Command");
        console.log(`
Available commands:
- list
- find <name>
- filter <department>
- add <name> <dept> <year>
- count
        `);
}