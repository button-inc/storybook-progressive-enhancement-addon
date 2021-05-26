import React from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import { CopyBlock, dracula } from "react-code-blocks";

function Template({ details, children, peDescription }) {
  const { props, title, description, usageCode } = details;
  console.log("description is", description);

  return (
    <Container>
      <h2 style={{margin: 0}}>{title}</h2>
      <p>{description}</p>
      <div style={{margin: '20px 0'}}>
        {children}
      </div>
      <h2>Progressive Enhancement State</h2>
      <p>{peDescription}</p>

      <h2>Props</h2>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Prop</th>
            <th>Value Type</th>
            <th>Description</th>
          </tr>
        </thead>
        {props.map((prop) => (
          <tr>
            <td>{prop.name}</td>
            <td>{prop.type}</td>
            <td>{prop.description}</td>
          </tr>
        ))}
      </Table>

      <h2>Usage</h2>
      <CopyBlock
        text={usageCode}
        language='jsx'
        showLineNumbers
        theme={dracula}
      />
    </Container>
  );
}

export default Template;
