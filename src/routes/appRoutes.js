const routes = (app) => {
  app
    .route('/contacts')
    .get((req, res, next) => {
        console.log(`${req.method} ${req.originalUrl}`);
        next();
      }, (req, res, next) => {
        res.send(`GET request successfull!`);
      })
    .post((req, res) => res.send(`POST request successfull!`));

  app
    .route('/contacts/:contactId')
    .put((req, res) => res.send(`PUT request successfull!`))
    .delete((req, res) => res.send(`DELETE request successfull!`));
};

export default routes;
