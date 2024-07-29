const DEFAULT_HEADERS = {
   'Content-Type': 'application/json',
};

const getServerUrl = (isLocalServer) =>
   isLocalServer ? process.env.NEXT_PUBLIC_LOCAL_SERVER : process.env.NEXT_PUBLIC_SERVER;

export const fetchReq = async ({
   method = 'GET',
   body,
   url,
   isLocalServer = true,
   headers = {},
   params = {},
   optionsNext = {}
}) => {
   const queryParams = new URLSearchParams(params).toString();
   const fullUrl = `${getServerUrl(isLocalServer)}${url}${queryParams ? `?${queryParams}` : ''}`;
   
   const options = {
       method,
       headers: { ...DEFAULT_HEADERS, ...headers },
   };

   if (body) {
       options.body = JSON.stringify(body);
   }

   try {
       console.log('API request start 🚀\n', fullUrl);
       const response = await fetch(fullUrl, { ...options, ...optionsNext });
       
       if (!response.ok) {
           const errorData = await response.json();
           throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
       }
       
       const result = await response.json();
       console.log('API request result ✅\n', { result });
       return result;
   } catch (error) {
       console.error('API error ❌\n', { error });
       throw error;
   }
};

// Example usage:
// fetchReq({
//   method: 'POST',
//   url: '/api/users',
//   body: { name: 'John Doe' },
//   params: { lang: 'en' },
//   headers: { Authorization: `Bearer ${token}` },
// });