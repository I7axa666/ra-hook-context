import './App.css'
import { useState, useEffect } from "react";

function useJsonFetch(url, opts) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url, opts);
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    
    return () => {};
  }, []);

  return [data, loading, error];
}

function App() {
  const JsonFetchComponent = ({ endpoint }) => {
    const [data, loading, error] = useJsonFetch(`http://localhost:7070/${endpoint}`, {
      method: "GET",
    });
    
    return (
      <div>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        {data && <p>Data: {data.status}</p>}
      </div>
    );
  };

  return (
    <div>
      <JsonFetchComponent endpoint={"loading"} />
    </div>
  );
}

export default App;