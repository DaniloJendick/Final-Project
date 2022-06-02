import {MongoClient} from "mongodb" //aosidfnpiuoasdngpiuerbiuaernbgiopaerbng
//const { MongoClient} = require("mongodb");
const URL = process.env.MONGO_URL ?? "mongodb://localhost:27017"
const DB_NAME = "ecobooks"
const COLLECTION_BOOKS = "books"

let client;
export  async function connectToMongo() {
    try {
        if (!client) { client = await MongoClient.connect(URL)}
        return client
    } catch (errors) {
        console.log(errors)
    }
}

export async function getMongoCollection(dbName, collectionName) {
    const client = await connectToMongo()
    return  await client.db(dbName).collection(collectionName)
}


async function populate() {
  const collection = await getMongoCollection(DB_NAME, COLLECTION_BOOKS)
  await collection.insertMany([
    {
        "author": "Virgina Woolf",
        "imageLink": "AoFarol.jpeg",
        "language": "Português",
        "isbn": 422434353,
        "pages": 184,
        "name": "Ao Farol",
        "year": 1927,
        "price": 5.00,
        "publisher": "abc company",
        "description": "Livro sobre loren ipsum.jpeg",
        "genre": "manga, comedia, horror"
    },
    {
        "author": "William Shakespeare",
        "imageLink": "OReiLear.jpeg",
        "language": "Portugês",
        "isbn": 356281647,
        "pages": 784,
        "name": "O rei lear",
        "year": 1606,
        "price": 6.80,
        "publisher": "books & read",
        "description": "Livro sobre loren ipsum",
        "genre": "manga, sociedade, poesia"
    },
    {
        "author": "Herman Melville",
        "imageLink": "MobyDick.jpeg",
        "language": "Portugês",
        "isbn": 356281647,
        "pages": 784,
        "name": "Moby dick",
        "year": 1851,
        "price": 8.70,
        "publisher": "books & read",
        "description": "Livro sobre loren ipsum",
        "genre": "manga"
    },
    {
        "author": "Fernando pessoa",
        "imageLink": "LivroDoDesassossego.jpeg",
        "language": "Portugês",
        "isbn": 356281647,
        "pages": 784,
        "name": "O livro do desassossego",
        "year": 1982,
        "price": 6.80,
        "publisher": "books & read",
        "description": "Livro sobre loren ipsum",
        "genre": "sociedade, comedia"
    },
    {
        "author": "Francois rabelais",
        "imageLink": "Pantagruel.jpeg",
        "language": "Portugês",
        "isbn": 356281647,
        "pages": 784,
        "name": "Pantagruel",
        "year": 1532,
        "price": 7.07,
        "publisher": "books & read",
        "description": "Livro sobre loren ipsum",
        "genre": "manga, sociedade"
    },
    {
        "author": "Alexandre de Santi",
        "imageLink": "NoCaminhodeSwann.jpeg",
        "language": "Portugês",
        "isbn": 356281647,
        "pages": 784,
        "name": "No caminho de Swann",
        "year": 1,
        "price": 6.80,
        "publisher": "books & read",
        "description": "Livro sobre loren ipsum",
        "genre": "sociedade, comedia"
    },
    {
        "author": "Vladimir Nabokov",
        "imageLink": "Lolita.jpeg",
        "language": "Portugês",
        "isbn": 356281647,
        "pages": 784,
        "name": "Lolita",
        "year": 1955,
        "price": 7.07,
        "publisher": "books & read",
        "description": "Livro sobre loren ipsum",
        "genre": "manga, sociedade"
    },
    {
        "author": "Níkos kazantzakis",
        "imageLink": "ZorbaoGrego.jpeg",
        "language": "Portugês",
        "isbn": 356281647,
        "pages": 784,
        "name": "Zorba o grego",
        "year": 1836,
        "price": 5.50,
        "publisher": "books & read",
        "description": "Livro sobre loren ipsum",
        "genre": "manga, sociedade"
    },
    {
        "author": "Franz kafka",
        "imageLink": "OProcesso.jpeg",
        "language": "Portugês",
        "isbn": 356281647,
        "pages": 784,
        "name": "O processo",
        "year": 1836,
        "price": 7.07,
        "publisher": "books & read",
        "description": "Livro sobre loren ipsum",
        "genre": "sociedade, comedia"
    },
    {
        "author": "Albert camus",
        "imageLink": "OEstrangeiro.jpeg",
        "language": "Portugês",
        "isbn": 356281647,
        "pages": 784,
        "name": "O estrangeiro",
        "year": 1836,
        "price": 5.50,
        "publisher": "books & read",
        "description": "Livro sobre loren ipsum",
        "genre": "manga, sociedade"
    },
    {
        "author": "Robert musil",
        "imageLink": "OHomemSemQualidades.jpeg",
        "language": "Portugês",
        "isbn": 356281647,
        "pages": 784,
        "name": "O homem sem qualidades",
        "year": 1836,
        "price": 7.07,
        "publisher": "books & read",
        "description": "Livro sobre loren ipsum",
        "genre": "sociedade, comedia, romance"
    },
    {
        "author": "Liev Tolstói",
        "imageLink": "AnnaKarenina.jpeg",
        "language": "Portugês",
        "isbn": 356281647,
        "pages": 784,
        "name": "Anna karimenia",
        "year": 1877,
        "price": 5.50,
        "publisher": "books & read",
        "description": "Livro sobre loren ipsum",
        "genre": "sociedade, comedia"
    },
    {
        "author": "William Shakespeare",
        "imageLink": "Hamlet.jpeg",
        "language": "Portugês",
        "isbn": 356281647,
        "pages": 986,
        "name": "Hamlet",
        "year": 1609,
        "price": 9.76,
        "publisher": "books & read",
        "description": "Livro sobre loren ipsum",
        "genre": "sociedade, comedia, romance"
    },
    {
        "author": "George Orwell",
        "imageLink": "1984.jpeg",
        "language": "Portugês",
        "isbn": 356281647,
        "pages": 589,
        "name": "1984",
        "year": 1949,
        "price": 7.07,
        "publisher": "books & read",
        "description": "Livro sobre loren ipsum",
        "genre": "manga, sociedade"
    },
    {
        "author": "Alexandre de Santi",
        "imageLink": "OEvangelhoAteuDeNietzsche.jpeg",
        "language": "Portugês",
        "isbn": 356281647,
        "pages": 784,
        "name": "O evangelho ateu de nietzsche",
        "year": 1685,
        "price": 5.50,
        "publisher": "books & read",
        "description": "Livro sobre loren ipsum",
        "genre": "poesia, comedia, romance"
    },
    {
        "author": "Alexandre de Santi",
        "imageLink": "OMapaDoInfernoDeDante.jpeg",
        "language": "Portugês",
        "isbn": 356281647,
        "pages": 9384,
        "name": "O mapa do inferno de dante",
        "year": 1836,
        "price": 8.70,
        "publisher": "books & read",
        "description": "Livro sobre loren ipsum",
        "genre": "sociedade, horror"
    },
    {
        "author": "Alexandre de Santi",
        "imageLink": "MaquiavelOsFinsJustificamOsMeios.jpeg",
        "language": "Portugês",
        "isbn": 356281647,
        "pages": 784,
        "name": "Maquivael: os fins justificam os meios",
        "year": 1836,
        "price": 7.07,
        "publisher": "books & read",
        "description": "Livro sobre loren ipsum",
        "genre": "poesia, comedia, romance"
    },
    {
        "author": "Alexandre de Santi",
        "imageLink": "SomosTodosPlatonicos.jpeg",
        "language": "Portugês",
        "isbn": 356281647,
        "pages": 784,
        "name": "Somos todos platonicos",
        "year": 1836,
        "price": 8.70,
        "publisher": "books & read",
        "description": "Livro sobre loren ipsum",
        "genre": "manga, sociedade"
    },
    {
        "author": "Alexandre de Santi",
        "imageLink": "LoucoNaoQuixotesco.jpeg",
        "language": "Portugês",
        "isbn": 356281647,
        "pages": 784,
        "name": "Louco não quixotesco",
        "year": 1836,
        "price": 6.70,
        "publisher": "books & read",
        "description": "Livro sobre loren ipsum",
        "genre": "poesia, comedia, romance"
    },
    {
        "author": "Alexandre de Santi",
        "imageLink": "DeVoltaANatureza.jpeg",
        "language": "Portugês",
        "isbn": 356281647,
        "pages": 784,
        "name": "De volta a natureza",
        "year": 1836,
        "price": 7.07,
        "publisher": "books & read",
        "description": "Livro sobre loren ipsum",
        "genre": "poesia, comedia, romance"
    },
    {
        "author": "Alexandre de Santi",
        "imageLink": "AsTresLeisDaRobotica.jpeg",
        "language": "Portugês",
        "isbn": 356281647,
        "pages": 784,
        "name": "As tres leis da robotica",
        "year": 1836,
        "price": 8.70,
        "publisher": "books & read",
        "description": "Livro sobre loren ipsum",
        "genre": "sociedade, comedia"
    },
    {
        "author": "Alexandre de Santi",
        "imageLink": "ManualAntiCrise.jpeg",
        "language": "Portugês",
        "isbn": 356281647,
        "pages": 784,
        "name": "Manual anticrise",
        "year": 1836,
        "price": 5.50,
        "publisher": "books & read",
        "description": "Livro sobre loren ipsum",
        "genre": "poesia, comedia, romance"
    },
    {
        "author": "Alexandre de Santi",
        "imageLink": "EscravosDoSistema.jpeg",
        "language": "Portugês",
        "isbn": 356281647,
        "pages": 784,
        "name": "Escravos do sistema",
        "year": 1836,
        "price": 8.70,
        "publisher": "books & read",
        "description": "Livro sobre loren ipsum",
        "genre": "manga, comedia, romance"
    },
    {
        "author": "Alexandre de Santi",
        "imageLink": "OutroLivroNasEntrelinhas.jpeg",
        "language": "Portugês",
        "isbn": 356281647,
        "pages": 784,
        "name": "Outro livro nas entrelinhas",
        "year": 1836,
        "price": 7.07,
        "publisher": "books & read",
        "description": "Livro sobre loren ipsum",
        "genre": "manga, sociedade"
    },
    {
        "author": "Alexandre de Santi",
        "imageLink": "PalavrasPurificadoras.jpeg",
        "language": "Portugês",
        "isbn": 356281647,
        "pages": 784,
        "name": "Palavras purificadoras",
        "year": 1836,
        "price": 5.50,
        "publisher": "books & read",
        "description": "Livro sobre loren ipsum",
        "genre": "manga, horror, sociedade"
    },
    {
        "author": "Alexandre de Santi",
        "imageLink": "ACriacaoDaAutoajuda.jpeg",
        "language": "Portugês",
        "isbn": 356281647,
        "pages": 784,
        "name": "A criacao da auto ajuda",
        "year": 1836,
        "price": 8.70,
        "publisher": "books & read",
        "description": "Livro sobre loren ipsum",
        "genre": "horror, poesia"
    },
    {
        "author": "Alexandre de Santi",
        "imageLink": "ADescobertaInconsciente.jpeg",
        "language": "Portugês",
        "isbn": 356281647,
        "pages": 784,
        "name": "A descoberta do inconsciente",
        "year": 1836,
        "price": 7.07,
        "publisher": "books & read",
        "description": "Livro sobre loren ipsum",
        "genre": "sociedade, comédia, romance"
    },
    {
        "author": "Alexandre de Santi",
        "imageLink": "AFelicidadeAbsoluta.jpeg",
        "language": "Portugês",
        "isbn": 356281647,
        "pages": 784,
        "name": "A felicidade absoluta",
        "year": 1836,
        "price": 5.50,
        "publisher": "books & read",
        "description": "Livro sobre loren ipsum",
        "genre": "manga, romance"
    },
    {
        "author": "Alexandre de Santi",
        "imageLink": "AmorImpossivel.jpeg",
        "language": "Portugês",
        "isbn": 356281647,
        "pages": 784,
        "name": "O mais impossivel dos amores",
        "year": 1836,
        "price": 8.70,
        "publisher": "books & read",
        "description": "Livro sobre loren ipsum",
        "genre": "poesia, romance"
    },
    {
        "author": "Luis Fernandes",
        "imageLink": "Aleatorio.jpeg",
        "language": "português",
        "isbn": 21624482,
        "pages": 374,
        "name": "Aleatorio",
        "year": "1974",
        "price": 6.80,
        "publisher": "abc company",
        "genre": "manga, horror, romance,comedia, poesia, sociedade ",
        "description": "ivro sobre loren ipsum"
    }
])
}



populate()
  .then(() => console.log("Done Populating"))
  .catch((err) => console.log(err))
