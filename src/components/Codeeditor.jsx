import { Box, styled } from "@mui/material";
import { useState } from "react";
import SearchOffIcon from "@mui/icons-material/SearchOff";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import "../App.css";

const Container = styled(Box)`
  flex-grow: 1;
  flex-basis: auto;
  margin: 2px 2px 2px 2px;
  
`;

const Heading = styled(Box)`
  background: #1d1e22;
  display: flex;
  padding: 9px 12px;
  font-weight: 700px;
`;

const Header = styled(Box)`
  display: flex;
  background: #1d1e22;
  color: #aaaebc;
  justify-content: space-between;
`;

const Codeeditor = (props) => {
  const handelChange = (editor, data, value) => {
    props.onChange(value);
  };

  const [open, setOpen] = new useState(true);

  const toggleMe = () => {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  return (
    <>
      <Container style={open ? null : { flexGrow: 0 }}>
        {/* upper part */}
        <Header>
          <Heading>
            <Box
              component="span"
              style={{
                background: props.color,
                display: "flex",
                height: "20px",
                width: 20,
                color: "black",
                marginRight: "10px",
                placeContent: "center",
                paddingBottom: "5px",
              }}
            >
              {props.icon}
            </Box>
            {props.language}
          </Heading>
          <SearchOffIcon
            className="icon"
            fontSize="small"
            style={{ alignSelf: "center" }}
            onClick={toggleMe}
          />
        </Header>

        {/* below part */}
        <CodeMirror
          className="controlled-editor"
          value={props.value}
          onBeforeChange={handelChange}
          options={{
            mode: "xml",
            lineNumbers: true,
            theme: "material",
          }}
        />
      </Container>
    </>
  );
};

export default Codeeditor;
