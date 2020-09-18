<script lang="ts">
  import { fly } from "svelte/transition";
  export let open: boolean = false;
  export let title: string = "Title";
  export let body: string = "This is a notify body.";
</script>

<style lang="sass">
.notification
  @apply border shadow-lg rounded p-4 bg-white mb-1
  top: 2rem
  right: 1rem
.title
  @apply text-xl font-bold
.body
  @apply text-gray-600
</style>

{#if open}
  <div
    class="notification"
    in:fly={{ x: 300, duration: 400 }}
    out:fly={{ x: -200, duration: 500 }}>
    <div class="title">{title}</div>
    <div class="body">{body}</div>
  </div>
{/if}
