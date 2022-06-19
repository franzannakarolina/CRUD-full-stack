import { Box } from "@mui/material";
import { useState } from "react";
import api from "../api/base";
import ButtonSubmit from "../components/Button";
import Input from "../components/Input";
import CustomActionsTable from "../components/Table";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  function addListener() {
    api
      .post("/show", {
        name: "",
        value: "",
      })
      .then((response) => {
        setData(response.data);
        console.log("---> ",response.data);
      })
      .catch((error) => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <div className="App">
      <Box alignItems="center" display="flex" justifyContent="center">
        <Input placeholder="Nome" />
        <Box m={2}>
          <Input placeholder="Valor" />
        </Box>
        <Box m={2}>
          <ButtonSubmit type="submit" onClick={addListener}>
            Adicionar
          </ButtonSubmit>
        </Box>
      </Box>
      <Box>
        <CustomActionsTable />
      </Box>
    </div>
  );
}

export default App;
