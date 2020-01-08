//Default page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "home.html"));
});
//Survey page
app.get('/survey', (req, res) => {
    res.sendFile(path.join(__dirname, "survey.html"));
});



// app.listen(PORT, function() {
//     //server listening
// })