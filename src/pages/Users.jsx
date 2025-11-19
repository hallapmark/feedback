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

  return (
    <div>
      <h1>Users</h1>
      <ButtonGroup variant="outlined" aria-label="Basic button group" style={{margin: "8px"}}>
        <Button onClick={tenCharsOrMore} color="secondary">Username ten or more chars</Button>
        <Button color="secondary">Two</Button>
        <Button color="secondary">Three</Button>
      </ButtonGroup>
      <ButtonGroup variant="outlined" aria-label="Basic button group" style={{margin: "8px"}}>
        <Button color="secondary">One</Button>
        <Button color="secondary">Two</Button>
        <Button color="secondary">Three</Button>
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
              </div>
            </div>
            )
        })}
      </div>
    </div>
  );
}
export default Users;
