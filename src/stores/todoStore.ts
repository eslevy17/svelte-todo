import { writable } from "svelte/store";

let todoID = 1;

type todo = {
    id: number
    text: string
    done: boolean
}

function createTodoList() {
    const {
        subscribe,
        // set,
        update
    } = writable(<todo[]>[]);

    return {
        subscribe,
        add: (text: string) => update(list => {
            const newItem: todo = {
                id: todoID++,
                text,
                done: false
            }

            return [...list, newItem]
        }),
        delete: (id: number) => update(list => {
            return list.filter(item => item.id !== id)
        }),
        updateText: (todo: todo) => update(list => {
            let itemIndex = list.findIndex(oldTodo => oldTodo.id === todo.id)
            list[itemIndex] = todo

            return list
        }),
        updateDone: (todo: todo) => update(list => {
            return [
                ...list.filter(item => item.id !== todo.id),
                todo
            ];
        }),
    }
}

export const todos = createTodoList();