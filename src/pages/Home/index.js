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
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import "./home.css"

import Modal from "../TelaModal"
import Modals from "../Modal"

import foto from "./foto.svg";

import Drawers from "../Drawer"



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
    paddingRight: 4, // keep right padding when drawer closed
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
    width: theme.spacing(0),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(0),
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
      <ListItem  button style={{background:"#ddd"}}>
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

          <Modal/>
          <Modals/>
          
          <div >
            
              <section className="usuario">
                <p className="tarde">Ola! Boa tarde!</p>
                <p className="nome">Claudio D.S Machado</p>
                <Button className="buttom" >
                  Ver meus pontos
                </Button>
              </section>
              
              <section className="seach">
                <TextField className="busca"
                 label="Free solo with text demo" variant="outlined" />
                 <SearchIcon className="iconsh"/>
              </section>

              <section className="cartoes">
              <Paper  className="pepas">
                  <img 
                src ={foto}/>
                </Paper>

                <Paper  className="pepas">
                  <img 
                src ="https://www.cpfl.com.br/atendimento-a-consumidores/PublishingImages/Servicos/debitos_2via.png"/>
                </Paper>
                <Paper className="pepas">
                <img 
                src ="https://www.cpfl.com.br/atendimento-a-consumidores/PublishingImages/Servicos/icon-falta-de-energia.png"/>
                </Paper>

                <Paper >
                <img 
                src ="https://www.cpfl.com.br/atendimento-a-consumidores/produtos-e-servicos/SiteAssets/Paginas/Forms/AllItems/icon-ligacao-nova.png"/>
                </Paper> 

                <Paper >
                <img  
                src ="https://www.cpfl.com.br/atendimento-a-consumidores/PublishingImages/Servicos/icon-religacao-unidade.png"/>
                </Paper> 
                <section className="ajuda">
                  <TextsmsIcon className="ajuda2"/>
                  <p>Posso de ajudar :)</p>
                </section>
              </section>
            </div>
            <Drawer/>
           
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}