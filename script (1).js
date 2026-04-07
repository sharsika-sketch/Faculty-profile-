let facultyData = [];

window.addFaculty = function () {
    const name = document.getElementById("name").value;
    const dept = document.getElementById("dept").value;
    const designation = document.getElementById("designation").value;

    const faculty = { name, dept, designation };

    facultyData.push(faculty);

    localStorage.setItem("faculty_profiles", JSON.stringify(facultyData));

    alert("Faculty Added Successfully");
};

window.onload = function () {
    const data = JSON.parse(localStorage.getItem("faculty_profiles")) || [];
    const facultyList = document.getElementById("facultyList");

    if (facultyList) {
        data.forEach((faculty) => {
            facultyList.innerHTML += `
                <div class="card">
                    <h3>${faculty.name}</h3>
                    <p>${faculty.dept}</p>
                    <p>${faculty.designation}</p>
                </div>
            `;
        });
    }
};