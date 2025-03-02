<script lang="ts">
  import MenuButtonIcon from "../components/icons/menu-button-icon.svelte";

</script>

<details id="menuButton" class="hdr-navi menu-button">
  <summary style="list-style: none;">
    <div class="navi-ctn tgl-menu">
      <span class="btn-item">
        <MenuButtonIcon />
      </span>
    </div>
  </summary>
  <div class="dummy" style="display: none;"></div>
</details>

<style>
  .menu-button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 30px;
    position: relative;
    top: 3px;
    left: 0;
  }
</style>
