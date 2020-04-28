import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import axios from 'axios';

//componente para crear un actor
class CreateAutor extends Component {
    constructor(props){
        super(props);

        this.state={
            name:'',
            DateBirth:new Date(),
            Sex:'Masculino',
            photo:null
          }
    }
    //Metodos
    onChangename(e){
        this.setState({
          name:e.target.value
        });
      }
      onChangeDateBirth(date){
        this.setState({
          DateBirth:date
        });
      }
      onChangeSex(e){
        this.setState({
         Sex:e.target.value
        });
      }
      onChangephoto(e){
        this.setState({
         photo:e.target.value
        });
      }

      onSubmit(e){
        e.preventDefault();
        
        const actor = {
          id:0,
          name:this.state.name,
          DateBirth:this.state.DateBirth,
          Sex:this.state.Sex,
          photo:this.state.photo
        }
    
        console.log(actor);
    
        axios.post('http://localhost:4000/actor', actor)
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    
    
        window.location = '/autor-list'
      }
    

    render(){
        return(
            <div class="container p-4">
                <div class="row">
                    <div class="col-md-4 mx-auto">
                        <div class="card">
                <div class="card-body"></div>
                <h3 class="card-title text-center">Create New Actor</h3>
                <form onSubmit={(e)=>this.onSubmit(e)}>
                <div className="form-group"> 
                        <label>Name: </label>
                         <input  type="text" required className="form-control" value={this.state.name}
                        onChange={(e)=>this.onChangename(e)}/>
                </div>
                <div className="form-group"> 
                        <label>Date Birth: </label>
                        <div>
                        <DatePicker
                        selected={this.state.DateBirth}
                        onChange={(e)=>this.onChangeDateBirth(e)}/>
          </div>
                </div>
                <div className="form-group"> 
                        <label>Sex: </label>
                        <select value={this.state.Sex} onChange={(e)=>this.onChangeSex(e)}>
                            <option value="Masculino">Masculino</option>
                            <option value="Femenino">Femenino</option>
                         </select>
                </div>
                <div className="form-group"> 
                        <label>Photo: </label>
                         <input  type="file"  className="form-control" value={(e)=>this.state.photo(e)}
              onChange={this.onChangephoto}/>
                </div>
                <div className="form-group">
                    <input type="submit" value="Create Autor" className="btn btn-primary btn-block" />
                </div>
                </form>
            </div>
            </div>
            </div>
            </div>
        )
    }

}


export default CreateAutor;