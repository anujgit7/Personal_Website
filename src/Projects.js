import React from 'react'
import App_Demo from './assets/App_Demo.gif'
import fib from './assets/fib.gif'
import Dashboard from './assets/Dashboard_Demo.gif'
import './Projects.css'

const Projects = () => {
  return (
    <div className='parent-container'>
      <div className='container'>
        <h1 style={{textAlign: 'center'}}>Cross-Platform Profile Page App</h1>
        <img className='ProfileApp' src={App_Demo} alt='App Demo'></img>
        <p style={{textAlign: 'center'}}>
        <span style={{fontStyle:'italic'}}>Profile Page App built with React Native to deliver seamless 
        experiences on both iOS and Android devices.</span><br/><br/>
        Designed and developed a captivating responsive mobile application, 
        enabling users to personalize their profiles with custom photos, contact details, and engaging bios.
        </p>
      </div>
      <div className='container'>
        <h1 style={{textAlign: 'center'}}>Fibonacci Numbers Generator </h1>
        <img src={fib} alt='App Demo'></img>
        <p style={{textAlign: 'center'}}>
        <span style={{fontStyle:'italic'}}>Developed a web application using React and Django 
        that generates the first n Fibonacci numbers based on user input.</span><br/>
        <br/>Developed a responsive web application using React and Django for 
        generating and displaying the first n Fibonacci 
        numbers based on user input. Eliminated redundant 
        computations by using a relational database for data persistence among sessions and users.
        </p>
      </div>
      <div className='container'>
        <h1 style={{textAlign: 'center'}}>Interactive Data Visualization Dashboard</h1>
        <img src={Dashboard} alt='App Demo'></img>
        <p style={{textAlign: 'center'}}>
        <span style={{fontStyle:'italic'}}>Interactive Dashboard for visualizing and finding 
        interesting facts and information from high dimensional 
        data of childcare centers in NYC such as violation 
        rate and child to caregiver ratio.</span><br /><br/>
        Retrieved data for NYC's childcare centers from open data 
        website for year 2022 with 19 feature vectors.
        Built a backend interface to cater to HTTP requests, 
        response and routing using Python, Flask to access
        necessary data on demand with data load latency of 0.5 seconds.
        Built frontend user interface to have interactive plots 
        like scatter plot, scree plot, and histogram using
        Javascript, D3.js, HTML, CSS, which allowed users to 
        find important insights for childcare centers.
        </p>
      </div>
    </div>
  )
}

export default Projects