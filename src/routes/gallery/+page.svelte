<script>
  import { photos } from '$lib/data/gallery';
   import { lang } from '$lib/stores/languageStore';
    import { translations } from '$lib/data/translations';
    
      $: t = translations[$lang];

  let active = null;
</script>

<section class="gallery">
  <h1 class="glitch" data-text={t.pages.gallery}>
        {t.pages.gallery}
      </h1>

  <div class="grid">
    {#each photos as p}
      <img src={p.src} on:click={() => active = p.src} />
    {/each}
  </div>
</section>

{#if active}
  <div class="lightbox" on:click={() => active = null}>
    <img src={active} />
  </div>
{/if}

<style>
.gallery {
  padding: 100px 40px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

img {
  width: 100%;
  cursor: pointer;
}

/* lightbox */
.lightbox {
  position: fixed;
  inset: 0;
  background: black;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox img {
  max-width: 90%;
}
</style>