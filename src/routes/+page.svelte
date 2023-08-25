<script lang="ts">
    import Todo from "../components/Todo.svelte";
    import Input from "../components/Input.svelte";
    import { id, storeTodos } from '../stores/todoStore';
    import { setContext } from "svelte";
    import type { stateOptionType, todo } from "../types/todo";

    const stateOptions: stateOptionType[] = [
        'Props',
        'Dispatch',
        'Store',
        'Context',
    ]

    let stateOption = stateOptions[0]

    let todos: todo[]

    // Store method requires syncing (no others do):
    $: todos = $storeTodos as todo[]
    $: storeTodos.set(todos)

    // UNIVERSAL
    let currentID = 1;
    function updateTodos(text: string) {
        id.update(id => {
            currentID = id
            return id + 1
        })
        todos = [
            ...todos,
            {
                id: currentID,
                text,
                done: false
            }
        ]
    }

    // PROPS
    function onAdd(text: string) {
        updateTodos(text)
    }

    // DISPATCH
    function handleAdd(e) {
        updateTodos(e.detail.text)
    }

    // CONTEXT
    setContext('todos', {
        addItem: text => updateTodos(text)
    })
</script>

<div class="content">
    <div class="heading-row">
        <h3 class="header">To Do List</h3>
        <p><i>Add using...</i></p>
        <select bind:value={stateOption} class="select">
            {#each stateOptions as stateOption}
                <option value="{stateOption}">{stateOption}</option>
            {/each}
        </select>
    </div>

    <Input
        {stateOption}
        {onAdd}
        on:handleAdd={handleAdd}
    />

    <div class="lists-container">
        {#each [false, true] as done}
            <div>
                <p class="list-title">{done ? 'Done' : 'To Do'}</p>

                {#each todos.filter(todo => todo.done === done) as todo}
                    <Todo {...todo} />
                {/each}
            </div>
        {/each}
    </div>
</div>

<style>
    .content {
        width: 32rem;
        border: 1px solid var(--border-color);
        border-radius: var(--border-radius);
        margin: auto;
        padding: 1rem;
    }
    .header {
        margin-right: auto;
    }
    .heading-row {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        gap: .5rem;
    }

    .select {
        margin-bottom: .5rem;
    }

    .list-title {
        text-align: center;
    }

    .lists-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-content: center;
        gap: 1rem;
    }
</style>