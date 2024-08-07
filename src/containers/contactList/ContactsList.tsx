import * as S from './styles'

import FilterContact from '../../components/filterContacts/filterContacts'
import Contact from '../../components/Contact'
import { useSelector } from 'react-redux'

import { RootReducer } from '../../store'

const ContactList = () => {
  const { itens } = useSelector((state: RootReducer) => state.contacts)
  const { termo } = useSelector((state: RootReducer) => state.filter)

  const contactFilter = () => {
    return itens.filter(
      (item) =>
        item.nome.toLocaleLowerCase().search(termo.toLocaleLowerCase()) >= 0
    )
  }

  return (
    <S.Container>
      <S.ListContainer>
        <S.Title>Agenda de contatos</S.Title>
        <FilterContact />
        <S.Main>
          <S.ContactsList>
            {contactFilter().map((c) => (
              <Contact
                key={c.nome}
                nome={c.nome}
                email={c.email}
                numero={c.numero}
                id={c.id}
              />
            ))}
          </S.ContactsList>
        </S.Main>
      </S.ListContainer>
    </S.Container>
  )
}

export default ContactList
