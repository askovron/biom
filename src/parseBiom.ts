import { Columns } from "./columns";

type TBiom = {
  shape: number[];
  data: number[][];
  rows: {
    id: string;
    metadata: {
      lineage: {
        rank: string;
        name: string;
        tax_id: number;
      }[];
    };
  }[];
  columns: { id: string; metadata: null | unknown }[];
};

export type TRow = Record<Columns, string | number>;

const LEVEL_STRAIN = 7;

export const prepareBiom = (biom: TBiom): TRow[] => {
  console.time("Parsed in");
  const parsed = biom.rows.reduce((out: TRow[], current, index) => {
    return out.concat({
      [Columns.Name]: current.metadata.lineage[LEVEL_STRAIN].name,
      [Columns.TaxId]: current.metadata.lineage[LEVEL_STRAIN].tax_id,
      [Columns.AbundanceScore]: biom.data[index + 1][2],
      [Columns.AbundanceRelative]: biom.data[index][2],
      [Columns.UniqueMatches]: biom.data[index + 2][2],
    } as TRow);
  }, []);

  console.timeEnd("Parsed in");
  return parsed;
};
