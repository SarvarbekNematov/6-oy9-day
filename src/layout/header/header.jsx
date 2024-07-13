import { CatalogIcon } from "../../assets/catalog-icon"
import { SearchIcon } from "../../assets/search-icon"
import { Button } from "../../components/button/btn"
import { Inputs } from "../../components/input/input"
import { Link } from "react-router-dom"
export const Header = () => {
    return <>   
    <header className="p-5 gap-[40px] bg-blue-400 flex justify-center ">
        {/* <div className="flex">
            <img src="/src/assets/logo.svg" alt="logo" />
            <Button  className="flex items-center gap-[12px] py-[11px] px-[19px] rounded-[8px] bg-gradient-to-r from-[#4d5ef6] to-[#f64d4d] text-white "  startIcon={<CatalogIcon/>} type="submit">
            Katalog
            </Button>
            <form>
                <Inputs type='text' placeholder="Maxsulotlarni izlash" className='' />
                <Button startIcon={<SearchIcon/>} className=''/>
            </form>
        </div> */}
        <Link to={"/"}>home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact</Link>
        <Link to={"/profile"}>Profile</Link>
      </header>
    </>
}