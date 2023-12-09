import { useState } from "react";
import SingleProfile from "./SingleProfile";

const Profile = () => {
  const [userData, setUserData] = useState([
    { empId: "1", eName: "John Smith", dob: "1990-01-01", role: "Developer" },
    { empId: "2", eName: "Sophie Martin", dob: "1991-02-02", role: "Designer" },
    { empId: "3", eName: "Carlos Rodriguez", dob: "1992-03-03", role: "Manager" },
    { empId: "4", eName: "Maria Gonzalez", dob: "1993-04-04", role: "Tester" },
    { empId: "5", eName: "Andreas Müller", dob: "1994-05-05", role: "Developer" },
    { empId: "6", eName: "Elena Petrova", dob: "1995-06-06", role: "Designer" },
    { empId: "7", eName: "Hiroshi Tanaka", dob: "1996-07-07", role: "Manager" },
    { empId: "8", eName: "Anastasia Ivanova", dob: "1997-08-08", role: "Tester" },
    { empId: "9", eName: "Ravi Patel", dob: "1998-09-09", role: "Developer" },
    { empId: "10", eName: "Mia Schmidt", dob: "1999-10-10", role: "Designer" },
    { empId: "11", eName: "Jinwoo Kim", dob: "2000-11-11", role: "Developer" },
    { empId: "12", eName: "Aisha Khan", dob: "2001-12-12", role: "Designer" },
    { empId: "13", eName: "Kenji Suzuki", dob: "2002-01-13", role: "Manager" },
    { empId: "14", eName: "Laila Ahmed", dob: "2003-02-14", role: "Tester" },
    { empId: "15", eName: "Rajesh Singh", dob: "2004-03-15", role: "Developer" },
    { empId: "16", eName: "Isabella Rossi", dob: "2005-04-16", role: "Designer" },
    { empId: "17", eName: "Yuki Sato", dob: "2006-05-17", role: "Manager" },
    { empId: "18", eName: "Eva García", dob: "2007-06-18", role: "Tester" },
    { empId: "19", eName: "Mateo Hernandez", dob: "2008-07-19", role: "Developer" },
    { empId: "20", eName: "Lena Bauer", dob: "2009-08-20", role: "Designer" },
  ]);


  const [filterData, setFilterData] = useState(userData);
  const [filterText, setFilterText] = useState("");

  let FinalFilterData;
  function filterHandler() {
    FinalFilterData = userData.filter((element) => {
      return element.eName.toLowerCase().includes(filterText.toLowerCase());
    });
  }
  filterHandler();
  console.log(FinalFilterData);
  console.log(filterText);
  return (
    <>
      <div className="profile-input">
        <input
          type="search"
          onChange={(e) => setFilterText(e.target.value)}
          placeholder="Search with name"
        ></input>
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
      <div className="profile">
        {FinalFilterData.length == 0 ? (
          <h1 className="profile-noresult">No Results found</h1>
        ) : (
          FinalFilterData.map((element) => {
            return <SingleProfile key={element.empId} {...element} />;
          })
        )}
      </div>
    </>
  );
};

export default Profile;
