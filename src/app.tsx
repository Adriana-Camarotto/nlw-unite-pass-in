import { AttendeeList } from "./components/attendee-list";
import { Header } from "./components/header";

export function App() {
   return (
    <div className="max-w-[1216px] mx-auto py-5"> 
    {/*define a largura maxima, os padings do projeto, tambem centraliza o projeto. */}
      <Header />
      <AttendeeList />      
    </div>  )
}


