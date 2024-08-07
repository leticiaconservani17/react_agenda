import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { ToAdd } from '../../store/reducer/contact'
import { useNavigate } from 'react-router-dom'
import { Form, Label, Input, ButtonsDiv } from '../../pages/new/styles'
import * as S from '../../components/Contact/styles'
import { Title } from '../contactList/styles'
import InputMask from 'react-input-mask'

const isValidName = (nome: string): boolean => nome.trim() !== ''
const isValidEmail = (email: string): boolean =>
  /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
const isValidPhone = (numero: string): boolean =>
  /^\(?\d{2}\)?[\s-]?[\s9]?\d{4}-?\d{4}$/.test(numero)

const AddContact = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [nome, setName] = useState('')
  const [email, setEmail] = useState('')
  const [numero, setTel] = useState('')
  const [errorNome, setErrorNome] = useState('')
  const [errorEmail, setErrorEmail] = useState('')
  const [errorNumero, setErrorNumero] = useState('')

  const backHome = () => {
    navigate('/')
  }

  const validateForm = () => {
    let isValid = true
    if (!nome.trim()) {
      setErrorNome('Nome é obrigatório.')
      isValid = false
    } else if (!isValidName(nome)) {
      setErrorNome('Por favor, insira um nome válido.')
      isValid = false
    } else {
      setErrorNome('')
    }

    if (!email.trim()) {
      setErrorEmail('Email é obrigatório.')
      isValid = false
    } else if (!isValidEmail(email)) {
      setErrorEmail('Por favor, insira um endereço de e-mail válido.')
      isValid = false
    } else {
      setErrorEmail('')
    }

    if (!numero.trim()) {
      setErrorNumero('Telefone é obrigatório.')
      isValid = false
    } else if (!isValidPhone(numero)) {
      setErrorNumero('Por favor, insira um número de telefone válido.')
      isValid = false
    } else {
      setErrorNumero('')
    }

    return isValid
  }

  const addContactForm = (evento: FormEvent) => {
    evento.preventDefault()
    if (validateForm()) {
      dispatch(ToAdd({ nome, email, numero }))
      navigate('/')
    }
  }

  return (
    <>
      <Title>Novo contato</Title>
      <Form onSubmit={addContactForm}>
        <Label htmlFor="nome">Nome:</Label>
        <Input
          value={nome}
          type="text"
          placeholder="Nome"
          onChange={(evento) => setName(evento.target.value)}
          hasError={!!errorNome}
        />
        {errorNome && <div className="error-message">{errorNome}</div>}
        <Label htmlFor="email">Email:</Label>
        <Input
          value={email}
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          hasError={!!errorEmail}
        />
        {errorEmail && <div className="error-message">{errorEmail}</div>}
        <Label htmlFor="Telefone">Telefone:</Label>
        <Input
          as={InputMask}
          mask="(99) 99999-9999"
          value={numero}
          type="tel"
          placeholder="(99) 99999-9999"
          onChange={(e) => setTel(e.target.value)}
          hasError={!!errorNumero}
        />
        {errorNumero && <div className="error-message">{errorNumero}</div>}
        <ButtonsDiv>
          <S.SaveButton type="submit">
            <S.Icon className="fa fa-plus-circle"></S.Icon> Adicionar
          </S.SaveButton>
        </ButtonsDiv>
      </Form>
      <S.Button onClick={backHome}>
        <S.Icon className="fa fa-chevron-left"></S.Icon> Voltar
      </S.Button>
    </>
  )
}

export default AddContact
