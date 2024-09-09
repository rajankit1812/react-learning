import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json())  //The reason for the extra step of converting the response to JSON using res.json() in the fetch API is because fetch returns a Response object, not the actual data in JSON format. The Response object contains metadata about the response, like the status code, headers, and so on, as well as the body of the response.
        .then((res) => setData(res[currency]))
        console.log(data)
    }, [currency])

    return data
}

export default useCurrencyInfo