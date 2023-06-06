function LoadSkills(){
    var num    = 0;
    var skills = ["Python", "HTML", "Css and Css Bootstrap", "JavaScript (Node.JS, express)", 
    "Php", "SQL", "C", "C++", "C# (WinForms .NET framework)", "GIT & GitHub", "JSON", "Microsoft Office"];
    var three_skills = [];
    for (var i = 0; i < 3; i++) {
        num = Math.floor(Math.random() * skills.length); //Random int number
        three_skills.push(skills[num]); //Push element to the 3 size array
        skills.splice(num, 1); //Delete element from the array
    }
    return three_skills;
}
export default LoadSkills;