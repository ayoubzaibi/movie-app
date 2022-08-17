import Card from "react-bootstrap/Card";
import EditMovie from "./EditMovie";

import RatingStar from "./RatingStar";

const MovieCard = ({ movie, edit }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={movie.image} />
        <Card.Body>
          <Card.Title>{movie.name} </Card.Title>
          <Card.Text>{movie.year}</Card.Text>
          <RatingStar rating={movie.rating} />
          <EditMovie movie={movie} edit={edit} />
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
