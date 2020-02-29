import React, { Component } from 'react';
import axios  from 'axios';

export default class Planets extends Component{   
  state = {
    planets: [],
    indice: 1
  }
  
  nextPage() {
    axios.get(`https://swapi.co/api/planets/${this.state.indice}/`)
        .then(res => {
          const planets = res.data;
          this.setState({
            planets: planets,
            indice: ++this.state.indice 
          })
        })
    }
    previewPage() {
      axios.get(`https://swapi.co/api/planets/${this.state.indice}/`)
          .then(res => {
            if(this.state.indice === 0) {
              alert("last page bro")
              return;
            }
            const planets = res.data;
            this.setState({
              planets: planets,
              indice: --this.state.indice 
            })
          })
      }
    onClick = (indice) => {
      this.setState({ indice : this.state.indice});
      if(indice.target.className === 'next') {          
        this.nextPage()
      }
      if(indice.target.className === 'preview') {
          this.previewPage()
      }
   }

    render() {
      const mystyle = {
        textAlign: "center",
        padding: "200px",
        backgroundColor: "#bcbfa2"
      };
      const quadro = {
        border: "3px solid black",
        borderStyle: "inset",
        width: "30%",
        margin: "0 auto"
      }
        const planeta = this.state.planets;
      return (
        <div  style={mystyle}>
            <div style={quadro}>
             <h1>Nome: { planeta.name}</h1>
                <h3>Clima: { planeta.climate}
                <br/>
                c
                    Terrain: { planeta.terrain}
                <br/>
                    Populacao: { planeta.population}
                </h3>
        
         <button onClick={this.onClick} className="preview">preview</button>
         <button onClick={this.onClick}className="next">next</button>

         </div>
        </div>
      )
      
    }
    
  }

