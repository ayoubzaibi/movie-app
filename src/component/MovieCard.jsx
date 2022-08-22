import Card from "react-bootstrap/Card";
import EditMovie from "./EditMovie";

import RatingStar from "./RatingStar";
import { Link } from "react-router-dom";

const MovieCard = ({ movie, edit }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Link to={`/MovieData/${movie.id}`}>
          <Card.Img variant="top" src={movie.image} />
          <Card.Body>
            <Card.Title>{movie.name} </Card.Title>
            <Card.Text>{movie.year}</Card.Text>
            <RatingStar rating={movie.rating} />
            <EditMovie movie={movie} edit={edit} />
          </Card.Body>
        </Link>
      </Card>
    </div>
  );
};

export default MovieCard;
