
import { makeStyles } from "@material-ui/core";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        columnGap: 10,
    },
    icon: {
        width: 48,
    },
}));

function WalletCoinTile({
    name,
    iconUrl,
    company,
    count,
    amount,
}) {
    const classes = useStyles();

    return (
        <Box className={classes.container}>
            <img className={classes.icon} src={iconUrl} />
            <Box flexGrow={1}>
                <Typography variant="subtitle1" fontWeight={600}>{name}</Typography>
                <Typography variant="caption" fontWeight={600}>{company}</Typography>
            </Box>
            <Box >
                <Typography variant="subtitle1" fontWeight={600}>{count}</Typography>
                <Typography variant="caption" fontWeight={600}>${amount}</Typography>
            </Box>
        </Box>
    );
}

export default WalletCoinTile;
