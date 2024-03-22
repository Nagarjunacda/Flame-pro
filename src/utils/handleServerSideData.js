import axios from "axios";

export const handleServerSideProps = async (url) => {
    try {
        const response = await axios.get(url);
        return { data: response.data, headers: response.headers };
    }
    catch (error) {
        return { error };
    }
}