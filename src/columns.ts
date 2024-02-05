import { TRow } from "./parseBiom";

export enum Columns {
  Name = "name",
  TaxId = "taxId",
  AbundanceScore = "score",
  AbundanceRelative = "relative",
  UniqueMatches = "matches",
}

export const columns = [
  { key: "name", name: "Name" },
  { key: "taxId", name: "Tax ID" },
  {
    key: "score",
    name: "Abundance score",
    renderCell: ({ row }: { row: TRow }) => {
      const render =
        Math.round((row[Columns.AbundanceScore] as number) * 1e2) / 1e2;

      return render < 0.01 ? "< 0.01" : render;
    },
  },
  {
    key: "relative",
    name: "Relative abundance",
    renderCell: ({ row }: { row: TRow }) => {
      const render =
        Math.round((row[Columns.AbundanceRelative] as number) * 1e4) / 1e2;

      return render < 0.01 ? "< 0.01%" : `${render}%`;
    },
  },
  {
    key: "matches",
    name: "Unique matches frequency",
    renderCell: ({ row }: { row: TRow }) =>
      (row[Columns.UniqueMatches] as number) | 0,
  },
];
