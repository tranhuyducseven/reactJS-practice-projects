import React from 'react'
import PropTypes from 'prop-types'
import ItemProject from '../ItemProject';
import { Row } from 'reactstrap';

function ListProject(props) {
    const { list } = props;
    console.log('List:', list);
    return (
        <div className="list-project">
            <Row>
                {list.map((item) => (<ItemProject key={item.id} item={item} />))}
            </Row>

        </div>
    )
}

ListProject.propTypes = {
    list: PropTypes.array.isRequired,

}
ListProject.defaultProps = {
    list: []
}

export default ListProject

