function Teacher(props) {
  const divstyle = {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    margin: '10%',
  };

  const imgStyle = {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    marginBottom: '10px',
    objectFit: 'cover',
  };

  return (
    <div style={divstyle}>
      <img src={props.img} alt={props.name} style={imgStyle}></img>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Experience: {props.experience}</p>
    </div>
  );
}
export default Teacher;
