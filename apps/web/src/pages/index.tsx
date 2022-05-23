import { trpc } from "@tens/react/trpc";
import React from "react";

export default function Web() {
  const { data: users, isLoading } = trpc.useQuery(["user.get-all"]);

  React.useEffect(() => {
    console.log(users);
  });

  return (
    <div>
      <h1>Web</h1>
    </div>
  );
}
