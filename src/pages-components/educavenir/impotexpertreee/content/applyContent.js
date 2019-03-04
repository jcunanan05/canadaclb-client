import { processMarkdown } from './index'
import marked from 'marked'

const embedUrl = 'https://www.smartsaver.org/reeeussite/?ufile'

const applyContent = {
  title:
    'Demandez le Bon d’études canadien pour votre enfant dès aujourd’hui !',
  content:
    processMarkdown(`
Si votre enfant est né en 2004 ou après et que votre revenu familial net est de 46 605 $* ou moins, vous pouvez profiter de cette occasion d’épargner dès aujourd’hui pour les études de votre enfant. Vous n’avez aucuns frais à payer pour demander le Bon d’études canadien ni aucun argent à investir.

_*pour les familles de trois enfants ou moins. Si votre famille compte plus de trois enfants, [cliquez ici.](https://www.canada.ca/fr/emploi-developpement-social/services/aide-financiere-etudiants/epargne-etudes/reee/promoteurs-reee/bulletin/avis-2018-772.html)_
  
Les enfants admissibles reçoivent un premier dépôt de 500 $ et 100 $ supplémentaires chaque année où ils sont admissibles, y compris les années précédant leur demande, jusqu’à un maximum de 2000 $.
  `) +
    marked(
      'Pour recevoir le Bon d’études canadien, votre enfant doit avoir souscrit à un Régime enregistré d’épargne-études (REEE). Vous pouvez en obtenir un sans frais en [cliquant ici.](#reee)'
    ) +
    processMarkdown(
      `_Si vous ne pouvez pas voir le formulaire, [cliquez ici.](${embedUrl})_`
    ),
  embedUrl,
  footerContent: processMarkdown(
    "Présenté par UFile et SmartSAVER. Pour plus d'information contactez 1-855-737-7252 ou info@smartsaver.org"
  ),
}

export default applyContent
