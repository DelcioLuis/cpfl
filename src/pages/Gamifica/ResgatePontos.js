import { useEffect , useState } from 'react';
import api from '../../services/api';

export default function ResgatePontos() {

  const idCliente = "5fb05d60a3008ba9c6e59137"; // Delcio

  const [pontosResgatados, setPontosResgatados] = useState(5);

  let totalPontosCliente = 0;
  let mensagem = "";

  useEffect(() => {

    async function loadScores() {

      const response = await api.post('/pontuacaoCliente/resgatarPontosDoCliente', {
        clienteId: idCliente,
        quantidadePontosResgatados: pontosResgatados
      });

      totalPontosCliente = response.data.TotalPontosCliente;
      mensagem = response.data.Mensagem;
      
      console.log({ totalPontosCliente, mensagem });

      return { totalPontosCliente, mensagem };
    }

    loadScores();
  }, []);
}