import { ReactElement } from 'react';
import './Colaborador.css'
import React from 'react';

interface ColaboradorProps {
    nome: string;
    imagem: string;
    cargo: string;
    corDeFundo: string;
}

export default function Colaborador ({ nome, imagem, cargo, corDeFundo }: ColaboradorProps): ReactElement {
    return (<div className='colaborador'>
        <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
            <img src={imagem} alt={nome}/>
        </div>
        <div className='rodape'>
            <h4>{nome}</h4>
            <h5>{cargo}</h5>
        </div>
    </div>)
}