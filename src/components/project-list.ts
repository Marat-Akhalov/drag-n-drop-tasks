import { Project, ProjectStatus } from '../models/project';
import { projectState } from '../state/project-state';
import { Component } from './base-component';
import { ProjectItem } from './project-item';

export class ProjectList extends Component<HTMLDivElement, HTMLUListElement> {
  assignedProjects: Project[];

  constructor(private type: 'active' | 'finished') {
    super('project-list', 'app', false, `${type}-projects`);

    this.assignedProjects = [];

    this.element.id = `${type}-projects`;

    this.configure();
    this.renderContent();
  }

  configure(): void {
    projectState.addListener((projects: Project[]) => {
      const relevantProjects = projects.filter(prj => {
        if (this.type === 'active') {
          return prj.status === ProjectStatus.Active;
        } else {
          return prj.status === ProjectStatus.Finished;
        }
      });

      this.assignedProjects = relevantProjects;
      this.renderProjects();
    });
  }

  renderContent(): void {
    const listId = `${this.type}-projects-list`;
    this.element.querySelector('ul')!.id = listId;
    this.element.querySelector('h2')!.textContent =
      this.type.toUpperCase() + ' ' + 'PROJECTS';
  }

  private renderProjects() {
    const listEl = document.getElementById(
      `${this.type}-projects-list`
    )! as HTMLUListElement;

    listEl.innerHTML = '';

    for (const prjItem of this.assignedProjects) {
      new ProjectItem(this.element.querySelector('ul')!.id, prjItem);
    }
  }
}
