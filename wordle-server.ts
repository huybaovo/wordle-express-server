import express, {Application, Request, Response} from "express"
import cors from "cors"

const app:Application = express()
const PORT = process.env.PORT ?? 8000;

function send__random_word() {
    const secrets = ["HELLO", "LOVER", "APPLE", "QUIET", "HANDS", "FEETS", "TABLE", "CHAIR", "BLURT", "SHOUT", "REACT", "MAJOR", "DEATH", "CRUST", "OUTDO", "ADOBE"]
    return secrets[Math.floor(Math.random() * secrets.length)]
}

app.use(cors())

app.get("/", (req:Request, res:Response) => {
    res.send({secret_word: send__random_word()})
});

app.listen(PORT, () => {
    console.log(`Server listening port: ${PORT}`)
});