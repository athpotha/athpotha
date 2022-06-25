function Card(props) {
  return (
    <div className="card text-center col-md-8 offset-md-2">
        <ul className="card-body">
          <li className="list-group-item">Id: {props.studentId}</li>
          <li className="list-group-item">Name: {props.name}</li>
          <li className="list-group-item">Address: {props.address}</li>
        </ul>
    </div>
  );
}

export default Card;
