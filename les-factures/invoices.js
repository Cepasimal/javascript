/**
 * Liste de factures
 * 
 * Les factures et leurs valeurs sont à titre indicatif, elles vous permettent de comprendre 
 * à quoi est censé ressembler une facture.
 * 
 * Vous ne devez pas modifier les factures manuellement
 */
let invoices = [
  {
    from: 'Toto',
    to: 'Titi',
    price: 100,
  },
  {
    from: 'Titi',
    to: 'Tutu',
    price: 20,
  },
  {
    from: 'Tutu',
    to: 'Toto',
    price: 88,
  },
];

/**
 * Dans cet exercice, pour découvrir les fonctionnalités natives
 * du Javascript, il vous est interdit d'utiliser la boucle for
 * ainsi que tous ses dérivés : for in, for of, forEach.
 */

/**
 * Permet de simuler la crise financière actuelle
 * en multipliant le prix de chaque facture par un facteur.
 * 
 * @param invoices les factures
 * @param factor le multiplicateur de prix
 */
function applyFinancialCrisis(invoices, factor) {
  // TODO
}

/**
 * Permet de formatter un message contenant les destinataires
 * des factures.
 * 
 * @param invoices les factures
 */
function formatAllRecipients(invoices) {
  // TODO
}

/**
 * Permet de calculer le prix total des factures.
 * 
 * @param invoices les factures
 */
function getTotalPrice(invoices) {
  // TODO
}

module.exports = {
  applyFinancialCrisis,
  formatAllRecipients,
  getTotalPrice,
}
