<script>
  import { lang } from '$lib/stores/languageStore';
  import { translations } from '$lib/data/translations';

  $: t = translations[$lang];
</script>

<section class="bio">
  <h1>Bio</h1>
  <p>{t.bio.text}</p>
</section>