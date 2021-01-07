# Side om samtalestotte for  sykefravær

Siden gir informasjon til arbeidsgivere om hva NAV kan hjelpe til med i forbindelse med samtaler med sykmeldte arbeidstakere.


# Komme i gang

- Installere avhengigheter: `yarn`
- Starte appen lokalt: Her har man flere muligheter, avhengig av hva man vil.
    1. Kjøre opp utviklingserver `yarn start`
    2. Kjøre dev med `yarn run dev` 
- Eventuelt starte appen med Node-serveren: `yarn run build && yarn server`
- Kjøre applikasjonen med Docker:
    1. `yarn install && yarn build`
    2. `docker build -t samtalestotte-arbeidsgiver .`
    3. `docker run -d -p 3000:3000 samtalestotte-arbeidsgiver`
    4. For å stoppe, kjør `docker stop <id>` med id-en fra forrige kommando

## Deploy

Master branch deployes automatisk til Prod(under arbeid).

### Hvordan deployer man en vis branch?

Oppdater filen `.github/workflows/build-deploy.yml` ved `deploy-to-dev` steg med navn til den branch-en som skal deployes


### Lenker til applikasjon

- i prod(under arbeid): https://arbeidsgiver.nav.no/samtalestotte-arbeidsgiver
- i dev miljø: https://arbeidsgiver-gcp.dev.nav.no/samtalestotte-arbeidsgiver --trenger #naisdevice kjørende se https://doc.nais.io/device/install/ for info om det

---

# Henvendelser

Spørsmål knyttet til koden eller prosjektet kan rettes mot:

- Malaz Alkoj, malaz.alkoj@nav.no
- Thomas Dufourd, thomas.dufourd@nav.no
- Lars Andreas Tveiten, lars.andreas.van.woensel.kooy.tveiten@nav.no

## For NAV-ansatte

Interne henvendelser kan sendes via Slack i kanalen #arbeidsgiver-teamia.
