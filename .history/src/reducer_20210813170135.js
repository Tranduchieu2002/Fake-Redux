import Storage from "../util/saveLocalStoregate.js";
const initialValue = {
  todos: Storage.get(),
  checkAll: "all",
  // lay toan bo cac li item lau k almf ngao qua ròi
  filter: {
    all: () => true,
    // hien thi cplete
    break: (todo) => !todo.completed, //xu lí to do dc comple
    handleCompleted: (todo) => todo.completed,
  }, // loc và lay tat ca
};
// error : chua truyen dpo so vao reducer dc
const actions = {
  add({ todos }, title) {
    if (title == null) console.log("please re-enter");
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
  checkAll({ todos }, index) {
    todos.forEach((todo) => {
      todo.completed = index;
    });
    Storage.set(todos);
  },
  clearCompleted(state) {
    console.log(state.todos)
    state.todos = state.todos.filter(state.filter.break)
    Storage.set(state.todos);

  },
};
// it will first take initialValue as initialization value . use switch to handle
export default function reducer(state = initialValue, action, ...args) {
  actions[action] && actions[action](state, args);
  return state;
}
