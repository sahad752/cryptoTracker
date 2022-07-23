import {
  AppBar,
  Container,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import {
  createTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { CryptoState } from "../CryptoContext";
import { Tab, Tabs } from "@mui/material";
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
const useStyles = makeStyles((theme) => ({
  title: {
    flex: 1,
    color: "gold",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
  },
}));

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    type: "dark",
  },
});

function Header() {
  const classes = useStyles();
  const { currency, setCurrency } = CryptoState();

  const history = useHistory();
  const [activeTab=0, setActiveTab] = React.useState(0);


  const handleChange = (event, newValue) => {

    setActiveTab(newValue);
    if (newValue === 0) {
      history.push("/");
    } else if (newValue === 1) {
      history.push('/wallet');
    }

  }

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
        <Container >
          <Toolbar sx={{ justifyContent: "space-between" }}>
            {/* <Typography
              onClick={() => history.push(`/`)}
              variant="h6"
              className={classes.title}
            >
              Crypto Hunter
            </Typography> */}
    
            <Tabs value={activeTab} onChange={handleChange} >
              <Tab icon={<HomeIcon />} iconPosition="start" label="Home" />
              <Tab icon={<AccountBalanceWalletIcon />} iconPosition="start" label="Wallet" />
            </Tabs>
            {/* <Button color="inherit">Login</Button> */}
            <Select 
              variant="outlined"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={currency}
              style={{ width: 100, height: 40, marginLeft: 15 }}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"INR"}>INR</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}

export default Header;
