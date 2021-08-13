import Storage from "../util/saveLocalStoregate.js";
const initialValue = {
  todos: Storage.get(),
  // lay toan bo cac li item lau k almf ngao qua ròi
  filter: {
    todos: []
  } // loc và lay tat ca
};
const actions = {
  add({ todos }, title) {
    if (title == "") console.log("please re-enter");
    else {
      todos.push({ title, completed: false });
      Storage.set(todos);
    }
  },
  toggle({ todos }, index) {
    let todo = todos[index];
    todo.completed = !todo.completed;
    Storage.set(todos);
  },
  removeItem({ todos }, index) {
    let todo = todos[index];
    todos.splice(index, 1);
    Storage.set(todos);
  },
};
// it will first take initialValue as initialization value . use switch to handle
export default function reducer(state = initialValue, action, ...args) {
  actions[action] && actions[action](state, args);
  return state;
}
