import React from "react";

import { useParams, Link } from "react-router-dom";

const LearnMore = ({ movies }) => {
  const params = useParams();
  console.log(params);
  const aziz = movies.find((el) => el.id == params.id);
  console.log(aziz);
  return (
    <div>
      {aziz.description}
      <Link to={"/"}>
        <button>back home</button>
      </Link>
    </div>
  );
};

export default LearnMore;
