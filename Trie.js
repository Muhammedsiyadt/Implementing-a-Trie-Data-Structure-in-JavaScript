class trieNode {
    constructor(){
        this.children = {}
        this.isEndOfTheWord = false
    }
}

class Trie{
    constructor(){
        this.root = new trieNode()
    }

    insert(word){
        let node = this.root
        for (let i = 0; i < word.length; i++) {
            let char = word[i]
            if(!node.children[char]){
                node.children[char] = new trieNode()
            }
            node = node.children[char]
        }
        node.isEndOfTheWord = true
    }

    search(word){
        let node = this.root
        for (let i = 0; i < word.length; i++) {
            let char = word[i]
            if(!node.children[char]){
                return false
            }
            node = node.children[char]
        }
        return node.isEndOfTheWord
    }

    startsWith(word){
        let node = this.root
        for (let i = 0; i < word.length; i++) {
            let char = word[i]
            if(!node.children[char]){
                return false
            }
            node = node.children[char]
        }
        return true 
    }

    startsWithReturnAll(prefix){
        let node = this.root
        for(let char of prefix){
            if(!node.children[char]){
                return []
            }
            node = node.children[char]
        }
        return this.allWords( node , prefix)
    }

    allWords( node , prefix){
        let words = []
        if(node.isEndOfTheWord){
            words.push(prefix)
        }
        for (let char in node.children) {
            words = words.concat(this.allWords(node.children[char], prefix + char));
        }
        return words;
    }
}

let obj = new Trie()
obj.insert("siyad")
obj.insert("sinan")
obj.insert("siple")
obj.insert("sabith")
obj.insert("basith")
obj.insert("bashir")
obj.insert("sajan")

console.log(obj.search("si"))
// console.log(obj.startsWith("mh")) 

// console.log(obj.startsWithReturnAll("si")); 