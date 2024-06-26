class trieNode{
    constructor(){
        this.children  = {}
        this.endOfWord = false
    }
}

class trie{
    constructor(){
        this.root = new trieNode()
    }

    insert(word){
        let node = this.root
        for(let char of word){
            if(!node.children[char]){
                node.children[char] = new trieNode()
            }
            node = node.children[char]
        }
        node.endOfWord = true
    }

    search(word){
        let node = this.root
        for(let char of word){
            if(!node.children[char]){
                return false
            }
            node = node.children[char]
        }
        return node.endOfWord
    }

    startsWith(pref){
        let node = this.root
        for(let char of pref){
            if(!node.children[char]){
                return false
            }
            node = node.children[char]
        }
        return true
    }
}


let Trie = new trie()

Trie.insert("apple")

console.log(Trie.search("apple")); 

console.log(Trie.search("apple"));    



