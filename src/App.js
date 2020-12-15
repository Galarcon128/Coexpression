import React from "react";
import "./regulonDB_global.css";
import { Cover, Tabs } from "./components/ui-components/ui_components";
import ByGenes from "./components/byGenes/by_genes";
import QueryGenes from "./components/queryGenes/query_genes";
import Matrix from "./components/matrix/matrix";
const tabsInfo = [
  { id: "01", name: "query genes", disabled: false },
  { id: "02", name: "by gene", disabled: false },
  { id: "03", name: "Matrix Heatmap", disabled: false }
];

export default function App() {
  return (
    <div>
      <Cover>
        <h1>Coexpression</h1>
      </Cover>
      <Tabs
        tabsInfo={tabsInfo}
        tabs={[<QueryGenes id="01" />, <ByGenes id="02" />, <Matrix id="03" />]}
      />
    </div>
  );
}
