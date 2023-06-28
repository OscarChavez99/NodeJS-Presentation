var skills = ["Python", "HTML 5", "Css and Bootstrap", "JavaScript (Node.JS, express)", 
    "Php", "SQL", "phpMyAdmin", "C", "C++", "C# (WinForms .NET framework)", "GIT & GitHub", "JSON", "Microsoft Office"];

function LoadSkills(){
    var num    = 0;
    var skills_copy = skills.slice();
    var three_skills = [];
    for (var i = 0; i < 3; i++) {
        num = Math.floor(Math.random() * skills_copy.length); //Random int number
        three_skills.push(skills_copy[num]); //Push element to the 3 size array
        skills_copy.splice(num, 1); //Delete element from the array
    }
    return [skills, three_skills]; //Return two or more vars
}

export default LoadSkills;