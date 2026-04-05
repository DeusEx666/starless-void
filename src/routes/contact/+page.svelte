<script>
  import { lang } from '$lib/stores/languageStore';
  import { translations } from '$lib/data/translations';

  $: t = translations[$lang];
</script>

<section class="contact">
  <h1 class="glitch" data-text="CONTACT">
    {t.contact.title}
  </h1>

  <div class="contact-box">
    <p class="label">{t.contact.email}</p>

    <a 
      href="mailto:starless.void.silesia@gmail.com"
      class="email"
    >
      starless.void.silesia@gmail.com
    </a>
  </div>
</section>

<style>

.contact {
  padding: 120px 20px;
  text-align: center;
}

/* box */
.contact-box {
  margin-top: 40px;
  padding: 30px;

  border: 1px solid #222;
  background: #0b0b0b;

  display: inline-block;
}

/* label */
.label {
  font-size: 0.7rem;
  color: #666;
  margin-bottom: 10px;
  letter-spacing: 2px;
}

/* email */
.email {
  color: #aaa;
  text-decoration: none;
  font-size: 1rem;
  letter-spacing: 1px;
  transition: 0.3s;
}

/* hover */
.email:hover {
  color: white;
  text-shadow: 0 0 10px #8b0000;
}

</style>