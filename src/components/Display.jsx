import { Box, styled } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { Data } from "../context/Dataprovider";

const Container = styled(Box)`
  height: 40vh;
`;

const Display = () => {
  const [code, setCode] = useState("");
  const { HTML, CSS, JS } = useContext(Data);
  const sourceCode = `
      <html>
        <body> ${HTML}</body>
        <style> ${CSS}</style>
        <script> ${JS} </script>
      <html>
  `;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCode(sourceCode);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [HTML, CSS, JS]);

  return (
    <>
      <Container>
        <iframe
          srcDoc={code}
          title="output"
          sandboc="allow-scripts"
          frameBorder={0}
          width="100%"
          height="100%"
        />
      </Container>
    </>
  );
};
export default Display;
