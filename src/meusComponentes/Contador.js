import { Component } from "react";

export class Contador extends Component{

    constructor(props){  // props = propriedades
        super();
        // o estado do componente é um objeto
        this.state = {
                         valor : 0
                         // , forca : 2
                    };
        //this.valor = 0;
        
        //this.incrementar = this.incrementar.bind(this);
        //this.decrementar = this.decrementar.bind(this);
        // this.incrementar = this.incrementar.bind(this);  tem como contexto o proprio componente
        // não vamos usar mais bind
    }

    incrementar(){
        // não podemos alterar diretamente o estado-> this.state.valor+=1;
        
        let valorAtual = this.state.valor;
        let valorNovo = valorAtual + 1;
        this.setState({
            valor : valorNovo
        });
        /*
        this.setState({
            valor : this.state.valor + 1
        });*/
        //this.state.valor+=1;
        //this.valor+=1;
    }

    decrementar(){
        let valorAtual = this.state.valor;
        let valorNovo = valorAtual - 1;
        this.setState({
            valor : valorNovo
        });
        //this.state.valor-=1;
        //this.valor-=1;
    }

    render(){
        return(
            <div>
                <div className="visor">
                    <h1>{this.state.valor}</h1>
                </div>
                <div className="botoes">
                    <button onClick={
                        () => {
                            this.incrementar();
                        }
                    }>+</button> 
                    <button onClick={
                        () => {
                            this.decrementar();
                        }
                    }>-</button>
                </div>  
            </div>
            //<button onClick={this.incrementar()}>+</button>  iria retorna um valor nulo para onClick, por isso não usa ()
            // pois só vai executar a função

            //<button onClick={() => {this.incrementar}}>+</button>  essa função anonima garante que o contexto seja preservado
        );
    }
}