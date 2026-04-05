<script>
  import { albums } from '$lib/data/discography';
  import { lang } from '$lib/stores/languageStore';
</script>

<section class="discography">
  <h1>Discography</h1>

  <div class="grid">
    {#each albums as album}
      <div class="card">
       <img src={album.cover} alt={album.title} on:error={(e) => e.target.src = '/placeholder.jpg'} />

        <div class="info">
          <div class="title">{album.title}</div>

          <div class="meta">
            {album.year} • {album.type}
          </div>

          <!-- 🌍 opis zależny od języka -->
          <p class="desc">
            {album.description?.[$lang] ?? album.description.pl}
          </p>
        </div>
      </div>
    {/each}
  </div>
</section>

<style>
.discography {
  padding: 100px 40px;
}

/* grid */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 30px;
}

/* karta */
.card {
  cursor: pointer;
  transition: 0.3s;
}

.card:hover {
  transform: scale(1.05);
}

/* obraz */
.card img {
  width: 100%;
  display: block;
  filter: grayscale(30%);
  transition: 0.3s;
}

.card:hover img {
  filter: grayscale(0%);
}

/* info */
.info {
  margin-top: 10px;
}

.title {
  font-weight: bold;
  margin-bottom: 5px;
}

.meta {
  font-size: 0.8rem;
  color: #777;
}

/* opis */
.desc {
  font-size: 0.8rem;
  color: #999;
  margin-top: 5px;
  line-height: 1.4;
}
</style>