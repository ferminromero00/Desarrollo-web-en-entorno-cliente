
export default function GridCard({ pelicula }) {
  return (
    <>
      <div className="justify-content-center align-items-center mb-5">
        <img src={pelicula.image} alt="" style={{height: 200}}/>
        <h1 style={{fontSize: 20}}>{pelicula.title}</h1>
      </div>
    </>
  )
}
