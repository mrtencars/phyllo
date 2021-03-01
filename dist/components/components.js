export class definition extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <div class="definition">
                <h4>Definition (${this.getAttribute('name')})</h4>
                <p><slot /></p>
            </div>
        `;
    }
}
customElements.define('box-definition', definition);