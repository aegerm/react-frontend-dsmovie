import axios, { AxiosRequestConfig } from 'axios';
import { Movie } from 'models/movie';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BASE_URL } from 'utils/request';
import { validateEmail } from 'utils/validate';
import './index.css';

type Props = {
    movieId: string;
}

function FormCard({ movieId }: Props) {

    const navigate = useNavigate();

    const [movie, setMovie] = useState<Movie>();

    useEffect(() => {
        axios.get(`${BASE_URL}/v1/api/movies/${movieId}`).then(response => {
            setMovie(response.data);
        });
    }, [movieId]);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event?.preventDefault();
        const email = (event.target as any).email.value;
        const score = (event.target as any).score.value;

        if (!validateEmail(email)) {
            return;
        }

        const config: AxiosRequestConfig = {
            baseURL: BASE_URL,
            method: 'PUT',
            url: '/v1/api/scores',
            data: {
                email: email,
                movieId: movieId,
                score: score
            }
        }

        axios(config).then(() => {
            navigate("/");
        });

    };

    return (
        <div className='dsmovie-form-container'>
            <img className='dsmovie-card-image' src={movie?.image} alt={movie?.title} />
            <div className='dsmovie-card-bottom-container'>
                <h3>{movie?.title}</h3>
                <form className='dsmovie-form' onSubmit={handleSubmit}>
                    <div className='form-group dsmovie-form-group'>
                        <label htmlFor="email">Informe seu email</label>
                        <input type="email" id="email" className='form-control'/>
                    </div>
                    <div className='form-group dsmovie-form-group'>
                        <label htmlFor="score">Informe sua avaliação</label>
                        <select className='form-control' id="score">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className='dsmovie-form-btn-container'>
                        <button type='submit' className='btn btn-primary dsmovie-btn'>Salvar</button>
                    </div>
                </form>
                <Link to={"/"}>
                    <button className='btn btn-primary dsmovie-btn mt-3'>Cancelar</button>
                </Link>
            </div>
        </div>
    );
}

export default FormCard;