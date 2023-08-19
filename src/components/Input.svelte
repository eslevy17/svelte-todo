<script lang="ts">
    import { todos } from '../stores/todoStore';

    let newTodoText = ''

    function handleKeydown(e) {
        if (e.key !== 'Enter' || !newTodoText.trim()) return;
        todos.add(newTodoText)
        newTodoText = ''
    }
</script>

<input
    class="text-input"
    placeholder="Add new..."
    bind:value={newTodoText}
    on:keydown={handleKeydown}
/>

<style>
    .text-input {
        width: 100%;
        box-sizing: border-box;
    }
</style>