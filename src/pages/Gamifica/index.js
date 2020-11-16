import React, { useEffect , useState } from 'react';
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
import CircularProgress from '@material-ui/core/CircularProgress';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { useHistory,useParams } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import "./gami.css"

import api from '../../services/api';

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

function Gamification() {
  
  const clienteId = "5fb05d60a3008ba9c6e59137"; // Delcio

  const [quantidadePontosAtual, setQuantidadePontosAtual] = useState([]);
  const [quantidadeXP, setQuantidadeXP] = useState([]);
  const [QuantidadePontosXpNecessariosParaAtingirProximoNivel, setQuantidadePontosXpNecessariosParaAtingirProximoNivel] = useState([]);

  useEffect(() => {

    async function loadScores() {

      const response = await api.get(`/pontuacaoCliente/${clienteId}`);

      setQuantidadePontosAtual(response.data.QuantidadePontosAtual);
      setQuantidadeXP(response.data.QuantidadeXP);
      setQuantidadePontosXpNecessariosParaAtingirProximoNivel(response.data.QuantidadePontosXpNecessariosParaAtingirProximoNivel);
    }

    loadScores();
  }, []);
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
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  
  const handleDrawerClose = () => {
    setOpen(false);
  };
  
  Gamification();

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

    <ListItem  button style={{background:"#ddd"}} onClick={() => history.push("/gami")}>
      <ListItemIcon>
      </ListItemIcon>
      <ListItemText primary="Perfil" />
    </ListItem>

    <ListItem  button onClick={() => history.push("/debitoAutomatico")}>
      <ListItemIcon>
      </ListItemIcon>
      <ListItemText primary="Debito Automatico" />
    </ListItem>

    <ListItem  button onClick={() => history.push("/parcela")}>
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

           <div>

            <div class="circle circle-50"></div>
            
             <div className="topgami">
               <section className="pontop">
                 <p>Ola</p>
               </section>

               <section>

               <section>
                 <h2>Cláudio D. S. Machado</h2>
               </section>

               <div className="divtop">
                 <section>
                   <p>Tarifa média: R$ 125,20</p>
                   <p>Ultima fatura: R$ 145,20</p>
                 </section>

                 <section>
                   <p>N° do cliente: 873873</p>
                   <p>Cliente desde: 06/2020 </p>
                 </section>
               </div>

               </section>
               

             </div>

             <div>
               <Paper>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  indicatorColor="primary"
                  textColor="primary"
                  centered
                >
                  <Tab label="EXTRATO" />
                  <Tab label="RESGATAR" />
                  <Tab label="COMO GANHAR" />
                </Tabs>
              </Paper>
              <Paper>
                
              </Paper>
             </div>
          </div>
           
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}