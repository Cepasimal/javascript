const { addQuest, removeLastQuest, removeQuestAt, removeFinishedQuest, getQuestByName } = require('../questbook');

let quests = [];

describe('Quest Functions', () => {
  beforeEach(() => {
    quests = [
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
  });

  test('addQuest() should add a quest to the end of the array', () => {
    const newQuest = { name: 'La nouvelle quête', finished: false };
    addQuest(quests, newQuest);
    expect(quests[3]).toEqual(newQuest);
  });

  test('removeLastQuest() should remove the last quest in the array', () => {
    removeLastQuest(quests);
    expect(quests.length).toBe(2);
    expect(quests[2]).toBeUndefined();
  });

  test('removeQuestAt() should remove the quest at the specified index', () => {
    const index = 1;
    removeQuestAt(quests, index);
    expect(quests.length).toBe(2);
  });

  test('removeFinishedQuest() should remove all finished quests', () => {
    quests = removeFinishedQuest(quests);
    expect(quests.length).toBe(1);
    expect(quests[0].finished).toBe(false);
  });

  test('getQuestByName() should return the quest with the specified name', () => {
    const questName = 'La quête sympa';
    const quest = getQuestByName(quests, questName);
    expect(quest).toEqual(quests[0]);
  });

  test('getQuestByName() should return undefined if the quest does not exist', () => {
    const questName = 'La quête inexistante';
    const quest = getQuestByName(quests, questName);
    expect(quest).toBeUndefined();
  });
});
