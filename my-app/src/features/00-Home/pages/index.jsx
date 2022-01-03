import { INITIAL_LIST_PROJECTS } from 'constant/global';
import React from 'react'
import ListProject from '../components/ListProject'
import './style.scss'
const projects = INITIAL_LIST_PROJECTS;

function HomePage(props) {
  return (
    <div className="home-page">
      <h1 className="home-page__title">Some projects</h1>
      <ListProject list={projects} />
    </div>
  )
}

HomePage.propTypes = {

}

export default HomePage

