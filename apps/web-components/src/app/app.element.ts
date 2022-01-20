import { AFrameElement, customElement } from '@metapins/aframe-element'; // used to create a 3d component
import 'aframe'; // main 3d engine
import 'aframe-environment-component'; // default 3d environment
import { html } from 'lit'; // used to generate reactive

export class AppElement extends HTMLElement {
  public static observedAttributes = [];

  connectedCallback() {
    this.innerHTML = `
      <a-scene>
        <a-entity environment="preset: forest;"></a-entity>
        <a-hello-world></a-hello-world>
      </a-scene>
    `;
  }
}
customElements.define('helloworld-root', AppElement);

@customElement('hello-world')
export class HelloWorldElement extends AFrameElement {
  render() {
    return html`
      <a-box
        material="color: grey;"
        position="0.090 0.5 -3.05"
        scale="1.2 0.3 0.1"
      ></a-box>
      <a-text value="Hello World" position="-0.5 0.5 -3"></a-text>
    `;
  }
}
