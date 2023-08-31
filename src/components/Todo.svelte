<script lang="ts">
    import { storeTodos } from '../stores/todoStore';
    import { fade } from 'svelte/transition'

    export let id;
    export let text;
    export let done;
</script>

<div
    class="todo"
    transition:fade
>
    <label class="checkbox-container">
        <input
            type="checkbox"
            bind:checked={done}
            on:change={() => storeTodos.updateDone({id, text, done})}
            class="hidden-checkbox"
        />
        <span
            class="checkmark"
            class:done
        ></span>
    </label>
    <input
        bind:value={text}
        on:change={() => {
            if (!text.trim()) {
                storeTodos.delete(id)
                return
            }
            storeTodos.updateText({id, text, done})
        }}
        class="text-input"
        class:done
    />

    <span on:click={() => storeTodos.delete(id)} class="x-button">

    </span>
</div>

<style>
    .checkbox-container {
        position: relative;
    }

    .hidden-checkbox {
        display: none;
    }

    .checkmark {
        cursor: pointer;
        display: block;
        height: 1.3rem;
        width: 1.3rem;
        margin: .1rem 0;
        background-color: var(--grey10);
        border: 2px solid var(--border-color);
        border-radius: var(--border-radius);
        box-sizing: border-box;
    }

    .checkmark:hover {
        background-color: var(--grey9);
    }

    .checkbox-container input:checked ~ .checkmark {
        background-color: dodgerblue;
    }

    .checkmark:after {
        content: '';
        display: none;
        position: absolute;
        left: .4rem;
        top: .25rem;
        width: 6px;
        height: 10px;
        border: solid white;
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
    }

    .checkbox-container input:checked ~ .checkmark:after {
        display: block;
    }

    .todo {
        display: flex;
        align-items: start;
        gap: .5rem;
    }

    .text-input {
        margin-bottom: .5rem;
        flex-grow: 1;
        height: 1.5rem;
    }

    .done {
        opacity: .5;
    }

    .x-button:hover {
        color: red;
    }

    .x-button:after {
        cursor: pointer;
        display: inline-block;
        content: "\00d7";
    }
</style>