import { Component } from './base-component';

export class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {
  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLInputElement;
  peopleInputElement: HTMLInputElement;

  constructor() {
    super('project-input', 'app', true, 'user-input');

    this.titleInputElement = document.querySelector(
      '#title'
    ) as HTMLInputElement;

    this.descriptionInputElement = document.querySelector(
      '#description'
    ) as HTMLInputElement;

    this.peopleInputElement = document.querySelector(
      '#people'
    ) as HTMLInputElement;
  }

  configure(): void {}

  renderContent(): void {}
}
