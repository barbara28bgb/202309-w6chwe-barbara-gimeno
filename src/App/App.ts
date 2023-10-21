import Component from "../component/Components";

class App extends Component {
  constructor(parentElement: Element) {
    super(parentElement, "div", "main-container");

    parentElement.appendChild(this.element);
  }

  protected populate(): void {
    this.element.innerHTML = `
    <header class= main-component>
    </header>`;
  }
}

export default App;
