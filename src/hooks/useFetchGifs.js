import { useState, useEffect } from "react";
import { getGifs } from '../helpers/getGifs';
export const useFetchGifs = (category, itemMax) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {

        getGifs(category, itemMax).then(imgs => {

            //console.log(imgs);
            setState({
                data: imgs,
                loading: false
            });
        }
        );
    }, [category,itemMax]);

    return state //{data: [], loading: true}

}