NEO WORLD — PREMIÈRE VERSION TECHNIQUE MOBILE
==============================================

Ce dossier contient une première maquette jouable (PWA) pensée pour être
hébergée depuis un dépôt GitHub et ouverte sur iPhone.

CE QUI FONCTIONNE
- Terrain d'exploration 2D stylisé.
- Déplacement avec les quatre boutons tactiles.
- Collecte de pièces virtuelles.
- Cadeau quotidien de démonstration.
- Sauvegarde locale sur l'appareil.
- Fichiers PWA et mise en cache pour une installation web.

CE QUI N'EST PAS ENCORE CONNECTÉ
- Aucun compte joueur ni serveur.
- Aucun multijoueur en ligne.
- Aucun paiement réel ni publicité.
- Les pièces et récompenses sont fictives et stockées localement.
- La récompense quotidienne locale peut être contournée : elle devra être
  validée par un serveur avant toute mise en production.

OUVRIR SUR IPHONE
1. Héberger les fichiers sur GitHub Pages ou un hébergeur HTTPS.
2. Ouvrir l'adresse du site dans Safari.
3. Appuyer sur Partager > Sur l'écran d'accueil.
4. Lancer NEO WORLD depuis l'icône.

PROCHAINE ÉTAPE TECHNIQUE
Créer un backend avec authentification, base de données et serveur temps réel.
Le serveur devra être l'autorité pour les positions, les récompenses,
l'inventaire et les achats. Ne jamais faire confiance au solde envoyé
par le téléphone.

Pistes envisagées pour la suite :
- Frontend prototype : HTML/CSS/JavaScript (ce dossier)
- Backend : Supabase ou service multijoueur spécialisé
- Jeu 3D ultérieur : Unity, lorsque l'accès à un ordinateur sera possible

Ce prototype est une base de travail, pas une application publiée.
