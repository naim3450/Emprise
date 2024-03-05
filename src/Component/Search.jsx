import React, { useContext } from 'react'
import Input from './Input'
import FilterContext from '../Filter_Contex/FilterContext'

const Search = () => {
    const { updateFilterValue, Filter_Product, All_Product, filters: { text } } = useContext(FilterContext)
    // console.log(Filter_Product)
    return (
        <div>
            <form action="#" onSubmit={(e) => e.preventDefault()}>
                <Input
                    type={`text`}
                    name={`text`}
                    placeholder={`Search`}
                    value={text}
                    onChange={updateFilterValue}
                    className="w-[450px] h-[50px] py-[30px] pl-[40px] text-black date"
                // onChange={btn}
                />
            </form>
        </div>
    )
}

export default Search