<script lang="ts">
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let count: number;
  export let text: string;
</script>

<div>
  <input value={text}>
  <span>{count}</span>
  <button on:click={() => { dispatch("increment") }}>+1</button>
  <button on:click={() => { dispatch("decrement")}}>-1</button>
  <button on:click={() => { dispatch("drop")}}>x</button>
</div>
