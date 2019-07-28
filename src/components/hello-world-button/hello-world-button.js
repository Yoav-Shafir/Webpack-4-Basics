import "./hello-world-button.scss";

class HelloWorldButton {
  // This compiles by using the babel `transform-class-properties` plugin.
  buttonCssClass = "hello-world-button";
  render() {
    const button = document.createElement("button");
    const body = document.body;
    button.innerHTML = "Hello World";
    button.classList.add(this.buttonCssClass);
    button.onclick = function() {
      const p = document.createElement("p");
      p.innerHTML = "Hello World";
      p.classList.add("hello-world-text");
      body.appendChild(p);
    };
    body.appendChild(button);
  }
}

export default HelloWorldButton;
