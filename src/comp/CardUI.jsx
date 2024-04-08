import PropTypes from "prop-types"

export default function Square(props = {}) {
    const {message,items,price} = props;
    return (
          <div className="car">
            <div className="cardHeader">{message}</div>
            <div className="cardSubHeader"><h3>{price}</h3></div>
            <div className="cardLine"><hr/></div>
            <div className="cardBody">
                {
                   items.map((element, index) =>     (
                        <span key={index}>
                      {element.isAvailable ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
</svg> : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
</svg> }   {element.name} <br />
</span>
                  ))
                }
                <button type="button" className=" btn-priary dds">Button</button>
            </div>
          </div>

    )
}

Square.prototype = {
    width : PropTypes.number,
    height : PropTypes.number,
    background: PropTypes.string,
    message : PropTypes.string,
    items: PropTypes.array,
    price : PropTypes.string,
}