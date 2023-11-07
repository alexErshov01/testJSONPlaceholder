import './CurrentItem.css';
import Loading from "../Loading/Loading";
import Error from "../isError/Error";

import {Link, useParams} from "react-router-dom";
import { useGetCurrentPostQuery } from "../../redux/PostApi";

const CurrentItem = () => {
    const { id } = useParams();
    const { data = {}, isLoading, isError } = useGetCurrentPostQuery(id);

    if (isLoading) return <Loading />
    if (isError) return <Error />
    return (
        <div>
            <section className='section' style={{margin: '20px auto'}}>
                <h3>{data.title}</h3>
                <p>{data.body}</p>
            </section>
            <Link to='/posts' className='linkBack'> Назад </Link>
        </div>
    )
};

export default CurrentItem;