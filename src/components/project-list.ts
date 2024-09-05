import { Component } from './base-component';

export class ProjectList extends Component<HTMLDivElement, HTMLUListElement> {
  constructor(private type: 'active' | 'finished') {
    super('project-list', 'app', false, `${type}-projects`);

    this.element.id = `${type}-projects`;
    this.configure();
  }

  configure(): void {
    this.renderContent();
  }

  renderContent(): void {
    const listId = `${this.type}-projects-list`;
    this.element.querySelector('ul')!.id = listId;
    this.element.querySelector('h2')!.textContent =
      this.type.toUpperCase() + ' ' + 'PROJECTS';
  }
}
