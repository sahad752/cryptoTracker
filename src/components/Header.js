import {
  AppBar,
  Container,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React, { useEffect } from "react";
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
import { ArrowBack, DarkModeOutlined } from "@mui/icons-material";
import { Box, width } from "@mui/system";
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
      main: "#000",
    },
    mode: "dark",
  },
});

function Header({ activeTab = 0, showbackbutton, showMenu }) {
  const classes = useStyles();
  const { currency, setCurrency } = CryptoState();
  const history = useHistory();
  const defautlvalue = 0;

  const handleChange = (event, newValue) => {

    if (newValue === 0) {
      history.push("/");
    } else if (newValue === 1) {
      history.push('/wallet');
    }

  };

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
        <Container id="appBar" >
          <Toolbar style={{ diplay: 'flex', justifyContent: "space-between" ,width:"100%" }}>
            {/* <Typography
              onClick={() => history.push(`/`)}
              variant="h6"
              className={classes.title}
            >
              Crypto Hunter
            </Typography> */}

            <Box >
            {
              showbackbutton &&
              <Box onClick={() => history.push(`/`)} display="flex" style={{cursor:"pointer"}} >
                <ArrowBack />
                <Typography style={{marginLeft:20}}>back</Typography>
              </Box>
            }
            </Box>
            <Box >
            {
              showMenu &&
              <Tabs value={activeTab} onChange={handleChange} >
                <Tab icon={<HomeIcon />} iconPosition="start" label="Home" />
                <Tab icon={<AccountBalanceWalletIcon />} iconPosition="start" label="Wallet" />
              </Tabs>
            }
            </Box>
            
            <DarkModeOutlined onClick={() => setCurrency(currency === "USD" ? "EUR" : "USD")} />
         

            
            {/* <Button color="inherit">Login</Button> */}
            {/* <Select 
              variant="outlined"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={currency}
              style={{ width: 100, height: 40, marginLeft: 15 }}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"INR"}>INR</MenuItem>
            </Select> */}
          </Toolbar>
        </Container>
        <Container>

        </Container>
      </AppBar>
    </ThemeProvider>
  );
}

export default Header;
