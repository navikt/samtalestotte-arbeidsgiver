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

Master branch deployes automatisk til Prod.

### Hvordan deployer man en viss branch til dev-miljø?

Oppdater filen `.github/workflows/build-deploy.yml` ved `deploy-to-dev` steg med navn til den branch-en som skal deployes


### Lenker til applikasjon

- i prod: https://arbeidsgiver.nav.no/samtalestotte
- Dev-miljøer:
  - i labs-miljø: https://arbeidsgiver.labs.nais.io/samtalestotte
  - i dev-miljø: https://arbeidsgiver-gcp.dev.nav.no/samtalestotte -- trenger #naisdevice kjørende se https://doc.nais.io/device/install/ for info om det
---

# Henvendelser

## For Nav-ansatte
* Dette Git-repositoriet eies av [Team IA i Produktområde arbeidsgiver](https://navno.sharepoint.com/sites/intranett-prosjekter-og-utvikling/SitePages/Produktomr%C3%A5de-arbeidsgiver.aspx).
* Slack-kanaler:
  * [#arbeidsgiver-teamia-utvikling](https://nav-it.slack.com/archives/C016KJA7CFK)
  * [#arbeidsgiver-utvikling](https://nav-it.slack.com/archives/CD4MES6BB)
  * [#arbeidsgiver-general](https://nav-it.slack.com/archives/CCM649PDH)

## For folk utenfor Nav
* Opprett gjerne en issue i Github for alle typer spørsmål
* IT-utviklerne i Github-teamet https://github.com/orgs/navikt/teams/arbeidsgiver
* IT-avdelingen i [Arbeids- og velferdsdirektoratet](https://www.nav.no/no/NAV+og+samfunn/Kontakt+NAV/Relatert+informasjon/arbeids-og-velferdsdirektoratet-kontorinformasjon)
