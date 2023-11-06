import './itemListContainer.css'

function ItemListContainer(props) {
    return (
        <div className='item-container'>
            <h1 className='welcome-text'>{props?.greeting}</h1>
        </div>
    );
}

export default ItemListContainer;