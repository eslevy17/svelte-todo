<script lang="ts">
    import { storeTodos } from '../stores/todoStore';

    export let id;
    export let text;
    export let done;
</script>

<div class="todo">
    <input
        type="checkbox"
        bind:checked={done}
        on:change={() => storeTodos.updateDone({id, text, done})}
        class="checkbox"
    />
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
    />

    <span on:click={() => storeTodos.delete(id)} class="x-button">

    </span>
</div>

<style>
    .checkbox {
        cursor: pointer;
    }

    .todo {
        display: flex;
        align-items: start;
        gap: .5rem;
    }

    .text-input {
        margin-bottom: .5rem;
        flex-grow: 1;
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