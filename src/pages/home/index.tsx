import ContactList from '../../containers/contactList/ContactsList'
import GlobalStyle, { Container } from '../../styles/global-style'

const Home = () => (
  <>
    <GlobalStyle />
    <Container>
      <ContactList />
    </Container>
  </>
)
export default Home
