import { Fragment } from "react"
import "./App.scss"
import Header from './components/Header'

function App(){
    return (
        <Fragment>
            <Header 
                title="Rick and Morty API"
            />
        </Fragment>
    )
}

export default App