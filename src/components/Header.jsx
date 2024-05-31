import { AppBar, Toolbar, styled } from "@mui/material";
const Container = styled(AppBar)`
  background: #1d1e22;
  height: 70px;
  position: static;
`;

function Header(props) {
  const logo =
    "https://cdn.pixabay.com/photo/2022/07/22/12/21/atom-7337993_1280.png";
  return (
    <>
      <Container>
        <Toolbar>
          <img src={logo} style={{ width: 65 }} />
          <p
            style={{
              fontWeight: 900,
              fontSize: "35px",
              marginLeft: "10px",
              fontFamily: "cursive",
            }}
          >
            {props.name}
          </p>
        </Toolbar>
      </Container>
    </>
  );
}

export default Header;
