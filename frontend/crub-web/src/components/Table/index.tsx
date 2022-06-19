import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ButtonSubmit from "../Button";
import api from "../../api/base";

function createData(name: string, valor: number) {
  return { name, valor };
}

const rows = [createData("", 0)];

export default function DenseTable() {
  const [data, setData] = React.useState(rows);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    api
      .get("/index")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDelete = async (name: string) => {
    setLoading(true);
    try {
      await api.delete(`/delete/${name}`);
      setData(data.filter((row) => row.name !== name));
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell align="right">Valor</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.valor}</TableCell>
              <TableCell align="right">
                <ButtonSubmit onClick={() => console.log("clicou")}>
                  Editar
                </ButtonSubmit>
              </TableCell>
              <TableCell align="right">
                <ButtonSubmit onClick={() => handleDelete(row.name)}>
                  Excluir
                </ButtonSubmit>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
