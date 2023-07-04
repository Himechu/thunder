import express from "express"


let app = express()
// app.get('/', (req,res) =>{
//     res.send("Salut , bienvenue dans ma mission")
// })


// app.get('/speak/dog', (req,res) =>{
//     res.send("Le chien dit 'woof woof'")
// })

// app.get('/speak/cat', (req,res) =>{
//     res.send("le chat dit 'meow meow' ")
// })

// app.get('/speak/cow', (req,res) =>{
//     res.send("La vache dit 'Moooooo'")
// })


// app.get('/repeat/Word/3', (req,res)=>{
//     res.send("Word Word Word")
// })


// app.get('/repeat/Teacher/5', (req,res)=>{
//     res.send("Teacher Teacher Teacher Teacher Teacher")
// })

// app.get('/operate/nul/3/5', (req,res)=>{
//     res.send(`Le resultat${nul}`)
// })


// app.get('/operate/add/3/5', (req,res)=>{
//     res.send(`Le resultat${add}`)
// })


// app.get('/operate/add/3/5', (req,res)=>{
//     res.send(`Le resultat${add}`)
// })


// app.get('/operate/sub/9/5', (req,res)=>{
//     res.send(`Le resultat${sub}`)
// })


// app.get('/operate/div/15/5', (req,res)=>{
//     res.send(`Le resultat:${div}`)
// })

// app.get("/r/:animal", (req, res) => {
//     let {animal} = req.params;
//  res.send(`Bienvenue chez ${animal} SUBREDDIT`);});

app.get('/repeat/:mot/:nombre', (req, res) => {
    console.log =( req.params)
    let {mot, nombre}=req.params
    res.send(`${mot.repeat(nombre)}`)
}
)

app.get('/operate/:operateur/:nb1/:nb2', (req,res)=>{
    let {operateur, nb1, nb2} = req.params
    let resultat
    switch(operateur){
        case 'add' : resultat = parseInt(nb1)+Number(nb2); break;
        case 'mult' : resultat =nb1*nb2; break;
        case 'div' : resultat =nb1/nb2; break;
        case 'sub' : resultat =nb1 - nb2; break;
    }

res.end(`${resultat}`)
})
let port = 5000 || process.env.PORT;
app.listen(port, ()=>{console.log(`le serveur tourne sur le port ${port}`)})