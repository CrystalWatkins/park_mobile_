import React, { Component } from "react";
import UsersCard from "./usersCard";
import { paginate } from "./utils/paginate";
import { getAllUsers, getUserById } from "../services/userService";
import Paginator from "./paginator";
import users from "./utils/usersApi";
import _ from "lodash";
import SearchBox from "./searchBox";

class Users extends Component {
  state = {
    users: [],
    pageSize: 4,
    currentPage: 1,
    searchQuery: "",
  };

  async componentDidMount() {
    try {
      //const { data: users } = await getAllUsers();
      this.setState({ users });
    } catch (ex) {
      alert("There was an error");
    }
  }

  handleSearch = (query) => {
    this.setState({
      searchQuery: query,
      currentPage: 1,
    });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  //   getPagedData = () => {
  //     const { pageSize, currentPage, users: allUsers, searchQuery } = this.state; //destructure state object

  //     let filter = allUsers; //need to filter all users when paginate

  //     const filteredUsers = paginate(filter, currentPage, pageSize); //filteredUsers here is the filtered users from the paginate function

  //     return { totalCount: filter.length, data: filteredUsers };
  //   };

  getPagedData = () => {
    const { users: allUsers, pageSize, currentPage, searchQuery } = this.state;

    let filter = allUsers;
    
    if (searchQuery) {
      //if there's a search query then we need to do filtering to only show matching users

      filter = allUsers.filter((p) => 
        p.login.toLowerCase().includes(searchQuery.toLowerCase()) //implicitly return the matching user(s) since we aren't using brackets on an es6 arrow function
      );
    }
    const sorted = _.orderBy(filter); //lodashes utility takes the collection in and sorts it in asc order

    const filteredUsers = paginate(sorted, currentPage, pageSize);// pass these three parameters in in order to get the correct number of pages and th

    return { totalCount: filter.length, data: filteredUsers }; //return this object
  };

  render() {
    const { users: allUsers, pageSize, currentPage, searchQuery } = this.state;

    const { totalCount, data: users } = this.getPagedData(); //function invoked here which returns our object from above with the total number of users (used in paginator function) and the users we are going to be displaying on the page
    return (
      <>
        <div className="row">
          <div className="col-2">
            <SearchBox value={searchQuery} onChange={this.handleSearch} />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <UsersCard users={users} />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Paginator
              itemsCount={totalCount}
              pageSize={pageSize}
              onPageChange={this.handlePageChange}
              currentPage={currentPage}
            />
          </div>
        </div>
      </>
    );
  }
}

export default Users;
