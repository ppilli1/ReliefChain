import Dashboard from "../sections/Dashboard"
import MD from "../sections/MD"
import CE from "../sections/CE"
import {Routes, Route} from "react-router-dom"
import R from "../sections/R"

const Routers = () => {
  return <Routes>
    <Route path = "/" element = {<Dashboard/>}/>
    <Route path = "/MD" element = {<MD/>}/>
    <Route path = "/CE" element = {<CE/>}/>
    <Route path = "/R" element = {<R/>}/>
  </Routes>
}

export default Routers