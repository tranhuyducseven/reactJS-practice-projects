import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'
import './Header.scss'
function Header(props) {
    return (
        <header className="header">
            <Container>
                <Row>
                    <Col>
                        <a className="header__link" target="_blank" rel="noreferrer" href="https://www.facebook.com/tranhuyducseven/">
                            Huy Duc
                        </a>
                    </Col>
                    <Col>
                        <Link
                            to="/"
                            className="header__link"
                        >
                            Project
                        </Link>
                    </Col>

                </Row>
            </Container>
        </header>
    )
}

Header.propTypes = {

}

export default Header

