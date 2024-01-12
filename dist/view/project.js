import { ProjectSlider } from "./project_slider";
var Project = /** @class */ (function () {
    function Project(titleText, projectType, descriptionText, techText, date) {
        this.projectParent = this.getProjectParent();
        this.projectContentContainer = this.createProjectConainer();
        this.titleText = titleText;
        this.projectType = projectType;
        this.descriptionText = descriptionText;
        this.techText = techText;
        this.date = date;
        this.addSlider();
        this.createProjectTitle();
        this.createProjectInfo();
        this.createProjectLinks();
    }
    Project.prototype.getProjectParent = function () {
        return document.getElementById('projects-container');
    };
    Project.prototype.createProjectConainer = function () {
        var newProject = document.createElement('div');
        newProject.classList.add('project-content');
        this.projectParent.appendChild(newProject);
        return newProject;
    };
    Project.prototype.addSlider = function () {
        var slider = new ProjectSlider(this.projectContentContainer);
    };
    Project.prototype.createProjectTitle = function () {
        var titleContainer = document.createElement('div');
        titleContainer.classList.add('project-title');
        this.projectContentContainer.appendChild(titleContainer);
        var ue1 = document.createElement('h2');
        ue1.innerHTML = this.titleText;
        titleContainer.appendChild(ue1);
        var ue1Description = document.createElement('p');
        ue1Description.innerHTML = this.projectType;
        titleContainer.appendChild(ue1Description);
    };
    Project.prototype.createProjectInfo = function () {
        var infoContainer = document.createElement('div');
        infoContainer.classList.add('project-info');
        this.projectContentContainer.appendChild(infoContainer);
        var projectDescription = document.createElement('div');
        projectDescription.classList.add('project-description');
        projectDescription.innerHTML = this.descriptionText;
        infoContainer.appendChild(projectDescription);
        var projectTechContainer = document.createElement('div');
        projectTechContainer.classList.add('project-tech');
        var techU1 = document.createElement('h2');
        techU1.innerHTML = "Technologies";
        projectTechContainer.appendChild(techU1);
        var techP = document.createElement('p');
        techP.innerHTML = this.techText;
        projectTechContainer.appendChild(techP);
        var techTime = document.createElement('p');
        projectTechContainer.appendChild(techTime);
        techTime.innerHTML = "Date: ".concat(this.date.toString());
        infoContainer.appendChild(projectTechContainer);
        var projectLinks = document.createElement('div');
        projectLinks.classList.add('project-links');
        var preview = document.createElement('a');
        preview.href = "test";
        preview.innerHTML = "Preview";
        projectLinks.appendChild(preview);
        var repo = document.createElement('a');
        repo.href = "repo";
        repo.innerHTML = "Github";
        projectLinks.appendChild(repo);
        infoContainer.appendChild(projectLinks);
    };
    Project.prototype.createProjectLinks = function () {
    };
    return Project;
}());
export { Project };
//# sourceMappingURL=project.js.map