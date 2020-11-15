import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';



import "./modal.css"

import foto from "./foto.svg";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});



const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={true}>
      
        <DialogContent dividers className="dialctt">
          <section className="closemodal">
          <IconButton aria-label="close" >
            <CloseIcon />
          </IconButton>
          </section>
        

        <section className="scimg">
            <img  src={foto}/>
          </section>
          
          <Typography gutterBottom className="modalcpfl">
            A CPFL tem novidades para você ;)
          </Typography>
          <div>
            <section >
              <Typography className="para1">
                Agora as suas contas em débito autómatico geram <span> descontos e prêmios para você!</span>
              </Typography>
              
            </section>
            <section className>
              <Button className="para1btn">
                Quero saber mais
              </Button>
            </section>

            <section className="divbaixo">
              <Typography className="para1">
                Sabemos o quanto está dificil nosso momento atual, pensando nisso,
                em caso de necessidade você pode <span> pagar parte da conta</span> e parcelar o restante!
              </Typography>
              
            </section>
            <section className>
              <Button className="para1btn">
                Fazer Cadastro
              </Button>
            </section>
          </div>
        </DialogContent>
        
      </Dialog>
    </div>
  );
}