import Style from './App.module.css'
import Button from './components/Button'
function App() {
  return (
    <>
    <nav style={{
      display: 'flex',
      backgroundColor: 'pink',
      justifyContent:'space-between'
    }}>
      <a href="#" className={Style.link}>BeautySkincare</a>

    <div className="">
<a href="#" className={Style.link}>Menu</a>
<a href="#" className={Style.link}>Order</a>
<a href="#" className={Style.link}>About Us</a>
    </div>
    </nav>
      <h1 
      className="text-2xl hover:font-bold hover:cursor-pointer active:underline"
      >Praktikum A2 Pagi
      </h1>
      <Button className=" bg-green-400 text-white hover:bg-green-500">
        Button 1
        </Button>
        <Button className=" bg-red-400 text-white hover:bg-red-500">
        Button 2
        </Button>
    </>
  )
}

export default App
