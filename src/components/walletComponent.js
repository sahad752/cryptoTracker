
import { Button, Container, makeStyles, Typography } from "@material-ui/core";
import { Icon } from "@mui/material";
import { Box } from "@mui/system";
import Header from "./Header";

const useStyles = makeStyles((theme) => ({
  // banner: {
  //   backgroundImage: "url(./banner2.jpg)",
  // },
  image : {
    width: "15%",
    height: "50%",
    // objectFit: "cover",
    alignSelf: "center",
    marginBottom: 20,
  },
  bannerContent: {
    height: 400,
    display: "flex",
    flexDirection: "column",
    paddingTop: 25,
    justifyContent: "space-around",
  },
  tagline: {
    // display: "flex",
    // height: "40%",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
  carousel: {
    height: "50%",
    display: "flex",
    alignItems: "center",
  },
}));

function WAllet() {
  const classes = useStyles();
  // const {activateBrowserWallet, account } = useEthers();


  return (
    <div className={classes.banner}>
      <Header activeTab={1} showMenu/>
      <Container className={classes.bannerContent}>
        <div className={classes.tagline}>
          
         <img src="./metamask.png"  className ={classes.image}/>
         <Typography
            variant="h3"
            style={{
              fontWeight: "bold",
              marginBottom: 30,
              fontFamily: "Montserrat",
              
            }}
          >
            MetaMask
          </Typography>
          <Button variant="contained" color="primary">Connect to wallet</Button>

        </div>
        {/* <Carousel /> */}
        
        <Box style={{background:"#000"}}>
          <Box>
            <img src="./nrglogo.png" style={{width:"20%"}}/>
            <Typography>
              Energi Network
            </Typography>
          </Box>
        </Box>

      </Container>
      
    </div>
  );
}

export default WAllet;
