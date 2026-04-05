<script>
  import { lang } from '$lib/stores/languageStore';
  import { translations } from '$lib/data/translations';
  import { bio } from '$lib/data/bio';

  $: t = translations[$lang];
</script>

<section class="bio">
  <h1>Bio</h1>
  <p>{bio[$lang]}</p>
</section>

<style>
.bio {
  padding: 120px 20px;
  max-width: 700px;
  margin: 0 auto;
}

.bio-text {
  margin-top: 30px;
  color: #aaa;
  line-height: 1.7;      /* 🔥 lepsza czytelność */
  font-size: 0.95rem;
  text-align: left;      /* 🔥 lepiej się czyta niż center */
  letter-spacing: 0.5px;
}
</style>