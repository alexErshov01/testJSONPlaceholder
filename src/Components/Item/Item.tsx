import './Item.css';

import { Link } from "react-router-dom";
import {useState} from "react";

interface ItemProps {
    body: string,
    title: string,
    id: number
}
const Item = ({body, title, id} : ItemProps) => {
    const [open, SetOpen] = useState(100);
    const [textBtn, SetTextBtn] = useState('Показать больше')
    const onToggleBtnMore = ( e: any ) => {
        if (open === 100) {
            SetOpen( prev => prev = body.length)
            SetTextBtn('Скрыть');
        } else {
            SetOpen( prev => prev = 100)
            SetTextBtn('Показать больше');
        }
    }

    const renderBody = body.length > 100 ? body.slice(0, open) : body;
    const buttonMore = <button className='btnMore'>{textBtn}</button>
    return (
        <section className='section'>
            <Link to={`${id}`} className='currentPost'><h3>{title}</h3></Link>
            <p onClick={(e: any) => onToggleBtnMore(e)}>
                {renderBody}{open === 100 ? '...' : null}
                {body.length > 100 ? buttonMore : null}
            </p>
        </section>
    )
};

export default Item;