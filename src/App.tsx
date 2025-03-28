import './App.css'
import {CardContainer} from "./components/CardContainer.styled.tsx";
import ProductCard from "./components/Card.styled.tsx";



function App() {

  return (
    <>
        <CardContainer>
            <ProductCard src={"https://s3-alpha-sig.figma.com/img/295b/9b3e/0cbd17e4381497547009ce81acc4eee3?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=U24Iv1PcCi8f803KqCSp0jI7cOsadZ54SazgDrEYdZA56mdWhTiHwX24benwbUWMN04NttcFyjIeqDM1lHWLshzadi85u~baLghahkIkSaFBIHZRbSzrSSVRxCySa6oYCdv6ZBURwsRbAQQXpswH5xgUuKkk0X56EG14bta-vqcXhB~tDckgmDDfAQebmDDsnX-nZz2f~5L6y0xxXRwK~hAkdp5VK-mH5migbfgKwpizkGq1rtpjRa9RRSBwcod~VHXtQpmvErtO0un3Nch9i~YWq5TORhqXhSGOtFxjKul1ASBiakSGacVGUITaLvquCPaJ18UsNtrbzIPEGOMyqw__"}/>
        </CardContainer>
    </>
  )
}

export default App
