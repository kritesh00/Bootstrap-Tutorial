import Cards from "./Cards";

const Project = () => {
  return (
    <>
   <section className="container my-5">
  <div className="row g-4">

    <Cards
      projectImage='vite.svg'
      projectTitle="Project One"
      projectDescription="Description one"
    />

    <Cards
      projectImage='vite.svg'
      projectTitle="Project Two"
      projectDescription="Description two"
    />

    <Cards
      projectImage='vite.svg'
      projectTitle="Project Three"
      projectDescription="Description three"
    />

  </div>
  <a href="https://google.com" className="btn btn-primary mt-4 d-flex justify-content-center align-items-center">View All Projects</a>
</section>

    </>)
}
export default Project;