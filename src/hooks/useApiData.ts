import { useQuery } from "@tanstack/react-query";

interface ServerData {
  id: number;
  name: string;
  status: "active" | "inactive" | "maintenance";
  uptime: number;
  cpu: number;
  memory: number;
}

// Simulated fetch from a public API, mapping to our domain
const fetchCloudData = async (): Promise<ServerData[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  
  // Map standard JSONPlaceholder data to cloud terminology for demonstration
  return data.map((user: any, index: number) => ({
    id: user.id,
    name: `Node-${user.username}`,
    status: index % 3 === 0 ? "maintenance" : index % 5 === 0 ? "inactive" : "active",
    uptime: 99.9 - (index * 0.1),
    cpu: Math.floor(Math.random() * 60) + 20,
    memory: Math.floor(Math.random() * 80) + 10,
  }));
};

export function useCloudData() {
  return useQuery({
    queryKey: ["cloudData"],
    queryFn: fetchCloudData,
  });
}
