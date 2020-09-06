<script lang="ts">
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let count: number;
  export let text: string;
</script>

<style lang="sass">
  .card
    @apply flex justify-center border rounded shadow p-2 w-3/4 m-auto mt-1
  input
    @apply shadow border rounded p-2
  span
    @apply text-xl font-bold p-2
  .btn
    @apply text-white rounded p-2 ml-1
    &.increment
      @apply bg-blue-400
    &.decrement
      @apply bg-red-400
    &.drop
      @apply bg-yellow-500
</style>

<div class="card">
  <input value={text} />
  <span>{count}</span>
  <button
    class="btn increment"
    on:click={() => {
      dispatch('increment');
    }}>+1</button>
  <button
    class="btn decrement"
    on:click={() => {
      dispatch('decrement');
    }}>-1</button>
  <button
    class="btn drop"
    on:click={() => {
      dispatch('drop');
    }}>x</button>
</div>
