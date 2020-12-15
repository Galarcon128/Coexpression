import React from "react";

export default function ByGenes() {
  return (
    <article>
      <p>
        This section allows the user to display the top 50 genes that are most
        highly coexpressed with each query gene. Each tab that is displayed
        represents one of the query genes. Within each tab or gene two sections
        are shown for this gene, the first section being "GENE INFORMATION"
        displaying information about the transcriptional regulation of that
        gene, and the second section being "THE TOP 50 COEXPRESSED GENES"
        showing the top 50 genes most highly coexpressed with that gene and
        their information on transcriptional regulation. For more details of the
        coexpression method see the user guide.
      </p>
    </article>
  );
}
