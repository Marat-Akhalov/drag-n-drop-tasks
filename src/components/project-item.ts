import { Project } from '../models/project';
import { Component } from './base-component';

export class ProjectItem extends Component<HTMLUListElement, HTMLLIElement> {
  private project: Project;

  get persons() {
    if (this.project.people === 1) {
      return ' person';
    } else {
      return `${this.project.people} assigned`;
    }
  }

  constructor(hostId: string, project: Project) {
    super('single-project', hostId, false, project.id);

    this.project = project;

    this.renderContent();
  }

  configure(): void {}

  renderContent(): void {
    this.element.querySelector('h2')!.textContent = this.project.title;
    this.element.querySelector('h3')!.textContent = this.persons + 'assigned';
    this.element.querySelector('p')!.textContent = this.project.description;
  }
}
