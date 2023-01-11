function ex01(){
    const score = parseInt(document.getElementById('score').value)
    let grade;
    switch (parseInt(score/10)) {
        case 10:
        case 9:
        grade = ("A 학점");
        break;
        case 8:
        grade =("B 학점");
        break;
        case 7:
        grade =("C 학점");
        break;
        case 6:
        grade =("D 학점");
        break;
        default:
        grade =("F 학점");
    }document.getElementById('p1').innerHTML = `${score}점은${grade}입니다`
}