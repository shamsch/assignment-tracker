//custom made hook provided in the course

import { useState, useEffect } from "react";

export const useFetch = (url, request = "GET") => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const [post, setPost] = useState(null);

  const sendData = (postData) => {
     if (request === "POST") {
      setPost({
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });
    }
  };

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async (post) => {
      setIsPending(true);

      try {
        const res = await fetch(url, { ...post, signal: controller.signal });
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        const data = await res.json();

        setIsPending(false);
        setData(data);
        setError(null);
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("the fetch was aborted");
        } else {
          setIsPending(false);
          setError("Could not fetch the data");
        }
      }
    };

    if (request === "POST" && post) {
      fetchData(post);
    } else if (request === "GET") {
      fetchData();
    }

    return () => {
      controller.abort();
    };
  }, [url, post, request]);

  return { data, isPending, error, sendData };
};
