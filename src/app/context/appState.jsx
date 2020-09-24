import React, {createContext, useState, useEffect} from 'react';
import { useFetch } from "../hooks";

const isError = false;
const isLoading = false;
const data = '';

const AppContext = createContext({
    isError,
    isLoading,
    data
});

const AppProvider = props => {
    const url = 'https://cdn.theprojectfactory.com/pokemon/get.php';
    const [doFetch, setDoFetch] = useState(false);
    const {response, isLoading, isError} = useFetch(url, doFetch);
    const [result, setResult] = useState();

    useEffect(() => {
        setDoFetch(true);
    
        if (!isLoading && !isError && response && response.data.length > 0)
        setResult(response.data);
      }, [isError, isLoading, response]);

    return (
        <AppContext.Provider
            value={{
                isLoading,
                isError,
                result
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};

const AppConsumer = AppContext.Consumer;

export {
    AppProvider,
    AppConsumer,
    AppContext
}
