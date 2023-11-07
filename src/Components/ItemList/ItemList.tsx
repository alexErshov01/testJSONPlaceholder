import './ItemList.css';
import Item from "../Item/Item";
import Error from "../isError/Error";
import Loading from "../Loading/Loading";

import { useGetPostQuery } from "../../redux/PostApi";
import {useEffect, useState} from "react";

interface ItemListProps {
    body: string,
    id: number,
    title: string
};

const ItemList = () => {
    const { data = [], isLoading, isError } = useGetPostQuery('getPost');
    const [amountEl, SetEmountEl] = useState(10);

    useEffect(() => {
        document.addEventListener('scroll', onScrollHandler);
        return () => {
            document.removeEventListener('scroll', onScrollHandler)
        }
    }, [ ])

    const onScrollHandler = (e: any) => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
            if (data.length < amountEl) return;
            SetEmountEl( prev => prev + 10)
        }
    }

    if (isError) return <Error />
    if (isLoading) return <Loading />
    return (
        <main className='main'>
            {data.slice(0, amountEl).map( (e: ItemListProps) => {
                return <Item body={e.body} title={e.title} key={e.id} id={e.id}/>
            })}
        </main>
    )
};

export default  ItemList;
