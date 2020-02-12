<template>
  <footer class="page-footer">
    <div class="columns columns-gutter">
      <address>
        Forum Umwelt &amp; Entwicklung<br />
        Marienstraße 19-20 <br />
        10117 Berlin<br /><br />
      </address>
      <ul>
        <li><nuxt-link to="/impressum">Impressum</nuxt-link></li>

        <li>
          <ul class="social-icons">
            <li><a href="mailto:2030watch@forumue.de"><i class="icon-mail" /></a></li>
            <li><a href="https://twitter.com/2030watchde" target="_blank"><i class="icon-twitter" /></a></li>
            <li><a href="https://github.com/forumue/2030watch" target="_blank"><i class="icon-github-circled" /></a></li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="tracking-info">
      <p>2030Watch nutzt statt den üblichen externen Dienstleistern die datenschutzfreundlichere
      Technologie von <a target="_blank" href="https://matomo.org">Matomo</a>, um statistische
      Auswertungen der Seitennutzung zu erhalten. Wenn Sie dies nicht wollen, klicken Sie bitte
      <a target="_blank" href="https://matomo.gerechter-welthandel.org/index.php?module=CoreAdminHome&action=optOut&language=de&backgroundColor=&fontColor=&fontSize=&fontFamily=">hier</a>
      und entfernen Sie den Haken. Näheres in <a target="_blank" href="https://okfn.de/impressum/#datenschutzerklaerung">unserer Datenschutzerklärung</a>.</p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
  @import '~@/assets/style/variables';

  ul {
    padding: 0;
  }

  ul li, ol li {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .social-icons {
    margin-top: 1rem;
    margin-bottom: 1.5rem;

    li {
      display: inline-block;
      margin-right: 2rem;
    }
  }

  .page-footer > * {
    margin-bottom: $spacing/4;
  }

  .tracking-info > p {
    font-size: 0.8rem;
    margin-top: 0.5rem;
    line-height: 1.2rem;
  }

  .btn-newsletter {
    margin-bottom: $spacing/4;
  }

  .footer-link {
    text-decoration: underline;
  }
</style>
