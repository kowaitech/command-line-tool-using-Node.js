// LIST
export const listStudents = (students) => {
    console.log("📚 Campus Directory\n");

    students.forEach((s, index) => {
        console.log(`${index + 1}. Name: ${s.name} | Dept: ${s.dept} | Year: ${s.year}`);
    });
};


// FIND
export const findStudent = (students, name) => {
    const student = students.find(s => s.name.toLowerCase() === name.toLowerCase());

    if (student) {
        console.log("✅ Student Found:");
        console.log(`Name: ${student.name}`);
        console.log(`Department: ${student.dept}`);
        console.log(`Year: ${student.year}`);
    } else {
        console.log("❌ Student not found");
    }
};


// FILTER
export const filterByDept = (students, dept) => {
    const result = students.filter(s => s.dept.toUpperCase() === dept.toUpperCase());

    console.log(`📘 ${dept} Students:\n`);

    result.forEach(s => {
        console.log(`- ${s.name} (Year ${s.year})`);
    });

    if (result.length === 0) {
        console.log("No students found");
    }
};


// ADD
export const addStudent = (students, name, dept, year) => {
    const newStudent = { name, dept, year: Number(year) };
    students.push(newStudent);

    console.log("✅ Student Added:");
    console.log(newStudent);
};


// COUNT (using reduce)
export const countStudents = (students) => {
    const total = students.reduce(acc => acc + 1, 0);
    console.log(`📊 Total Students: ${total}`);
};