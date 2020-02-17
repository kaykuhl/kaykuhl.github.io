import React from "react";
import CarList from "../data/cars.json";

function CarInfo(props) {
  console.log(props)

  const results = CarList.filter(car => car.make.toLowerCase().includes(props.search.toLowerCase()));

  return (
    <div className="text-center">
      {results.length > 0 ? (
        <ul className="list-group">
          <h2>Featured Cars</h2>
          {results.map(result => (
            <li className="list-group-item" key={result.id}>
              <b>{result.year}</b> {result.make} {result.model}
            </li>
          ))}
        </ul >
      ) : (
          <h2>No Results</h2>
        )}
    </div>
  );
}

export default CarInfo;
