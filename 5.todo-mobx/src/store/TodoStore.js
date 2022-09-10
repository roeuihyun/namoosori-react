import { observable, action, computed, makeObservable, toJS } from 'mobx';

class TodoStore {

    constructor(){
        makeObservable(this);
    }

    @observable
    _todos = [ ];

    @observable
    _todo = { }; // id, tiitle, date

    @computed 
    get todo(){
        // return this._todo;
        return toJS(this._todo);
    }

    @computed
    get todos(){
        // return this._todos ? this._todos.slice() : [];
        return toJS(this._todos);
    }

    @action
    setTodoProps(name, value){
        this._todo = {
            ...this._todo, // 전개 연산자
            [name] : value
        }
    }

    @action
    addTodo(todo){
        this._todos.push(todo);
    }

    @action
    updateTodo(todo){
        this._todos.find( (todo) => todo.id);
    }

}

export default new TodoStore();