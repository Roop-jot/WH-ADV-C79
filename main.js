var students_array = [];

function submit()
{
    var name_1 = document.getElementById("name_of_student_1").value;
    var name_2 = document.getElementById("name_of_student_2").value;
    var name_3 = document.getElementById("name_of_student_3").value;
    var name_4 = document.getElementById("name_of_student_4").value;
    
    students_array.push(name_1);
    students_array.push(name_2);
    students_array.push(name_3);
    students_array.push(name_4);

    document.getElementById("students").innerHTML = students_array;
    document.getElementById("sub_but").style.display = "none";
    document.getElementById("sor_but").style.display = "inline-block";
}

function sorting()
{
    students_array.sort();
    document.getElementById("students").innerHTML = students_array;
}
