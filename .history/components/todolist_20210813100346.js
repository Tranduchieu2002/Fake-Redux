import html from "../src/core.js";
import todo from "./todo.js";
import { connection } from "../src/store.js";
const connect = connection();
function todoList({ todos,filter }) {
  console.log(filter)
  return html` <div class="list-wrapper">
    <ul class="d-flex flex-column-reverse todo-list">
      ${todos.map((todoItems, index) => todo({ todoItems, index }))}
      <li class="list-util">
      <div class="dropdown">
        <button class="dropbtn">Suggest All
        <i class="uil uil-angle-down"></i>
        </button>
        <div class="dropdown-content">
          <a href="#"" class="removeAll">
          removeAll</a>
          <a href="#" class="checkAll"
          ${todos.every(filter.handleCompleted) && 'checked'}
          >
          checkAll</a>
        </div>
        </div>
        <div class="clearCompleted">clearCompleted</div>
      </li>
    </ul>
  </div>`;
}
export default connect(todoList);
