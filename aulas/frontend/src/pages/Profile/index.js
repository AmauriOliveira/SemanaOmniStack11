import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi'

import api from '../../services/api';

import './styles.css';
import logoImg from '../../assents/logo.svg';

export default function Profile() {

    const [incidents, setIncidents] = useState([]);

    const history = useHistory();

    const ongId = localStorage.getItem('ongId');
    const ongName = localStorage.getItem('ongName');

    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: ongId,
            }
        }).then(response => {
            setIncidents(response.data);
        })
    }, [ongId]);
    ///////////////////////////////
    async function handleDeleteIncident(id) {
        try {
            await api.delete(`incidents/${id}`, {
                headers: {
                    Authorization: ongId,
                }
            })
            setIncidents(incidents.filter(incident => incident.id !== id));

        } catch (error) {
            alert('Erro ao deletar caso, tente novamente.');
        }
    }
    ///////////////////
    function handleLogout() {
        localStorage.clear();
        history.push('/');
    }
    return (
        <div className="profile-conteiner">
            <header>
                <img src={logoImg} alt="Logo Be The Hero" />
                <span>Bem vinda, <b>{ongName}</b></span>
                <Link className="button" to="/incidents/new">Cadastrar Novo Caso</Link>
                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="#E02041" />
                </button>
            </header>
            <h1>Casos Cadastrados</h1>
            <ul>
                {
                    incidents.map(incident => (
                        <li key={incident.id}>
                            <strong>Caso:</strong>
                            <p>{incident.title}</p>
                            <strong>Descrição:</strong>
                            <p>{incident.description}</p>
                            <strong>Valor:</strong>
                            <p>
                                {
                                    Intl.NumberFormat('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL'
                                    })
                                        .format(incident.value)
                                }
                            </p>
                            <button
                                onClick={() => handleDeleteIncident(incident.id)}
                                type="button">
                                <FiTrash2 size={20} color="A8A8B3" />
                            </button>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}