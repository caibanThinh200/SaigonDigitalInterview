import axios from "axios";
import React, { useCallback, useState } from "react";

export const AppContext = React.createContext(null);

const ContextProvider = ({ children }) => {
    const [cats, setCats] = useState([]);

    const getCatApi = useCallback(() => {
        axios.get('https://api.thecatapi.com/v1/images/search?size=full', {
            headers: {
                'x-api-key': 'live_TeURpx3DOOZfLREw1OQkZsWDyuhZf4071GC028woZX3TqF1Yu5FhGZlldB7MaNPP'
            }
        }).then(res => setCats(res.data))
    }, [cats]);

    const store = {
        getCatApi,
        cats,
        setCats
    }

    return <AppContext.Provider value={store}>
        {children}
    </AppContext.Provider>
}

export default ContextProvider