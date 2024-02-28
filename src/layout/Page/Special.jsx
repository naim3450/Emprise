
import { useContext } from 'react'
import Container from '../../Component/Container'
import ProductContext from '../../Context/ProductContext'
import Travle from '../../Component/Travle'
import Flex from '../../Component/Flex'
import { Link } from 'react-router-dom'

const Special = () => {



    const { isLooding, product } = useContext(ProductContext)

    // thats my looding part
    if (isLooding == true) {
        return (
            <Container>
                <h1 className='text-[500px]'>.........Looding</h1>
            </Container>
        )
    }
    // thats my looding part

    return (
        <Container>
            {/* <Flex className={`justify-between`}> */}
            <div className="grid grid-cols-3 gap-[40px]">
                {
                    product.map((value) => {
                        return (
                            // This link for my singleProduct page component. component name Product_details
                            <Link to={`/singleProduct/${value.id}`}>
                                <Travle
                                    key={value.id}
                                    imgSrc={value.image}
                                    travle_head={value.name}
                                    company={value.company}
                                    travle_Price={value.price}
                                    category={value.category} />
                            </Link>
                        )
                    })
                }
            </div>
            {/* </Flex> */}
        </Container>
    )
}

export default Special