import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

type Props = {
  children : React.ReactNode;
  showBanner?: boolean;
}

const Layout = ({children, showBanner = false}: Props) => {
  return(
    <div className="flex flex-col min-h-screen">
        <Header/>
        {showBanner && <Banner/>}
        <div className="container mx-auto flex-1 py-10">
        {children}
        </div>
        <Footer/>
    </div>
  )
}

export default Layout;