import React from "react";
import { MDBDataTable } from "mdbreact";

export default function QueryGenes() {
  return (
    <article>
      <p>
        This section aims to give an overview of different features that are
        known about the query genes, such as their transcriptional regulation,
        their gene product, the operon to which they belong and the description
        of gene ontologies they are associated to. In the case one or more of
        the input genes are not found in our database, they will appear under
        the section "gene (s) not found". The table can be sorted by any of the
        features by clicking icon attached to the name of the feature´s
        associated column.
      </p>
      <br />
      <MDBDataTable striped bordered small data={data} />
    </article>
  );
}

const data = {
  columns: [
    {
      label: "Name",
      field: "name",
      sort: "asc",
      width: 150
    },
    {
      label: "Position",
      field: "position",
      sort: "asc",
      width: 270
    },
    {
      label: "Office",
      field: "office",
      sort: "asc",
      width: 200
    },
    {
      label: "Age",
      field: "age",
      sort: "asc",
      width: 100
    },
    {
      label: "Start date",
      field: "date",
      sort: "asc",
      width: 150
    },
    {
      label: "Salary",
      field: "salary",
      sort: "asc",
      width: 100
    }
  ],
  rows: [
    {
      name: "Tiger Nixon",
      position: "System Architect",
      office: "Edinburgh",
      age: "61",
      date: "2011/04/25",
      salary: "$320"
    },
    {
      name: "Garrett Winters",
      position: "Accountant",
      office: "Tokyo",
      age: "63",
      date: "2011/07/25",
      salary: "$170"
    }
  ]
};
