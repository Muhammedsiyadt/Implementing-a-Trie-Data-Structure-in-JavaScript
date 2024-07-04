class Node{
    constructor(){
        this.children = {}
        this.isEnd = false
    }
}

class Trie{
    constructor(){
        this.root = new Node() 
    }

    insert(word){
        let node = this.root
        for(let char of word){
            if(!node.children[char]){
                node.children[char] = new Node() 
            }
            node = node.children[char] 
        }
        node.isEnd = true
    }

    search(word){
        let node = this.root
        for(let char of word){
            if(!node.children[char]){
                return false
            }
            node = node.children[char]
        }
        return node.isEnd
    }

    prefixSearch(pref){
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

const trie = new Trie()

trie.insert("SIYAD")  
trie.insert("SINAN")  
trie.insert("SIHAB")  

console.log(trie.prefixSearch("SI"))   

console.log(trie); 