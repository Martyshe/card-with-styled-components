import styled from "styled-components";

interface ProductCardProps {
    src?: string
    primary?: boolean
}

const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #fff;
    padding: 10px;
    width: 300px;
    height: 350px;
    border-radius: 15px;
`
const Image = styled.img`
    height: 170px;
    width: 100%;
    object-fit: cover;
    border-radius: 10px;

`
const Name = styled.h2`
    font-size: 1rem;
    color: #1a1a1a;
    padding: 0 10px;

`
const Description = styled.p`
    color: #ABB3BA;
    font-weight: 500;
    font-size: 12px;
    padding: 0 10px;
`
const BtnContainer = styled.div`
    display: flex;
    gap: 10px;
    padding: 0 10px 10px 10px;
`


const Button = styled.button<{primary? : boolean}>`
    background-color: ${props => props.primary ? '#4E71FE' : 'transparent'};
    color: ${props => props.primary ? 'white' : '#4E71FE'};
    padding: 5px 10px;
    border-radius: 5px;
    border: ${ props => props.primary ? 'none' : '2px solid #4E71FE'};
    font-size: 10px;
    
    &:hover {
        transform: scale(105%);
    }

`


const ProductCard: React.FC<ProductCardProps> = () => {
    return (
        <Card>
            <Image alt='landscape'
                   src={"https://s3-alpha-sig.figma.com/img/295b/9b3e/0cbd17e4381497547009ce81acc4eee3?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=U24Iv1PcCi8f803KqCSp0jI7cOsadZ54SazgDrEYdZA56mdWhTiHwX24benwbUWMN04NttcFyjIeqDM1lHWLshzadi85u~baLghahkIkSaFBIHZRbSzrSSVRxCySa6oYCdv6ZBURwsRbAQQXpswH5xgUuKkk0X56EG14bta-vqcXhB~tDckgmDDfAQebmDDsnX-nZz2f~5L6y0xxXRwK~hAkdp5VK-mH5migbfgKwpizkGq1rtpjRa9RRSBwcod~VHXtQpmvErtO0un3Nch9i~YWq5TORhqXhSGOtFxjKul1ASBiakSGacVGUITaLvquCPaJ18UsNtrbzIPEGOMyqw__"}/>
            <Name>Header</Name>
            <Description>Lorem fgfgipsum dolor sit amet, consectetur adipisicing elit. Expedita, incidunt.</Description>
            <BtnContainer>
                <Button primary>See more</Button>
                <Button>Save</Button>
            </BtnContainer>

        </Card>
    )
}

export default ProductCard;