<script>
  import { page } from '$app/stores';
  import { lang } from '$lib/stores/languageStore';
  import { translations } from '$lib/data/translations';

  $: t = translations[$lang];
</script>
 let open = false;


<nav class="navbar">
<button class="burger" on:click={() => open = !open}>
  ☰
</button>
<div class="nav-links" class:open={open}>

  <a href="/" class="home-link"
  class:active={$page.url.pathname === '/'}>
    <img src="/cross.png" alt="home" />
    <span>HOME</span>
  </a>


  <div class="nav-links">
    <a href="/gigs" class="nav-item"
    class:active={$page.url.pathname === '/gigs'}>
      <span>{t.nav.gigs}</span>
      <img src="/cross.png" />
    </a>

    <a href="/gallery" class="nav-item"
    class:active={$page.url.pathname === '/gallery'}>
      <span>{t.nav.gallery}</span>
      <img src="/cross.png" />
    </a>

    <a href="/discography" class="nav-item"
    class:active={$page.url.pathname === '/discography'}>
      <span>{t.nav.discography}</span>
      <img src="/cross.png" />
    </a>
    
    <a href="/bio" class="nav-item"
    class:active={$page.url.pathname === '/bio'}>
          <span>{t.nav.bio}</span>
          <img src="/cross.png" />
        </a>

    <a href="/contact" class="nav-item"
     class:active={$page.url.pathname === '/contact'}>
      <span>{t.nav.contact}</span>
      <img src="/cross.png" />
    </a>
  </div>
  <div class="lang-switch">
 <button 
   on:click={() => lang.set('pl')}
   class:active={$lang === 'pl'}
 >
   PL
 </button>
 
 <button 
   on:click={() => lang.set('en')}
   class:active={$lang === 'en'}
 >
   EN
 </button>
 
 <button 
   on:click={() => lang.set('cz')}
   class:active={$lang === 'cz'}
 >
   CZ
 </button>
  </div>


</nav>

<style>

a {
  color: white;
  text-decoration: none;
}

a:hover {
  text-shadow: 0 0 8px red;
}

.home-cross img {
  width: 16px;
  transform: rotate(180deg);
  filter: drop-shadow(0 0 5px #8b0000);
}

.home-cross:hover img {
  filter: drop-shadow(0 0 15px #8b0000);
  transform: rotate(180deg) scale(1.2);
}

nav {
  position: relative; /* 🔥 ważne */
}

.navbar {
 position: fixed;
   top: 0;
   width: 100%;
   background: black;
   border-bottom: 1px solid #8b0000;
 
   display: flex;
   align-items: center;
   justify-content: space-between;
 
   padding: 10px 20px;
 
   box-sizing: border-box;
}

/* HOME */
.home-link {
  display: flex;
  flex-direction: column;
  align-items: center;

  text-decoration: none;
  color: #8b0000;
  font-size: 0.7rem;
  letter-spacing: 2px;

  transition: 0.3s;
}

/* MENU */
.nav-links {
  display: flex;
  gap: 30px;
  flex-wrap: wrap:
}

/* ITEM */
.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;

  text-decoration: none;
  color: #aaa;
  font-size: 0.8rem;
}

/* KRZYŻ */
.nav-item img,
.home-link img {
  width: 12px;
  transform: rotate(180deg);
  margin-top: 4px;

  filter: drop-shadow(0 0 3px #8b0000);
  transition: 0.3s;
}

/* HOVER */
.nav-item:hover,
.home-link:hover {
  color: white;
}

.nav-item:hover span,
.home-link:hover span {
  text-shadow: 0 0 8px #8b0000;
}

.nav-item:hover img,
.home-link:hover img {
  filter: drop-shadow(0 0 10px #8b0000);
  transform: rotate(180deg) scale(1.2);
}

.nav-links {
  display: flex;
  gap: 30px;
}

.home-link {
  margin-right: 40px;
}

.nav-item.active {
  color: white;
}

.nav-item.active span {
  text-shadow: 0 0 10px #8b0000;
}

.nav-item.active img {
  filter: drop-shadow(0 0 15px #8b0000);
  transform: rotate(180deg) scale(1.2);
  opacity: 1;
}

button {
  background: none;
  border: 1px solid #8b0000;
  color: white;
  margin-left: 5px;
  cursor: pointer;
}

.lang-switch button.active {
  color: white;
  border-color: red;
  text-shadow: 0 0 8px #8b0000;
  box-shadow: 0 0 10px #8b0000;
}



/* burger hidden desktop */
.burger {
  display: none;
  font-size: 20px;
  background: none;
  border: none;
  color: white;
}

/* mobile */
@media (max-width: 768px) {

  .burger {
    display: block;
  }

  .nav-links {
    display: none;
    flex-direction: column;
    width: 100%;
    margin-top: 10px;
  }

  .nav-links.open {
    display: flex;
  }
}


</style>