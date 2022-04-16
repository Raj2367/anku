import axios from "axios";
const getApidata = async (method, data) => {
    try {
        return await axios({
            method: method,
            url: "http://localhost:5000/impevents",
            data: data
        })
            .then((response) => {
                return response
            })
            .catch((err) => {
                console.log(err);
            });
    }
    catch (e) {
        console.log(e);
    }
}

export { getApidata };