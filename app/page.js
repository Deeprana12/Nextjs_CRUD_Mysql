import { use } from 'react'

const res =  await import('./api/employee/route')
const getData = async () => {
  return await (await res.GET()).json()
};


const Home = () => {    
  const data = use(getData()) 
  console.log(data.employees) 
  return (
    <div>
      <h1>Employee List</h1>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Department</th>
            <th>Skills</th>
          </tr>
        </thead>
        <tbody>
          {data.employees.length > 0 && data?.employees?.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td>{employee.gender}</td>
              <td>{employee.department}</td>
              <td>{employee?.skills.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
