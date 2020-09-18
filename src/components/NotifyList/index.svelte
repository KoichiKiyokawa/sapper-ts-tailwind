<script lang="ts">
  import Notify from "./Notify.svelte";

  type Notification = {
    open: boolean;
    title: string;
    body: string;
  };
  export let notifications: Notification[] = [];
</script>

<style lang="sass">
aside
  @apply fixed
  width: 75%
  max-width: 24rem
  top: 2rem
  right: 1rem
</style>

<aside>
  {#each notifications as notif}
    <Notify {...notif} />
  {/each}
</aside>
