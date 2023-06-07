// import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";

const useMenu = () => {
  // const [menu, setMenu] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   fetch("https://recap-bistro-boss-server.vercel.app/menu")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setMenu(data);
  //       setLoading(false);
  //     });
  // }, [])

  const { data: menu = [], refetch, isLoading: loading } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await fetch("https://recap-bistro-boss-server.vercel.app/menu");
      return res.json();
    },
  });
  
  return [menu, refetch, loading];
}

export default useMenu;