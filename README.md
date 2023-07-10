# Trombinoscope et Anniversaires du jour

## Description

Il s'agit d'une extension pour navigateur web qui permet de télécharger le trombinoscope directement depuis le site de l'amicale. De plus, cette extension affiche les anniversaires du jour. Elle est compatible avec les navigateurs basés sur Chromium (comme Google Chrome) et Firefox.

## Fonctionnalités

- Téléchargement du trombinoscope depuis le site de l'amicale.
- Affichage des anniversaires du jour.

## Installation

1. Téléchargez ou clonez le dépôt.
2. Pour Google Chrome :
    - Ouvrez le navigateur et accédez à `chrome://extensions`.
    - Activez le mode développeur.
    - Cliquez sur `Load unpacked` et sélectionnez le dossier contenant l'extension.
3. Pour Firefox :
    - Ouvrez le navigateur et accédez à `about:debugging`.
    - Cliquez sur `This Firefox`.
    - Cliquez sur `Load Temporary Add-on...` et sélectionnez le dossier contenant l'extension.
    - il est disponible également via le lien: https://addons.mozilla.org/fr/firefox/addon/trombinoscope-amicale/ 

## Utilisation

1. Une fois l'extension installée, naviguez vers la page "RESEAU" du site de l'amicale.
2. Un bouton "Trombinoscope" apparaît en bas à droite de la page. Cliquez dessus pour lancer le téléchargement du trombinoscope.
3. Pour consulter les anniversaires du jour, cliquez sur l'icône de l'extension dans la barre d'outils du navigateur.

## Permissions

L'extension nécessite les permissions suivantes :

- `webRequest` et `webRequestBlocking` : Permettent d'intercepter et de bloquer les requêtes web.
- `notifications` : Permet d'afficher des notifications.
- Accès à `*://amicale-fondationbesse.assoconnect.com/*` : Permet d'accéder aux pages du site de l'amicale.

## Support

Pour toute question ou problème, veuillez ouvrir une issue sur ce dépôt.

## Version

Version actuelle : 1.3

## Note

Cette extension est destinée à être utilisée avec Google Chrome version 22.0.0 ou supérieure, et Firefox. D'autres navigateurs basés sur Chromium peuvent également être compatibles.