import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import axios from 'axios';

//Componente para crear una pelicula
class CreateMovie extends Component {
    constructor(props){
        super(props);

        this.state={
            title:'',
            gender:'',
            actor_id:0,
            datereleased:new Date(),
            photo:null,
            actors:[]
          }
          
    }
    //metodo para traer los actores desde que se monte el componente y asi ponerlos en un select list
    async componentDidMount(){
      const res = await fetch('http://localhost:4000/actor');
      const resJson = await res.json();
          this.setState({
            actors:resJson.map(actor=>actor),
         
      })
    }
    //Metodos para manejar los estados y cambio de datos del formulario antes de enviarlo
    onChangetitle(e){
        this.setState({
          title:e.target.value
        });
      }
      onChangegender(e){
        this.setState({
          gender:e.target.value
        });
      }
      onChangedatereleased(date){
        this.setState({
            datereleased:date
        });
      }
      onChangeactor(e){
        this.setState({
         actor_id:e.target.value
        });
        console.log(e.target.value)
      }
      onChangephoto(e){
        this.setState({
         photo:e.target.value
        });
      }

      onSubmit(e){
        e.preventDefault();
        
        const movie = {
          id:0,
          title:this.state.title,
          gender:this.state.gender,
          actor_id:this.state.actor_id,
          datereleased:this.state.datereleased,
          photo:this.state.photo
        }
    
        console.log(movie);
    
        axios.post('http://localhost:4000/movie', movie)
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    
    
        window.location = '/movie-list'
      }
    
    render(){
        return(
            <div class="container p-4">
                <div class="row">
                    <div class="col-md-4 mx-auto">
                        <div class="card">
                <div class="card-body"></div>
                <h3 class="card-title text-center">Create New Movie</h3>
                <form onSubmit={(e)=>this.onSubmit(e)}>
                <div className="form-group"> 
                        <label>Title: </label>
                         <input  type="text" required className="form-control"
                         value={this.state.title}
                         onChange={(e)=>this.onChangetitle(e)}/>
                </div>
                <div className="form-group"> 
                        <label>Gender: </label>
                         <input  type="text" required className="form-control"
                         value={this.state.gender}
                         onChange={(e)=>this.onChangegender(e)}/>
                </div>
                <div className="form-group"> 
                        <label>Actor: </label>
                        <select
                          className="form-control"
                          value={this.state.actor_id}
                          onChange={(e)=>this.onChangeactor(e)}>
                          {
                            this.state.actors.map(function(actor,i) {
                            return <option 
                            key={i}
                            value={actor.id}>{actor.name}
                            </option>;
                            })
                          }
          </select>
                </div>
                <div className="form-group"> 
                        <label>Date Released: </label>
                        <DatePicker
                        selected={this.state.datereleased}
                        onChange={(e)=>this.onChangedatereleased(e)}/>
                </div>
                <div className="form-group"> 
                        <label>Photo: </label>
                         <input  type="file"  className="form-control"/>
                </div>
                <div className="form-group">
                    <input type="submit" value="Create Movie" className="btn btn-primary btn-block" />
                </div>
                </form>
            </div>
            </div>
            </div>
            </div>
        )
    }

}


export default CreateMovie;