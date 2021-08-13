/*store đơn giản là một state container. Đây là nơi lưu trữ state và nơi những action được phát đi và xử 
Action là những đối tượng mô tả cách chúng ta muốn thay đổi state. 
 Reducer là những action handler, nó hoạt động kết nối giữa action và store và biến thành những thay đổi trong state
  vd...Nếu chúng ta dispatch một action là ADD_USER vào trong store, chúng ta có thể có một reducer nhận action đó và thêm user mới vào trong state.*/

export default function html([fistValue, ...strings], ...values) {
  return values
    .reduce(
      function (acc, ind) {
        return acc.concat(ind, strings.shift());
      },
      [fistValue]
    )
    .filter((anyValue) => (anyValue && anyValue !== true) || anyValue === 0)
    .join("");
}
export function createStore(reducer) {
  let state = reducer();
  // new map can
  const roots = new Map();
  // roots is an element to render the view
  function render() {
    for (const [root, component] of roots) {
      let dataDom = component();
      root.innerHTML = dataDom; // render
    }
  }
  return {
    //nhan view de render ra
    attach(component, root) {
      roots.set(root, component);
      render();
    },
    // daay du lieu tu store ra view qua patch
    // dufng selector de chon( we wanna choose anydata to store)
    // props la du lieu ma ta muosn tryen vao component
    connection(selector = (state) => state) {
      return (component) => 
       function(props, ...args) {
         return component(Object.assign({}, props, selector(state), ...args));
       } ;
    },
    dispatch(actions, ...args) {
      state = reducer(state, actions, args);
      render();
    },
  };
}
