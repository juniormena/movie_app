const myConnection = require('../database/database');
const Actorcontroller ={}

//listar los actores que se ecnuentran en la base de datos
Actorcontroller.list=(req,res)=>{
    myConnection.query('SELECT * FROM ACTOR',(err,rows,fields)=>{
        if(!err){
            res.json(rows)
        }
        else{
            console.log(err)
        }
    });
};
//listar los actores por el id

Actorcontroller.listOne = (req,res)=>{
    const {id} = req.params;
    myConnection.query('SELECT * FROM ACTOR where id=?',[id],(err,rows,fields)=>{
        if(!err){
            res.json(rows);
        }
        else{
            console.log(err);
        }
    });
}

Actorcontroller.listMovieandActors = (req,res)=>{
    const {id} = req.params;
    myConnection.query('SELECT MOVIE.title,ACTOR.name FROM MOVIE INNER JOIN ACTOR ON MOVIE.actor_id = ?',[id],(err,rows,fields)=>{
        if(!err){
            res.json(rows);
        }
        else{
            console.log(err);
        }
    });
}


//guardar un actor
Actorcontroller.guardar = (req,res)=>{
    const querysql = `
        CALL ActorAddOrEdit(?,?,?,?,?);
    `
    console.log(req.body);
    const {id,name,DateBirth,Sex,photo} = req.body;
    myConnection.query(querysql, [id,name,DateBirth,Sex,photo],(error,rows,fields)=>{
        if(!error){
            res.json({status:'Actor added'});
        }
        else{
            console.log(error);
        }
    });
}
//editar un actor
Actorcontroller.editar = (req,res)=>{
  const {name,DateBirth,Sex,photo} = req.body;
  const { id } = req.params;
  const querysql = `
    CALL ActorAddOrEdit(?,?,?,?,?);
  `;
  myConnection.query(querysql, [id,name,DateBirth,Sex,photo], (error, rows, fields) => {
    if(!error) {
      res.json({status: 'Actor Saved!'});
    } else {
      console.log(error);
    }
  });
}

module.exports = Actorcontroller;