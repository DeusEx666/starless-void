<script>
  import { gigs } from '$lib/data/gigs';
</script>

<section class="gigs">
  <h1>Gigs</h1>

  {#each gigs as gig}
    <div class="gig">
      <div>{gig.date}</div>
      <div>{gig.city} - {gig.venue}</div>
      <div>{gig.country}</div>
    </div>
  {/each}
</section>

<style>
.gigs {
  padding: 100px 40px;
}

.gig {
  border: 1px solid #222;
  padding: 10px;
  margin-bottom: 10px;
}
</style>