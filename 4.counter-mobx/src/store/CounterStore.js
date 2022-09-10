import { observable } from 'mobx';


class CounterStore {

    // observable({
    //     _count = 5,
    // })

    @observable
    _count = 5

}

export default new CounterStore();