import Sidebar from './components/Sidebar'
import Data from "./Data"
import File from "./File"

function Menu() {
  return (
    <div className="main">
      <Sidebar />
      <div className="container">
        <Data></Data>
        <br></br>
        <File></File>
      </div>
    </div>
  )
}

export default Menu