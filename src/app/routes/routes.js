module.exports = (app) => {
    app.get('/', (req, res) => {
        res.send('<p>some html</p>')
    })
}

