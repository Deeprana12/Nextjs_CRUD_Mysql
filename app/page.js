export const getStaticProps = async () => {
  try {
    const response = await fetch('/api/employee', {
      method: 'GET',
    });
    if (!response.ok) {
      throw new Error('Failed to fetch data from the API');
    }
    const data = await response.json();
    return {
      props: { data },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: { data: [] }, // Return an empty array if there is an error
    };
  }
};


const Home = ({ data }) => {    
  console.log(data)  
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
          {data?.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td>{employee.gender}</td>
              <td>{employee.department}</td>
              <td>{employee.skills.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
