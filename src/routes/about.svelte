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

<svelte:head>
  <title>About</title>
</svelte:head>

<h1>About this site</h1>

<p>This is the 'about' page. There's not much here.</p>

<button on:click={notifyAnimate}>notify!</button>
<NotifyList {notifications} />
