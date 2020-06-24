const routes = (app) => {
    // Middleware
    app.route('/contact')
        .get((req, res) => 
        res.send('GET Request Successful'))
        
        .post((req, res) => 
        res.send('POST Request Successful'))

    app.route('/contact/:contactID')
        .put((req, res) => 
        res.send('PUT Request Successful'))
        
        .delete((req, res) => 
        res.send('DELETE Request Successful'))
}

export default routes;