function addQuest(quests, quest) {
  quests.push(quest);
}

function removeLastQuest(quests) {
  quests.pop();
}

function removeQuestAt(quests, index) {
  quests.splice(index, 1);
}

function removeFinishedQuest(quests) {
  return quests.filter(quest => !quest.finished)
}

function getQuestByName(quests, questName) {
  return quests.find(quest => quest.name === questName);
}