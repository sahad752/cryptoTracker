
import { Container, makeStyles } from "@material-ui/core";
import { Circle, ContentCopy, IosShare, Padding, Visibility } from "@mui/icons-material";
import { Button, Card, Divider, Icon, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Header from "./Header";
import WalletCoinTile from "./WalanceCoinTile";
import { useState, useEffect } from 'react';
import { ethers } from 'ethers';

const useStyles = makeStyles((theme) => ({
  // banner: {
  //   backgroundImage: "url(./banner2.jpg)",
  // },
  image: {
    width: "15%",
    height: "50%",
    // objectFit: "cover",
    alignSelf: "center",
    marginBottom: 20,
  },
  bannerContent: {
    // height: 400,
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
  walletCard: {
    width: '70%',
    margin: 'auto',
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    rowGap: 10,
  },
  flexRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    columnGap: 10,
  },
  iconText: {
    display: 'flex',
    flexGrow: 1,
    alignItems: 'center',
  },
  totalBalanceContainer: {
    width: '40%',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }
}));

function WAllet() {
  const classes = useStyles();
  // const {activateBrowserWallet, account } = useEthers();

  const coins = [
  
  ]
  const [haveMetamask, sethaveMetamask] = useState(true);
  const [accountAddress, setAccountAddress] = useState('');
  const [accountBalance, setAccountBalance] = useState('');
  const [isConnected, setIsConnected] = useState(false);

  const { ethereum } = window;
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  useEffect(() => {
    const { ethereum } = window;
    const checkMetamaskAvailability = async () => {
      if (!ethereum) {
        sethaveMetamask(false);
      }
      sethaveMetamask(true);
    };
    checkMetamaskAvailability();
  }, []);

  const connectWallet = async () => {
    try {
      if (!ethereum) {
        sethaveMetamask(false);
      }
      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });
      let balance = await provider.getBalance(accounts[0]);
      let bal = ethers.utils.formatEther(balance);
      setAccountAddress(accounts[0]);
      setAccountBalance(bal);
      setIsConnected(true);
    } catch (error) {
      setIsConnected(false);
    }
  };



  return (
    <div className={classes.banner}>
      <Header activeTab={1} showMenu />
      <Container className={classes.bannerContent}>
        
        
        
        {!isConnected?(
        <div className={classes.tagline}>

          <img src="./metamask.png" className={classes.image} />
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
          <Button variant="contained" color="success" onClick={connectWallet} >Connect to wallet</Button>

        </div>):(<div> </div>)
        
        }
        {isConnected ?(
        <Card className={classes.walletCard}>
          <Box className={classes.flexRow}>
            <Box className={classes.iconText}>
              <img src="./nrglogo.jpeg" style={{ width: 20, margin:10}} />
              <Typography >Energi Network</Typography>
            </Box>
            <Box display='flex'>
              <Circle fontSize="small" color="success" />
              <Typography ml={1}>Connected</Typography>
            </Box>
          </Box>
          <Divider />
          <Box className={classes.flexRow}>
            <Box className={classes.iconText}>
              <img src="./metamask.png
              " style={{ width: 20,margin:10 }} />
              <Typography >Energi Network</Typography>
            </Box>
            <Box display='flex'>
              <IconButton><ContentCopy /></IconButton>
              <IconButton><IosShare /></IconButton>
            </Box>
          </Box>

          <Box className={classes.totalBalanceContainer}>
            <Typography variant="caption">Total Balance</Typography>
            <Box className={classes.iconText}>
              <Typography variant='h6' fontWeight='bold' mr={1} >$4200</Typography>
              <Visibility />
            </Box>
            <Box className={classes.flexRow} mt={2}>
              <Button variant='contained' color='success'>Buy</Button>
              <Button variant='contained' color='success'>Send</Button>
            </Box>
          </Box>
          <Box display='flex' flexDirection='column' rowGap={1}>
            {Array(3).fill(0).map((coin, index) => {
              return <WalletCoinTile
                key={index}
                name='Coin Name'
                iconUrl='https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Ethereum-ETH-icon.png'
                company='Company'
                count='200'
                amount='200'
              />
            })}
          </Box>
        </Card>) : (<div></div>)}

      </Container>

    </div >
  );
}

export default WAllet;
