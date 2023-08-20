import { writable } from "svelte/store";
import type { todo } from "../types/todo";

// used by all variants; must be stored somewhere
export let id = writable(1)

function createTodoList() {
    const {
        subscribe,
        set,
        update
    } = writable(<todo[]>[]);

    return {
        subscribe,
        set,
        add: (text: string) => update(list => {
            let currentID = 1
            id.update(id => {
                currentID = id
                return id + 1
            })
            const newItem: todo = {
                id: currentID,
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

export const storeTodos = createTodoList();