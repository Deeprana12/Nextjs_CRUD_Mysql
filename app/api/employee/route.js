// app/api/employee/route.js
import { NextResponse } from 'next/server';
import { query } from '../../../lib/db';

export const GET = async (req, res) => {
  try {
    // Fetch all employees from the database  
    console.log(req)  
    const employees = await query('SELECT * FROM employees');
    return NextResponse.json({ employees }, { status: 200 });
  } catch (error) {
    console.error('Error fetching employees:', error);
    return NextResponse.json({ message: 'Error fetching employees' }, { status: 500 });
  }
};
