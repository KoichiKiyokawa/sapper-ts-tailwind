<script lang="ts">
  import Counter from "../components/Counter.svelte";
  import { sumBy } from "../utils/helper/lodash";

  const getDefaultCounter = () => ({
    count: 0,
    text: "new",
  });
  let counters = [getDefaultCounter()];

  const handler = (index: number) => ({
    increment() {
      counters[index].count++;
    },
    decrement() {
      if (counters[index].count > 0) counters[index].count--;
    },
    drop() {
      counters = counters.filter((_, i) => i !== index);
    },
  });

  const addCounter = () => {
    counters = [...counters, getDefaultCounter()];
  };
  $: sumOfCount = sumBy(counters, "count");
</script>

<style lang="sass">
.container
  @apply w-3/4 m-auto
  .add-counter
    @apply text-center text-white bg-green-500 w-full p-2 mt-1 rounded
  .sum-wrapper
    @apply text-right pr-2
    .sum
      @apply text-lg font-bold
</style>

<svelte:head>
  <title>Sapper project template</title>
</svelte:head>

<!-- <template lang="pug">
  +each('counters as count')
  Counter(count!="{count}") // error count is not defined pugとtsの相性悪い。。。
</template> -->

<div class="container">
  {#each counters as counter, i}
    <Counter
      count={counter.count}
      text={counter.text}
      on:increment={handler(i).increment}
      on:decrement={handler(i).decrement}
      on:drop={handler(i).drop} />
  {/each}
  {#if counters.length === 0}
    <p>Push "Add Counter" to make counter.</p>
  {/if}
  <div>
    <button class="add-counter" on:click={addCounter}>Add Counter</button>
  </div>

  <div class="sum-wrapper">
    <p>Sum of Count: <span class="sum">{sumOfCount}</span></p>
  </div>
</div>
