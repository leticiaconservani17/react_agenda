import GlobalStyle from '../../styles/global-style'
import { ContainerForm } from './styles'
import AddContact from '../../containers/add'

const Add = () => (
  <>
    <GlobalStyle />
    <ContainerForm>
      <AddContact />
    </ContainerForm>
  </>
)

export default Add
