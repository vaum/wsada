const express = require('express')
const cors = require('cors')
const axios = require("axios")
const app = express()
const bodyParser = require('body-parser')
const port = 3080

const DB_NAME = 'wsada'
const USERDB = 'wsada'
const USERDB_PWD = 'wsada2023'
const API_KEY = 'ulwFiHMDH8EUJkoQn4SWkBaUKZzrKFEQm9hJud9CAlvAaNDEkBnvhOsoBCqW0MZ2'
const { MongoClient, ServerApiVersion } = require('mongodb')
const uri = "mongodb+srv://wsada:wsada2023@ws-ada.adpyfpm.mongodb.net/?retryWrites=true&w=majority"
const dbClient = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 })
// create application/json parser
const jsonParser = bodyParser.json()

app.use(cors({ origin: '*' }))

app.get('/api/users', (req, res) => {
    console.log('api/users called!')
    res.json("[]")
})

app.post('/api/user/create', jsonParser, async (req, res) => {
    if (!req || !req.body) res.json({
        "error" : "Wrong type of request",
        "reqDump" : JSON.stringify(req)
    })

    const user = req.body.user

    if (!user) res.json({
        "error" : "Insufficient data",
        "reqDump" : JSON.stringify(user)
    })

    /**
     *  Db connection in case we need it for future

        await dbClient.connect(err => {
            const userCollection = dbClient.db(DB_NAME).collection("users")
            dbClient.close()
        })
     */

    let data = JSON.stringify({
        "collection": "users",
        "database": "wsada",
        "dataSource": "ws-ada",
        "document": {
            user
        }
    });

    let config = {
        method: 'post',
        url: 'https://eu-central-1.aws.data.mongodb-api.com/app/data-mgtkq/endpoint/data/v1/action/insertOne',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Request-Headers': '*',
            'api-key': 'ulwFiHMDH8EUJkoQn4SWkBaUKZzrKFEQm9hJud9CAlvAaNDEkBnvhOsoBCqW0MZ2',
        },
        data: data
    };

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
            if (response.data && response.data.insertedId) {
                res.json({
                    "status" : 200,
                    "statusText" : "OK",
                    "data" :  { "userId" : response.data.insertedId}
                })
            }
        })
        .catch(function (error) {
            console.log(error);
        });
})

app.get('/api/user/login', jsonParser, async (req, res) => {

})

app.get('/', (req,res) => { console.log(' / is called') })
app.listen(port, () => { console.log(`Server listening on the port::${port}`) })