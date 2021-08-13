import html from "../src/core.js";
var input = document.querySelector('input[name="todos"]')
export default function () {
  return html`
    <h4 class="card-title">Awesome Todo list</h4>
    <div class="add-items d-flex">
      <input
        type="text"
        name="todos"
        class="form-control todo-list-input"
        placeholder="What do you need to do today?"
        onkeypress="event.keyCode === 13 && dispatch('add',this.value.trim())"
      />
      <button
        class="add btn btn-primary font-weight-bold todo-list-add-btn"
        onclick="dispatch('add',this.parentNode.querySelector('.todo-list-input').value)"
      >
        Add
      </button>
    </div>
  `;
}
