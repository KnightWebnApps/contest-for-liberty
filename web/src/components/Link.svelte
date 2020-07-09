<script>
  export let href;
</script>

<a {href}>
  <slot />
</a>

<style>
  a {
    text-decoration: none;
    cursor: pointer;
  }
</style>