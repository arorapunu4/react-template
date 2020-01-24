import React, { useState, useEffect } from 'react';
import {Navbar, Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { SearchTableFilter } from "../redux/actions/dashboardAction";

const HeaderData= [
        {
          name: 'DASHBOARD',
          link: '/financialadvisor',
          className: '',
          childNode: []
        },
        {
          name: 'ACCOUNT SUMMARY',
          link: '/',
          className: '',
          childNode: []
        },
        {
          name: 'GRANTS',
          link: null,
          className: 'tool-tip',
          childNode: [
            {
              name: 'Grant Overview',
              link: '/grants',
              childNode: [],
              className: '',
            },
            {
              name: 'Recommend a grant',
              link: '/grants/recommend',
              childNode: [],
              className: '',
              access: 'Read Only'
            },
            {
              name: 'Grant Agreements',
              link: '/grants/agreement',
              childNode: [],
              className: '',
              access: 'Read Only'
            },
            {
              name: 'Grant Activity',
              link: '/grants/activity',
              childNode: [],
              className: '',
              access: 'All Access'
            },
            {
              name: 'Find Charity',
              link: '/grants/find-charity',
              childNode: [],
              className: '',
              access: 'All Access'
            },
            {
              name: 'How it works',
              link: '/grants/how-it-works',
              childNode: [],
              className: '',
              access: 'All Access'
            },
            {
              name: 'Grants_Header',
              link: '',
              childNode: [],
              className: 'header-hide',
              access: 'none'
            }
          ]
        },
        {
          name: 'CONTRIBUTIONS',
          className: 'tool-tip',
          link: null,
          childNode: [
            {
              name: 'Contribution Overview',
              link: '/contributions',
              childNode: [],
              className: '',
            },
            {
              name: 'Make a contribution',
              link: '/contributions/make-a-contribution',
              childNode: [],
              className: '',
              access: 'Read Only'
            },
            {
              name: 'Contribution Activity',
              link: '/contributions/activity',
              childNode: [],
              className: '',
              access: 'All Access'
            },
            {
              name: 'Contributions_Header',
              link: '',
              childNode: [],
              className: 'header-hide',
              access: 'All Access'
            }
          ]
        },
        {
          name: 'INVESTMENTS',
          className: '',
          link: null,
          childNode: [
            {
              name: 'Investment Overview',
              link: '/investments',
              childNode: [],
              className: '',
            },
            {
              name: 'Recommend an exchange',
              link: '/investments/recommend-an-exchange',
              childNode: [],
              className: '',
              access: 'All Access'
            },
            {
              name: 'Exchange Activity',
              link: '/investments/exchange-activity',
              childNode: [],
              className: '',
              access: 'All Access'
            },
            {
              name: 'Investment option details',
              link: '/investments/details',
              childNode: [],
              className: '',
              access: 'All Access'
            },
            {
              name: 'Investment_Header',
              link: '',
              childNode: [],
              className: 'header-hide',
              access: 'none'
            }
          ]
        }

]


export default function Header () {
    const counter = useSelector(state => state.dashboardReducer.CountData)
    const [SearchData ,setSearchData]= useState("")
    const dispatch = useDispatch();
    useEffect(() => {
        // Update the document title using the browser API
        console.log(counter,"--counter---")
      });
    
 function filterTable(e){
  console.log(SearchData,"===search")
  e.preventDefault()
  dispatch(SearchTableFilter(SearchData));
 } 
    return (
        <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap{counter}</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form onSubmit={filterTable} inline>
      <FormControl onChange={event => setSearchData(event.target.value)} type="text" placeholder="Search" className="mr-sm-2" />
      <Button type="submit" variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>

      );
  }