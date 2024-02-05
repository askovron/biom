import DataGrid from "react-data-grid";
import { prepareBiom } from "./parseBiom";
import { columns } from "./columns";
import biom from "./biom.json";
import "react-data-grid/lib/styles.css";

export const App = () => (
  <>
    <h1>Results for Biom parsing</h1>
    <DataGrid columns={columns} rows={prepareBiom(biom)} />
  </>
);
