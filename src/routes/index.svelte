<script lang="ts">
  let msg: string = "hoge";
</script>

<svelte:head>
  <title>Sapper project template</title>
</svelte:head>

<template lang="pug">
  h1 msg
  h2 {msg}
</template>
