<script lang="ts">
  let count = $state(0);

  const handleIncrement = () => {
    count += 1;
  };

  const handleDecrement = () => {
    count !== 0 ? count -= 1 : count = 0;
  };

</script>

<h1>Svelte Counter</h1>
<div>{count}</div>
<div>
  <button onclick={handleIncrement}>increment</button>
  <button onclick={handleDecrement}>decrement</button>
</div>
