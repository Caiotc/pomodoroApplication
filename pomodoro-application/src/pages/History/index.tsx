import { HistoryContainer, HistoryList, Status } from './styles'

export function History() {
  return (
    <HistoryContainer>
      <h1>Meu Historico</h1>
      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duracao</th>
              <th>Inicio</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tarefa</td>
              <td>20min</td>
              <td>a 2 messes</td>
              <td>
                <Status statusColor="yellow">Concluir</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20min</td>
              <td>a 2 messes</td>
              <td>
                <Status statusColor="red">Concluir</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20min</td>
              <td>a 2 messes</td>
              <td>
                <Status statusColor="green">Concluir</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20min</td>
              <td>a 2 messes</td>
              <td>
                <Status statusColor="yellow">Concluir</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20min</td>
              <td>a 2 messes</td>
              <td>
                <Status statusColor="yellow">Concluir</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
