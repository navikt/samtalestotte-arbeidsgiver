# Side om samtalestotte for  sykefravær

Siden gir informasjon til arbeidsgivere om hva NAV kan hjelpe til med i forbindelse med samtaler med sykmeldte arbeidstakere.


# Komme i gang

- Installere avhengigheter: `yarn`
- Kjøre tester: `yarn test`
- Starte appen lokalt - her har man flere muligheter, avhengig av hva man vil:
  - Alt. 1: Lokal utviklingsserver:
    1. Kjøre opp utviklingserver: `yarn dev`
    2. Gå til http://localhost:3005/samtalestotte
  - Alt. 2: Node-server:
      1. Kjøre opp node-server: `yarn build && yarn start`
      2. Gå til http://localhost:3000/samtalestotte
  - Alt. 3: Kjøre applikasjonen med Docker:
    1. Start container runtime (f.eks docker desktop eller colima)
    2. `yarn install && yarn build`
    3. `docker build -t samtalestotte-arbeidsgiver .`
    4. `docker run -d -p 3000:3000 samtalestotte-arbeidsgiver`
    5. Gå til http://localhost:3000/samtalestotte
    6. For å stoppe, kjør `docker kill <id>` med id-en du finner med `docker ps`

## Deploy

- Master-branch deployes automatisk til `prod`.
- Deploy av en gitt branch til `dev`-miljøet gjøres ved å fylle inn navnet på branchen
  i `deploy-to-dev` i filen `.github/workflows/build-deploy.yml`

### Lenker til applikasjon

- i prod: https://arbeidsgiver.nav.no/samtalestotte
- Dev-miljøer:
  - i labs-miljø: https://arbeidsgiver.labs.nais.io/samtalestotte
  - i dev-miljø: https://arbeidsgiver-gcp.dev.nav.no/samtalestotte -- trenger #naisdevice kjørende
    se https://doc.nais.io/device/install/ for info om det

## FAQ

### Rød strek under variabler i @media tags

Denne applikasjonen bruker custom-media-queries -- se https://preset-env.cssdb.org/features/#custom-media-queries .
Intellij vil ikke gjenkjenne dette som gyldig css med mindre du setter css dialekten til postCSS.
Dette kan gjøres ved å laste ned å laste ned postcss plugin og sette "stylesheet dialect" til postCSS. 

---

# Kontakt

* For spørsmål eller henvendelser, opprett gjerne et issue her på GitHub.
* Koden utvikles og driftes av Team IA i [Produktområde arbeidsgiver](https://navno.sharepoint.com/sites/intranett-prosjekter-og-utvikling/SitePages/Produktomr%C3%A5de-arbeidsgiver.aspx).
* Slack-kanal [#teamia](https://nav-it.slack.com/archives/CMN0M3CDP)