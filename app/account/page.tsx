import getCurrentUser from "../actions/getCurrentUser";
import AccountClient from "./AccountClient";

const page = async () => {
  const currentUser = await getCurrentUser();
  return <AccountClient currentUser={currentUser} />;
};

export default page;
