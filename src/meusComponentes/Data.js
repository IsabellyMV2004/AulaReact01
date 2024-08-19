import { Component }from "react";

export default class Data extends Component{

    constructor(props){
        super(); //executa o construtor do pai
        this.props = props;
        this.state={
            dataAtual : new Date().toLocaleString()
        }
    }

    pegaDataDe(timeZone){
        const dataAtual = new Date();
        let timeZoneFromDB = parseInt(timeZone);
        let diferencaTempo = timeZoneFromDB * 60 + dataAtual.getTimezoneOffset();
        let mili
        return Date(dataAtual.getTime()=diferencaTempo*60*1000);
    }

    //fase de montagem
    componentDidMount(){
        console.log("O componente foi montado.");
        //Não é permitido atualizar o estado do componente de forma direta
        this.setState({
            dataAtual : new Date().toLocaleString()
        })
    }

    componentDidUpdate(){
        console.log("O componente foi atualizado");
        setTimeout(()=>{
            this.setState({
                dataAtual : new Date().toLocaleString()
            })
        },1000);
    }
    //sobrescrita de método
    render(){
        return (
            <h1>{ this.props.texto || ""}{this.state.dataAtual}</h1>
        )
    }

}