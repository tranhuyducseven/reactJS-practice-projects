import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'
import { Col } from 'reactstrap';
function ItemProject(props) {
    const { item } = props;
    const handleItemOnClick = () => {
        console.log('Item id: ', item.id)
    }
    return (
        <Col xs="12" md="12" lg="3">
            <div className="item" onClick={handleItemOnClick}>
                <img src={item.imageUrl} alt={item.name} />
                <div className="item__overlay"></div>
                <h3 className="item__title">{item.name}</h3>
            </div>
        </Col>

    )
}

ItemProject.propTypes = {
    item: PropTypes.object,

}
ItemProject.defaultProps = {
    item: {},
}

export default ItemProject

