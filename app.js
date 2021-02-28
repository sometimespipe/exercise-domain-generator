
//let pronombre = ["su", "nuestro", "tu","aquel","el"];
//let adjetivo = ["grande", "pequeño", "azul", "negro", "veloz", "eficiente", "audaz", "osado", "interesante", "bajito", "colmado"];
//let sustantivo = ["computador", "jirafa", "computador", "programa", "mouse", "teclado", "diccionario", "pantalla", "matraz", "capa", "zapatos"];
//let extension = ["com", "cr", "gov", "ac", "net", "io", "es"];





let pronoun = ["the","our"];
let adj = ["great", "big", "hocomla", "aleles"];
let noun = ["jogger","racoon", "claudio", "lastofus"];
let domains = ["com","net","org","us", "es", "cl"];
const createDomains = () => {
    for (p in pronoun) {
        for (a in adj) {
            for (n in noun) {
                for (d in domains){
                    let str= `${pronoun[p]}${adj[a]}${noun[n]}`
                    if(str.includes(domains[d])){
                        let newStr = str.replace(domains[d], "");
                        finalStr = `${newStr}.${domains[d]}`
                        console.log(finalStr)
                    } else {
                        console.log(`${str}.${domains[d]}`)
                    }
                }
            }
        }
    }
}
createDomains();


