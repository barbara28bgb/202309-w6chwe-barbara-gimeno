import Component from "../component/Components.js";

class App extends Component {
  constructor(parentElement: Element) {
    super(parentElement, "div", "main-container");
  }

  protected populate(): void {
    this.element.innerHTML = `
    <header>
      <h1> Pokemon characters
      </h1>
      <img class="image_title" src="pokemon-logo.svg">
    <header>
      <ul class= main-component>
      </ul>`;
  }
}

export default App;
