console.log(dayjs().format("MMM D, YYYY"));
var currentTimeEl = $("#current-time");
var addProjectBtn = $("#add-project");
var proj_nameEl = $("#p_name");
var tableBodyEl = $("#table-body");

currentTimeEl.text(dayjs().format("MMM D, YYYY"));

addProjectBtn.on("click", function (e) {
    e.preventDefault();
    // var project_name = proj_nameEl.val();
    var project_info = {
        p_name: proj_nameEl.val()
    }
    console.log("hello", project_info);
    saveInLocalStorage(project_info)
})

function saveInLocalStorage(project_info) {
    var allProjects = JSON.parse(localStorage.getItem("projects")) || [];
    allProjects.push(project_info);
    localStorage.setItem("projects", JSON.stringify(allProjects));
    display();
}

function display() {
    var allProjects = JSON.parse(localStorage.getItem("projects"));
    for (var i = 0; i < allProjects.length; i++) {
        var trEl = $("<tr>");
        var td1 = $("<td>");
        var td2 = $("<td>");
        td1.text(allProjects[i].p_name);
        trEl.append(td1);
        tableBodyEl.append(trEl)
    }
}
