<script>
  export let author;
  export let image;
  export let alt
</script>

<span>
  <img src={image} {alt}>
  {author.name}
</span>

<style>
  span {
    display: flex;
    align-items: center;
    /* font-size: 30px; */
  }

  img {
    border-radius: 50%;
    margin: 0 2em;
  }
</style>