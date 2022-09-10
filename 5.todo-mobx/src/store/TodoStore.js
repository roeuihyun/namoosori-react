import { observable, action, computed, makeObservable } from 'mobx';

class TodoStore {

    constructor(){
        makeObservable(this);
    }

    @observable
    _todo = { 
        title : 'test',
     } // id, tiitle, date

    get todo(){
        return this._todo;
    }

}

export default new TodoStore();