import {useState, useEffect} from "react";
import axios from "axios";


function useAxios(ketInLS, baseUrl) {
    const [respnses, setResponses] = useLocalStorage(ketInLS)
    
    const addResponseData = async (formatter = data => data, restOfUrl = "") => {
        const response = await axios.get(`${baseUrl}${restOfUrl}`);
        //   "https://deckofcardsapi.com/api/deck/new/draw/"
        setResponses(data => [...data, formatter(response.data)]);
    };

    const clearResponses = () => setResponses([]);
    return [respnses, addResponseData, clearResponses];
}

function useLocalStorage(key, initialValue = []) {
    if (localStorage.getItem(key)) {
        initialValue = JSON.parse(localStorage.getItem(key));
    }
    const [value, setValue] = useState(initialValue);

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value, key]);

    return [value, setValue];
}

export default useLocalStorage;
export {useAxios, useLocalStorage};