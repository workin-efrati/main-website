import axios from "axios";

// בקשת שרת גנרית
export const axiosReq = async ({ method = 'POST', body, url, isLocalServer = true }) => {
    try {
       const { data: result } = await axios({
          baseURL: isLocalServer ? process.env.NEXT_PUBLIC_LOCAL_SERVER : process.env.NEXT_PUBLIC_SERVER,
          method,
          data: body || {},
          url,
          headers: {
            //  Authorization: localStorage.token || ''
          }
       })
       console.log('api req result 🐱 \n', { result })
       return result;
 
    } catch (error) {
       console.log('api error 🤢 \n', { error });
       throw error.response?.data?.my ? error.response?.data?.message || 'something went wrong' : 'something went wrong'
    }
 }