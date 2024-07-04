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

    returnAllMatchPrefix(prefix){
        let node = this.root
        for(let char of prefix){
            if(!node.children[char]){
                return []
            }
            node = node.children[char]
        }
        return this.allNamePrint(node , prefix)
    }

    allNamePrint(node , prefix){
        let words = []
        if(node.endOfWord){
            words.push(prefix)
        }
        for(let char in node.children){
            words = words.concat(this.allNamePrint(node.children[char] , prefix + char))
        }
        return words
    }
}


let Trie = new trie()

Trie.insert("apple")
Trie.insert("bpp")
Trie.insert("zpplication")
Trie.insert("vi")
 
console.log(Trie.root); 

// console.log(Trie.search("apple")); 

// console.log(Trie.returnAllMatchPrefix("ap"));    



