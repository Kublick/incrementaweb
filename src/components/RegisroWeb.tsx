import { useEffect, useState } from "react";

type User = {
  id: number;
  email: string;
  createdAt: number;
};

const RegistrosWebTable = () => {
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://incrementaback.blancarte.workers.dev/users"
      );
      const result = await response.json();
      setData(result);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <table className="mt-10">
      <thead>
        <tr>
          <th className="w-40">id</th>
          <th>Email</th>
          <th className="w-40">Fecha</th>
        </tr>
      </thead>
      <tbody>
        {data.map((user, index) => (
          <tr className="text-center" key={user?.id}>
            <td>{index + 1}</td>
            <td className="px-8">{user?.email}</td>
            <td>{new Date(user.createdAt * 1000).toLocaleDateString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RegistrosWebTable;
