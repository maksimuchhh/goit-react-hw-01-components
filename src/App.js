import React from "react";
import PropTypes from "prop-types";
import Profile from "./components/Profile/index";
import Statistics from "./components/Statistics/index";
import { avatar, name, tag, location, stats } from "./profile/users.json";
import statisticalData from "./statistics/statistical-data.json";
import friends from "./friends/friends.json";
import transactions from "./transaction/transaction.json";
import FriendList from "./components/FriendList";
import TransactionHistory from "./components/TransactionHistory/index";
function App() {
  return (
    <div>
      <Profile
        avatar={avatar}
        name={name}
        tag={tag}
        location={location}
        stats={stats}
      />
      <Statistics stats={statisticalData} title="Statistic" />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </div>
  );
}

App.propTypes = {
  user: PropTypes.object,
  avatar: PropTypes.string,
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};

export default App;
