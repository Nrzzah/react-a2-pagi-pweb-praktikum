import Style from './App.module.css'
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
      <h1>Praktikum A2 Pagi</h1>
    </>
  )
}

export default App
