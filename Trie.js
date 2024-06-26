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
}

let obj = new Trie()
obj.insert("mhr")

console.log(obj.search("mhr"))
console.log(obj.startsWith("mh")) 