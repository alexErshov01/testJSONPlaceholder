import './Start.css';
import imgLove from './Love.png';
import { Link } from "react-router-dom";

const Start = () => {
    return (
        <div className='start'>
            <h1>Hello my friends</h1>
            <img src={imgLove} alt='Love...'/>
            <Link to='posts' className='link'>Перейти к списку</Link>
        </div>
    )
};

export default Start;