import React from 'react';

const BookInfo = ({ books }) => {
    return(
        <div id='books__body'>
            <main id="books__main">
                <div className="books__container">
                    <div className="row">
                        <div className="book__selected--top">
                            <Link to="/books" className="book__link">
                                <FontAwesomeIcon icon="arrow-left"/>
                            </Link>
                            <Link to="/books">
                                <h2 className='book__selected--title--top'>Books</h2>
                            </Link>
                        </div>
                        <div className="books__selected">
                            <figure className="book__selected--figure">
                                <img src="https://covers.openlibrary.org/b/id/8091016-L.jpg" alt="" className="book__selected--ig" />
                            </figure>
                            <div className="book__selected--description">
                                <h2 className="book__selected--title">
                                Crack the coding interview
                                </h2>
                                <Rating rating="4.5"/>
                                <div className="book__selected--price">
                                    <Price originalPrice={50} salePrice={20} />
                                </div>
                                <div className="book__summary">
                                    <div className="book__summary--title">Summary</div>
                                    <p className="book__summary__para">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos est totam commodi debitis dolorem delectus 
                                        sapiente, molestiae, obcaecati porro enim excepturi eveniet quidem at nihil, voluptate ducimus tenetur et modi!
                                    </p>
                                    <p className="book__summary__para">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos est totam commodi debitis dolorem delectus 
                                        sapiente, molestiae, obcaecati porro enim excepturi eveniet quidem at nihil, voluptate ducimus tenetur et modi!
                                    </p>
                                </div>
                                <button className='btn'>
                                    Add to cart
                                </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default BookInfo;
