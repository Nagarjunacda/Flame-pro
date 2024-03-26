import axios from "axios";

export const handleServerSideProps = async (url) => {
    try {
        const response = await axios.get(url, { withCredentials: true });
        return { data: response.data, headers: response.headers };
    }
    catch (error) {
        return { error };
    }
}

export const handleGetReqAuth = async (url) => {
    const username = 'ck_a596bfbd73295f3acb7e4f012a460f07fdc8bc19'
    const password = 'cs_36ceccf125e085217b679972dc7b0b209ffb5cf1'
    try {
        const response = await axios.get(url, { headers: { Authorization: 'Basic ' + btoa(username + ':' + password) }, withCredentials: true });
        return { data: response.data, headers: response.headers };
    }
    catch (error) {
        return { error };
    }

}