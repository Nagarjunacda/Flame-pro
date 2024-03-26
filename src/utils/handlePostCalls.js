import axios from "axios";

export const handlePostRequests = async (url, body, customHeaders = {}) => {
    try {
        const response = await axios.post(url, body, { headers: customHeaders, withCredentials: true });
        return { data: response.data, headers: response.headers };
    }
    catch (error) {
        return { error };
    }

}
