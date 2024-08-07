import { useDispatch, useSelector } from 'react-redux'
import { FilterContainer, FilterInput, FilterButton } from './styles'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducer/filter'

const FilterContact = () => {
  const dispath = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filter)
  return (
    <>
      <FilterContainer>
        <FilterInput
          type="text"
          placeholder="Buscar contato..."
          value={termo}
          onChange={(e) => dispath(alterarTermo(e.target.value))}
        />
        <FilterButton to="/new">+</FilterButton>
      </FilterContainer>
    </>
  )
}

export default FilterContact
