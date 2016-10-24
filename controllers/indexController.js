module.exports = function(app, middleware, db){
  app.get('/', function(req,res){
    res.send('Todo API Root from Separate Controller File');
  });
};
