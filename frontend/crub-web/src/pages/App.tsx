import { Box } from "@mui/material";
import { useState } from "react";
import api from "../api/base";
import ButtonSubmit from "../components/Button";
import Input from "../components/Input";
import DenseTable from "../components/Table";

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([{}]);
  const [dataPost, setDataPost] = useState({ name: "", valor: "" });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError(false);
    try {
      const response = await api.get("/index");
      setData(response.data);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  function addListener() {
    api
      .post("/show", dataPost)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <Box alignItems="center" display="flex" justifyContent="center">
          <Input
            placeholder="Nome"
            onChange={(event) =>
              setDataPost({ ...dataPost, name: event.target.value })
            }
          />
          <Box m={2}>
            <Input
              placeholder="Valor"
              onChange={(event) =>
                setDataPost({ ...dataPost, valor: event.target.value })
              }
            />
          </Box>
          <Box m={2}>
            <ButtonSubmit type="submit" onClick={addListener} loading={loading}>
              Adicionar
            </ButtonSubmit>
          </Box>
        </Box>
      </form>
      <Box>
        <DenseTable />
      </Box>
    </div>
  );
}

export default App;
