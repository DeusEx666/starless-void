<section class="hero">
 <div class="content show">
   <img src="/logo.png" alt="Starless Void logo" class="logo" />
    <h1 class="glitch" data-text="MORS CERTA, HORA INCERTA">
    MORS CERTA, HORA INCERTA
        
    </h1>
    <div class="socials">
      <!-- Spotify -->
      <a 
        href="https://open.spotify.com/artist/0VjCFhsjFRqY04xTTG50Pp" 
        target="_blank"
        class="social-icon"
      >
        <svg viewBox="0 0 24 24">
          <path fill="currentColor"
            d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 
            12-5.37 12-12S18.63 0 12 0zm5.45 17.38
            c-.21.34-.66.45-1 .24-2.74-1.68-6.2-2.06-10.28-1.14
            -.39.09-.78-.16-.87-.55-.09-.39.16-.78.55-.87
            4.42-1 8.21-.57 11.35 1.33.34.21.45.66.25.99zm1.43-3.18
            c-.26.42-.81.55-1.23.29-3.14-1.93-7.92-2.49-11.62-1.37
            -.47.14-.96-.12-1.1-.59-.14-.47.12-.96.59-1.1
            4.23-1.28 9.48-.66 13.05 1.52.42.26.55.81.31 1.25zm.12-3.31
            C15.48 8.9 9.69 8.69 6.2 9.75c-.56.17-1.15-.15-1.32-.71
            -.17-.56.15-1.15.71-1.32 3.96-1.21 10.5-1 14.58 1.29
            .51.28.69.93.41 1.44-.28.51-.93.69-1.44.41z"/>
        </svg>
      </a>
    
      <!-- Facebook -->
      <a 
        href="https://www.facebook.com/StarlessVoid"
        target="_blank"
        class="social-icon"
      >
        <svg viewBox="0 0 24 24">
          <path fill="currentColor"
            d="M22 12a10 10 0 1 0-11.5 9.88v-7h-2.3v-2.88h2.3V9.41
            c0-2.27 1.35-3.53 3.42-3.53.99 0 2.02.18 2.02.18v2.23h-1.14
            c-1.13 0-1.48.7-1.48 1.42v1.7h2.52l-.4 2.88h-2.12v7
            A10 10 0 0 0 22 12z"/>
        </svg>
      </a>
      
      <!-- Instagram -->
      <a 
        href="https://www.instagram.com/starless.void/"
        target="_blank"
        class="social-icon"
      >
        <svg viewBox="0 0 24 24">
          <path fill="currentColor"
            d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 
            2.24 5 5 5h10c2.76 0 5-2.24 
            5-5V7c0-2.76-2.24-5-5-5H7zm10 
            2c1.66 0 3 1.34 3 3v10c0 
            1.66-1.34 3-3 3H7c-1.66 
            0-3-1.34-3-3V7c0-1.66 
            1.34-3 3-3h10zm-5 
            3a5 5 0 1 0 0 10 5 5 
            0 0 0 0-10zm0 
            2a3 3 0 1 1 0 6 3 3 
            0 0 1 0-6zm4.5-.75a1.25 
            1.25 0 1 0 0 2.5 1.25 
            1.25 0 0 0 0-2.5z"/>
        </svg>
      </a>
      
      <!-- Bandcamp -->
      <a 
        href="https://starlessvoid.bandcamp.com/"
        target="_blank"
        class="social-icon"
      >
        <svg viewBox="0 0 24 24">
          <path fill="currentColor"
            d="M0 17.5L6.5 6h17.5l-6.5 11.5H0z"/>
        </svg>
      </a>
      
      <!-- Metal Archives -->
      <a 
        href="https://www.metal-archives.com/bands/Starless_Void/3540550287"
        target="_blank"
        class="social-icon"
        title="Metal Archives"
      >
        <svg viewBox="0 0 24 24">
          <path fill="currentColor"
            d="M2 2h20v20H2V2zm4 4v12h2V8l4 5 4-5v10h2V6h-2l-4 5-4-5H6z"/>
        </svg>
      </a>
    </div>
    

    <p class="hint">Powered by Pentex</p>
  </div>
</section>



<style>

.logo {
  width: 220px;
   margin-bottom: 20px;
   filter: drop-shadow(0 0 10px #8b0000);
   opacity: 0.9;
   position: relative;
  mix-blend-mode: screen;
   
}

.logo::before,
.logo::after {
  content: "";
  position: absolute;
  inset: 0;
  background: url("/logo.png") center/contain no-repeat;
  opacity: 0.2;
}

.logo::before {
  transform: translate(-2px, 0);
  filter: hue-rotate(20deg);
  animation: glitch1 2s infinite;
}

.logo::after {
  transform: translate(2px, 0);
  filter: hue-rotate(-20deg);
  animation: glitch2 2s infinite;
}

@keyframes glitch1 {
  0% { transform: translate(0); }
  20% { transform: translate(-2px, 1px); }
  40% { transform: translate(-1px, -1px); }
  60% { transform: translate(-3px, 2px); }
  80% { transform: translate(-1px, 0); }
  100% { transform: translate(0); }
}

@keyframes glitch2 {
  0% { transform: translate(0); }
  20% { transform: translate(2px, -1px); }
  40% { transform: translate(1px, 1px); }
  60% { transform: translate(3px, -2px); }
  80% { transform: translate(1px, 0); }
  100% { transform: translate(0); }
}

/* hover */
.logo:hover {
  opacity: 1;
  filter: drop-shadow(0 0 20px #8b0000);
  transform: scale(1.05);
}
.hero {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: black;
}

.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    opacity: 0;
    transform: translateY(20px);
    transition: all 1s ease;
}



.content.show {
  opacity: 1;
  transform: translateY(0);
  }

h1 {
  color: white;
  font-size: 3rem;
}

.spotify-btn {
  border: 1px solid #8b0000;
  padding: 12px 24px;
  color: white;
  display: inline-block;
  margin-top: 20px;
}

.spotify-btn:hover {
  box-shadow: 0 0 20px red;
}

.hint {
  color: #666;
  font-size: 0.8rem;
}

.glitch {
  position: relative;
  color: white;
  display: inline-block;
  text-shadow: 0 0 5px #8b0000;
}

/* wspólne */
.glitch::before,
.glitch::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
}

/* warstwa 1 */
.glitch::before {
  color: #8b0000;
  transform: translate(-1px, 0);
  opacity: 0.7;
  animation: glitch1 2s infinite;
}

/* warstwa 2 */
.glitch::after {
  color: #ff0000;
  transform: translate(1px, 0);
  opacity: 0.5;
  animation: glitch2 2s infinite;
}

.facebook-btn {
  border: 1px solid #8b0000;
  padding: 10px 20px;
  color: #aaa;
  display: inline-block;
  margin-top: 10px;
  font-size: 0.8rem;
  letter-spacing: 1px;
  transition: 0.3s;
}

/* hover */
.facebook-btn:hover {
  color: white;
  box-shadow: 0 0 20px #8b0000;
}

.socials {
  display: flex;
  gap: 20px;
  margin-top: 20px;
}

/* ikonka */
.social-icon {
  width: 40px;
  height: 40px;
  border: 1px solid #8b0000;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #aaa;
  transition: 0.3s;
}

/* svg */
.social-icon svg {
  width: 20px;
  height: 20px;
}

/* hover */
.social-icon:hover {
  color: white;
  box-shadow: 0 0 15px #8b0000;
  transform: scale(1.1);
}

.social-icon:hover {
  color: #ff0000;
}

.social-icon:hover:nth-child(4) {
  color: #629aa9; /* lekki bandcamp vibe */
}









</style>