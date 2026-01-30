const Cards = (props) => {
  return (
    <div className="col-md-4 mb-4 cursor-pointer ">
      <div className="card p-3 shadow bg-dark text-white card:hover ">
        <img src={props.projectImage} className="w-100 mb-3" alt="" />
        <div className="card-body p-0">
          <h5 className="card-title">{props.projectTitle}</h5>
          <p className="card-text">{props.projectDescription}</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  );
};

export default Cards;
