# Samtalestøtte arbeidsgiver

Verktøy for arbeidsgivere om hvordan de kan holde en samtale med mål om å forebygge eller følge opp sykefravær.

# Komme i gang

- Installere avhengigheter: `yarn`
- Starte appen lokalt - her har man flere muligheter, avhengig av hva man vil:
  - Alt. 1: Lokal utviklingsserver:
    1. Kjøre opp utviklingserver `yarn build && yarn start`, eventuelt `yarn run dev`
    2. Gå til http://localhost:3005/samtalestotte
  - Alt. 2: Node-serveren: `yarn run build && yarn server`
  - Alt. 3: Kjøre applikasjonen med Docker:
     1. `yarn install && yarn build`
     2. `docker build -t samtalestotte-arbeidsgiver .`
     3. `docker run -d -p 3005:3005 samtalestotte-arbeidsgiver`
     4. For å stoppe, kjør `docker stop <id>` med id-en fra forrige kommando

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
