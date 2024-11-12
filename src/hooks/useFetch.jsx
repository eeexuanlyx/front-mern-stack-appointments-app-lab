const useFetch = () => {
  const fetchData = async (endpoint, method, body) => {
    //sending token to back end to use it
    const res = await fetch(import.meta.env.VITE_SERVER + endpoint, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await res.json();

    if (!res.ok) {
      // catch errors from validators
      if (data?.errors) {
        throw new Error(data.errors[0].msg);
      }

      // catch errors from controllers
      if (data.status === "error") {
        throw new Error(data.msg);
      }

      throw new Error("an error has occurred, please try again later");
    }

    return { ok: true, data };
  };

  return fetchData;
};

export default useFetch;
