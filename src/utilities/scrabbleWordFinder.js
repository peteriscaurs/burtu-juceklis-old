class ScrabbleTreeNode {
  constructor() {
    this.children = Object.create(null);
  }
}

class ScrabbleDictionary {
  constructor(words) {
    this.root = new ScrabbleTreeNode();
    words.forEach((word) => this.insert(word));
  }
  insert(word) {
    let cursor = this.root;
    for (let letter of word.letters) {
      if (!cursor.children[letter]) {
        cursor.children[letter] = new ScrabbleTreeNode();
      }
      cursor = cursor.children[letter];
    }
    cursor.isWord = true;
    cursor.value = word.value;
  }
}

class ScrabbleWordFinder {
  constructor(dict) {
    this.dict = new ScrabbleDictionary(dict);
  }
  find(letters) {
    return this.validWords(this.dict.root, letters);
  }
  validWords = function (node, letters, word = "", results = []) {
    if (node.isWord) {
      results.push({ letters: word, value: node.value });
    }
    const seen = new Set();
    for (let ch of letters) {
      if (!seen.has(ch)) {
        seen.add(ch);
        if (node.children[ch]) {
          this.validWords(
            node.children[ch],
            letters.replace(ch, ""),
            word + ch,
            results
          );
        }
      }
    }
    return results;
  };
}

export default ScrabbleWordFinder;
