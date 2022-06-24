import React from 'react';
import { fetchUserData, cancelFetch } from './dataFetcher';
import { Userlist } from './Userlist';

export class Profile extends React.Component {
  constructor(props){
    super(props);
    this.state = {userData:null}
  }

  componentDidMount(){
     this.loadUserData();
  }


  loadUserData = () => {
     
      this.fetchID = fetchUserData(this.props.username, (userData) => {
  this.setState({ userData });
});
  }
  render() {
    const isLoading = this.state.userData === null? true: false;

    let className = 'Profile';
    if (isLoading) {
      className += ' loading';
    }

    let name = isLoading === true ? 'Loading...': this.state.userData.name;

    let bio = isLoading === true ? 'Loading...': this.state.userData.bio;

    return (
      <div className={className}>
        <div className="profile-picture"></div>
        <div className="profile-body">
          <h2>{name}</h2>
          <h3>@{this.props.username}</h3>
          <p>{bio}</p>
          <h3>My friends</h3>
          <Userlist usernames={[]} onChoose={this.props.onChoose} />
        </div>
      </div>
    );
  }
}
