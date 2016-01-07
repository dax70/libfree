import Iterable, {
  isIterable, getIterator, ArrayIterator
} from './iter';

export class List {

    constructor(items) {
        this.items = items || [];
    }

    add(item) {
        this.items.push(item);
    }

    clear() {
        this.items = [];
    }

    [Symbol.iterator]() {
        return new ArrayIterator(this.items);
    }

    getItem(index) {
        return this.items[index];
    }

    getItems(start, howMany) {
        return this.items.splice(start, howMany);
    }

    indexOf(item) {
        return this.items.indexOf(item, 0 /* fromIndex */);
    }

    remove(item) {
        var index = this.items.indexOf(item, 0);
        if (index > -1) {
            this.items.splice(index, 1);
        }
    }

    count(){
        return this.items.length;
    }

    toArray() {
        // TODO: clone
        return this.items;
    }
}
