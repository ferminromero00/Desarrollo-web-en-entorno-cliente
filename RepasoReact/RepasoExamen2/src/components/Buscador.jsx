
export default function Buscador({ setBuscar }) {
  const escribir = (e) => { setBuscar(e.target.value) }

  return (
    <>
      <label htmlFor="">Buscador </label>
      <input type="text" onChange={escribir} />
    </>
  )
}
