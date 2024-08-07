import { useEffect, useState } from 'react'
import * as S from './styles'
import { useDispatch } from 'react-redux'
import { edit, remove } from '../../store/reducer/contact'
import ContactClass from '../../models/contact'

type Props = ContactClass

const Contact = ({
  email: emailOriginal,
  nome: nomeOriginal,
  numero: numeroOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [editMode, setEdit] = useState(false)
  const [nome, setName] = useState(nomeOriginal)
  const [email, setEmail] = useState(emailOriginal)
  const [numero, setNumber] = useState(numeroOriginal)

  useEffect(() => {
    if (!editMode) {
      setName(nomeOriginal)
      setEmail(emailOriginal)
      setNumber(numeroOriginal)
    }
  }, [editMode, nomeOriginal, emailOriginal, numeroOriginal])

  const handleSave = () => {
    dispatch(
      edit({
        id,
        nome,
        email,
        numero
      })
    )
    setEdit(false)
  }

  const handleCancel = () => {
    setName(nomeOriginal)
    setEmail(emailOriginal)
    setNumber(numeroOriginal)
    setEdit(false)
  }

  return (
    <S.Container>
      <S.ListItem>
        <S.ContactInfo>
          {editMode ? (
            <>
              <S.EditInput
                type="text"
                value={nome}
                onChange={(e) => setName(e.target.value)}
              />
              <S.EditInput
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <S.EditInput
                type="text"
                value={numero}
                onChange={(e) => setNumber(e.target.value)}
              />
            </>
          ) : (
            <>
              <S.ContactName>{nome}</S.ContactName>
              <S.ContactEmail>{email}</S.ContactEmail>
              <S.ContactNumber>{numero}</S.ContactNumber>
            </>
          )}
        </S.ContactInfo>
        <S.ContactActions>
          {editMode ? (
            <>
              <S.SaveButton onClick={handleSave}>
                <S.Icon className="fas fa-save"></S.Icon> Salvar
              </S.SaveButton>
              <S.CancelButton onClick={handleCancel}>
                <S.Icon className="fas fa-times"></S.Icon> Cancelar
              </S.CancelButton>
            </>
          ) : (
            <>
              <S.TrashButton onClick={() => dispatch(remove(id))}>
                <S.Icon className="fas fa-trash-alt"></S.Icon> Excluir
              </S.TrashButton>
              <S.Button onClick={() => setEdit(true)}>
                <S.Icon className="fas fa-edit"></S.Icon> Editar
              </S.Button>
            </>
          )}
        </S.ContactActions>
      </S.ListItem>
    </S.Container>
  )
}

export default Contact
