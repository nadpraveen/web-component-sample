const template = document.createElement('template');
template.innerHTML = `
  <style>
  .title-bar {
        padding:0;
		font-family: 'Arial', sans-serif;
		background: #f4f4f4;
		width: 100%;
		display: flex;
		margin-bottom: 15px;
		border-bottom: darkorchid 5px solid;
	}
  </style>
  <div class="user-card">
   <h2></h2>
  </div>
`;


//we need a class with component name which will extends HTMLElements

class TitleDiv extends HTMLElement {
  constructor() {
    super();

    this.showInfo = true;

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector('h2').innerText = this.getAttribute('title');
  }

}

window.customElements.define('title-div', TitleDiv);