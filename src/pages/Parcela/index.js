import React from 'react';
import { useHistory,useParams } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import PersonIcon from '@material-ui/icons/Person';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import TextsmsIcon from '@material-ui/icons/Textsms';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


import "./catao.css"

import foto from "./foto.svg";
import card from "./card.svg";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function Dashboard() {
  const history = useHistory();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            CPFL
          </Typography>
          <IconButton color="inherit">
    
              <PersonIcon/>
     
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
      variant="persistent"
      classes={{
        paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
      }}
      open={open}
    >
      <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <div>
      <ListItem  button >
      <ListItemIcon>
      </ListItemIcon>
      <ListItemText primary="Home"  onClick={() => history.push("/")}/>
    </ListItem>

    <ListItem  button onClick={() => history.push("/gami")}>
      <ListItemIcon>
      </ListItemIcon>
      <ListItemText primary="Perfil" />
    </ListItem>

    <ListItem  button onClick={() => history.push("/debitoAutomatico")}>
      <ListItemIcon>
      </ListItemIcon>
      <ListItemText primary="Debito Automatico" />
    </ListItem>

    <ListItem  button style={{background:"#ddd"}} onClick={() => history.push("/parcela")}>
      <ListItemIcon>
      </ListItemIcon>
      <ListItemText primary="Parcelas" />
    </ListItem>

    <ListItem  button onClick={() => history.push("/oppagame")}>
      <ListItemIcon>
      </ListItemIcon>
      <ListItemText primary="Pagamentos" />
    </ListItem>
    </div>

      </Drawer>
      
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>

          <div >
            
              <section className="usuario">
                <section className="scimg">
                  <img  src={foto}/>
                </section>
                <Typography className="titulo"> Pagamento parcial</Typography>

                <section className="bonus">
                  <p>Para validar o pagamento parcial é necessario que seja pago pelo menos 50% da fatura. O restante será cobrado de forma parcelada.</p> 
                  <p>Lembre-se: você não poderá realizar esse metódo novamente ate que todas as parcelas sejam pagas.</p>
                </section>
                <section className="cartoes">
                    <section>
                      <p>Valor a ser pago</p>
                    </section>

                    <section className="limite">
                    <p>R$ 90.00</p>
                    <ArrowForwardIosIcon/>
                    </section>
                </section>

                <section className="cartoes">
                    <section>
                      <p>Método de pagamento</p>
                    </section>

                    <section>
                    <section className="limite">
                    <img className="cartoe"  src={card}/>
                    <MoreHorizIcon/>
                    <p>4260</p>
                    <ArrowForwardIosIcon/>
                    </section>
                    
                    </section>
                </section>
                <section className="cartoes">
                    <section>
                      <p>Numero de parcelas</p>
                    </section>

                    <section className="limite">
                    <RemoveIcon/>
                    <h3>4</h3>
                    <AddIcon/>
                    </section>
                </section>

              </section>
              <section className>
              <Button className="para1btn">
                Pagar Parcialmente
              </Button>
            </section>
              
             
            </div>
           
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}