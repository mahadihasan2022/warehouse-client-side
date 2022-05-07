import React from "react";

const Blogs = () => {
  return (
    <div>
      <div>
        <h1 className="text-4xl font-bold p-4">
          Difference between javascript and nodejs
        </h1>
        <p className="text-lg font-semibold p-4">
          JavaScript is a simple programming language that runs in any browser
          JavaScript Engine. Whereas Node JS is an interpreter or running
          environment for a JavaScript programming language that holds many
          excesses, it requires libraries that can easily be accessed from
          JavaScript programming for better use.
        </p>
      </div>
      <div>
        <h1 className="text-4xl font-bold p-4">
          When should you use nodejs and when should you use mongodb
        </h1>
        <p className="text-lg font-semibold p-4">
          NodeJS and MongoDB are two different process. Here I tried to explain
          as simpler as possible: NodeJS Shortly we can say, NodeJS is a
          JavaScript runtime environment. It's actually helps JavaScript to run
          outside of server. It's used in server side development. MongoDB But,
          MongoDB is NoSQL database which is document oriented. It represents
          data as of JSON documents. It's used for store data. Summary The
          summary is MongoDB is a database where we can store data and NodeJS
          helps us to to connect our client site to database by it's server
          site. Example: Suppose you are building a website and you need a
          database to store the data or information so here you can use MongoDB
          but to be connected with MongoDB you need a connector, so here you can
          use NodeJS which will help your website to run outside of server.
        </p>
      </div>
      <div>
        <h1 className="text-4xl font-bold p-4">
          {" "}
          Differences between sql and nosql databases
        </h1>
        <p className="text-lg font-semibold p-4">
          SQL databases are vertically scalable, while NoSQL databases are
          horizontally scalable. SQL databases are table-based, while NoSQL
          databases are document, key-value, graph, or wide-column stores. SQL
          databases are better for multi-row transactions, while NoSQL is better
          for unstructured data like documents or JSON.
        </p>
      </div>
      <div>
        <h1 className="text-4xl font-bold p-4">
          What is the purpose of jwt and how does it work
        </h1>
        <p className="text-lg font-semibold p-4">
          JWT, or JSON Web Token, is an open standard used to share security
          information between two parties — a client and a server. Each JWT
          contains encoded JSON objects, including a set of claims. JWTs are
          signed using a cryptographic algorithm to ensure that the claims
          cannot be altered after the token is issued
        </p>
      </div>
    </div>
  );
};

export default Blogs;
