/* for (let i = 0; i < 3; i += 1) {
    let newStudent = prompt('Введите имя нового студента!');
    newStudent = newStudent.trim();
    if (newStudent) {
    alert(`Добро пожаловать, ${newStudent}!`)
    }
};
 */
let i = 0;
while (i < 3) {
    let newStudent = prompt('Введите имя нового студента!');
    newStudent = newStudent.trim();
    if(newStudent) {
        alert(`Добро пожаловать, ${newStudent}!`)
    };
    i++;
}

let j = 0;
do {
    let newStudent = prompt('Введите имя нового студента!');
    newStudent = newStudent.trim();
    if(newStudent) {
        alert(`Добро пожаловать, ${newStudent}!`)
    };
    j++;
} while (j < 3);

