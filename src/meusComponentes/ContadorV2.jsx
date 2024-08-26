import { useState } from "react";

export default function Contador(props) {
    // quando eu quero atualizar o valor eu uso setValor(podia ter outro nome, podia ser mudarValor por exemplo)
                                //     ____ Valor inicial do estado
                                //     |
                                //    \ /
                                //     V
    const [valor, setValor] = useState(0);//hook useState    hook = gancho(é uma alusão a captar)
    //const [forca, setForca] = useState();

    function incrementar() {
        setValor(valor + 1);
    }

    function decrementar() {
        setValor(valor - 1);
    }

    //o método render é o retorno da função
    return (
        <div>
            <div className="visor">
                <h1>{valor}</h1>
            </div>
            <div className="botoes">
                <button onClick={() => {
                    incrementar();
                }}>+</button>
                <button onClick={() => {
                    decrementar();
                }}>-</button>
            </div>
        </div>
    );
    // alt + sift + f vai consertar a identação
}