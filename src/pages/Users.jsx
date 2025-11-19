import { useState } from "react";
import usersDB from "../data/kasutajad.json";
import styles from "../styles/Kasutajad.module.css"
import { Button, ButtonGroup } from "@mui/material";

function Users() {
  const [users, setUsers] = useState(usersDB.slice());

  function reset() {
    setUsers(usersDB.slice());
  }

  function tenCharsOrMore() {
    const answer = users.filter(user => user.username.length >= 10);
    setUsers(answer);
  }

  function posLng() {
    const answer = users.filter(user => Number(user.address.geo.lng) > 0);
    setUsers(answer);
  }

  function sortByLat() {
    const answer = users.toSorted((a,b) => { 
      return Number(b.address.geo.lat) - Number(a.address.geo.lat);
    });
    setUsers(answer);
  }

  function addToPhoneNo() {
    const answer = users.map(user => ({...user, phone: "000-" + user.phone}));
    setUsers(answer);
  }

  function replaceAInCatchPhrase() {
    const answer = users.map(user => (
      {...user, company: {...user.company, catchPhrase: user.company.catchPhrase.replaceAll("a", "e")}}
      ));
    setUsers(answer);
  }

  function findIndexAndDelete(user) {
    const index = users.indexOf(user);
    // findIndex vist oleks kindlam
    const usersCopy = users.slice();
    usersCopy.splice(index, 1);
    setUsers(usersCopy);
  }

  function findLucio() {
    const index = users.findIndex(u => u.email.toLowerCase() === "lucio_hettinger@annie.ca");
    console.log(index);
  }

  function findBeginsWithC() {
    const user = users.find(u => u.name.toLowerCase().substring(0,1) === "c");
    console.log(JSON.stringify(user));
  }

  function addIds() {
    let sum = 0;
    for (const user of users) {
      sum += user.id;
    }
    console.log(sum);
  }

  function emails() {
    const emailsArray = users.map(user => user.email);
    console.log(emailsArray);
  }

  return (
    <div>
      <h1>Users</h1>
      <ButtonGroup variant="outlined" aria-label="Basic button group" style={{margin: "8px"}}>
        <Button onClick={tenCharsOrMore} color="secondary">Username ten or more chars</Button>
        <Button onClick={posLng} color="secondary">Show only pos longitude</Button>
      </ButtonGroup>
      <ButtonGroup variant="outlined" aria-label="Basic button group" style={{margin: "8px"}}>
        <Button onClick={findLucio} color="secondary">Find Lucio</Button>
        <Button onClick={findBeginsWithC} color="secondary">Find begins with C</Button>
        <Button onClick={addIds} color="secondary">Add ids</Button>
      </ButtonGroup>
      <ButtonGroup variant="outlined" aria-label="Basic button group" style={{margin: "8px"}}>
        <Button onClick={sortByLat} color="secondary">Sort by lat</Button>
        <Button onClick={addToPhoneNo} color="secondary">Add to phone no</Button>
        <Button onClick={replaceAInCatchPhrase} color="secondary">Replace a</Button>
        <Button onClick={emails} color="secondary">Console emails</Button>
      </ButtonGroup>
      <ButtonGroup variant="outlined" aria-label="Basic button group" style={{margin: "8px"}}>
        <Button onClick={reset} color="secondary">Reset</Button>
      </ButtonGroup>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", justifyContent: "center"}}>
        {users.map((user) =>  {
          const address = user.address;
          const company = user.company;

          return (
            <div key={user.id} className={styles.usercard}>
              <div className={styles.header}>
                <h2>{user.name}</h2>
                <p className={styles.username}>@{user.username}</p>
                <p className={styles.email}>{user.email}</p>
              </div>

              <div className={styles.cardbody}>
                {address && 
                  <div className={`${styles.section} ${styles.address}`}>
                    <h3>Address</h3>
                    <p>{address.street}, {address.suite}</p>
                    <p>{address.city}, {address.zipcode}</p>
                    {address.geo && <p>Lat: {address.geo.lat}, <br /> Lng: {address.geo.lng}</p>}
                  </div>
                }
                { company && 
                  <div className={`${styles.section} ${styles.company}`}>
                    <h3>Company</h3>
                    <p>
                      <strong>{company.name}</strong>
                    </p>
                    <p>{company.catchPhrase}</p>
                    <p>Focus: {company.bs}</p>
                  </div>
                }
              </div>

              <div className={styles.footer}>
                <p>📞 {user.phone}</p>
                <p>{user.website}</p>
                <button onClick={() => findIndexAndDelete(user)}>Delete user</button>
              </div>
            </div>
            )
        })}
      </div>
    </div>
  );
}
export default Users;
