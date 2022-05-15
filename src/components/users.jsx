import React, { Component } from "react";
import UsersCard from "./usersCard";
import { paginate } from "../utils/paginate";
import { getAllUsers, getUserById } from "../services/userService";
import Paginator from "./paginator";
import _ from "lodash";

class Users extends Component {
  state = {
    users: [],
    pageSize: 4,
    currentPage: 1,
    searchQuery: "",
  };

  async componentDidMount() {
    const { data: users } = await getAllUsers();
    this.setState({ users });
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      users: allUsers,
      searchQuery,
    } = this.state;//destructure state object

    let filter = allUsers; //need to filter all users when paginate

    const users = paginate(filter, currentPage, pageSize); //users here is the filtered users from the paginate function

    return { totalCount: filter.length, data: users };
  };


  render() {
    const {
      users: allUsers,
      pageSize,
      currentPage,
      searchQuery,
    } = this.state;

    const { totalCount, data: users } = this.getPagedData();
    return (
      <>
        <UsersCard
          projects={users}
          onDelete={this.handleToggleModal}
          user={user}
        />
        <Paginator
          itemsCount={totalCount}
          pageSize={pageSize}
          onPageChange={this.handlePageChange}
          currentPage={currentPage}
        />
      </>
    );
  }
}

export default Projects;