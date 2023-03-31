// takes an object
const Tile = ({ tileContent }) => {
  const properties = [];

  for (const property in tileContent) {
    if (property === "id" || property === "contactId") continue;
    properties.push(tileContent[property]);
  }

  return (
    <div key={tileContent.id} className="tile-container">
      {properties.map((property, index) =>
        index === 0 ? (
          <p key={index} className="tile-title">
            {property}
          </p>
        ) : (
          <p key={index} className="tile">
            {property}
          </p>
        )
      )}
    </div>
  );
};

export default Tile;
