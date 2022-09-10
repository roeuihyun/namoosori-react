import { observable, action, computed, makeObservable } from 'mobx';

class TodoStore {

    constructor(){
        makeObservable(this);
    }

    @observable
    _todo = { 
        
     } // id, tiitle, date

    get todo(){
        return this._todo;
    }

    @action
    setTodoProps(name, value){
        this._todo = {
            ...this._todo, // 전개 연산자
            [name] : value
        }
    }

}

export default new TodoStore();