import useDisney from "../hooks/useDisney";

export default function CharacterHistory() {
  const historial = useDisney().getHistorial();

  return (
    <>
      {historial.length > 0 && (
        <>
          <h1>Historial</h1>
          {historial.map((el) => (
            <div key={el._id}>{el.name}</div>
          ))}
          <hr></hr>
        </>
      )}
    </>
  );
}
