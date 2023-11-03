import { ProjectSlider } from "./project_slider";

class Project{
    private projectParent: HTMLDivElement;
    private projectContentContainer: HTMLDivElement;
    constructor(){
        this.projectParent = this.getProjectParent()
        this.projectContentContainer = this.createProjectConainer()
        this.addSlider()
        this.createProjectTitle();
        this.createProjectInfo();
        this.createProjectLinks();
    }
    getProjectParent(): HTMLDivElement{
        return document.getElementById('projects-container') as HTMLDivElement;
    }
    createProjectConainer(): HTMLDivElement{
        const newProject = document.createElement('div');
        newProject.classList.add('project-content')
        this.projectParent.appendChild(newProject);
        return newProject;
    }
    addSlider(){
        const slider = new ProjectSlider(this.projectContentContainer);
    }
    createProjectTitle(){
        const titleContainer = document.createElement('div');
        titleContainer.classList.add('project-title');
        this.projectContentContainer.appendChild(titleContainer);
        const ue1 =  document.createElement('h2');
        ue1.innerHTML = "Test";
        titleContainer.appendChild(ue1);
        const ue1Description = document.createElement('p');
        ue1Description.innerHTML = "test Discription";
        titleContainer.appendChild(ue1Description);
    }
    createProjectInfo(){
        const infoContainer = document.createElement('div');
        infoContainer.classList.add('project-info');
        this.projectContentContainer.appendChild(infoContainer);


        const projectDescription = document.createElement('div');
        projectDescription.classList.add('project-description')
        projectDescription.innerHTML = "projectDescript"
        infoContainer.appendChild(projectDescription);

        const projectTechContainer = document.createElement('div');
        projectTechContainer.classList.add('project-tech');
        
        const techU1 = document.createElement('h2');
        techU1.innerHTML = "Technologies"
        projectTechContainer.appendChild(techU1);
        
        const techP = document.createElement('p');
        techP.innerHTML = "Typescript,........"
        projectTechContainer.appendChild(techP);
        
        const techTime = document.createElement('p');
        projectTechContainer.appendChild(techTime);
        techTime.innerHTML = "Date: 2022"

        infoContainer.appendChild(projectTechContainer);

        const projectLinks = document.createElement('div');
        projectLinks.classList.add('project-links');

        const preview = document.createElement('a');
        preview.href="test";
        preview.innerHTML = "Preview";
        projectLinks.appendChild(preview);

        const repo = document.createElement('a');
        repo.href="repo";
        repo.innerHTML = "Github";
        projectLinks.appendChild(repo);

        infoContainer.appendChild(projectLinks);
    }
    createProjectLinks(){
        
    }
}

export {Project};