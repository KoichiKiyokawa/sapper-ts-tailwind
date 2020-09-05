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
  $: sumOfCount = sumBy(counters, 'count');
</script>

<svelte:head>
  <title>Sapper project template</title>
</svelte:head>

<!-- <template lang="pug">
  +each('counters as count')
  Counter(count!="{count}") // error count is not defined pugとtsの相性悪い。。。
</template> -->

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
<div><button on:click={addCounter}>Add Counter</button></div>
<p>{sumOfCount}</p>