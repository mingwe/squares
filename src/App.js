import './App.css';
import {useState, useEffect} from 'react';
import SquaresList from "./SquaresList";
import {AlertProvider} from './AlertContext'
import AlertList from './AlertList'

function App() {

    const [data, setData] = useState([])
    const [fieldNames, setFieldNames] = useState([])
    const [selectedMode, setSelectedMode] = useState( )
    const [numberOfFields, setNumberOfFields] = useState( 0)

    useEffect(() => {
        fetch(`https://demo1030918.mockable.io/`)
            .then(response => response.json())
            .then(json => setData(json))

        return () => {
            console.log('componentDidMount')
        }
    }, [])

    useEffect(() => {
        setFieldNames( fieldNames => Object.keys(data))
    }, [data])


    function submitNumber () {
        setNumberOfFields( numberOfFields => {
            if (data && Object.keys(data).length)
                return data[selectedMode].field
            else
                return 0
        })
    }

    const getFieldsArray = () => {
        if (numberOfFields)
            return new Array(numberOfFields).fill('').map((_, i) => i+1)
        else
            return []
    }
    function formSubmitAction (e) {
        e.preventDefault()
        if (selectedMode.length)
            submitNumber()
        else
            alert('select mode please!')
    }

  return (
    <div className="App container mt-3">
        <AlertProvider>
            <h2 className="mb-3">{selectedMode ? selectedMode : 'Select mode'}</h2>
            <div className="row">
                <div className="col-xs-12 col-md-6">
                    <form className="row" onSubmit={(event) => formSubmitAction(event)}>
                        <div className="col">
                            <select
                                defaultValue="null"
                                name="fieldmode"
                                id="fieldmode"
                                className="form-control"
                                onChange={(e) => setSelectedMode( selectedMode => e.target.value )}>
                                <option disabled value="null">select mode</option>
                                { fieldNames.map((name, i) =>
                                    <option key={i} value={name}>{name}</option>
                                ) }
                            </select>
                        </div>
                        <div className="col">
                            <button className={'btn btn-primary form-control'}
                                    // onClick={() => submitNumber()}
                            >Start</button>
                        </div>
                    </form>
                    <SquaresList getItems={getFieldsArray} />
                </div>
                <div className="col-xs-12 col-md-6">
                    <AlertList/>
                </div>
            </div>
        </AlertProvider>
    </div>
  );
}

export default App;
