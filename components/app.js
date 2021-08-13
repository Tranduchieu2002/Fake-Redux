import html from "../src/core.js";
import header from "../components/header.js";
import todoList from "./todolist.js";
import footer from "../components/footer.js";
const cars = ["BWM", "Porsche", "Mercedes"];
const web = {
  header: function (callback) {
    return callback();
  },
  container: function (callback) {
    return callback();
  },
  todoList: function (callback) {
    return callback();
  },
  footer: function (callback) {
    return callback();
  },
};

function App() {
  return html`<div class="page-content page-container" id="page-content">
    <div class="padding">
      <div class="row container d-flex justify-content-center">
        <div class="col-md-12">
          <div class="card px-3">
            <div class="card-body">
              ${web.header(header)} ${todoList() } ${web.footer(footer)}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`;
}
/*    
<div class="list-wrapper">
                            <ul class="d-flex flex-column-reverse todo-list">
                                
                                <li class="completed">
                                    <div class="form-check"> <label class="form-check-label"> <input class="checkbox" type="checkbox" checked=""> For what reason would it be advisable for me to think. <i class="input-helper"></i></label> </div> <i class="remove mdi mdi-close-circle-outline"></i>
                                </li>
                                <li>
                                    <div class="form-check"> <label class="form-check-label"> <input class="checkbox" type="checkbox"> it be advisable for me to think about business content? <i class="input-helper"></i></label> </div> <i class="remove mdi mdi-close-circle-outline"></i>
                                </li>
                                <li>
                                    <div class="form-check"> <label class="form-check-label"> <input class="checkbox" type="checkbox"> Print Statements all <i class="input-helper"></i></label> </div> <i class="remove mdi mdi-close-circle-outline"></i>
                                </li>
                                <li class="completed">
                                    <div class="form-check"> <label class="form-check-label"> <input class="checkbox" type="checkbox" checked=""> Call Rampbo <i class="input-helper"></i></label> </div> <i class="remove mdi mdi-close-circle-outline"></i>
                                </li>
                                <li>
                                    <div class="form-check"> <label class="form-check-label"> <input class="checkbox" type="checkbox"> Print bills <i class="input-helper"></i></label> </div> <i class="remove mdi mdi-close-circle-outline"></i>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>  */
export default App;
