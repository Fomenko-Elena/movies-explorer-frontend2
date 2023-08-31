import AboutMe from "../AboutMe/AboutMe"
import AboutProject from "../AboutProject/AboutProject"
import NavTab from "../NavTab/NavTab"
import Portfolio from "../Portfolio/Portfolio"
import Promo from "../Promo/Promo"
import Techs from "../Techs/Techs"

function Main(props) {
  return (
    <main className="content">
      <Promo/>
      <NavTab/>
      <AboutProject/>
      <Techs/>
      <AboutMe/>
      <Portfolio/>
    </main>
  )
}

export default Main