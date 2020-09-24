import { useEffect, useState } from 'react';
import {PokemonService} from "../services";

const usePost = (url, run) => {
    const [response, setResponse] = useState({});
    const [isLoading, setLoading] = useState(true);
    const [isError, setError] = useState(false);

    useEffect(() => {
        let mounted = true;
        const abortController = new AbortController();
        const signal = abortController.signal;
        if (run && mounted) {
            const fetchData = async () => {
                try {
                    setLoading(true);
                    const response = await PokemonService.getPokemons(url);
                    if (response.status === 200 && !signal.aborted) {
                        setResponse(response.data);
                    }
                } catch (err) {
                    console.log(err);
                    if (!signal.aborted) {
                        setResponse(err);
                        setError(true);
                    }
                } finally {
                    if (!signal.aborted) {
                        setLoading(false);
                    }
                }
            };
            fetchData();
        }

        return () => {
            mounted = false;
            abortController.abort();
        };
    }, [run, url, response]);

    return { response, isLoading, isError };
}

export default usePost;
