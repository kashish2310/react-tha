const { useEffect, useState } = require("react");

const useFetch= (url= '', options=null)=>{
    const [data,setData]= useState(null);
    const [error,setError] = useState(null);
    const [loading,setLoading]= useState(null);
    useEffect(()=>{
        let isMounted= true;
        setLoading(true);
        fetch(url,options)
        .then(res=> res.json())
        .then(data =>
            {

        if(isMounted){
          setData(data)
          setError(null);}
            })
        .catch(error =>{
            if(isMounted){
            setError(error);
            setData(data);
            }
        })
        .finally(()=> isMounted && setLoading(false));
         
        return ()=> isMounted =false;
    },[url,options]);
    return {loading,error,data};
};

export default useFetch;