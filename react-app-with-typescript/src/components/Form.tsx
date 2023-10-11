import useNewSubForm from "../hooks/useNewSubForm"
import { sub } from "../types"

interface FormProps {
    onNewSub: (newSub: sub) => void
}

const Form = ({ onNewSub }: FormProps) => {
    const [inputValues, dispatch] = useNewSubForm()
    const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault()
        onNewSub(inputValues)
        handleClear()
    }

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)  => {
      const {name, value} = evt.target

      dispatch({
        type: "change_value",
        payload: {
            inputName: name,
            inputValue: value
        }
      })
    }
    

    const handleClear = () => {
        dispatch({ type: "clear" })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} value={inputValues.nick} type='text' name='nick' placeholder='nick' />
                <input onChange={handleChange} value={inputValues.subMonths} type='number' name='subMonths' placeholder='subMonths' />
                <input onChange={handleChange} value={inputValues.avatar} type='text' name='avatar' placeholder='avatar' />
                <textarea onChange={handleChange} value={inputValues.description} name='description' placeholder='description' />
                <button onClick={handleClear} type='button'>Clear the form</button>
                <button type="submit">Save news Moments</button>

            </form>
        </div>
    )
}

export default Form