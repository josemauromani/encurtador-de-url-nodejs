const express = require('express')
const mongoose = require('mongoose')
const encurtarURL = require('./models/encurtaUrl')
const app = express()

mongoose.connect('mongodb://localhost/encurtadorUrl', {
    useNewUrlParser:true,
    useUnifiedTopology:true,
})


app.set('view engine','ejs')
app.use(express.urlencoded({ extended:false }))
app.get('/', (req, res) => {
    res.render('index')
})

app.post('/encurtarURL', async (req,res) => {
    await encurtarURL.create({
        urlOriginal: req.body.urlOriginal
    })
    res.redirect('/')
})

app.listen(process.env.PORT || 5000)
