import React,{Fragment} from  'react';
import Card from '../components/cards-movie';

const api ='http://localhost:4000/movie';

class MovieList extends React.Component{

    constructor(props){
        super();
        this.state={
            data:[],
            searchterm:'',
            error:'',
            loading:true
        }
    }
    //uso async y await porque me gusa mas para hacer codigo asincrono que usar las promesas
    async componentDidMount(){
        const res = await fetch(api);
        const resJson = await res.json();
        console.log(resJson);
        this.setState({
            data:resJson,
            loading:false
        })
    }
    
    render(){
        if(this.state.loading){
            return <div className="text-center">Loading....</div>
        }
        return( 
            <Fragment>
            <div className="row">
                <div className="col-md-4 offset-md-4 p-4">
                    <form>
                        <input type="text" className="form-control" placeholder="Search" autoFocus/>
                    </form>
                </div>
            </div>
            <h1 className="text-center">Movies</h1>
            <div className="row">
            {
                this.state.data.map((movie,i)=>{
                return <Card key={i} data={movie}/>
                })
            }
        </div>
        </Fragment>
        )
    }
}

export default MovieList;