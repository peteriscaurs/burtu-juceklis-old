import { MDBDataTable } from "mdbreact";

export default function Table({ rows, savedWords }) {
  const columns = [
    {
      label: "Vārds",
      field: "word",
      width: 150,
    },
    {
      label: "Burti",
      field: "length",
      width: 150,
    },
    {
      label: "Vērtība",
      field: "value",
      width: 150,
    },
    {
      label: savedWords ? "Dzēst" : "Saglabāts",
      field: "saved",
      width: 150,
    },
  ];

  const conditionalProps = {
    noRecordsFoundLabel: savedWords
      ? "Nav saglabātu vārdu"
      : "Nav meklēšanas rezultātu",
  };

  return (
    <div className="mx-auto" style={{ maxWidth: "800px", margin: "2em" }}>
      <MDBDataTable
        className="table-light rounded text-center overflow-hidden mx-2 mb-5"
        entries={50}
        borderless
        info={false}
        displayEntries={false}
        searchLabel="meklēt"
        sortable={false}
        noBottomColumns
        maxHeight="400px"
        scrollX
        paginationLabel={["Iepriekšējā", "Nākamā"]}
        data={{
          columns,
          rows: rows ? rows.sort((a, b) => b.value - a.value) : [],
        }}
        hover
        {...conditionalProps}
      />
    </div>
  );
}
