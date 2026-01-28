const Contact = ()=>{
    return(
        <>
        <form className="bg-dark text-white p-5 d-flex flex-column gap-3 align-items-center  ">
  <div className="row w-100 g-3">
    <div className="col-md-6">
      <label htmlFor="inputEmail4" className="form-label">Email</label>
      <input
        type="email"
        className="form-control"
        id="inputEmail4"
        placeholder="Email"
      />
    </div>

    <div className="col-12">
      <label htmlFor="inputAddress" className="form-label">Address</label>
      <input
        type="text"
        className="form-control"
        id="inputAddress"
        placeholder="1234 Main St"
      />
    </div>

    <div className="col-12">
      <label htmlFor="inputAddress2" className="form-label">Address 2</label>
      <input
        type="text"
        className="form-control"
        id="inputAddress2"
        placeholder="Apartment, studio, or floor"
      />
    </div>

    <div className="col-md-6">
      <label htmlFor="inputCity" className="form-label">City</label>
      <input type="text" className="form-control" id="inputCity" />
    </div>

    <div className="col-md-4">
      <label htmlFor="inputState" className="form-label">State</label>
      <select id="inputState" className="form-select">
        <option defaultValue>Choose...</option>
        <option>Bagmati</option>
        <option>Gandaki</option>
        <option>Lumbini</option>
        <option>Madhesh</option>
        <option>Karnali</option>
        <option>Sudurpashchim</option>
      </select>
    </div>

    <div className="col-md-2">
      <label htmlFor="inputZip" className="form-label">Zip</label>
      <input type="text" className="form-control" id="inputZip" />
    </div>
  </div>
</form>

        </>
    )
}   
export default Contact;