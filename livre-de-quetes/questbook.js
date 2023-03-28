/**
 * Livre de quêtes
 * 
 * Le contenu du livre est à titre indicatif, il vous permet de comprendre à quoi
 * est censé ressembler une quête.
 * 
 * Vous ne devez pas modifier son contenu manuellement
 */
let quests = [
  {
    name: 'La quête sympa',
    finished: true,
  },
  {
    name: 'La quête relou',
    finished: false,
  },
  {
    name: 'La quête difficile',
    finished: true,
  }
];

/**
 * Permet d'ajouter une quête dans le livre de quêtes.
 * La quête doit être ajouter à la fin du livre de quêtes.
 * 
 * @param quests le livre de quêtes
 * @param quest la quête à ajouter
 */
function addQuest(quests, quest) {
  // TODO
}

/**
 * Permet de retirer la dernière quête du livre de quêtes.
 * La dernière quête étant celle à la fin du livre de quêtes.
 * 
 * @param quests le livre de quêtes
 */
function removeLastQuest(quests) {
  // TODO
}

/**
 * Permet de retirer une quête du livre de quêtes
 * en indiquant son emplacement dans le livre de quêtes.
 * 
 * @param quests le livre de quêtes
 * @param index emplacement de la quête (commence à 0)
 */
function removeQuestAt(quests, index) {
  // TODO
}

/**
 * Permet de retirer toutes les quêtes terminées du livre de quêtes
 * 
 * @param quests le livre de quêtes
 */
function removeFinishedQuest(quests) {
  // TODO
}

/**
 * Permet de récupérer une quête dans le livre de quêtes
 * en indiquant son nom.
 * 
 * @param quests le livre de quêtes
 * @param questName Le nom de la quête (sensible à la casse)
 */
function getQuestByName(quests, questName) {
  // TODO
}

module.exports = {
  addQuest,
  removeLastQuest,
  removeQuestAt,
  removeFinishedQuest,
  getQuestByName
}