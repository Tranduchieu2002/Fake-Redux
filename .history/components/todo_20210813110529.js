import html from "../src/core.js";

export default function todo({ todoItems,index,filter }) {
  return html`
    <li></li>
    <li class="${todoItems.completed && "completed"} todoItems">
      <div class="form-check">
        <label class="form-check-label">
          <input class="checkbox" contenteditable="true" type="checkbox" value="${todoItems.title}
          checked="" onchange="dispatch('toggle',${index})"/>
           ${todoItems.title}  
          <i class=" remove uil uil-trash" onclick="dispatch('removeItem',${index})"></i>
        </label>
      </div>
    </li>
  <li></li>
  `;
  
}
/*   <li>
      <div class="form-check ">
        <label class="form-check-label">
          <input class="checkbox" type="checkbox" /> For what reason would it be
          advisable. <i class="input-helper"></i
        ></label>
      <i class="remove mdi mdi-close-circle-outline"></i>
    </li> */