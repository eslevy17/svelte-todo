<script lang="ts">
    import Todo from "../components/Todo.svelte";
    import Input from "../components/Input.svelte";
    import { todos } from '../stores/todoStore';
</script>

<h1>To Do List</h1>

<div class="content">
    <Input />

    <div class="lists-container">
        {#each [false, true] as done}
            <div>
                <p class="list-title">{done ? 'Done' : 'To Do'}</p>

                {#each $todos.filter(todo => todo.done === done) as todo}
                    <Todo {...todo} />
                {/each}
            </div>
        {/each}
    </div>
</div>

<style>
    .content {
        width: 32rem;
        border: 1px solid green;
        margin: auto;
        padding: 1rem;
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