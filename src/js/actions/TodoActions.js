import dispatcher from "../dispatcher";
import axios from "axios";

export function createTodo(text) {
    dispatcher.dispatch({
        type: "CREATE_TODO",
        text,
    });
}

export function deleteTodo(id) {
    dispatcher.dispatch({
        type: "DELETE_TODO",
        id,
    });
}

export function reloadTodos() {
  /** 
dispatcher.dispatch({type: "FETCH_TODOS"});
  setTimeout(() => {
    dispatcher.dispatch({type: "RECEIVE_TODOS", todos: [
      {
        id: 8484848484,
        text: "TODO 1",
        complete: false
      },
      {
        id: 6262627272,
        text: "TODO 2",
        complete: true
      },
    ]});
  }, 1000);*/

  axios("http://localhost:3000/recommendations/single/a9ebdc7a-09cb-45b4-9ed1-05b4fffc97f5").then((data) => {
    console.log("got the data!", data);
  })
}