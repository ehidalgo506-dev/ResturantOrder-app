import { useState } from "react";


const useAPI = (configuration, applyAction) => {
    const { url, method, headers, body } = configuration;
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)

    const sendRequest = async function () {
        setIsLoading(true);

        try {
            const response = await fetch(url, { method: method, headers: headers, body: body })

            if (!response.ok) {
                throw new Error('Request Failed');
            }

            const data = await response.json()

            const loadedTask = [];

            for (const meal in data) {
                loadedTask.push({
                    key: meal,
                    id: meal,
                    description: data[meal].description,
                    name: data[meal].name,
                    price: data[meal].price,
                })
            }

            applyAction(loadedTask)

        } catch (error) {

            setError(error || 'Something went wrong');

        }

        setIsLoading(false)

    }

    return { isLoading, error, sendRequest }

}

export default useAPI;