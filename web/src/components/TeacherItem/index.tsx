import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './style.css';
import api from '../../services/api';

export interface Teacher{
    id:number;
    avatar: string;
    bio: string;
    cost:number;
    name:string;
    subject:string;
    whatsapp:string;
};

interface TeacherItemProps {
        teacher: Teacher;
} 
const TeacherItem: React.FC<TeacherItemProps> = ({teacher}) =>
{
    function createNewConnection()
    {
        api.post('/connections',{
            user_id:teacher.id
        })
    }
    
    return(
        <article className="teacher-item"> 
        <header>
            <img src={teacher.avatar} alt="Iago Freitas"/>
            <div>
                <strong>{teacher.name}</strong>
                <span>{teacher.subject}</span>
            </div>
        </header>
        <p>
            {teacher.bio}
        </p>

        <footer>
            <p>
                Preço/Hora 
                <strong>{teacher.cost}</strong>
            </p>
            <button onClick={createNewConnection} type="button">
                <img src={whatsappIcon} alt="Get in touch"/>
                Entrar em contato
            </button>
        </footer>
    </article>
    );
};

export default TeacherItem;