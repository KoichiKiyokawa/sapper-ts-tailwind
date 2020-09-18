<script lang="ts">
  import NotifyList from "../components/NotifyList/index.svelte";

  const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));
  async function notifyAnimate() {
    await sleep(300);
    notifications[0].open = true;
    await sleep(300);
		notifications[1].open = true;
		await sleep(3000)
    notifications[0].open = false;
		await sleep(3000)
    notifications[1].open = false;
  }

  let notifications = [
    {
      open: false,
      title: "title1",
      body:
        "ネットワークエラーが発生しました。\n時間をおいて再度お試しください",
    },
    { open: false, title: "title2", body: "body2" },
  ];
</script>

<style lang="sass">
.btn
	@apply rounded-full px-4 py-2 bg-blue-600 text-white outline-none
	&:hover
		@apply bg-blue-400
</style>

<svelte:head>
  <title>Notification</title>
</svelte:head>

<button on:click={notifyAnimate} class="btn">notify!</button>
<NotifyList {notifications} />
