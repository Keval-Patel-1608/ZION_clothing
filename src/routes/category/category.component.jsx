import { useContext, useEffect, useState, Fragment } from 'react';
import { useParams, Link } from 'react-router-dom';
import ProductCard from '../../components/product-card/product-card.component';
import { CategoriesContext } from '../../contexts/categories.context';
import './category.styles.scss';
import BackButton from '../../assets/back.svg';

const Category = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(()=>{
        setProducts(categoriesMap[category]);        
    }, [category, categoriesMap])

    return (
        <Fragment>
            <Link to='../'>
                <img className='back-button' src={BackButton} alt='back-button' />                
            </Link>
            <h2 className='category-title'>{category.toUpperCase()}</h2>
            <div className='category-container'>
                {products &&
                    products.map((product) => (
                        <ProductCard key={product.id} product={product}/>
                    ))}
            </div>
        </Fragment>
    )
};

export default Category;