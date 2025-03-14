function filterStudent(students) {
    return students.filter(student => {
        let { math, english, literature } = student.scores;
        let avgScore = (math + english + literature) / 3;
        return avgScore >= 8;
    });
}
let students = [
    { name: "Trần Trí Dương", scores: { math: 9, english: 8, literature: 7 } },
    { name: "Hà Bích Ngọc", scores: { math: 3, english: 2, literature: 5 } },
    { name: "Bùi Thái Sơn", scores: { math: 9.5, english: 9, literature: 9 } }
];
console.log(filterStudent(students));
