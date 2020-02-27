const students = ['Саша','Игорь','Лена','Ира','Алексей','Светлана'];
const themes = ['Дифференциальные уравнения','Теория автоматов','Алгоритмы и структуры даных'];
const marks = [4,5,5,3,4,5];

const pairOfStudents = function pair(name) {
    let pair =  [[name[0],name[2]],[name[1],name[3]],[name[4],name[5]]];
    return pair;
}
const printPairOfStudents = pairOfStudents(students).map(pair => pair.join(' и '));
console.log(printPairOfStudents);
document.writeln('Розбейте студентов на пары для роботы над проектом:'+printPairOfStudents.join('<br>')+'<br>');

const projects = function project(pair , theme) {
    let projectOfPair = [];
    for (let i = 0; i < pair.length; i++) {
        projectOfPair[i] = [pair[i].join(' и ') , theme[i]];       
    }
    return projectOfPair;
}
const printProjectOfPair = projects(pairOfStudents(students),themes);
console.log(printProjectOfPair) 
document.writeln('Сопоставьте пары и темы проектов:'+printProjectOfPair.join('<br>')+'<br>')

const markOfStudents = function mark(name , mark) {
    let marksStudent = [];
    for (let i = 0; i < name.length; i++) {
        marksStudent[i] = [name[i] , mark[i]];       
    }
    return marksStudent;
}
const printMarkOfStudents = markOfStudents(students,marks);
console.log(printMarkOfStudents)
document.writeln('Сопоставьте оценки со студентом:'+printMarkOfStudents.join('<br>')+'<br>')


const randomRating = function rating(name) {
    let random = [];
    for (let i = 0; i < name.length; i++) {
        random[i] = [name[i] , Math.floor(Math.random()*5)+1].flat();   
    }
    return random;
}
const printRandomRating = randomRating(printProjectOfPair);
console.log(printRandomRating)
document.writeln('Поставить каждой паре случайную оценку:'+printRandomRating.join('<br>')+'<br>')
