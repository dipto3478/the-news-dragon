import React from "react";
import { Link } from "react-router-dom";

const Term = () => {
  return (
    <div>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit eum
        quisquam doloribus natus nisi non quis placeat praesentium, tempore,
        debitis veritatis. Error magni mollitia reiciendis quisquam nesciunt
        amet, assumenda repellat officia corporis culpa, itaque maiores?
        Voluptatibus suscipit voluptatum, amet inventore quasi placeat tenetur
        quibusdam rerum, debitis quod harum ipsa sed omnis est dignissimos saepe
        similique dolores modi maiores ducimus, repellat unde. Pariatur autem
        quas quia minus ipsum quo eligendi nisi distinctio dicta, adipisci sequi
        asperiores ea necessitatibus. Laborum nihil, itaque quasi nemo sint,
        esse amet voluptatibus beatae voluptas, dolore quas sunt provident quos
        accusantium reiciendis dolorum necessitatibus tempore explicabo
        obcaecati.
      </p>
      <button className="py-3 px-2 font-bold text-xl bg-gray-500 text-white">
        <Link to="/register">Back to Register</Link>
      </button>
    </div>
  );
};

export default Term;
