const myConnection = require('../database/database');
const Moviecontroller ={}

//listar todas las peliculas
Moviecontroller.list=(req,res)=>{
    myConnection.query('SELECT * FROM MOVIE',(err,rows,fields)=>{
        if(!err){
            res.json(rows)
        }
        else{
            console.log(err)
        }
    });
};
//listar las peliculas por el id

Moviecontroller.listOne = (req,res)=>{
    const {id} = req.params;
    myConnection.query('SELECT * FROM MOVIE where id=?',[id],(err,rows,fields)=>{
        if(!err){
            res.json(rows);
        }
        else{
            console.log(err);
        }
    });
}

//guardar un actor
Moviecontroller.guardar = (req,res)=>{
    const querysql = `
        CALL MovieAddOrEdit(?,?,?,?,?,?);
    `
    console.log(req.body);
    const {id,title, gender,actor_id,datereleased,photo} = req.body;
    myConnection.query(querysql, [id,title, gender,actor_id,datereleased,photo],(error,rows,fields)=>{
        if(!error){
            res.json({status:'Movie added'});
        }
        else{
            console.log(error);
        }
    });
}
//editar un actor
Moviecontroller.editar = (req,res)=>{
    const {title, gender,actor_id,datereleased,photo} = req.body;
  const { id } = req.params;
  const querysql = `
    CALL MovieAddOrEdit(?,?,?,?,?,?);
  `;
  myConnection.query(querysql, [id,title, gender,actor_id,datereleased,photo], (error, rows, fields) => {
    if(!error) {
      res.json({status: 'Movie Saved!'});
    } else {
      console.log(error);
    }
  });
}

module.exports = Moviecontroller;