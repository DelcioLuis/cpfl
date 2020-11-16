import React from 'react';
import { useHistory,useParams } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

import "./ponto.css"

import foto from "./foto.svg"
import ResgatePontos from '../../services/ResgatePontos';

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

  ResgatePontos();

  const history = useHistory();

  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
      
        <DialogContent dividers className="dialctt">
          <section className="closemodal">
          <IconButton aria-label="close" onClick={() => handleClose()}>
            <CloseIcon />
          </IconButton>
          </section>
      
          
          <Typography gutterBottom className="modalcpfl">
          Confirmação de voucher
          </Typography>
          <div>
            <section >
              <Typography className="para1">
              Tem certeza que deseja resgatar esse voucher? Você consumirá 15 pontos
              </Typography>
              
            </section>

            <section className="cflbt">
              <section>
                <img src={foto} className="cpfl"/>
                <p>10% PRÓXIMA NA FATURA</p>
                
              </section>

              <section className="potoo">
                
                  <p>15 Pontos</p>
                
              </section>

              
            </section>
            

            
            <section className>
              <Button className="para1btn" onClick={() => history.push("/parcela")}>
                Confirmar resgate
              </Button>
            </section>
            <section>
            <p>Nao</p>
            </section>
            
          </div>
        </DialogContent>
        
      </Dialog>
    </div>
  );
}