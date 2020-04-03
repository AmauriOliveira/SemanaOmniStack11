import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api';

import './styles.css';
import logoImg from '../../assents/logo.svg';

export default function NewIncident() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const history = useHistory();

    const ongId = localStorage.getItem('ongId');

    async function handleNewincedent(e) {
        e.preventDefault();

        const data = {
            title,
            description,
            value,

        };

        try {
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId,
                }
            })
            history.push('/profile');
        } catch (error) {
            alert('Erro ao cadastrar o caso, tente novamente.');
        }
    }

    return (
        <div className="new-incedent-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Logo Be The Hero" />
                    <h1>Casdastrar Novo Caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar
                    um herói para resolver isso.
                    </p>
                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041" />
                    Voltar para Home
                </Link>
                </section>
                <form onSubmit={handleNewincedent}>
                    <input
                        onChange={e => setTitle(e.target.value)}
                        value={title}
                        placeholder="Título do caso" />
                    <textarea
                        onChange={e => setDescription(e.target.value)}
                        value={description}
                        placeholder="Descrição" />
                    <input
                        onChange={e => setValue(e.target.value)}
                        value={value}
                        placeholder="Valor em Reais" />
                    <button type="submit" className="button">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}