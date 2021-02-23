function AwesomeAnimals() {
  return (
    <div style={{ width: 300 }}>
      <ul style={{ listStyleType: "none" }}>
        {["Chicken", "Sloth", "Porcupine", "Killer whale", "Velociraptor"].map(
          (animal, index) => {
            return (
              <li style={{ color: "green" }} key={index}>
                Awesomess Level {index + 1}:{" "}
                <span style={{ color: "black" }}> {animal}</span>
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
}

export default AwesomeAnimals;
