import { Box, styled } from "@mui/material";
import { useContext } from "react";
import { Data } from "../context/Dataprovider";

// components
import Codeeditor from "./Codeeditor";

const Container = styled(Box)`
  display: flex;
  justify-content: space-between;
  background: black;
  height: 60vh;
  margin-bottom: 10px;
  border-radius: 7px;
`;

const Codespace = () => {
  const { HTML, setHTML, CSS, setCSS, JS, setJS } = useContext(Data);

  return (
    <Container>
      <Codeeditor
        language="HTML"
        icon="/"
        color="#FF3C41"
        value={HTML}
        onChange={setHTML}
      />
      <Codeeditor
        language="CSS"
        icon="*"
        color="#0EBEFF"
        value={CSS}
        onChange={setCSS}
      />
      <Codeeditor
        language="JavaScript"
        icon="()"
        color="#FCD000"
        value={JS}
        onChange={setJS}
      />
    </Container>
  );
};

export default Codespace;
