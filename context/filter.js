import { createContext, useContext } from "react";
import { fetchCategory, fetchProducts, filteringProducts  } from "../services/filter";

export const categories = fetchCategory();

export const products = fetchProducts();

const FilterProductContext = createContext(products);

export const useFilterProduct = () => {
    return useContext(FilterProductContext);
}

export const filterProductProvider = (props) => {
    const [category, setCategory] = useState();
    // const [products, setProducts] = useState(products);
    const [filterProductState, setFilterProductState] = useState(products);

    const SetCategory = () => {
        setCategory(categories);
    }

    const AllProducts = () => {
        setFilterProductState(products);
    };

    const ProductsFiltered = () => {
        filteringProducts(products, category)
            .then((data) => {
                console.log(data)
                setFilterProductState(data);
            })
            .catch((err) => console.log(err));
    }

    const value = {...filterProductState, SetCategory, AllProducts, ProductsFiltered};
    return <FilterProductContext.Provider value={value} {...props} />
}