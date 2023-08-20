<script lang="ts">
    import { storeTodos } from '../stores/todoStore';
    import { createEventDispatcher, getContext } from "svelte";
    import type { stateOptionType } from "../types/todo";

    export let stateOption: stateOptionType
    export let onAdd: (text: string) => void

    let text = ''

    // context has to be initialized here, or it'll cause an error
    // (AKA cannot be placed in handleKeydown)
    const dispatch = createEventDispatcher()
    const context = getContext('todos')

    function handleKeydown(e) {
        if (e.key !== 'Enter' || !text.trim()) return;

             if (stateOption === 'Props'   ) onAdd(text)
        else if (stateOption === 'Dispatch') dispatch('handleAdd', {text})
        else if (stateOption === 'Store'   ) storeTodos.add(text)
        else if (stateOption === 'Context' ) context.addItem(text)

        text = ''
    }
</script>

<input
    class="text-input"
    placeholder="Add new..."
    bind:value={text}
    on:keydown={handleKeydown}
/>

<style>
    .text-input {
        width: 100%;
        box-sizing: border-box;
    }
</style>