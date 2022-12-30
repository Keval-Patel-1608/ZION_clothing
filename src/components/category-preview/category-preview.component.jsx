import {Link} from 'react-router-dom';
import ProductCard from '../product-card/product-card.component';
import './category-preview.styles.scss';
import DownArrow from '../../assets/down.svg';

const CategoryPreview = ({title, products }) => {
    return (
        <div className='category-preview-container'>
            <div className='title-container'>
                <h2>
                    <Link className='title' to={title}>{title.toUpperCase()}</Link>
                </h2>
                <div className='title-link-container'>
                    <Link className='show-more' to={title}>SHOW MORE  
                    <span className='down-logo'>                        
                        <img className='down-arrow' src={DownArrow} alt='down-arrow'/>
                    </span>
                    </Link>
                </div>
            </div>
            <div className='preview'>
                {
                    products
                        .filter((_, idx) => idx < 4)
                        .map((product) => 
                        <ProductCard key={product.id} product={product}/>)
                }
            </div>
        </div>
    )
}

export default CategoryPreview;